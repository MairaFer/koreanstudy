# BoraLang languages

The Portuguese course and song modules remain the source of truth. `en.json`
contains prepared English text; `en-overrides.json` contains editorial adaptations
for the interface, grammar terminology, idioms and language-specific teaching notes.
No translation service is contacted by the deployed website.

Language selection is stored separately from account and study data, under
`boralang.language.v1`. Option values, answer keys, Korean text, routes and saved
words remain unchanged. English-only lyric lines have no translation disclosure
in ENG; Korean and mixed-language lines keep their explanations.

When editing Portuguese content, run `node scripts/collect-locale.mjs` and provide
English for any new keys. The optional `prepare-english.mjs` helper bootstraps
public text only; it is not a substitute for editorial review. Apply and review
`review-english.mjs`, then run `check-locales.mjs` and
`check-localized-render.cjs`. The latter renders all 44 prepared song studies and
checks the English-only-line behavior. `coverage.json` records source extraction
for maintenance; it is not loaded by the app.
