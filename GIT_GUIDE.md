# Instrukcja Git dla GenTab

Podstawowe polecenia do zarządzania wersjami i synchronizacji z GitHubem.

## 1. Zapisywanie zmian (Commit)
Zawsze wykonuj commit przed tagowaniem lub wysyłką:
```bash
git add .
git commit -m "Opis zmian (np. v0.2.0)"
```

## 2. Tagowanie wersji
Tworzenie nowego tagu wersji:
```bash
git tag -a v0.2.0 -m "Wersja 0.2.0"
```
*Uwaga: Jeśli tag już istnieje lokalnie a chcesz go nadpisać: `git tag -fa v0.2.0 -m "Wersja 0.2.0"`*

## 3. Wysyłanie do GitHub
Aby zmiany i tagi pojawiły się na GitHubie, musisz wykonać **oba** polecenia:

**Wysyłka kodu (gałąź main):**
```bash
git push origin main
```

**Wysyłka tagów:**
```bash
git push origin --tags
```

---
### Najczęstszy błąd
Wykonanie samego `git push origin --tags` wysyła tylko informację o wersji, ale **nie wysyła kodu**. Zawsze pamiętaj o `git push origin main`.

# 1. Usuń tag lokalnie na komputerze
git tag -d v1.0.1

# 2. Usuń tag z serwera GitHub (twoje konto)
git push origin --delete v1.0.1