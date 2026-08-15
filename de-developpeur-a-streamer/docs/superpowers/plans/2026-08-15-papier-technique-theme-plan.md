# Thème « Papier technique » Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convertir la palette CSS du deck en thème clair ivoire lisible sur rétroprojecteur.

**Architecture:** Le deck conserve son scaffold et ses slides Markdown. Une seule feuille de style globale porte la palette ; les variables CSS et les usages de couleurs de cette feuille seront ajustés sans toucher au contenu des slides.

**Tech Stack:** SliDesk Markdown, CSS, checker Python Slidesk.

---

### Task 1: Remplacer la palette globale

**Files:**
- Modify: `themes/console-humaine.css`

- [x] **Step 1: Remplacer les variables de thème**

Utiliser ces valeurs pour la palette Papier technique :

```css
--sd-background-color: #fbfaf6;
--sd-heading-color: #182235;
--sd-text-color: #3d4651;
--sd-primary-color: #2a9d6f;
--sd-caption-color: #65717a;
--sd-caption-bgcolor: #eef1ed;
--sd-sv-background-color: #e8ece7;
--sd-sv-text-color: #182235;
--console-accent: #2a9d6f;
--console-warm: #b76626;
--console-muted: #65717a;
--console-panel: #eef1ed;
--console-line: rgba(42, 157, 111, 0.28);
```

- [x] **Step 2: Adapter les fonds décoratifs et les panneaux**

Remplacer les références sombres par les mêmes accents avec une opacité adaptée au fond clair : `section` avec un gradient vert à `0.07`, `.cover` avec des halos orange et verts à `0.12`, `.chapter` avec un gradient vert à `0.08`, et conserver `var(--sd-background-color)` comme couche finale.

- [x] **Step 3: Vérifier les contrastes des éléments d’accent**

Conserver les sélecteurs existants, mais faire hériter `tag`, `placeholder`, `.speaker` et `.terminal-cursor` des nouvelles variables afin que les bordures et textes d’accent restent visibles sur ivoire.

### Task 2: Valider le deck

**Files:**
- Verify: `slidesk.toml`, `main.md`, `slides/*.md`, `themes/console-humaine.css`

- [x] **Step 1: Exécuter le checker Slidesk**

Run: `rtk python3 /home/stephane/projets/perso/presentations/.agents/skills/smart-slidesk/scripts/check_deck.py .`

Expected: le deck est analysé sans erreur bloquante liée au changement de thème.

- [x] **Step 2: Contrôler le diff et les anciennes couleurs**

Run: `rtk git diff -- themes/console-humaine.css && rtk grep -n -E '#0b1020|#070b15|#121b2d|#72e6b1|#ffb86b' themes/console-humaine.css`

Expected: le diff montre uniquement la palette claire et la recherche ne trouve aucune ancienne couleur sombre/accent clair.

- [x] **Step 3: Documenter le résultat dans `tasks/todo.md`**

Cocher les étapes réalisées et ajouter la commande de validation ainsi que ses résultats observés.
