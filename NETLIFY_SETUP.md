# Konfiguracja Netlify z dynamicznymi funkcjami

## Rozwiązanie problemu skanowania sekretów

Netlify skanuje kod w poszukiwaniu potencjalnych sekretów. Ponieważ `jachtplast@gmail.com` jest publicznym emailem firmy (widocznym na stronie), wyłączyliśmy skanowanie sekretów w `netlify.toml`:

```toml
[build.environment]
  SECRETS_SCAN_ENABLED = "false"
```

## Zmienne środowiskowe na Netlify

Aby formularz kontaktowy działał, musisz skonfigurować następujące zmienne środowiskowe w panelu Netlify:

### Jak dodać zmienne środowiskowe na Netlify:

1. Przejdź do swojego projektu na netlify.app
2. Kliknij **Site settings**
3. W menu bocznym wybierz **Environment variables**
4. Kliknij **Add a variable** dla każdej z poniższych:

### Wymagane zmienne:

```
USER_EMAIL = jachtplast@gmail.com
GOOGLE_CLIENT_ID = your-google-oauth-client-id
GOOGLE_CLIENT_SECRET = your-google-oauth-client-secret
GOOGLE_REFRESH_TOKEN = your-google-oauth-refresh-token
```

## Jak uzyskać Google OAuth credentials:

1. Przejdź do [Google Cloud Console](https://console.cloud.google.com/)
2. Utwórz nowy projekt lub wybierz istniejący
3. Włącz Gmail API
4. Utwórz OAuth 2.0 credentials
5. Wygeneruj refresh token używając OAuth Playground

## Test funkcjonalności:

Po wdrożeniu na Netlify, API endpoint będzie dostępny pod:
```
https://your-site.netlify.app/api/contact
```

## Korzyści z dynamicznej konfiguracji:

- ✅ API routes działają jako Netlify Functions
- ✅ Automatyczne skalowanie
- ✅ Bezpieczne przechowywanie zmiennych środowiskowych
- ✅ Pełna funkcjonalność Next.js SSR
- ✅ Edge Functions support
- ✅ Optymalizacja obrazów działa
