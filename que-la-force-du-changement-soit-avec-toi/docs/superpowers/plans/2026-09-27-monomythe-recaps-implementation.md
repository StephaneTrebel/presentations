# Récapitulatifs circulaires du Monomythe Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter aux trois chapitres du deck une carte circulaire des 17 étapes, un bilan après chaque chapitre et une synthèse cyclique finale.

**Architecture:** Sept SVG autonomes sous `assets/` représentent les trois états d'ouverture, les trois états de progression et l'état final complet. `slides/01-main.md` les place dans les trois slides de chapitre existantes et ajoute quatre slides de transition, sans modifier les contenus ni les timings existants.

**Tech Stack:** SliDesk Markdown, SVG 1.1 autonome, Python standard library pour les contrôles XML et le vérificateur local SliDesk.

---

## État de validation initial

Le 27 septembre 2026, `python3 .agents/skills/smart-slidesk/scripts/check_deck.py .` retourne 32 erreurs préexistantes : l'include sans mode Markdown et des notes absentes dans le deck existant. L'utilisateur a explicitement refusé leur correction. Elles sont hors périmètre.

La validation de ce plan vérifie donc les nouveaux assets, les nouvelles slides et l'absence d'erreur du contrôleur attribuable aux lignes ajoutées ; elle ne vise pas un résultat global à zéro erreur.

## Structure des fichiers

- Créer : `assets/monomythe-depart.svg` — anneau des 17 jalons, arc Départ actif.
- Créer : `assets/monomythe-depart-parcouru.svg` — mêmes jalons, étapes 1 à 5 parcourues.
- Créer : `assets/monomythe-initiation.svg` — anneau des 17 jalons, arc Initiation actif.
- Créer : `assets/monomythe-initiation-parcouru.svg` — mêmes jalons, étapes 1 à 11 parcourues.
- Créer : `assets/monomythe-retour.svg` — anneau des 17 jalons, arc Retour actif.
- Créer : `assets/monomythe-retour-parcouru.svg` — mêmes jalons, étapes 1 à 17 parcourues avec retour suggéré.
- Créer : `assets/monomythe-cycle-complet.svg` — anneau complet, flèche de bouclage et message central.
- Modifier : `slides/01-main.md` — injecter les trois cartes dans les slides de chapitre, puis ajouter les trois bilans et la synthèse.
- Modifier : `tasks/todo.md` — consigner l'exécution et la revue.

Les SVG utilisent le même canevas `viewBox="0 0 1600 900"`, fond transparent, anneau centré en `(800, 450)` de rayon `250`, et trois couleurs : Départ `#FFB000`, Initiation `#F05A7E`, Retour `#38BDF8`. Les jalons futurs sont `#94A3B8` à 30 % d'opacité ; les jalons parcourus ou actifs sont opaques. Les libellés courts sont placés à l'extérieur de l'anneau et les numéros dans les jalons afin que la couleur ne soit pas le seul repère.

### Task 1: Construire les sept SVG cohérents

**Files:**
- Create: `assets/monomythe-depart.svg`
- Create: `assets/monomythe-depart-parcouru.svg`
- Create: `assets/monomythe-initiation.svg`
- Create: `assets/monomythe-initiation-parcouru.svg`
- Create: `assets/monomythe-retour.svg`
- Create: `assets/monomythe-retour-parcouru.svg`
- Create: `assets/monomythe-cycle-complet.svg`

- [ ] **Step 1: Établir la géométrie et les 17 jalons dans chaque SVG**

Créer des SVG valides, avec titre accessible, trois arcs et les 17 couples numéro/libellé suivants dans le sens horaire :

```text
01 Appel              02 Refus              03 Aide
04 Premier seuil      05 Baleine
06 Épreuves           07 Les « Dieux »      08 Cynisme
09 Conflit            10 Apothéose          11 Super-pouvoir
12 Refus du retour    13 Envolée magique    14 Se sauver de l'absence
15 Seuil du retour    16 Deux mondes        17 Liberté de vivre
```

Utiliser cet en-tête exact dans chaque fichier ; les trois arcs, les 17 jalons et les 17 libellés sont obligatoires et sont ceux de la liste ci-dessus :

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="title desc">
  <title id="title">Les 17 étapes du Monomythe</title>
  <desc id="desc">Un parcours circulaire en trois chapitres : le Départ, l'Initiation et le Retour.</desc>
  <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
</svg>
```

- [ ] **Step 2: Définir exactement les états des sept variantes**

Appliquer ces règles sans changer l'ordre ni les textes des jalons :

```text
monomythe-depart.svg                 01–05 : Départ actif ; 06–17 : à venir
monomythe-depart-parcouru.svg        01–05 : parcouru ;    06–17 : à venir
monomythe-initiation.svg             01–05 : parcouru ;    06–11 : Initiation active ; 12–17 : à venir
monomythe-initiation-parcouru.svg    01–11 : parcouru ;    12–17 : à venir
monomythe-retour.svg                 01–11 : parcouru ;    12–17 : Retour actif
monomythe-retour-parcouru.svg        01–17 : parcouru ; flèche 17 → 01 visible
monomythe-cycle-complet.svg          01–17 : trois arcs opaques ; flèche 17 → 01 et « Transformé·e, on repart. » au centre
```

Chaque fichier contient un libellé de chapitre (`LE DÉPART`, `L'INITIATION` ou `LE RETOUR`) au voisinage de son arc ; le fichier complet porte les trois libellés.

- [ ] **Step 3: Vérifier les assets générés**

Run:

```bash
rtk python3 -c "from pathlib import Path; import xml.etree.ElementTree as ET; files=sorted(Path('assets').glob('monomythe-*.svg')); assert len(files)==7, files; [ET.parse(path) for path in files]; print('7 SVG XML valides')"
```

Expected: `7 SVG XML valides`.

- [ ] **Step 4: Commit**

```bash
rtk git add assets/monomythe-*.svg
rtk git commit -m "feat: ajouter les cartes du monomythe" -m "Generated with AI assistance, reviewed by @stephanetrebel"
```

### Task 2: Ajouter les cartes aux ouvertures de chapitre

**Files:**
- Modify: `slides/01-main.md` — les trois blocs commençant par `## .[chapter]` et titrés `Chapitre 1 - Le Départ`, `Chapitre 2 - L'Initiation`, `Chapitre 3 - Le Retour`.

- [ ] **Step 1: Ajouter l'image dans chacune des trois slides existantes**

Sous chaque titre de chapitre, et avant son bloc de notes existant lorsqu'il existe, insérer exactement l'image associée :

```md
!image(assets/monomythe-depart.svg,Les cinq étapes du Départ,1250)
!image(assets/monomythe-initiation.svg,Les six étapes de l'Initiation,1250)
!image(assets/monomythe-retour.svg,Les six étapes du Retour,1250)
```

Ne modifier aucun texte de titre, contenu des notes ni commentaire `//@` existant.

- [ ] **Step 2: Contrôler les trois insertions**

Run:

```bash
rtk rg -n "assets/monomythe-(depart|initiation|retour)\.svg" slides/01-main.md
```

Expected: exactement trois références, une par slide de chapitre, et aucune référence `-parcouru` à ce stade.

### Task 3: Ajouter les trois bilans et la synthèse cyclique

**Files:**
- Modify: `slides/01-main.md` — après le bloc `the-mythical-man-month.jpg`, après le bloc `indiana_jones_with_the_holy_grail_in_last_crusade.avif`, et après le bloc `Lord-of-the-Rings-Bilbo-Baggins-There-And-Back-Again.jpg`.

- [ ] **Step 1: Insérer le bilan du Départ avant `Chapitre 2 - L'Initiation`**

```md
## Le Départ est franchi
# Le premier pas transforme déjà la personne qui l'a fait.

!image(assets/monomythe-depart-parcouru.svg,Les cinq étapes parcourues du Départ,1250)

/*
Vous n'avez pas encore changé le monde, mais vous avez changé de position : vous avez quitté le confort du statu quo. C'est cette première transformation qui rend le reste du voyage possible.
*/
```

- [ ] **Step 2: Insérer le bilan de l'Initiation avant `Chapitre 3 - Le Retour`**

```md
## L'Initiation est accomplie
# L'épreuve transforme l'intention en capacité d'agir.

!image(assets/monomythe-initiation-parcouru.svg,Les onze étapes parcourues du Départ et de l'Initiation,1250)

/*
Les épreuves ne sont pas seulement des obstacles : elles ont modifié votre regard, vos réflexes et votre capacité à agir. Mais cette capacité doit désormais retourner vers le collectif.
*/
```

- [ ] **Step 3: Insérer le bilan du Retour et la synthèse avant `Voilà. Fin de l'histoire`**

```md
## Le Retour est accompli
# Le changement n'existe que lorsqu'il circule.

!image(assets/monomythe-retour-parcouru.svg,Les dix-sept étapes parcourues du Monomythe,1250)

/*
Le savoir ne transforme que lorsqu'il revient vers les autres et prend place dans leur réalité. Le parcours est accompli, mais ce n'est pas une fin.
*/

## Rien n'est jamais terminé
# Transformé·e, on repart.

!image(assets/monomythe-cycle-complet.svg,Le cycle complet des dix-sept étapes du Monomythe,1350)

/*
Le cercle se referme, et c'est précisément le propos : l'état atteint aujourd'hui devient la normalité depuis laquelle naîtra le prochain appel. Le Monomythe décrit une transformation, pas une ligne d'arrivée.
*/
```

Ne pas ajouter de commentaire `//@` : les nouveaux jalons de temps restent volontairement non chiffrés.

- [ ] **Step 4: Vérifier les slides nouvelles et leur ordre**

Run:

```bash
rtk rg -n "Le Départ est franchi|L'Initiation est accomplie|Le Retour est accompli|Rien n'est jamais terminé|monomythe-(depart-parcouru|initiation-parcouru|retour-parcouru|cycle-complet)\.svg" slides/01-main.md
```

Expected: les quatre titres apparaissent dans cet ordre et chaque image associée apparaît une fois.

- [ ] **Step 5: Commit**

```bash
rtk git add slides/01-main.md
rtk git commit -m "feat: jalonner les chapitres du monomythe" -m "Generated with AI assistance, reviewed by @stephanetrebel"
```

### Task 4: Contrôler la non-régression et documenter la revue

**Files:**
- Modify: `tasks/todo.md`

- [ ] **Step 1: Vérifier les notes des quatre nouvelles slides et les références locales**

Run:

```bash
rtk python3 -c 'from pathlib import Path; text=Path("slides/01-main.md").read_text(); assert text.count("assets/monomythe-") == 7; assert text.index("Le Départ est franchi") < text.index("Chapitre 2 - L\u0027Initiation"); assert text.index("L\u0027Initiation est accomplie") < text.index("Chapitre 3 - Le Retour"); assert text.index("Le Retour est accompli") < text.index("Voilà. Fin de l\u0027histoire"); assert "## Rien n\u0027est jamais terminé" in text; print("7 références et ordre narratif valides")'
```

Expected: `7 références et ordre narratif valides`.

- [ ] **Step 2: Exécuter le vérificateur SliDesk et qualifier son résultat**

Run:

```bash
rtk python3 /home/stephane/projets/perso/presentations/.agents/skills/smart-slidesk/scripts/check_deck.py .
```

Expected: sortie non nulle à cause des 32 erreurs initiales, mais aucune erreur ne cite `assets/monomythe-*.svg` ni les nouvelles slides dotées de leurs blocs de notes.

- [ ] **Step 3: Vérifier le diff et l'état Git**

Run:

```bash
rtk git diff HEAD~2..HEAD --check
rtk git status --short
```

Expected: aucune erreur de whitespace ; état propre après les deux commits de fonctionnalité.

- [ ] **Step 4: Mettre à jour la revue**

Remplacer la section `## Revue` de `tasks/todo.md` par :

```md
## Revue

- SVG : 7 assets XML valides, représentant les 17 étapes en 5 / 6 / 6.
- Slides : trois ouvertures enrichies, trois bilans et une synthèse finale ajoutés dans l'ordre narratif.
- Validation SliDesk : les erreurs structurelles préexistantes restent connues et hors périmètre ; aucune erreur n'est liée aux ajouts.
```

Cocher toutes les tâches terminées.

- [ ] **Step 5: Commit**

```bash
rtk git add tasks/todo.md tasks/lessons.md
rtk git commit -m "docs: consigner la validation des récapitulatifs" -m "Generated with AI assistance, reviewed by @stephanetrebel"
```
