#!/usr/bin/env node
/**
 * tools/prepare-assets.mjs
 *
 * Builds the portfolio's image set from the source repositories.
 *
 * The real work comes from the other repositories of the account:
 *   - Let-s-Play          → platform, games, board art, card art
 *   - Iris-studio-NEW     → client campaigns (Let's Play × Algérie Télécom, 7ouma Arena × Djezzy)
 *                            and the portrait of Salim
 *   - egor-lobby-redesign → interfaces
 *
 * The source folders are read-only. Everything is written to `public/images/`
 * with a size suitable for the web (max 2400 px wide, quality 82, mozjpeg).
 *
 * Usage:
 *   node tools/prepare-assets.mjs --lp=/path/to/Let-s-Play --iris=/path/to/Iris-studio-NEW \
 *                                 --egor=/path/to/egor-lobby-redesign
 *
 * Requires ImageMagick (`convert`) and, for stills cropped from the top of a
 * tall image, `identify`.
 */

import { execFileSync } from 'node:child_process';
import { mkdirSync, copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve, extname } from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, ...v] = a.replace(/^--/, '').split('=');
    return [k, v.join('=')];
  }),
);

const LP = resolve(args.lp || '../Let-s-Play');
const IRIS = resolve(args.iris || '../Iris-studio-NEW');
const EGOR = resolve(args.egor || '../egor-lobby-redesign');
const OUT = resolve(process.cwd(), 'public/images');

mkdirSync(OUT, { recursive: true });

const run = (cmd, argv) => execFileSync(cmd, argv, { stdio: ['ignore', 'pipe', 'pipe'] });
const exists = (...p) => p.every((x) => x && existsSync(x));

/**
 * Resize and re-encode `src` to `dest`.
 * `crop` = { w, h, gravity } crops centered (or north for tall images).
 * `width` = target width in px. Versioned files keep their cache-busting name
 * only when the source is unchanged, so output names are stable & readable.
 */
function convert(src, dest, { width = 1800, height = null, gravity = 'center', quality = 82 } = {}) {
  if (!src || !exists(src)) {
    console.warn(`  ! missing source: ${src} → ${dest}`);
    return false;
  }
  const dst = join(OUT, dest);
  mkdirSync(dirname(dst), { recursive: true });
  const ext = extname(dest).toLowerCase();
  let resize;
  if (ext === '.svg') {
    copyFileSync(src, dst);
    return true;
  }
  if (height) {
    // Crop a rectangle, then resize to `width` (never upscale).
    resize = ['-resize', `${width}x${height}^`, '-gravity', gravity, '-crop', `${width}x${height}+0+0`, '+repage'];
  } else {
    resize = ['-resize', `${width}x>`];
  }
  const fmt = ext === '.png' ? ['-strip', '-define', 'png:compression-level=9'] : ['-strip', '-interlace', 'Plane', '-quality', String(quality)];
  run('convert', ['-density', '144', src, ...resize, ...fmt, dst]);
  return true;
}

/** Copy a raw SVG as-is (logos that must stay vector). */
function svg(src, dest) {
  if (!exists(src)) {
    console.warn(`  ! missing svg: ${src}`);
    return false;
  }
  const dst = join(OUT, dest);
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
  return true;
}

console.log('→ Let’s Play');
const L = (p) => join(LP, 'public', p);
const G = (p) => join(LP, 'src/games/assets', p);

// — Hero / atmosphere
convert(L('hero-lets-play.jpg'), 'lp-hero.jpg', { width: 2200, quality: 80 });

// — Games key arts
convert(L('sablier-de-bab-el-keyart.jpg'), 'sablier/keyart.jpg', { width: 2000 });
convert(join(LP, 'docs/rpg/assets/sablier-keyart.png'), 'sablier/keyart-hd.jpg', { width: 2000 });
convert(L('mirage-rush-thumb.jpg'), 'mirage/keyart.jpg', { width: 2000 });
convert(G('maps/desert.webp'), 'mirage/track-desert.jpg', { width: 1536 });
convert(L('vice-city-rush-keyart.jpg'), 'vice-city/keyart.jpg', { width: 2000 });
convert(L('car-ae86.jpg'), 'vice-city/car.jpg', { width: 1800 });
convert(L('vice-city-story-nordschleife.jpg'), 'vice-city/nordschleife.jpg', { width: 1800 });
convert(L('route-66-thumb.jpg'), 'vice-city/route-66.jpg', { width: 1800 });
convert(L('tokyo-thumb.jpg') || L('tokyo-game-show-2026-news.jpg'), 'vice-city/tokyo.jpg', { width: 1800 });
convert(L('vice-city-action-paris.webp'), 'vice-city/paris.jpg', { width: 1800 });
convert(L('vice-city-action-new-york.webp'), 'vice-city/new-york.jpg', { width: 1800 });

// — Sablier board & card art
const boards = [
  ['plateau-iles-celestes.jpg', 'sablier/board-iles.jpg', 'north'],
  ['plateau-place-du-souk.jpg', 'sablier/board-souk.jpg', 'north'],
  ['plateau-village-viking.jpg', 'sablier/board-viking.jpg', 'north'],
  ['plateau-palais-du-pharaon.jpg', 'sablier/board-pharaon.jpg', 'north'],
  ['plateau-cercle-des-corbeaux.jpg', 'sablier/board-corbeaux.jpg', 'north'],
  ['plateau-navire-pirate.jpg', 'sablier/board-pirate.jpg', 'north'],
  ['plateau-desert-de-verre.jpg', 'sablier/board-desert.jpg', 'north'],
];
for (const [src, dest, gravity] of boards) convert(L(src), dest, { width: 1600, height: 1000, gravity });

convert(L('cards/alt/orochi.jpg'), 'sablier/card-orochi.jpg', { width: 900 });
convert(L('cards/alt/kenshi-de-la-forge.jpg'), 'sablier/card-kenshi.jpg', { width: 900 });
convert(L('cards/alt/lionne-du-midi-ardent.jpg'), 'sablier/card-lionne.jpg', { width: 900 });
convert(L('cards/lame-des-ergs.jpg'), 'sablier/card-ergs.jpg', { width: 900 });
convert(L('cards/alt/susanoo.jpg'), 'sablier/card-susanoo.jpg', { width: 900 });

// — Logo (white version with transparency, from Iris repo)
convert(join(IRIS, 'public/assets/lets-play-wordmark.png'), 'lp/wordmark.png', { width: 900 });
convert(join(IRIS, 'public/assets/lets-play-logo-provided_dfd031ae.png'), 'lp/logo-badge.png', { width: 700 });

console.log('→ Iris Studio / client work');
const I = (p) => join(IRIS, 'public/assets', p);

convert(I('salim-benmokhtar-provided_8a0bc794.png'), 'profile/portrait.jpg', { width: 1100, quality: 88 });
convert(I('projects-7ouma-arena-alliance.webp'), 'work/7ouma-alliance.jpg', { width: 1600 });
convert(I('projects-7ouma-arena-lady-gaming.webp'), 'work/7ouma-lady-gaming.jpg', { width: 1600 });
convert(I('projects-7ouma-arena-fifa-heroes.webp'), 'work/7ouma-fifa.jpg', { width: 1600 });
convert(I('arena-casters.png'), 'work/7ouma-casters.jpg', { width: 1600 });
convert(I('iris-home-letsplay-thumbnail-1440.webp'), 'work/letsplay-by-algerie-telecom.jpg', { width: 1800 });
convert(I('letsplay-launch-visual.jpg'), 'work/letsplay-launch.jpg', { width: 1600 });
convert(I('letsplay-episode-arc-raiders.webp'), 'work/letsplay-episode.jpg', { width: 1600 });
convert(I('letsplay-comiccon_56bebf05.jpg'), 'work/letsplay-comiccon.jpg', { width: 1600 });
convert(I('iris-cinematic-hero-campaign.png'), 'work/brand-campaign.jpg', { width: 2000 });
convert(I('djezzy-trade-activation_1642adb5.jpg'), 'work/djezzy-activation.jpg', { width: 1400 });
convert(I('iris-field-documentary_b5c5419c.webp'), 'work/field-documentary.jpg', { width: 1600 });
convert(I('iris-studio-editorial-motion.webp'), 'work/editorial-motion.jpg', { width: 1200 });
convert(I('iris-studio-abstract-light-architecture.webp'), 'work/abstract-light.jpg', { width: 1800 });

// — Logos of the brands the campaigns were made for (told, not owned)
svg(I('djezzy-logo_827e6b0c.svg'), 'logos/djezzy.svg');
svg(I('IRISSTUDIOnewwhite_02120a7f.svg'), 'logos/iris-studio.svg');
convert(I('lets-play-logo-provided_dfd031ae.png'), 'logos/lets-play.png', { width: 600 });
convert(I('algerie-telecom-logo_58b44931.png'), 'logos/algerie-telecom.png', { width: 600 });
convert(I('7ouma-arena-logo.png'), 'logos/7ouma-arena.png', { width: 600 });

console.log('→ EGOR lobby');
convert(join(EGOR, 'docs/screenshots/arena-section-dark.jpg'), 'work/egor-arena-dark.jpg', { width: 1600 });
convert(join(EGOR, 'docs/screenshots/arena-section-light.jpg'), 'work/egor-arena-light.jpg', { width: 1600 });
svg(join(EGOR, 'client/public/egor-logo.svg'), 'logos/egor.svg');
for (const [f, dest] of [
  ['games/free-fire.jpg', 'work/egor-game-freefire.jpg'],
  ['games/valorant.jpg', 'work/egor-game-valorant.jpg'],
  ['games/rocket-league.jpg', 'work/egor-game-rocket.jpg'],
]) convert(join(EGOR, 'client/public', f), dest, { width: 800 });

// — Social card. The composed version (art + type) is checked in; this keeps a
//   neutral fallback in place if the portrait is the only thing available.
console.log('→ Social card');
if (!exists(join(OUT, 'og-default.jpg'))) {
  console.warn('  ! og-default.jpg missing — compose it from the key art (see README)');
}

const count = execFileSync('bash', ['-lc', `find "${OUT}" -type f | wc -l`]).toString().trim();
const size = execFileSync('bash', ['-lc', `du -sh "${OUT}" | cut -f1`]).toString().trim();
console.log(`\n✔ ${count} files, ${size} in public/images`);

// A tiny manifest so pages can reference dimensions without a build plugin.
const manifestPath = join(OUT, 'manifest.json');
if (existsSync(manifestPath)) writeFileSync(manifestPath, readFileSync(manifestPath));
