// Backup function - Netlify automatycznie konwertuje Next.js API routes
// Ten plik jest opcjonalny i służy jako fallback

const { createRequire } = require('module');
const require = createRequire(import.meta.url);

exports.handler = async (event, context) => {
  // Przekierowanie do głównej funkcji Next.js API
  return {
    statusCode: 301,
    headers: {
      Location: '/api/contact',
    },
  };
};
