# De développeur à streamer — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Créer un deck Slidesk Markdown placeholder en français, doté d'un thème CSS local WET « Console humaine ».

**Architecture:** Le deck sera autonome dans `de-developpeur-a-streamer/`. `main.md` chargera un CSS complet situé dans `themes/console-humaine.css`, puis inclura automatiquement les slides Markdown triées par nom. Chaque slide aura un rôle narratif placeholder et un bloc de notes obligatoire.

**Tech Stack:** Slidesk Markdown, TOML, CSS, checker Python Slidesk.

---

### Task 1: Créer le scaffold Slidesk et le thème local

**Files:**
- Create: `de-developpeur-a-streamer/slidesk.toml`
- Create: `de-developpeur-a-streamer/main.md`
- Create: `de-developpeur-a-streamer/themes/console-humaine.css`
- Create: `de-developpeur-a-streamer/assets/.gitkeep`

- [x] **Step 1: Écrire la configuration du deck**
- [x] **Step 2: Écrire le scaffold d'entrée**
- [x] **Step 3: Écrire le CSS complet de la conférence**
- [x] **Step 4: Ajouter le répertoire d'assets traçable**
- [x] **Step 5: Vérifier le scaffold**

### Task 2: Ajouter les slides placeholder du récit

**Files:**
- Create: `de-developpeur-a-streamer/slides/10-cover.md`
- Create: `de-developpeur-a-streamer/slides/20-constat.md`
- Create: `de-developpeur-a-streamer/slides/30-these.md`
- Create: `de-developpeur-a-streamer/slides/40-contenu-tech.md`
- Create: `de-developpeur-a-streamer/slides/50-attention.md`
- Create: `de-developpeur-a-streamer/slides/60-transmission.md`
- Create: `de-developpeur-a-streamer/slides/70-formats.md`
- Create: `de-developpeur-a-streamer/slides/80-iteration.md`
- Create: `de-developpeur-a-streamer/slides/90-permacodeur.md`
- Create: `de-developpeur-a-streamer/slides/95-conclusion.md`
- Create: `de-developpeur-a-streamer/slides/99-speaker.md`

- [x] **Step 1: Créer la couverture**
- [x] **Step 2: Créer les placeholders de thèse et de contexte**
- [x] **Step 3: Créer les placeholders attention et transmission**
- [x] **Step 4: Créer les placeholders formats et itération**
- [x] **Step 5: Créer l'identité, la conclusion et la bio**
- [x] **Step 6: Vérifier la complétude des notes**

### Task 3: Validation structurelle et documentation de revue

**Files:**
- Modify: `tasks/todo.md`

- [x] **Step 1: Exécuter le checker complet**
- [x] **Step 2: Vérifier l'ordre et les chemins**
- [x] **Step 3: Mettre à jour le suivi**
- [x] **Step 4: Inspecter le diff final**
- [ ] **Step 5: Committer le bootstrap**
