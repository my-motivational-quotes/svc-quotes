const QUOTES = [
  "Glow up your hustle, fam. Tomorrow's success is built today. ✨💼",
  "Stay woke, and don't sleep on your dreams. The grind is real. 🚀😴",
  "Low-key remind yourself: you're a whole vibe, and the world better recognize. 💅💯",
  "Manifest that main character energy. The world's your stage, slay it! 🎬🌟",
  "If it ain't a 'heck yes,' it's a 'bye, Felicia.' Prioritize your vibe. ✌️👋",
  "Big goals, bigger moves. Ain't nobody got time for small dreams. 📈🚀",
  "Flex that patience, 'cause greatness is coming. Just trust the vibe. 🌊💪",
  "You're out here building an empire, so don't let minor setbacks throw shade. 🏛️🌞",
  "Life's a WIP (work in progress), so give yourself credit for every lil' win. 🥇💥",
  "Level up that self-love and grind. You're the CEO of your life. 👑💼",
  "Stay unapologetically you, and let your vibe attract your tribe. 🌈👯",
];

const QuotesService = {
  getQuote: () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
  },
};

export { QuotesService as default, QUOTES };
