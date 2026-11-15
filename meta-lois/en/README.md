# Les Méta-Lois — version SliDesk

Adaptation de la version RevealJS active dans `../meta-lois/index.html` (Agi’Lille 2026). La source RevealJS reste inchangée.

## Présenter

Depuis la racine du dépôt :

```sh
bunx slidesk@2.22.2 present "$PWD/meta-lois-slidesk"
```

La validation a été réalisée avec SliDesk **2.22.2**. Le binaire global 2.19.1 ne lit pas la configuration TOML de cette version du deck.

## Organisation

- `slidesk.toml` : titre et largeur de référence.
- `main.md` : chargement du CSS et des slides Markdown.
- `slides/00-welcome.md` : accueil de `index.html`.
- `slides/10-intro.md` : les cinq slides de `intro.md`.
- `slides/20-meta-lois.md` : les 61 slides de `slides.md`, dans leur ordre de lecture RevealJS (horizontal puis vertical).
- `slides/90-speaker.md` : les quatre slides de présentation de `rust-applicatif/slides/99-speaker.sdf`, sans sa conclusion propre à Rust.
- `slides/99-conclusion.md` : conclusion, liens et feedback Agi’Lille de `index.html`.
- `assets/` : copies locales des 42 images utilisées, logo compris, et CSS copié du thème Rust `@steph__bdxio` puis adapté localement.

## Fidélité et adaptations

Les textes, les images (GIF compris), le HTML et les notes des slides sources sont conservés. Les notes `Notes:` deviennent des blocs `/* ... */` ; les timings restent dans les notes, sans correction. Les slides sans notes connues portent `To Be Defined`.

Le fond de la slide sponsors devient une image SliDesk avec affichage intégral. Les chemins des ressources sont locaux. Les blancs du HTML final ont été adaptés pour éviter son interprétation comme un bloc de code Markdown. Les listes à emoji et les images `r-stretch` gardent leur HTML, avec des styles de compatibilité. La navigation verticale RevealJS devient une séquence linéaire SliDesk, sans transition.

Ne pas ajouter d’espace après la virgule dans `!include(slides,md)` : le moteur testé interprète cet espace comme une partie de l’extension et produit un deck vide.

## Vérification

```sh
python3 .agents/skills/smart-slidesk/scripts/check_deck.py meta-lois-slidesk
```

Contrôles effectués lors de la conversion :

- 72 slides et 72 blocs de notes ; checker sans erreur ni avertissement.
- Comparaison des 66 slides de `intro.md` et `slides.md`, dont 54 blocs de notes d’origine : ordre et contenu conservés, hors traduction du fond sponsors.
- Comparaison des quatre slides speaker et du HTML/notes de conclusion.
- Comparaison SHA-256 des 42 images copiées : identiques aux originaux.
- Export HTML avec SliDesk 2.22.2, puis contrôle Chrome en 1920×1080 et 1280×720 : 41 images de contenu chargées, aucun débordement détecté ni erreur JavaScript/HTTP.
- Inspection de captures représentatives ; pas de comparaison pixel à pixel avec RevealJS ni de validation PDF.
