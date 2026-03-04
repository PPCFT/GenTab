---
description: aktualizacja wersji aplikacji w kodzie, testach i README
---
# Aktualizacja wersji aplikacji

Ten workflow automatycznie aktualizuje numer wersji w kodzie, testach i dokumentacji.

## Kroki

1. **Ustal nową wersję**: Poproś użytkownika o podanie nowego numeru wersji (np. `v0.2.2`).

2. **Zaktualizuj `index.html`**:
   - W nagłówku sidebara (obok logo):
     ```html
     <span class="sidebar-header-version">v0.2.2</span>
     ```
   - W stopce sidebara:
     ```html
     GenTab v0.2.2 &nbsp;·&nbsp; Generator Tablic Poglądowych
     ```

3. **Zaktualizuj `tests/app.spec.js`**:
   - W teście `Sidebar powinien być widoczny...`:
     ```javascript
     await expect(page.locator('.sidebar-header-version')).toHaveText('v0.2.2');
     ```

4. **Zaktualizuj `README.adoc`**:
   - Pole `:revdate:` (na aktualną datę).
   - Badge wersji:
     ```asciidoc
     image:https://img.shields.io/badge/version-v0.2.2-brightgreen[Version]
     ```

5. **Zweryfikuj zmiany**:
   - Uruchom testy Playwright:
     ```bash
     npx playwright test
     ```

6. **Zsynchronizuj wersję offline**:
   - Uruchom `/update-offline`, aby przenieść zmiany do `index-offline.html` i przebudować CSS.
