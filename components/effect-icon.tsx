import { EFFECT_ICONS } from '@/lib/effect-icons';

/**
 * One icon from the game's own effect sprite (`EFFETS_SPRITE`), drawn with
 * stroked 24×24 paths so it inherits `currentColor` like the in-game icons do.
 */
export function EffectIcon({
  id,
  size = 18,
  className,
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  const paths = EFFECT_ICONS[id];
  if (!paths) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths }}
    />
  );
}
