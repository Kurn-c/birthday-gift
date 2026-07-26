// ============================================================
//  EDIT THIS FILE to personalize your wife's birthday gift site
//  Everything she sees comes from here — no other code changes needed.
// ============================================================

export const content = {
  // --- Who the gift is for ---
  wifeName: 'My Love', // shown in greetings (e.g. "Happy Birthday, My Love")
  wifeFirstName: 'Sarah', // used in smaller, intimate lines
  milestone: '', // optional, e.g. '30th' — leave '' to hide

  // --- Who it's from ---
  fromName: 'Your Husband',
  signature: 'Forever yours', // closing line above your name

  // --- The birthday date (used for a subtle date line) ---
  birthday: {
    month: 'July',
    day: 25,
    year: 2026,
  },

  // --- Opening welcome line ---
  welcomeLine: 'A little something I made, just for you…',

  // --- The message revealed when she unwraps the gift ---
  giftMessage: [
    'Every year with you feels like a gift I get to unwrap all over again.',
    'Today the whole world should celebrate you — but no one could possibly love you as much as I do.',
  ],

  // --- Memory gallery photos ---
  // Use any image URLs. Pexels stock photos are used as placeholders —
  // swap these for real photos of the two of you when you're ready.
  memories: [
    {
      src: 'https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg?auto=compress&cs=tinysrgb&w=900',
      caption: 'The day everything began',
    },
    {
      src: 'https://images.pexels.com/photos/1024989/pexels-photo-1024989.jpeg?auto=compress&cs=tinysrgb&w=900',
      caption: 'Our favorite little adventure',
    },
    {
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=900',
      caption: 'Wherever you are is home',
    },
    {
      src: 'https://images.pexels.com/photos/1025000/pexels-photo-1025000.jpeg?auto=compress&cs=tinysrgb&w=900',
      caption: 'That laugh I can never get enough of',
    },
    {
      src: 'https://images.pexels.com/photos/1025008/pexels-photo-1025008.jpeg?auto=compress&cs=tinysrgb&w=900',
      caption: 'Slow mornings, just us',
    },
    {
      src: 'https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=900',
      caption: 'Always my favorite view',
    },
  ],

  // --- Reasons I love you (flip cards) ---
  reasons: [
    'The way you laugh at your own jokes before you finish them.',
    'How safe I feel the moment you take my hand.',
    'Your kindness to everyone, especially when no one is watching.',
    'The way you make ordinary days feel like something worth remembering.',
    'Your strength — even when you don\'t see it yourself.',
    'How you still give me butterflies, even after all this time.',
    'The dreams you chase, and that you let me chase them with you.',
    'That you chose me — and keep choosing me, every single day.',
  ],

  // --- The love letter (revealed by tapping the envelope) ---
  letter: {
    greeting: 'My dearest Sarah,',
    paragraphs: [
      'There aren\'t enough words in any language to say what you mean to me — but I\'ll try, because today is yours and you deserve to hear it all.',
      'You are the first thought of my morning and the last warmth of my night. You\'ve made me braver, softer, and happier than I ever knew a person could be. Thank you for every ordinary Tuesday and every extraordinary adventure.',
      'Happy birthday, my love. Here\'s to a lifetime more of us.',
    ],
    signOff: 'Forever yours,',
  },

  // --- Closing celebration line ---
  closingLine: 'Happy Birthday, my whole world.',
};

export type SiteContent = typeof content;
