import { asset } from '@/lib/asset';

/* ==========================================================================
   Site data — single source of truth, in both languages.
   Every claim here is traceable to one of the source repositories:
   Let-s-Play, Iris-studio-NEW, egor-lobby-redesign, Selma-Rise-Solutions-website.
   ========================================================================== */

export const SITE = {
  name: 'Salim Benmokhtar',
  shortName: 'Salim B.',
  initials: 'SB',
  role: { en: 'Graphic designer & AI-powered web designer', fr: 'Graphic designer & web designer augmenté par l’IA' },
  roleShort: { en: 'Graphic · Web · AI', fr: 'Graphic · Web · IA' },
  email: 'selimbenmokhtar@gmail.com',
  phone: '+213 770 474 007',
  phoneHref: '+213770474007',
  location: { en: 'Algiers, Algeria', fr: 'Alger, Algérie' },
  timezone: 'GMT+1',
  available: {
    en: 'Open to roles in Canada — open work permit sponsorship welcome',
    fr: 'Ouvert aux postes au Canada — parrainage de permis de travail bienvenu',
  },
  socials: {
    linkedin: 'https://dz.linkedin.com/in/salim-benmokhtar-526408365',
    github: 'https://github.com/SalimB-source',
    instagram: 'https://www.instagram.com/letsplay.officiel/',
    iris: 'https://www.linkedin.com/company/iris-studio-alger',
  },
  /** Production URL. Override with NEXT_PUBLIC_SITE_URL when the domain changes. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://salimb-source.github.io/My-portfolio',
};

/** Numbers that appear across pages. Round, honest, sourced. */
export const FACTS = {
  yearsDesign: 10,
  platformsShipped: 1, // Let's Play
  gamesBuilt: 3,
  dailyArticles: 9,
  boards: 18,
  cards: 422,
  codeLines: '247k',
  cities: 5, // Vice City Rush + 3 road courses
  routes: 8,
};

/* ------------------------------------------------------------------ */
/* WORK                                                                */
/* ------------------------------------------------------------------ */

export type Category = 'product' | 'games' | 'brand';

/** A labelled paragraph, used for concepts and for modes. */
export type DetailBlock = {
  title: { en: string; fr: string };
  body: { en: string; fr: string };
  /** Id into `lib/effect-icons.ts` — the game's own icon set. */
  icon?: string;
};

/** One named rule of the combat system. */
export type Mechanic = {
  name: { en: string; fr: string };
  body: { en: string; fr: string };
  /** Id into `lib/effect-icons.ts` — the game's own icon set. */
  icon?: string;
};

/** A real card from the game, shown as a specimen. */
export type ShowcaseCard = {
  name: string;
  art: string;
  element: 'sable' | 'braise' | 'eau' | 'neige' | 'tenebres';
  cost: number;
  atk?: number;
  def?: number;
  rarity: string;
  typeLine: string;
  text: { en: string; fr: string };
  /** Keyword ids to badge the card with. */
  keywords: string[];
};

/** The "the game itself" section of a playable project. */
export type GameDetail = {
  pitch: { en: string; fr: string };
  /** Genre, players, format, session — the short answers. */
  specs: { label: { en: string; fr: string }; value: { en: string; fr: string } }[];
  concept: DetailBlock[];
  mechanics: Mechanic[];
  modes: DetailBlock[];
  /** Real cards, three per row, to show the system rather than describe it. */
  showcase?: ShowcaseCard[];
  /** The colour wheel, with a real card art behind each colour. */
  colours?: { id: string; name: { en: string; fr: string }; count: number; art: string; note: { en: string; fr: string } }[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  categories: Category[];
  featured: boolean;
  cover: string;
  coverAlt: string;
  cardSize: 'wide' | 'half' | 'std';
  role: { en: string; fr: string };
  summary: { en: string; fr: string };
  /** One-line technical signature, shown as a mono chip on the card. */
  stack: string;
  live?: string;
  repo?: string;
  /** Sections of the detail page. */
  detail: {
    /**
     * Playable titles only: concept, mechanics and modes, so a reader who does
     * not play card games still understands what the thing is.
     */
    game?: GameDetail;
    context: { en: string; fr: string };
    approach: { en: string[]; fr: string[] };
    craft: { en: string; fr: string };
    facts: { label: { en: string; fr: string }; value: string }[];
    gallery?: { src: string; caption: { en: string; fr: string }; fit?: 'cover' | 'contain' }[];
    quote?: { en: string; fr: string };
  };
};

export const CATEGORIES: { id: Category | 'all'; label: { en: string; fr: string } }[] = [
  { id: 'all', label: { en: 'Everything', fr: 'Tout' } },
  { id: 'product', label: { en: 'Web platforms', fr: 'Plateformes web' } },
  { id: 'games', label: { en: 'Game art & UX', fr: 'Game art & UX' } },
  { id: 'brand', label: { en: 'Brand & campaigns', fr: 'Marque & campagnes' } },
];

export const PROJECTS: Project[] = [
  {
    slug: 'lets-play',
    title: "Let's Play",
    client: 'Let’s Play — media (Algeria)',
    year: '2026',
    categories: ['product'],
    featured: true,
    cover: '/images/work/letsplay-by-algerie-telecom.jpg',
    coverAlt: "Let's Play brand lock-up by Algérie Télécom",
    cardSize: 'wide',
    role: { en: 'Art direction · Design system · Build', fr: 'Direction artistique · Design system · Développement' },
    summary: {
      en: 'A complete gaming media platform — editorial site, three playable games, desktop app and Android build — designed and shipped by one person.',
      fr: 'Une plateforme média gaming complète — site éditorial, trois jeux jouables, app PC et build Android — dessinée et livrée par une seule personne.',
    },
    stack: 'React · Vite · Supabase · Electron',
    live: 'https://let-s-play-nu.vercel.app',
    repo: 'https://github.com/SalimB-source/Let-s-Play',
    detail: {
      context: {
        en: 'Let’s Play is an Algerian show about gaming, cinema, esport and pop culture. The brand needed more than a landing page: a daily publication, a game portal, and a place where the community’s scores and progress survive a device change. I designed the whole system and built it.',
        fr: 'Let’s Play est une émission algérienne consacrée au gaming, au cinéma, à l’esport et à la pop culture. La marque avait besoin de plus qu’une page : une publication quotidienne, un portail de jeux et un endroit où les scores et la progression de la communauté survivent au changement d’appareil. J’ai dessiné le système et je l’ai construit.',
      },
      approach: {
        en: [
          'A single visual grammar in two themes: a dark identity by default, a light theme where every accent is re-derived so text stays above WCAG AA — 18 style sheets, one set of tokens.',
          'Four editorial desks (gaming, cinema, tech, esport) that share one card, one carousel and one article template, so a new article never means new design.',
          'Three games built inside the same shell: Le Sablier de Bab El, Mirage Rush and Vice City Rush — each with its own art direction, shared account and progression layer.',
          'Progression stored per player in Supabase (row-level security), with an offline cache that merges on login instead of overwriting.',
          'The same code shipped three ways: web, an Electron desktop shell, and an Android build.',
        ],
        fr: [
          'Une grammaire visuelle unique en deux thèmes : identité sombre par défaut, thème clair où chaque accent est recalculé pour rester au-dessus du seuil WCAG AA — 18 feuilles de style, un seul jeu de tokens.',
          'Quatre desks éditoriaux (gaming, cinéma, tech, esport) qui partagent une carte, un carrousel et un gabarit d’article : un nouvel article n’impose jamais un nouveau design.',
          'Trois jeux dans la même coque : Le Sablier de Bab El, Mirage Rush et Vice City Rush — chacun avec sa direction artistique, un compte et une progression partagés.',
          'Progression stockée par joueur dans Supabase (row-level security), avec un cache hors ligne qui fusionne à la connexion au lieu d’écraser.',
          'Le même code livré de trois façons : web, coque desktop Electron et build Android.',
        ],
      },
      craft: {
        en: 'The editorial layer is generated: a news bot drafts articles from sources, then a language model rewrites them in the house voice — with a deterministic fallback so a missing API key never breaks the front page. The design work was making 9 articles a day, four desks and 1,059 images look like one publication.',
        fr: 'La couche éditoriale est générée : un bot collecte les sources, un modèle de langage réécrit les articles dans la voix de la maison — avec un repli déterministe pour qu’une clé API absente ne casse jamais la une. Le travail de design a consisté à faire ressembler 9 articles par jour, quatre desks et 1 059 images à une seule publication.',
      },
      facts: [
        { label: { en: 'Editorial desks', fr: 'Desks éditoriaux' }, value: '4' },
        { label: { en: 'Articles / day', fr: 'Articles / jour' }, value: '9' },
        { label: { en: 'Playable games', fr: 'Jeux jouables' }, value: '3' },
        { label: { en: 'Platforms', fr: 'Plateformes' }, value: 'Web · PC · Android' },
      ],
      gallery: [
        { src: '/images/work/letsplay-launch.jpg', caption: { en: 'Launch visual — brand lock-up', fr: 'Visuel de lancement — lock-up de marque' } },
        { src: '/images/work/letsplay-episode.jpg', caption: { en: 'Episode key art, Arc Raiders', fr: 'Key art d’épisode, Arc Raiders' } },
        { src: '/images/lp-hero.jpg', caption: { en: 'Home hero — gaming gear art direction', fr: 'Hero d’accueil — direction artistique gaming' } },
        { src: '/images/work/letsplay-comiccon.jpg', caption: { en: 'Comic Con coverage', fr: 'Couverture Comic Con' } },
      ],
      quote: {
        en: 'One design system had to hold a newsroom, a game portal and a community — without ever looking like three products.',
        fr: 'Un seul design system devait porter une rédaction, un portail de jeux et une communauté — sans jamais ressembler à trois produits.',
      },
    },
  },
  {
    slug: 'sablier-de-bab-el',
    title: 'Le Sablier de Bab El',
    client: "Let's Play Arcade",
    year: '2026',
    categories: ['games'],
    featured: true,
    cover: '/images/sablier/keyart.jpg',
    coverAlt: 'Le Sablier de Bab El key art — a desert citadel under giant clock rings',
    cardSize: 'std',
    role: { en: 'Game art direction · Card system · UI', fr: 'Direction artistique · Système de cartes · UI' },
    summary: {
      en: 'A story-driven card duel set in an Algerian fantasy world: 18 illustrated boards, 422 card artworks and a full in-game identity.',
      fr: 'Un duel de cartes narratif dans un univers fantasy algérien : 18 plateaux illustrés, 422 cartes et une identité de jeu complète.',
    },
    stack: '422 cards · 18 boards',
    live: 'https://let-s-play-nu.vercel.app/jeu/sablier-de-bab-el',
    detail: {
      game: {
        pitch: {
          en: 'A collectible card duel in Bab El, the nine-storey city built on a sealed gate. Two sorcerers, twenty-five life each, five colours of mana and a table that fills with creatures, weapons and spells.',
          fr: 'Un duel de cartes à collectionner dans Bab El, la ville de neuf étages bâtie sur un portail scellé. Deux sorciers, vingt-cinq points de vie chacun, cinq couleurs de mana et une table qui se remplit de créatures, d’armes et de sorts.',
        },
        specs: [
          {
            label: { en: 'Genre', fr: 'Genre' },
            value: { en: 'Collectible card duel', fr: 'Duel de cartes à collectionner' },
          },
          {
            label: { en: 'Cards', fr: 'Cartes' },
            value: { en: '191 playable', fr: '191 jouables' },
          },
          {
            label: { en: 'Colours', fr: 'Couleurs' },
            value: { en: '5 elements', fr: '5 éléments' },
          },
          {
            label: { en: 'Format', fr: 'Format' },
            value: { en: 'Solo towers, 1v1 online', fr: 'Tours solo, 1c1 en ligne' },
          },
        ],
        concept: [
          {
            title: { en: 'A Magic-shaped duel, in an Algerian city', fr: 'Un duel façon Magic, dans une ville algérienne' },
            body: {
              en: 'Each player is a sorcerer with twenty-five life and a five-card opening hand. You play one terrain a turn, terrains produce coloured mana, creatures arrive with summoning sickness and the defender chooses his blockers. The structure is deliberately legible to anyone who has ever held a Magic deck — the world on top of it is entirely Bab El.',
              fr: 'Chaque joueur est un sorcier avec vingt-cinq points de vie et une main de cinq cartes. On pose un terrain par tour, les terrains produisent du mana coloré, les créatures arrivent avec le mal d’invocation et le défenseur choisit ses bloqueurs. La structure est volontairement lisible pour qui a déjà tenu un deck Magic — le monde par-dessus, lui, est entièrement Bab El.',
            },
          },
          {
            title: { en: 'Five towers, five colours', fr: 'Cinq tours, cinq couleurs' },
            body: {
              en: 'Sable, Braise, Eau, Neige and Ténèbres. Each colour has its own Tower — a terrain card — and its own temperament: Sable is the most populated with thirty-five creatures, Eau the most restrained with twelve. Decks are built around these colours, and the game ships with archetypes ready to play as well as a workshop to build your own.',
              fr: 'Sable, Braise, Eau, Neige et Ténèbres. Chaque couleur a sa Tour — une carte terrain — et son tempérament : le Sable est le plus peuplé avec trente-cinq créatures, l’Eau le plus mesuré avec douze. Les decks se construisent autour de ces couleurs, et le jeu livre des archétypes prêts à jouer comme un atelier pour bâtir les siens.',
            },
          },
          {
            title: { en: 'The Chambre des Heures', fr: 'La Chambre des Heures' },
            body: {
              en: 'Above the duel, the fiction holds: Bab El counts its floors and an administration signs which ones are lost. The towers of the story mode are its bureaucracy made playable — each floor is a sorcerer with his own deck, his own AI profile and his own temperament, and the top of each tower is a Grand Horloger.',
              fr: 'Au-dessus du duel, la fiction tient : Bab El compte ses étages et une administration signe lesquels sont perdus. Les tours du mode Histoire sont sa bureaucratie rendue jouable — chaque étage est un sorcier avec son deck, son profil d’IA et son tempérament, et le sommet de chaque tour est un Grand Horloger.',
            },
          },
        ],
        mechanics: [
          {
            name: { en: 'Six phases, one attack', fr: 'Six phases, une attaque' },
            icon: 'coup-rapide',
            body: {
              en: 'A turn runs début, principale, attaque, blocage, principale2, fin. The active player declares all of his attackers at once; the defender then assigns blockers, and both sides may play quick spells before damage resolves. Creatures that attacked stay tapped.',
              fr: 'Un tour se déroule début, principale, attaque, blocage, principale2, fin. Le joueur actif déclare tous ses attaquants d’un coup ; le défenseur assigne ensuite ses bloqueurs, et les deux camps peuvent lancer des magies rapides avant que les blessures ne tombent. Les créatures qui ont attaqué restent engagées.',
            },
          },
          {
            name: { en: 'Résonance — the type matters', fr: 'Résonance — le type compte' },
            icon: 'resonance',
            body: {
              en: 'Some creatures carry a Résonance: while they are on the table, every creature of that printed type gains a bonus — and the bonus applies to both camps. The Shogun promu gives every Samouraï, including the opponent’s, +1/+1. It is a keyword that changes how you build a deck rather than how you play one card.',
              fr: 'Certaines créatures portent une Résonance : tant qu’elles sont en jeu, toutes les créatures de ce type imprimé gagnent un bonus — et le bonus s’applique aux deux camps. Le Shogun promu donne +1/+1 à tous les Samouraïs, y compris ceux de l’adversaire. C’est un mot-clé qui change la construction du deck plus que le jeu d’une carte.',
            },
          },
          {
            name: { en: 'Aura — position on the table', fr: 'Aura — la position sur la table' },
            icon: 'aura',
            body: {
              en: 'An Aura only buffs adjacent creatures. Kenshi de la forge gives +1/+0 to the creatures next to him, whatever their type — so where you place a card physically matters. Placement is part of the rules, not decoration.',
              fr: 'Une Aura ne renforce que les créatures adjacentes. Kenshi de la forge donne +1/+0 aux créatures voisines, quel que soit leur type — l’endroit où l’on pose une carte compte donc physiquement. Le placement fait partie des règles, pas de la décoration.',
            },
          },
          {
            name: { en: 'Harakiri — dying is a weapon', fr: 'Harakiri — mourir est une arme' },
            icon: 'honneur',
            body: {
              en: 'Ten creatures carry Harakiri: when they die, they deal damage to a random enemy creature, or to the enemy sorcerer if the table is empty. Losing a creature is never a purely defensive event — it is a delayed hit you already paid for.',
              fr: 'Dix créatures portent le Harakiri : quand elles meurent, elles infligent des dégâts à une créature adverse au hasard, ou au sorcier adverse si la table est vide. Perdre une créature n’est jamais un événement purement défensif — c’est un coup différé, déjà payé.',
            },
          },
          {
            name: { en: 'Furie, Esquive, Envol', fr: 'Furie, Esquive, Envol' },
            icon: 'furie',
            body: {
              en: 'Furie (nine creatures): the illustration takes over the whole card and the stats change with it. Esquive: a 25 % chance to ignore an attack, a spell or a sorcery — but never a capacity. Envol: it can only be blocked by another creature with Envol. Each keyword has its own visual state on the table.',
              fr: 'Furie (neuf créatures) : l’illustration envahit toute la carte et les statistiques changent avec elle. Esquive : 25 % de chances d’ignorer une attaque, une magie ou une sorcellerie — mais jamais une capacité. Envol : seule une autre créature avec Envol peut la bloquer. Chaque mot-clé a son propre état visuel sur la table.',
            },
          },
          {
            name: { en: 'Life is a reserve, not a ceiling', fr: 'La vie est une réserve, pas un plafond' },
            icon: 'soin',
            body: {
              en: 'Everyone starts at twenty-five, but twenty-five is not a maximum. Any healing, Tribut or transfer that would take you above your current maximum raises the maximum instead: the reserve widens and the gain is kept. A long game against a black deck can push a sorcerer well past thirty.',
              fr: 'Tout le monde part à vingt-cinq, mais vingt-cinq n’est pas un maximum. Tout soin, Tribut ou transfert qui dépasserait le maximum courant fait monter ce maximum : la réserve s’élargit et le gain est conservé. Une longue partie contre un deck Ténèbres peut pousser un sorcier bien au-delà de trente.',
            },
          },
        ],
        modes: [
          {
            title: { en: 'Story — the towers', fr: 'Histoire — les tours' },
            icon: 'traque',
            body: {
              en: 'Ten towers and forty-three floors. Each floor is held by a sorcerer with his own deck, AI profile and difficulty; the top of a tower is a Grand Horloger. Progress carries between floors and nothing is ever gated behind grinding — the difficulty of a floor comes from the deck across the table, not from a stat bonus.',
              fr: 'Dix tours et quarante-trois étages. Chaque étage est tenu par un sorcier avec son deck, son profil d’IA et sa difficulté ; le sommet d’une tour est un Grand Horloger. La progression se conserve entre les étages et rien n’est verrouillé derrière du farm — la difficulté d’un étage vient du deck d’en face, pas d’un bonus de statistiques.',
            },
          },
          {
            title: { en: 'Online 1v1 — by invitation', fr: '1c1 en ligne — par invitation' },
            icon: 'lien',
            body: {
              en: 'A duel starts from a clickable challenge link rather than a matchmaking queue: two players, any hour, resumable. Because each hand and draw order is secret, a single referee holds the only true copy of the game and sends each player a filtered view of the table.',
              fr: 'Un duel démarre depuis un lien de défi cliquable plutôt que depuis une file d’attente : deux joueurs, n’importe quelle heure, reprenable. Chaque main et chaque ordre de pioche étant secrets, un arbitre unique détient la seule copie vraie de la partie et renvoie à chacun une vue filtrée de la table.',
            },
          },
          {
            title: { en: 'The deck shelf and the workshop', fr: 'L’étagère de decks et l’atelier' },
            icon: 'pioche',
            body: {
              en: 'Decks are boxes on a shelf; opening one reveals its cards, and the one you select is remembered on the device. The workshop builds new decks two ways — assisted, by answering two questions about colour and play style, or manual. Home-made decks are labelled and sync by account.',
              fr: 'Les decks sont des boîtiers sur une étagère ; en ouvrir un révèle ses cartes, et celui qu’on sélectionne est mémorisé sur l’appareil. L’atelier fabrique de nouveaux decks de deux façons — assistée, en répondant à deux questions sur la couleur et le style de jeu, ou manuelle. Les decks maison sont étiquetés et se synchronisent par compte.',
            },
          },
          {
            title: { en: 'The Souk and the collection', fr: 'Le Souk et la collection' },
            icon: 'butin',
            body: {
              en: 'Credits earned by playing — daily quests, wins, first clears — buy five-card boosters. Nothing is ever paid for with real money, a booster never skips the pacing of the towers, and nothing acquired ever goes backwards. Player XP adds a third currency: each level crossed opens a free booster.',
              fr: 'Les crédits gagnés en jouant — quêtes du jour, victoires, premières victoires — achètent des boosters de cinq cartes. Rien ne se paie avec de l’argent réel, un booster ne court-circuite jamais le rythme des tours, et rien d’acquis ne redescend. L’XP ajoute une troisième monnaie : chaque niveau franchi ouvre un booster offert.',
            },
          },
        ],
        showcase: [
          {
            name: 'Shogun promu',
            art: '/images/sablier/cards/samourai-du-torii.jpg',
            element: 'braise',
            cost: 4,
            atk: 2,
            def: 2,
            rarity: 'rare',
            typeLine: 'Créature — Humain · Samouraï',
            text: {
              en: 'Résonance samouraï — while it is on the table, every Samouraï creature, in both camps, gains +1/+1. Harakiri — when it dies, it deals 1 damage to a random enemy creature, or to the enemy sorcerer if there is none.',
              fr: 'Résonance samouraï — tant qu’il est en jeu, toutes les créatures Samouraï de la table, lui compris, dans les deux camps, gagnent +1/+1. Harakiri — quand cette créature meurt, elle inflige 1 dégât à une créature adverse choisie au hasard, ou au sorcier adverse s’il n’y en a aucune.',
            },
            keywords: ['resonance', 'honneur'],
          },
          {
            name: 'Kenshi de la forge',
            art: '/images/sablier/cards/kenshi-de-la-forge.jpg',
            element: 'braise',
            cost: 3,
            atk: 1,
            def: 2,
            rarity: 'rare',
            typeLine: 'Créature — Humain · Samouraï',
            text: {
              en: 'While it is on the table, your adjacent creatures gain +1/+0, whatever their type. Harakiri — when it dies, it deals 1 damage to a random enemy creature.',
              fr: 'Tant qu’il est en jeu, vos créatures adjacentes gagnent +1/+0, quel que soit leur type. Harakiri — quand cette créature meurt, elle inflige 1 dégât à une créature adverse choisie au hasard.',
            },
            keywords: ['aura', 'honneur'],
          },
          {
            name: 'Susanoo',
            art: '/images/sablier/cards/susanoo.jpg',
            element: 'braise',
            cost: 6,
            atk: 5,
            def: 3,
            rarity: 'mythique',
            typeLine: 'Créature légendaire — Kami · Tempête',
            text: {
              en: 'When Susanoo enters play, remove from the game a creature of cost 5 or more of your choice. Harakiri — when it dies, it deals 1 damage to a random enemy creature.',
              fr: 'Quand Susanoo arrive en jeu, retirez de la partie une créature de coût 5 ou plus de votre choix. Harakiri — quand cette créature meurt, elle inflige 1 dégât à une créature adverse choisie au hasard.',
            },
            keywords: ['honneur'],
          },
          {
            name: 'Sentinelle des sables',
            art: '/images/sablier/cards/sentinelle-des-sables.jpg',
            element: 'sable',
            cost: 3,
            atk: 3,
            def: 2,
            rarity: 'inhabituelle',
            typeLine: 'Créature — Humain et Vampire',
            text: {
              en: 'You may play this creature during the opponent’s attack phase. When it enters, it deals its attack damage to a targeted attacking creature.',
              fr: 'Vous pouvez jouer cette créature pendant la phase d’attaque adverse. Quand elle arrive : elle inflige ses dégâts d’attaque à une créature attaquante ciblée.',
            },
            keywords: ['contre-attaque', 'vol-de-vie'],
          },
          {
            name: 'Le Kraken',
            art: '/images/sablier/cards/kraken.jpg',
            element: 'eau',
            cost: 8,
            atk: 8,
            def: 8,
            rarity: 'mythique',
            typeLine: 'Créature légendaire — Bête marine',
            text: {
              en: 'When Le Kraken enters play, it destroys a targeted enemy creature of type Navire.',
              fr: 'Quand Le Kraken arrive : il détruit une créature adverse de type Navire ciblée.',
            },
            keywords: [],
          },
          {
            name: 'Loup des neiges',
            art: '/images/sablier/cards/loup-des-neiges.jpg',
            element: 'neige',
            cost: 2,
            atk: 2,
            def: 2,
            rarity: 'commune',
            typeLine: 'Créature — Bête',
            text: {
              en: 'Furie — when its condition is met, the illustration takes over the whole card and its statistics change with it.',
              fr: 'Furie — quand sa condition est remplie, l’illustration envahit toute la carte et ses statistiques changent avec elle.',
            },
            keywords: ['furie'],
          },
        ],
        colours: [
          {
            id: 'sable',
            name: { en: 'Sand', fr: 'Sable' },
            count: 35,
            art: '/images/sablier/cards/general-du-croissant-noir.jpg',
            note: { en: 'The most populated colour — the desert, its beasts and its dead.', fr: 'La couleur la plus peuplée — le désert, ses bêtes et ses morts.' },
          },
          {
            id: 'braise',
            name: { en: 'Ember', fr: 'Braise' },
            count: 24,
            art: '/images/sablier/cards/susanoo.jpg',
            note: { en: 'Samurai, kami and storms — the colour of Harakiri.', fr: 'Samouraïs, kamis et tempêtes — la couleur du Harakiri.' },
          },
          {
            id: 'tenebres',
            name: { en: 'Darkness', fr: 'Ténèbres' },
            count: 19,
            art: '/images/sablier/cards/la-barbe-noire.jpg',
            note: { en: 'Pirates and curses, and the only colour that steals life.', fr: 'Pirates et malédictions, la seule couleur qui vole la vie.' },
          },
          {
            id: 'neige',
            name: { en: 'Snow', fr: 'Neige' },
            count: 14,
            art: '/images/sablier/cards/loup-des-neiges.jpg',
            note: { en: 'The fjord, its jarls and their forge.', fr: 'Le fjord, ses jarls et leur forge.' },
          },
          {
            id: 'eau',
            name: { en: 'Water', fr: 'Eau' },
            count: 12,
            art: '/images/sablier/cards/kraken.jpg',
            note: { en: 'The rarest and slowest — the sea, patient and enormous.', fr: 'La plus rare et la plus lente — la mer, patiente et énorme.' },
          },
        ],
      },
      context: {
        en: 'The Sablier is the card game at the centre of the Let’s Play arcade. Its world is Maghreb-rooted: Bab El Oued, Tipaza, the Erg, the Souk. Every duel happens on a painted board, and every card is a character with a portrait, a frame and a power.',
        fr: 'Le Sablier est le jeu de cartes au centre de l’arcade Let’s Play. Son monde est ancré au Maghreb : Bab El Oued, Tipaza, l’Erg, le Souk. Chaque duel se joue sur un plateau peint, et chaque carte est un personnage avec son portrait, son cadre et son pouvoir.',
      },
      approach: {
        en: [
          'A painting discipline for the 18 boards — top-down, hand-painted, with a quiet centre so the card table can sit on top without fighting the art.',
          'A card frame system: one silhouette, four rarity treatments, and a text-safe zone that holds at 768 × 960 on any screen.',
          'An illustrated cast that mixes myth, history and fantasy — a desert citadel, jinns, corsairs, a frozen throne.',
          'UI built to be legible in landscape on a phone, including a dedicated landscape layout for the whole duel flow.',
        ],
        fr: [
          'Une discipline de peinture pour les 18 plateaux — vue du dessus, peints à la main, avec un centre calme pour que la table de cartes s’y pose sans lutter contre l’image.',
          'Un système de cadres de cartes : une silhouette, quatre traitements de rareté et une zone de texte qui tient en 768 × 960 sur n’importe quel écran.',
          'Un casting illustré qui mêle mythe, histoire et fantasy — une citadelle du désert, des djinns, des corsaires, un trône de glace.',
          'Une UI pensée pour rester lisible en paysage sur téléphone, avec une mise en page paysage dédiée à tout le déroulé du duel.',
        ],
      },
      craft: {
        en: 'The hardest part was consistency at volume: 422 cards painted by different hands and tools still have to read as one deck. I built a reference sheet — light direction, edge treatment, frame weight — and applied it to every new illustration.',
        fr: 'Le plus difficile a été la cohérence en volume : 422 cartes produites avec des outils différents doivent malgré tout se lire comme un seul deck. J’ai construit une feuille de référence — direction de lumière, traitement des bords, poids du cadre — et l’ai appliquée à chaque nouvelle illustration.',
      },
      facts: [
        { label: { en: 'Card artworks', fr: 'Illustrations de cartes' }, value: '422' },
        { label: { en: 'Painted boards', fr: 'Plateaux peints' }, value: '18' },
        { label: { en: 'Formats', fr: 'Formats' }, value: 'Landscape + portrait' },
        { label: { en: 'Modes', fr: 'Modes' }, value: 'Story · PvP · Decks · Souk' },
      ],
      gallery: [
        { src: '/images/sablier/keyart-hd.jpg', caption: { en: 'Key art — the citadel and the clock', fr: 'Key art — la citadelle et l’horloge' } },
        { src: '/images/sablier/board-iles.jpg', caption: { en: 'Board — Les Îles Célestes', fr: 'Plateau — Les Îles Célestes' } },
        { src: '/images/sablier/board-souk.jpg', caption: { en: 'Board — Place du Souk', fr: 'Plateau — Place du Souk' } },
        { src: '/images/sablier/board-viking.jpg', caption: { en: 'Board — Village viking', fr: 'Plateau — Village viking' } },
        { src: '/images/sablier/card-orochi.jpg', caption: { en: 'Card art — Orochi', fr: 'Illustration de carte — Orochi' }, fit: 'contain' },
        { src: '/images/sablier/card-kenshi.jpg', caption: { en: 'Card art — Kenshi de la forge', fr: 'Illustration de carte — Kenshi de la forge' }, fit: 'contain' },
      ],
      quote: {
        en: '422 illustrations are not a collection until a frame, a light and a margin tell you they belong together.',
        fr: '422 illustrations ne forment pas une collection tant qu’un cadre, une lumière et une marge ne disent pas qu’elles vont ensemble.',
      },
    },
  },
  {
    slug: 'mirage-rush',
    title: 'Mirage Rush',
    client: "Let's Play Arcade",
    year: '2026',
    categories: ['games'],
    featured: true,
    cover: '/images/mirage/keyart.jpg',
    coverAlt: 'Mirage Rush key art — a cowboy rider crossing the desert at sunset',
    cardSize: 'std',
    role: { en: 'Art direction · Logo · UI · Illustration', fr: 'Direction artistique · Logo · UI · Illustration' },
    summary: {
      en: 'An endless desert racer with a comic-book identity: hero logo, five cups, rider skins and a UI that survives a 360 px phone.',
      fr: 'Un runner équestre dans le désert à l’identité comics : logo, cinq coupes, skins de cavaliers et une UI qui tient sur un écran de 360 px.',
    },
    stack: 'Canvas · 5 cups · Skins',
    live: 'https://let-s-play-nu.vercel.app/jeu/mirage-rush',
    detail: {
      context: {
        en: 'Mirage Rush is the arcade runner of the Let’s Play portal: a rider galloping across the desert, dodging mud, collecting crystals, racing rivals. It needed a loud, printable identity that could also live as a 300 px thumbnail.',
        fr: 'Mirage Rush est le runner arcade du portail Let’s Play : un cavalier qui traverse le désert, évite la boue, ramasse des cristaux et affronte des rivaux. Il lui fallait une identité forte, imprimable, qui survive aussi en vignette de 300 px.',
      },
      approach: {
        en: [
          'A comic-poster key art: heavy inking, halftone grain, a title lock-up that reads at thumbnail size and holds at billboard size.',
          'Five cups with their own emblems and trophy sets — so progression has something to show, not just numbers.',
          'Rider skins and a portrait system: each character is a silhouette first, a costume second.',
          'The whole interface re-flows for landscape phones, because that is where an arcade game is actually played.',
        ],
        fr: [
          'Un key art d’affiche comics : encrage épais, trame en demi-teintes, un lock-up de titre lisible en vignette et tenable en grand format.',
          'Cinq coupes avec leurs emblèmes et leurs trophées — pour que la progression ait quelque chose à montrer, pas seulement des chiffres.',
          'Des skins de cavaliers et un système de portraits : chaque personnage est d’abord une silhouette, ensuite un costume.',
          'Toute l’interface se recompose pour les téléphones en paysage, parce que c’est là qu’on joue réellement à un jeu d’arcade.',
        ],
      },
      craft: {
        en: 'The logo was the contract: a chunky western slab with a bevel that reads in one colour, on dark, on light and at 40 px. Everything else — the banner, the cups, the badges — inherits from it.',
        fr: 'Le logo était le contrat : une slab western épaisse avec un biseau qui fonctionne en une couleur, sur fond sombre, sur fond clair et à 40 px. Tout le reste — la bannière, les coupes, les badges — en hérite.',
      },
      facts: [
        { label: { en: 'Cups', fr: 'Coupes' }, value: '5' },
        { label: { en: 'Cup emblems', fr: 'Emblèmes de coupe' }, value: '5' },
        { label: { en: 'Identity', fr: 'Identité' }, value: 'Comic western' },
        { label: { en: 'Orientation', fr: 'Orientation' }, value: 'Landscape-first' },
      ],
      gallery: [
        { src: '/images/mirage/keyart.jpg', caption: { en: 'Key art and title lock-up', fr: 'Key art et lock-up' } },
        { src: '/images/mirage/track-desert.jpg', caption: { en: 'Track texture — desert', fr: 'Texture de piste — désert' } },
      ],
    },
  },
  {
    slug: 'vice-city-rush',
    title: 'Vice City Rush',
    client: "Let's Play Arcade",
    year: '2026',
    categories: ['games'],
    featured: true,
    cover: '/images/vice-city/keyart.jpg',
    coverAlt: 'Vice City Rush key art — a red convertible on a Miami boulevard at sunset',
    cardSize: 'std',
    role: { en: 'Art direction · Vehicle art · UI · Environment', fr: 'Direction artistique · Art des véhicules · UI · Environnements' },
    summary: {
      en: 'An arcade racer through five cities and three real roads, with a garage of illustrated cars and a real Nürburgring pit wall.',
      fr: 'Un racer arcade dans cinq villes et trois vraies routes, avec un garage de voitures illustrées et le vrai tracé du Nürburgring.',
    },
    stack: '3D-style art · 8 routes',
    live: 'https://let-s-play-nu.vercel.app/jeu/vice-city-rush',
    detail: {
      context: {
        en: 'Vice City Rush is the racing game of the portal. Four-lane arcade racing, traffic, police, and a garage: the player buys cars, tunes them, then takes them to Vice City, New York, Tokyo, Paris or London — plus Route 66, the Mexican countryside and the Nürburgring Nordschleife.',
        fr: 'Vice City Rush est le jeu de course du portail. Course arcade à quatre voies, trafic, police et un garage : le joueur achète des voitures, les prépare, puis les emmène à Vice City, New York, Tokyo, Paris ou Londres — plus la Route 66, la campagne mexicaine et le Nürburgring Nordschleife.',
      },
      approach: {
        en: [
          'A garage that feels like a showroom: each car is drawn with its own stance, palette and lighting before it is ever a 3D model.',
          'City identities as art direction rules — Miami sunsets, Tokyo neon, Paris stone, London overcast — each with its own sky, road surface and pit signage.',
          'Tokyo is not a generic street: it replays the real C1 inner loop of the Shuto Expressway, section by section.',
          'The Nordschleife is documented the same way: 36 contiguous sectors, real corner names, Breidscheid at 320 m, Hohe Acht at 620 m, the Karussell’s concrete banking.',
        ],
        fr: [
          'Un garage qui ressemble à un showroom : chaque voiture est dessinée avec son assiette, sa palette et sa lumière avant d’exister en 3D.',
          'Des identités de ville traitées comme des règles de DA — couchers de soleil de Miami, néons de Tokyo, pierre de Paris, ciel couvert de Londres — chacune avec son ciel, sa route et sa signalétique.',
          'Tokyo n’est pas une rue générique : le jeu rejoue la vraie boucle intérieure C1 de la Shuto Expressway, secteur par secteur.',
          'Le Nordschleife est documenté de la même façon : 36 secteurs contigus, les vrais noms de virages, Breidscheid à 320 m, Hohe Acht à 620 m, le banking béton du Karussell.',
        ],
      },
      craft: {
        en: 'A race track is a design document: 20.8 km, 73 corners, 33 left and 40 right. Translating that faithfully into a 1,200 m playable loop — while keeping the corner sequence recognisable — was as much an art problem as a technical one.',
        fr: 'Un circuit est un document de design : 20,8 km, 73 virages, 33 à gauche et 40 à droite. Le traduire fidèlement en une boucle jouable de 1 200 m — tout en gardant la séquence des virages reconnaissable — était autant un problème d’art que de technique.',
      },
      facts: [
        { label: { en: 'Cities', fr: 'Villes' }, value: '5' },
        { label: { en: 'Road courses', fr: 'Parcours routiers' }, value: '3' },
        { label: { en: 'Garage vehicles', fr: 'Véhicules au garage' }, value: '12' },
        { label: { en: 'Nordschleife sectors', fr: 'Secteurs Nordschleife' }, value: '36' },
      ],
      gallery: [
        { src: '/images/vice-city/keyart.jpg', caption: { en: 'Key art — Vice City waterfront', fr: 'Key art — front de mer de Vice City' } },
        { src: '/images/vice-city/nordschleife.jpg', caption: { en: 'Nürburgring Nordschleife', fr: 'Nürburgring Nordschleife' } },
        { src: '/images/vice-city/car.jpg', caption: { en: 'Car study — AE86', fr: 'Étude de voiture — AE86' } },
        { src: '/images/vice-city/tokyo.jpg', caption: { en: 'Tokyo — C1 inner loop', fr: 'Tokyo — boucle intérieure C1' } },
        { src: '/images/vice-city/paris.jpg', caption: { en: 'Paris', fr: 'Paris' } },
        { src: '/images/vice-city/route-66.jpg', caption: { en: 'Route 66', fr: 'Route 66' } },
      ],
      quote: {
        en: 'Players forgive a lot in a racing game, but never a city that doesn’t look like it has weather.',
        fr: 'On pardonne beaucoup à un jeu de course, sauf une ville qui n’a pas l’air d’avoir un climat.',
      },
    },
  },
  {
    slug: 'lets-play-telecom',
    title: "Let's Play × Algérie Télécom",
    client: 'Iris Studio for Algérie Télécom',
    year: '2025—2026',
    categories: ['brand'],
    featured: true,
    cover: '/images/work/brand-campaign.jpg',
    coverAlt: "Let's Play by Algérie Télécom campaign visual",
    cardSize: 'std',
    role: { en: 'Senior graphic designer at Iris Studio', fr: 'Graphic designer senior chez Iris Studio' },
    summary: {
      en: 'Campaign and broadcast identity for a gaming show: lock-ups, episode art, thumbnails and a social kit that survives every format.',
      fr: 'Identité de campagne et d’émission pour un show gaming : lock-ups, key arts d’épisodes, miniatures et kit social qui tient tous les formats.',
    },
    stack: 'Broadcast · Social · Print',
    detail: {
      context: {
        en: 'The show needed to look like a channel, not a series of posts. Every episode ships with a key art, a YouTube thumbnail, a square social variant, a lower-third and a guest card — all produced inside a week.',
        fr: 'L’émission devait ressembler à une chaîne, pas à une suite de posts. Chaque épisode arrive avec un key art, une miniature YouTube, une déclinaison carrée, un lower-third et une carte invité — le tout produit en une semaine.',
      },
      approach: {
        en: [
          'A kit-of-parts: one lock-up, one type scale, three background systems — reused for every episode instead of redesigned.',
          'Art direction for guests and partners so borrowed logos never break the composition.',
          'Arabic and French typography set side by side without one looking like an afterthought.',
        ],
        fr: [
          'Un kit de pièces : un lock-up, une échelle typographique, trois systèmes de fond — réutilisés à chaque épisode au lieu d’être redessinés.',
          'Une direction artistique des invités et partenaires pour que les logos prêtés ne cassent jamais la composition.',
          'Typographie arabe et française côte à côte, sans que l’une ressemble à un ajout de dernière minute.',
        ],
      },
      craft: {
        en: 'The discipline is repeatability: a format that takes 20 minutes to produce but still looks bespoke. That is what a weekly show actually needs from a designer.',
        fr: 'La discipline, c’est la répétabilité : un format qui se produit en 20 minutes mais qui paraît sur mesure. C’est ce qu’une émission hebdomadaire attend vraiment d’un designer.',
      },
      facts: [
        { label: { en: 'Client', fr: 'Client' }, value: 'Algérie Télécom' },
        { label: { en: 'Agency', fr: 'Agence' }, value: 'Iris Studio' },
        { label: { en: 'Formats', fr: 'Formats' }, value: '16:9 · 1:1 · 9:16' },
        { label: { en: 'Languages', fr: 'Langues' }, value: 'FR · AR' },
      ],
      gallery: [
        { src: '/images/work/letsplay-launch.jpg', caption: { en: 'Launch lock-up', fr: 'Lock-up de lancement' } },
        { src: '/images/work/letsplay-episode.jpg', caption: { en: 'Episode art — Arc Raiders', fr: 'Key art — Arc Raiders' } },
        { src: '/images/work/letsplay-comiccon.jpg', caption: { en: 'Event coverage', fr: 'Couverture d’événement' } },
        { src: '/images/work/field-documentary.jpg', caption: { en: 'Field production still', fr: 'Image de production terrain' } },
      ],
    },
  },
  {
    slug: '7ouma-arena',
    title: '7ouma Arena × Djezzy',
    client: 'Iris Studio for Djezzy',
    year: '2025',
    categories: ['brand'],
    featured: true,
    cover: '/images/work/7ouma-lady-gaming.jpg',
    coverAlt: 'Lady Gaming campaign visual for 7ouma Arena',
    cardSize: 'half',
    role: { en: 'Senior graphic designer at Iris Studio', fr: 'Graphic designer senior chez Iris Studio' },
    summary: {
      en: 'A competitive mobile-gaming circuit: five campaign platforms, player posters and a brand that stays legible on a phone screen.',
      fr: 'Un circuit compétitif de mobile gaming : cinq plateformes de campagne, des affiches de joueurs et une marque lisible sur un écran de téléphone.',
    },
    stack: 'Campaign · Key art · Social',
    detail: {
      context: {
        en: '7ouma Arena is the mobile esport scene backed by Djezzy: Free Fire, FIFA Mobile, football heroes, Alliance. Each platform needed its own poster while the circuit kept one voice.',
        fr: '7ouma Arena est la scène esport mobile portée par Djezzy : Free Fire, FIFA Mobile, football heroes, Alliance. Chaque plateforme demandait sa propre affiche, sans que le circuit perde sa voix.',
      },
      approach: {
        en: [
          'A poster system that puts the player first, the game second and the sponsor third — the order that makes a community feel represented.',
          'Colour coding per platform, so the circuit reads as a family rather than a mash-up.',
          'Compositions tested at feed size: the title must be readable in a 320 px scroll.',
        ],
        fr: [
          'Un système d’affiches qui met le joueur d’abord, le jeu ensuite et le sponsor en dernier — l’ordre qui donne à une communauté le sentiment d’être représentée.',
          'Un code couleur par plateforme, pour que le circuit se lise comme une famille plutôt qu’un collage.',
          'Des compositions testées à la taille du feed : le titre doit rester lisible dans un scroll de 320 px.',
        ],
      },
      craft: {
        en: 'Esport art usually shouts. Here the contrast budget was spent on faces and light, so the sponsor marks could sit quietly in the corners and still be visible.',
        fr: 'L’art esport crie souvent. Ici, le budget de contraste a été mis sur les visages et la lumière, pour que les marques partenaires puissent rester discrètes dans les coins et rester visibles.',
      },
      facts: [
        { label: { en: 'Client', fr: 'Client' }, value: 'Djezzy' },
        { label: { en: 'Campaign platforms', fr: 'Plateformes' }, value: '5' },
        { label: { en: 'Outputs', fr: 'Livrables' }, value: 'Posters · Social · LED' },
        { label: { en: 'Arena hubs', fr: 'Hubs' }, value: '4 teams' },
      ],
      gallery: [
        { src: '/images/work/7ouma-lady-gaming.jpg', caption: { en: 'Lady Gaming', fr: 'Lady Gaming' } },
        { src: '/images/work/7ouma-alliance.jpg', caption: { en: 'Alliance — Pro League', fr: 'Alliance — Pro League' } },
        { src: '/images/work/7ouma-fifa.jpg', caption: { en: 'Football Heroes', fr: 'Football Heroes' } },
        { src: '/images/work/7ouma-casters.jpg', caption: { en: 'Meet the casters', fr: 'Meet the casters' } },
      ],
    },
  },
  {
    slug: 'egor-lobby',
    title: 'EGOR — esport lobby redesign',
    client: 'EGOR Gaming',
    year: '2026',
    categories: ['product', 'brand'],
    featured: true,
    cover: '/images/work/egor-arena-dark.jpg',
    coverAlt: 'EGOR esport lobby — dark theme arena section',
    cardSize: 'half',
    role: { en: 'Product design · Design system · Front-end', fr: 'Design produit · Design system · Front-end' },
    summary: {
      en: 'A competitive-gaming lobby rebuilt around live signals: tournaments, scrims, arenas and prize pools in one legible dark-to-light system.',
      fr: 'Un lobby esport reconstruit autour des signaux live : tournois, scrims, arènes et prize pools dans un système lisible, du sombre au clair.',
    },
    stack: 'React · TypeScript · Design tokens',
    live: 'https://salimb-source.github.io/egor-lobby-redesign/',
    repo: 'https://github.com/SalimB-source/egor-lobby-redesign',
    detail: {
      context: {
        en: 'EGOR is a competitive gaming community. Their lobby had grown section by section until every block invented its own scale. The redesign started from what a player actually checks in the first five seconds: am I signed up, is my match live, what is the prize.',
        fr: 'EGOR est une communauté de gaming compétitif. Leur lobby avait grandi section par section jusqu’à ce que chaque bloc invente sa propre échelle. La refonte est partie de ce qu’un joueur vérifie vraiment dans les cinq premières secondes : suis-je inscrit, mon match est-il en cours, quel est le prize.',
      },
      approach: {
        en: [
          'A signal hierarchy — live, upcoming, featured, community — expressed in colour, weight and position before any copy.',
          'One card component that holds a game, a team, an arena or a tournament without changing its DNA.',
          'A dark theme and a light theme built from the same tokens, both checked for contrast rather than guessed.',
          'Motion used once per screen: the ticker. Everything else stays still so the numbers can move.',
        ],
        fr: [
          'Une hiérarchie de signaux — live, à venir, à la une, communauté — exprimée par la couleur, le poids et la position avant le texte.',
          'Une seule carte capable de porter un jeu, une équipe, une arène ou un tournoi sans changer d’ADN.',
          'Un thème sombre et un thème clair construits sur les mêmes tokens, vérifiés en contraste plutôt que devinés.',
          'Le mouvement une fois par écran : le ticker. Le reste reste immobile pour que les chiffres bougent.',
        ],
      },
      craft: {
        en: 'Community logos arrive as PNGs, in every aspect ratio, often on white. The design includes a plate system for third-party marks so they never look pasted in — and never get recoloured.',
        fr: 'Les logos de communautés arrivent en PNG, dans tous les ratios, souvent sur fond blanc. Le design prévoit un système de plaques pour les marques tierces : jamais collées, jamais recolorées.',
      },
      facts: [
        { label: { en: 'Sections rebuilt', fr: 'Sections refaites' }, value: '6' },
        { label: { en: 'Themes', fr: 'Thèmes' }, value: 'Dark + light' },
        { label: { en: 'Games in catalog', fr: 'Jeux au catalogue' }, value: '12' },
        { label: { en: 'Arena hubs', fr: 'Hubs' }, value: '4' },
      ],
      gallery: [
        { src: '/images/work/egor-arena-dark.jpg', caption: { en: 'Arena section — dark theme', fr: 'Section arènes — thème sombre' } },
        { src: '/images/work/egor-arena-light.jpg', caption: { en: 'Arena section — light theme', fr: 'Section arènes — thème clair' } },
        { src: '/images/work/egor-game-freefire.jpg', caption: { en: 'Game card art — Free Fire', fr: 'Art de carte — Free Fire' } },
        { src: '/images/work/egor-game-valorant.jpg', caption: { en: 'Game card art — Valorant', fr: 'Art de carte — Valorant' } },
      ],
    },
  },
  {
    slug: 'iris-studio-site',
    title: 'Iris Studio — agency site',
    client: 'Iris Studio',
    year: '2026',
    categories: ['product'],
    featured: false,
    cover: '/images/work/abstract-light.jpg',
    coverAlt: 'Iris Studio website — abstract light architecture',
    cardSize: 'std',
    role: { en: 'Design & front-end', fr: 'Design & front-end' },
    summary: {
      en: 'A cinematic agency site: scroll choreography, light-and-shadow art direction and a project index that behaves like an archive.',
      fr: 'Un site d’agence cinématographique : chorégraphie au scroll, direction artistique lumière-ombre et un index de projets façon archive.',
    },
    stack: 'React · TypeScript · Motion',
    live: 'https://salimb-source.github.io/Iris-studio-NEW/',
    repo: 'https://github.com/SalimB-source/Iris-studio-NEW',
    detail: {
      context: {
        en: 'Iris Studio needed a site that sells strategy without sounding like a deck. The direction is cinematic: dark rooms, a single light source, and typography that carries the argument.',
        fr: 'Iris Studio voulait un site qui vend de la stratégie sans ressembler à un deck. La direction est cinématographique : pièces sombres, une seule source de lumière, une typographie qui porte l’argument.',
      },
      approach: {
        en: [
          'A scroll narrative in five scenes, each with one idea and one image.',
          'A project index treated as an archive — provenance, credits and client marks kept visible.',
          'Type-led layouts that hold up without photography, so the site can ship before every shoot is done.',
        ],
        fr: [
          'Un récit au scroll en cinq scènes, chacune avec une idée et une image.',
          'Un index de projets traité comme une archive — provenance, crédits et marques clients restent visibles.',
          'Des mises en page typographiques qui tiennent sans photographie, pour que le site puisse sortir avant la fin de tous les tournages.',
        ],
      },
      craft: {
        en: 'The light direction is a design rule, not a decoration: every image is graded toward the same warm key light, and every dark section keeps the same floor tone so transitions never flash.',
        fr: 'La direction de lumière est une règle de design, pas une décoration : chaque image est étalonnée vers la même lumière chaude, et chaque section sombre garde le même ton de sol pour que les transitions ne clignotent jamais.',
      },
      facts: [
        { label: { en: 'Scenes', fr: 'Scènes' }, value: '5' },
        { label: { en: 'Pages', fr: 'Pages' }, value: '4' },
        { label: { en: 'Media', fr: 'Médias' }, value: '46' },
        { label: { en: 'Build', fr: 'Build' }, value: 'Static export' },
      ],
      gallery: [
        { src: '/images/work/abstract-light.jpg', caption: { en: 'Light and architecture', fr: 'Lumière et architecture' } },
        { src: '/images/work/editorial-motion.jpg', caption: { en: 'Editorial motion study', fr: 'Étude de mouvement éditorial' } },
      ],
    },
  },
  {
    slug: 'selma-rise',
    title: 'Selma Rise',
    client: 'Selma Rise — coaching',
    year: '2026',
    categories: ['product', 'brand'],
    featured: false,
    cover: '/images/work/djezzy-activation.jpg',
    coverAlt: 'Retail activation photograph standing in for the Selma Rise brand system',
    cardSize: 'std',
    role: { en: 'Brand · Web design · Front-end', fr: 'Marque · Web design · Front-end' },
    summary: {
      en: 'A quiet, warm brand and site for a coaching practice: booking, programmes and a tone that never sounds like marketing.',
      fr: 'Une marque et un site calmes et chaleureux pour une pratique de coaching : prise de rendez-vous, programmes et un ton qui ne sonne jamais marketing.',
    },
    stack: 'React · Booking flow · Type-led',
    detail: {
      context: {
        en: 'Coaching sites usually oversell. This one had to feel like a room you can sit in: one programme at a time, a booking flow that takes two minutes, and copy in the practitioner’s own voice.',
        fr: 'Les sites de coaching survendent souvent. Celui-ci devait ressembler à une pièce où l’on peut s’asseoir : un programme à la fois, une prise de rendez-vous en deux minutes et un texte dans la voix de la praticienne.',
      },
      approach: {
        en: [
          'A serif-led identity with one warm accent, and photography treated as evidence rather than decoration.',
          'Programmes presented as choices, not a catalogue — three ways in, clearly compared.',
          'A booking path with a single decision per screen.',
        ],
        fr: [
          'Une identité portée par un serif avec un seul accent chaud, et la photographie traitée comme une preuve plutôt qu’une décoration.',
          'Des programmes présentés comme des choix, pas un catalogue — trois entrées clairement comparées.',
          'Un parcours de rendez-vous avec une seule décision par écran.',
        ],
      },
      craft: {
        en: 'Restraint is the design: one typeface, one accent, three photos. Everything else is spacing.',
        fr: 'La retenue est le design : une police, un accent, trois photos. Le reste, c’est de l’espacement.',
      },
      facts: [
        { label: { en: 'Typefaces', fr: 'Polices' }, value: '2' },
        { label: { en: 'Programmes', fr: 'Programmes' }, value: '3' },
        { label: { en: 'Booking', fr: 'Réservation' }, value: '2 min path' },
        { label: { en: 'Language', fr: 'Langue' }, value: 'French' },
      ],
    },
  },
];

export const featuredProjects = () => PROJECTS.filter((p) => p.featured);

/* ------------------------------------------------------------------ */
/* CAPABILITIES                                                        */
/* ------------------------------------------------------------------ */

export const CAPABILITIES = {
  en: [
    {
      num: '01',
      title: 'Brand & visual identity',
      text: 'Logos, lock-ups and systems that hold from a phone thumbnail to a 6-metre banner — and keep holding when someone else applies them.',
      list: ['Logo & lock-up systems', 'Type & colour scales', 'Print, packaging, signage'],
      wide: true,
    },
    {
      num: '02',
      title: 'Art direction',
      text: 'A look that can be repeated: light direction, image treatment, reference sheets, and the rules that keep a campaign coherent.',
      list: ['Campaign art direction', 'Key art & posters', 'Photo & retouch direction'],
      wide: false,
    },
    {
      num: '03',
      title: 'UI / UX design',
      text: 'Interfaces designed around the first five seconds: what a user needs to see, in what order, and what can disappear.',
      list: ['Product & lobby design', 'Design tokens', 'Prototypes in code'],
      wide: false,
    },
    {
      num: '04',
      title: 'Web design & front-end',
      text: 'I do not hand off a picture. I ship the site — responsive, accessible, fast, and documented for whoever comes next.',
      list: ['React / Next.js', 'Design systems in CSS', 'Performance & a11y'],
      wide: false,
    },
    {
      num: '05',
      title: 'AI-powered workflow',
      text: 'Models where they genuinely help — drafts, variants, localisation, production support — and deterministic rules where they must not.',
      list: ['Gen imagery & retouch', 'Automated editorial', 'Prompt systems & QA'],
      wide: false,
    },
    {
      num: '06',
      title: 'Motion & video',
      text: 'Editing, motion graphics and game trailers that give a still brand a pulse, cut to the platform it lives on.',
      list: ['Motion graphics', 'Video editing', 'Social formats'],
      wide: true,
    },
  ],
  fr: [
    {
      num: '01',
      title: 'Marque & identité visuelle',
      text: 'Logos, lock-ups et systèmes qui tiennent de la vignette téléphone à la bâche de 6 mètres — et qui continuent de tenir quand quelqu’un d’autre les applique.',
      list: ['Logos & systèmes de lock-up', 'Échelles typo & couleur', 'Print, packaging, signalétique'],
      wide: true,
    },
    {
      num: '02',
      title: 'Direction artistique',
      text: 'Un regard qui se répète : direction de lumière, traitement d’image, feuilles de référence et les règles qui gardent une campagne cohérente.',
      list: ['DA de campagne', 'Key art & affiches', 'Direction photo & retouche'],
      wide: false,
    },
    {
      num: '03',
      title: 'Design UI / UX',
      text: 'Des interfaces pensées autour des cinq premières secondes : ce qu’un utilisateur doit voir, dans quel ordre, et ce qui peut disparaître.',
      list: ['Design produit & lobby', 'Design tokens', 'Prototypes en code'],
      wide: false,
    },
    {
      num: '04',
      title: 'Web design & front-end',
      text: 'Je ne livre pas une image. Je livre le site — responsive, accessible, rapide et documenté pour la personne suivante.',
      list: ['React / Next.js', 'Design systems en CSS', 'Performance & a11y'],
      wide: false,
    },
    {
      num: '05',
      title: 'Workflow assisté par IA',
      text: 'Les modèles là où ils aident vraiment — brouillons, variantes, localisation, production — et des règles déterministes là où ils ne doivent pas intervenir.',
      list: ['Imagerie générative & retouche', 'Éditorial automatisé', 'Systèmes de prompts & QA'],
      wide: false,
    },
    {
      num: '06',
      title: 'Motion & vidéo',
      text: 'Montage, motion design et trailers de jeux qui donnent un pouls à une marque fixe, montés pour la plateforme qui les accueille.',
      list: ['Motion design', 'Montage vidéo', 'Formats sociaux'],
      wide: true,
    },
  ],
};

export const PROCESS = {
  en: [
    { title: 'Listen, then frame', text: 'A short brief is not a small problem. I map the audience, the constraints and the one decision that matters, then write the brief back in one page.' },
    { title: 'Art direction, not decoration', text: 'Two or three directions, each with a reason. We pick one and I build the rules — type, colour, image, motion — before volume.' },
    { title: 'Design in the real format', text: 'A poster is designed at poster size; a lobby is designed at 390 px, in the browser, with real data. No presentation-only layouts.' },
    { title: 'Build it, then hand it over', text: 'Front-end, tokens, components, documentation. The team should be able to add a page six months later without me.' },
  ],
  fr: [
    { title: 'Écouter, puis cadrer', text: 'Un brief court n’est pas un petit problème. Je cartographie l’audience, les contraintes et la décision qui compte, puis je réécris le brief en une page.' },
    { title: 'Direction artistique, pas décoration', text: 'Deux ou trois directions, chacune avec une raison. On en choisit une et je construis les règles — typo, couleur, image, mouvement — avant le volume.' },
    { title: 'Dessiner au format réel', text: 'Une affiche se dessine en format affiche ; un lobby se dessine en 390 px, dans le navigateur, avec de vraies données. Pas de maquette de présentation.' },
    { title: 'Construire, puis transmettre', text: 'Front-end, tokens, composants, documentation. L’équipe doit pouvoir ajouter une page six mois plus tard sans moi.' },
  ],
};

export const PRINCIPLES = {
  en: [
    { title: 'Legible before beautiful', text: 'A design that only works on a large screen is a sketch. Contrast, size and hierarchy are checked in the browser, not admired in a mock-up.' },
    { title: 'Systems over one-offs', text: 'I would rather deliver a kit of six reusable formats than one perfect poster that cannot be repeated.' },
    { title: 'AI is a tool, not a voice', text: 'I use models for volume and speed, then art-direct the output. The judgement, the composition and the final pass stay human.' },
    { title: 'Work ships or it does not count', text: 'Everything in this portfolio is live, built or documented. No concept decks pretending to be products.' },
  ],
  fr: [
    { title: 'Lisible avant joli', text: 'Un design qui ne fonctionne que sur grand écran est une esquisse. Contraste, taille et hiérarchie se vérifient dans le navigateur, pas dans une maquette.' },
    { title: 'Des systèmes plutôt que des pièces uniques', text: 'Je préfère livrer un kit de six formats réutilisables qu’une affiche parfaite impossible à répéter.' },
    { title: 'L’IA est un outil, pas une voix', text: 'J’utilise les modèles pour le volume et la vitesse, puis je dirige le résultat. Le jugement, la composition et la passe finale restent humains.' },
    { title: 'Un projet se livre, sinon il ne compte pas', text: 'Tout ce qui est ici est en ligne, construit ou documenté. Pas de decks de concepts déguisés en produits.' },
  ],
};

/* ------------------------------------------------------------------ */
/* CAREER                                                              */
/* ------------------------------------------------------------------ */

export const EXPERIENCE = [
  {
    when: '2025 — today',
    title: { en: 'Senior Graphic Designer', fr: 'Graphic designer senior' },
    where: 'Iris Studio · Algiers',
    text: {
      en: 'Visual direction for the studio and its accounts: Let’s Play by Algérie Télécom, 7ouma Arena by Djezzy, retail and field activations. Campaign systems, broadcast identity and brand guidelines. Also the studio’s own web design and front-end.',
      fr: 'Direction visuelle pour le studio et ses comptes : Let’s Play par Algérie Télécom, 7ouma Arena par Djezzy, activations retail et terrain. Systèmes de campagne, identité broadcast et chartes. Également le web design et le front-end du studio.',
    },
  },
  {
    when: '2024 — 2026',
    title: { en: 'Designer & front-end, Let’s Play', fr: 'Designer & front-end, Let’s Play' },
    where: 'Media platform · Algiers',
    text: {
      en: 'Designed and built the Let’s Play platform end to end: the design system, three games and their art direction, the desktop app and the Android build. 247k lines of code, 1,059 images, three languages of content.',
      fr: 'Conçu et construit la plateforme Let’s Play de bout en bout : le design system, trois jeux et leur direction artistique, l’app desktop et le build Android. 247k lignes de code, 1 059 images, trois langues de contenu.',
    },
  },
  {
    when: '2016 — 2025',
    title: { en: 'Freelance graphic designer', fr: 'Graphic designer indépendant' },
    where: 'Algiers · clients in Algeria, France, GCC',
    text: {
      en: 'Brand identity, packaging and print for small businesses, associations and event organisers. Ten years of learning what survives when a file leaves the studio.',
      fr: 'Identité de marque, packaging et print pour de petites entreprises, associations et organisateurs d’événements. Dix ans à apprendre ce qui survit quand un fichier quitte le studio.',
    },
  },
];

export const EDUCATION = [
  {
    when: '2020',
    title: { en: 'Professional training in graphic design', fr: 'Formation professionnelle en design graphique' },
    where: 'Algiers',
    active: true,
  },
];

export const SKILLS = {
  en: {
    design: { title: 'Design', items: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Premiere Pro', 'Figma'] },
    web: { title: 'Web', items: ['HTML / CSS', 'JavaScript', 'React', 'Next.js', 'Vite', 'Tailwind', 'Supabase'] },
    ai: { title: 'AI', items: ['Image generation', 'LLM workflows', 'Prompt systems', 'Automated editorial', 'QA pipelines'] },
    craft: { title: 'Craft', items: ['Art direction', 'Type systems', 'Motion', 'Print production', 'Accessibility'] },
  },
  fr: {
    design: { title: 'Design', items: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects', 'Premiere Pro', 'Figma'] },
    web: { title: 'Web', items: ['HTML / CSS', 'JavaScript', 'React', 'Next.js', 'Vite', 'Tailwind', 'Supabase'] },
    ai: { title: 'IA', items: ['Génération d’images', 'Workflows LLM', 'Systèmes de prompts', 'Éditorial automatisé', 'Pipelines de QA'] },
    craft: { title: 'Métier', items: ['Direction artistique', 'Systèmes typographiques', 'Motion', 'Production print', 'Accessibilité'] },
  },
};

/* ------------------------------------------------------------------ */
/* TESTIMONIAL-ADJACENT FACTS (self-referential, verifiable)            */
/* ------------------------------------------------------------------ */

/**
 * Client marks, with the plate each one needs. Third-party logos are never
 * recoloured: the ones drawn for white are shown on white, the ones drawn for
 * dark are shown on dark.
 */
export const LOGOS: { name: string; src: string; plate: 'light' | 'dark'; h?: number }[] = [
  { name: 'Algérie Télécom', src: '/images/logos/algerie-telecom.png', plate: 'light' },
  { name: 'Djezzy', src: '/images/logos/djezzy.svg', plate: 'light', h: 30 },
  { name: "Let's Play", src: '/images/logos/lets-play.png', plate: 'light' },
  { name: '7ouma Arena', src: '/images/logos/7ouma-arena.png', plate: 'light', h: 40 },
  { name: 'Iris Studio', src: '/images/logos/iris-studio.svg', plate: 'dark' },
  { name: 'EGOR', src: '/images/logos/egor.svg', plate: 'light', h: 30 },
];
