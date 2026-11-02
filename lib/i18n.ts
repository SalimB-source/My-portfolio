export type Lang = 'en' | 'fr';

export const LANGS: Lang[] = ['en', 'fr'];

/** UI strings. Long-form content lives in content/site.ts, keyed by language. */
export const T = {
  nav: {
    work: { en: 'Work', fr: 'Projets' },
    about: { en: 'About', fr: 'À propos' },
    cv: { en: 'CV', fr: 'CV' },
    contact: { en: 'Contact', fr: 'Contact' },
  },
  header: {
    cta: { en: 'Hire me', fr: 'Me recruter' },
    menu: { en: 'Menu', fr: 'Menu' },
    close: { en: 'Close', fr: 'Fermer' },
    langLabel: { en: 'Switch language', fr: 'Changer de langue' },
  },
  hero: {
    eyebrow: { en: 'Algiers · available for Canada', fr: 'Alger · disponible pour le Canada' },
    titleA: { en: 'I design brands,', fr: 'Je dessine des marques,' },
    titleB: { en: 'then I build them', fr: 'puis je les construis' },
    titleC: { en: 'for the web.', fr: 'pour le web.' },
    lead: {
      en: 'Ten years of graphic design, now pointed at the screen. I art-direct and ship websites, game interfaces and campaign systems — using AI where it earns its place, and my own judgement where it does not.',
      fr: 'Dix ans de design graphique, désormais tournés vers l’écran. Je dirige et je livre des sites, des interfaces de jeux et des systèmes de campagne — avec l’IA là où elle mérite sa place, et mon jugement partout ailleurs.',
    },
    primary: { en: 'See the work', fr: 'Voir les projets' },
    secondary: { en: 'Read the CV', fr: 'Lire le CV' },
    roles: {
      a: { en: 'Graphic designer', fr: 'Graphic designer' },
      b: { en: 'Art direction', fr: 'Direction artistique' },
      c: { en: 'AI-assisted web', fr: 'Web assisté par IA' },
      d: { en: 'Front-end', fr: 'Front-end' },
    },
    showcaseLabel: { en: 'Selected work, rotating', fr: 'Projets sélectionnés, en rotation' },
  },
  stats: {
    years: { en: 'years in visual design', fr: 'ans en design visuel' },
    games: { en: 'playable games designed & built', fr: 'jeux jouables dessinés et construits' },
    cards: { en: 'card artworks, one system', fr: 'illustrations de cartes, un système' },
  },
  marquee: [
    { en: 'Brand identity', fr: 'Identité de marque' },
    { en: 'Art direction', fr: 'Direction artistique' },
    { en: 'Game UI', fr: 'UI de jeu' },
    { en: 'React & Next.js', fr: 'React & Next.js' },
    { en: 'Design systems', fr: 'Design systems' },
    { en: 'AI workflows', fr: 'Workflows IA' },
    { en: 'Motion', fr: 'Motion' },
    { en: 'Print & signage', fr: 'Print & signalétique' },
  ],
  featured: {
    eyebrow: { en: 'Selected work', fr: 'Projets sélectionnés' },
    title: { en: 'Eight projects, one', fr: 'Huit projets, une' },
    titleAccent: { en: 'standard', fr: 'exigence' },
    lead: {
      en: 'Platforms, games and campaigns — the design work and the build, documented rather than decorated.',
      fr: 'Plateformes, jeux et campagnes — le design et la construction, documentés plutôt que décorés.',
    },
    all: { en: 'All projects', fr: 'Tous les projets' },
  },
  capabilities: {
    eyebrow: { en: 'What I do', fr: 'Ce que je fais' },
    title: { en: 'Six things I can be', fr: 'Six choses que je peux être' },
    titleAccent: { en: 'hired for', fr: 'pour vous' },
    lead: {
      en: 'Not a list of software. A list of outcomes a team can hand me and expect back.',
      fr: 'Pas une liste de logiciels. Une liste de résultats qu’une équipe peut me confier et attendre en retour.',
    },
  },
  process: {
    eyebrow: { en: 'How I work', fr: 'Comment je travaille' },
    title: { en: 'A method that survives', fr: 'Une méthode qui survit' },
    titleAccent: { en: 'the handover', fr: 'à la transmission' },
    lead: {
      en: 'The best compliment on a project is a team that can extend it without calling me. That shapes every step.',
      fr: 'Le meilleur compliment sur un projet, c’est une équipe qui peut le faire évoluer sans m’appeler. Cela façonne chaque étape.',
    },
  },
  clients: {
    eyebrow: { en: 'Worked with', fr: 'Ont travaillé avec' },
    title: { en: 'Brands I have made work', fr: 'Des marques pour lesquelles j’ai produit' },
    lead: {
      en: 'Through Iris Studio, as senior graphic designer — campaigns, broadcast identity and activations for national and international brands.',
      fr: 'Via Iris Studio, comme graphic designer senior — campagnes, identité broadcast et activations pour des marques nationales et internationales.',
    },
  },
  principles: {
    eyebrow: { en: 'Principles', fr: 'Principes' },
    title: { en: 'Four rules I do not', fr: 'Quatre règles que je ne' },
    titleAccent: { en: 'trade away', fr: 'négocie pas' },
  },
  cta: {
    eyebrow: { en: 'Next', fr: 'Ensuite' },
    title: { en: 'Looking for a designer who can also ship?', fr: 'Vous cherchez un designer qui livre aussi le code ?' },
    lead: {
      en: 'I am looking for a design or design-engineering role in Canada — remote or on-site, French or English. Portfolio, CV and references available on request.',
      fr: 'Je cherche un poste en design ou design-engineering au Canada — à distance ou sur place, en français ou en anglais. Portfolio, CV et références disponibles sur demande.',
    },
    primary: { en: 'Start a conversation', fr: 'Commencer la conversation' },
    secondary: { en: 'Download the CV', fr: 'Télécharger le CV' },
  },
  work: {
    eyebrow: { en: 'Projects', fr: 'Projets' },
    title: { en: 'Everything, with the', fr: 'Tout, avec les' },
    titleAccent: { en: 'receipts', fr: 'preuves' },
    lead: {
      en: 'Ten projects across platforms, games and brand campaigns. Each page documents the brief, the art direction, what was built and what it shipped on.',
      fr: 'Dix projets entre plateformes, jeux et campagnes de marque. Chaque page documente le brief, la direction artistique, ce qui a été construit et sur quoi cela a été livré.',
    },
    filterLabel: { en: 'Filter by discipline', fr: 'Filtrer par discipline' },
    count: { en: 'projects', fr: 'projets' },
    empty: { en: 'Nothing in this category yet.', fr: 'Rien dans cette catégorie pour l’instant.' },
  },
  project: {
    overview: { en: 'Overview', fr: 'Aperçu' },
    context: { en: 'The brief', fr: 'Le brief' },
    approach: { en: 'The approach', fr: 'La démarche' },
    craft: { en: 'The craft', fr: 'Le métier' },
    facts: { en: 'At a glance', fr: 'En bref' },
    gallery: { en: 'Selected frames', fr: 'Images choisies' },
    role: { en: 'Role', fr: 'Rôle' },
    client: { en: 'Client', fr: 'Client' },
    year: { en: 'Year', fr: 'Année' },
    stack: { en: 'Built with', fr: 'Construit avec' },
    live: { en: 'View live', fr: 'Voir en ligne' },
    repo: { en: 'Source', fr: 'Code source' },
    next: { en: 'Next project', fr: 'Projet suivant' },
    all: { en: 'All projects', fr: 'Tous les projets' },
    back: { en: 'Back to work', fr: 'Retour aux projets' },
    more: { en: 'More work', fr: 'Autres projets' },
  },
  about: {
    eyebrow: { en: 'About', fr: 'À propos' },
    title: { en: 'Designer first. Then', fr: 'Designer d’abord. Puis' },
    titleAccent: { en: 'builder.', fr: 'bâtisseur.' },
    lead: {
      en: 'I am Salim Benmokhtar, a graphic designer from Algiers. For ten years I have made brands, campaigns and printed matter. Six years ago I started building what I design — and that changed the work.',
      fr: 'Je suis Salim Benmokhtar, graphiste algérois. Depuis dix ans, je fabrique des marques, des campagnes et de l’imprimé. Il y a six ans, j’ai commencé à construire ce que je dessine — et cela a changé le travail.',
    },
    storyTitle: { en: 'The short version', fr: 'La version courte' },
    story: {
      en: [
        'I trained as a graphic designer and spent the first years of my career on identity, packaging and print — the kind of work where the file has to survive a printer, a client’s nephew with Photoshop, and a deadline that moved twice.',
        'At Iris Studio I moved into campaign art direction for brands like Algérie Télécom and Djezzy, where a design is judged by whether it still reads on a phone in a feed, at night, at 40% brightness.',
        'Then Let’s Play happened: a media platform with three games inside it. I could not design that interface without building it. So I learned to build — React, CSS systems, Supabase, an Electron shell, an Android build — and now the two halves of the work feed each other.',
        'I use AI the way I use a junior team with infinite patience and no taste: for volume and variants, never for the final decision.',
      ],
      fr: [
        'J’ai été formé comme graphiste et j’ai passé les premières années de ma carrière sur l’identité, le packaging et le print — le genre de travail où le fichier doit survivre à un imprimeur, au neveu du client qui a Photoshop, et à une deadline décalée deux fois.',
        'Chez Iris Studio, je suis passé à la direction artistique de campagnes pour des marques comme Algérie Télécom et Djezzy, où un design se juge à sa lisibilité sur un téléphone dans un feed, la nuit, à 40 % de luminosité.',
        'Puis Let’s Play est arrivé : une plateforme média avec trois jeux dedans. Je ne pouvais pas dessiner cette interface sans la construire. J’ai donc appris à construire — React, systèmes CSS, Supabase, coque Electron, build Android — et les deux moitiés du métier se nourrissent maintenant l’une l’autre.',
        'J’utilise l’IA comme une équipe junior avec une patience infinie et aucun goût : pour le volume et les variantes, jamais pour la décision finale.',
      ],
    },
    portraitTag: { en: 'Salim Benmokhtar', fr: 'Salim Benmokhtar' },
    portraitSub: { en: 'Algiers · GMT+1', fr: 'Alger · GMT+1' },
    expTitle: { en: 'Experience', fr: 'Expérience' },
    skillsTitle: { en: 'Tools & skills', fr: 'Outils & compétences' },
    principlesTitle: { en: 'How I think about the work', fr: 'Ma façon de penser le travail' },
    elsewhere: { en: 'Elsewhere', fr: 'Ailleurs' },
  },
  cv: {
    eyebrow: { en: 'Curriculum vitae', fr: 'Curriculum vitae' },
    title: { en: 'One page, print-ready.', fr: 'Une page, prête à imprimer.' },
    lead: {
      en: 'The same content as the rest of the site, compressed for a recruiter. Use the print button for a clean PDF — no layout to fight.',
      fr: 'Le même contenu que le reste du site, compressé pour un recruteur. Utilisez le bouton d’impression pour un PDF propre — aucun layout à combattre.',
    },
    print: { en: 'Print / save as PDF', fr: 'Imprimer / enregistrer en PDF' },
    back: { en: 'Back to the site', fr: 'Retour au site' },
    profile: { en: 'Profile', fr: 'Profil' },
    profileText: {
      en: 'Graphic designer with 10 years of experience in brand identity, art direction and campaign design, now designing and building web products end to end. Comfortable owning a project from art direction to production CSS, and using AI tools where they measurably speed up production.',
      fr: 'Graphic designer avec 10 ans d’expérience en identité de marque, direction artistique et design de campagne, qui dessine et construit désormais des produits web de bout en bout. À l’aise pour porter un projet de la direction artistique au CSS de production, et pour utiliser les outils d’IA là où ils accélèrent réellement la production.',
    },
    selected: { en: 'Selected projects', fr: 'Projets sélectionnés' },
    languages: { en: 'Languages', fr: 'Langues' },
    languagesText: {
      en: 'French (native) · Arabic (native) · English (professional)',
      fr: 'Français (langue maternelle) · Arabe (langue maternelle) · Anglais (professionnel)',
    },
    eligibility: { en: 'Eligibility', fr: 'Éligibilité' },
    eligibilityText: {
      en: 'Algerian citizen — open to relocation to Canada and to employer-supported work permit. Passport valid, no criminal record, available within 2 months.',
      fr: 'Citoyen algérien — ouvert à une relocalisation au Canada et à un permis de travail soutenu par l’employeur. Passeport valide, casier vierge, disponible sous 2 mois.',
    },
  },
  contact: {
    eyebrow: { en: 'Contact', fr: 'Contact' },
    title: { en: 'Let’s talk about the', fr: 'Parlons du' },
    titleAccent: { en: 'role', fr: 'poste' },
    lead: {
      en: 'Open to graphic design, art direction, web design and design-engineering roles in Canada. I answer every message, usually within a day.',
      fr: 'Ouvert aux postes de graphic design, direction artistique, web design et design-engineering au Canada. Je réponds à chaque message, généralement en moins d’un jour.',
    },
    email: { en: 'Email', fr: 'E-mail' },
    phone: { en: 'Phone / WhatsApp', fr: 'Téléphone / WhatsApp' },
    linkedin: { en: 'LinkedIn', fr: 'LinkedIn' },
    github: { en: 'GitHub', fr: 'GitHub' },
    location: { en: 'Based in', fr: 'Basé à' },
    formTitle: { en: 'Send a message', fr: 'Envoyer un message' },
    name: { en: 'Name', fr: 'Nom' },
    namePlaceholder: { en: 'Your name', fr: 'Votre nom' },
    emailPlaceholder: { en: 'you@company.com', fr: 'vous@entreprise.com' },
    company: { en: 'Company (optional)', fr: 'Entreprise (optionnel)' },
    companyPlaceholder: { en: 'Where you work', fr: 'Où vous travaillez' },
    subject: { en: 'You are writing about', fr: 'Vous écrivez au sujet de' },
    subjects: {
      role: { en: 'A role in Canada', fr: 'Un poste au Canada' },
      freelance: { en: 'A freelance project', fr: 'Un projet freelance' },
      other: { en: 'Something else', fr: 'Autre chose' },
    },
    message: { en: 'Message', fr: 'Message' },
    messagePlaceholder: {
      en: 'What you are building, the role, the timeline — anything that helps me answer properly.',
      fr: 'Ce que vous construisez, le poste, le calendrier — tout ce qui m’aide à répondre vraiment.',
    },
    send: { en: 'Send the message', fr: 'Envoyer le message' },
    note: {
      en: 'This button opens your email app with the message already written — nothing is stored on this site.',
      fr: 'Ce bouton ouvre votre application mail avec le message déjà rédigé — rien n’est stocké sur ce site.',
    },
    reply: { en: 'Or write directly to', fr: 'Ou écrivez directement à' },
    availability: { en: 'Available from Q1 2027 · relocation to Canada supported', fr: 'Disponible au premier trimestre 2027 · relocalisation au Canada soutenue' },
  },
  footer: {
    tagline: {
      en: 'Graphic design, art direction and AI-powered web build. Algiers → Canada.',
      fr: 'Design graphique, direction artistique et build web assisté par IA. Alger → Canada.',
    },
    nav: { en: 'Site', fr: 'Site' },
    contact: { en: 'Contact', fr: 'Contact' },
    rights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },
    built: { en: 'Designed & built by hand — Next.js, CSS, no template.', fr: 'Dessiné et construit à la main — Next.js, CSS, aucun template.' },
    back: { en: 'Back to top', fr: 'Haut de page' },
  },
  notFound: {
    title: { en: 'This page moved on', fr: 'Cette page est passée à autre chose' },
    lead: { en: 'The link is broken or the project is not published. The work is still here.', fr: 'Le lien est cassé ou le projet n’est pas publié. Le travail, lui, est toujours là.' },
    cta: { en: 'Back to the work', fr: 'Retour aux projets' },
  },
} as const;

/** Small helper so views can read a bilingual object without ceremony. */
export function tx(value: { en: string; fr: string }, lang: Lang): string;
export function tx(value: readonly { en: string; fr: string }[], lang: Lang): string[];
export function tx(value: any, lang: Lang): any {
  if (Array.isArray(value)) return value.map((v) => (v && typeof v === 'object' && 'en' in v ? v[lang] : v));
  if (value && typeof value === 'object' && 'en' in value && 'fr' in value) return value[lang];
  return value;
}
