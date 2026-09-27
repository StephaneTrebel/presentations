# Design : récapitulatifs circulaires du Monomythe

## Objectif

Rendre le parcours des 17 étapes immédiatement lisible, au début et à la fin de chacun des trois chapitres de la conférence, puis conclure sur son caractère cyclique et transformateur.

## Périmètre

- Enrichir les trois slides de chapitre existantes : `Chapitre 1 - Le Départ`, `Chapitre 2 - L'Initiation` et `Chapitre 3 - Le Retour`.
- Ajouter une slide-bilan après chaque chapitre, avant le chapitre suivant.
- Ajouter une slide de synthèse immédiatement après le bilan du chapitre 3.
- Créer les SVG locaux nécessaires sous `assets/`.
- Préserver toutes les slides, notes et commentaires de timing existants.

## Parcours représenté

Le diagramme représente les 17 étapes déjà présentes dans le deck, dans leur ordre de conférence.

1. **Le Départ** (5 étapes) : Appel de l'Aventure ; Refus de l'Appel ; Aide Extérieure ; Franchir le premier Seuil ; Ventre de la Baleine.
2. **L'Initiation** (6 étapes) : Route des Épreuves ; Rencontre avec les « Dieux » ; Tentation du Cynisme ; Conflit ; Apothéose ; Super-pouvoir.
3. **Le Retour** (6 étapes) : Refus du Retour ; Envolée Magique ; Se Sauver de l'Absence ; Franchissement du Seuil du Retour ; Maître des Deux Mondes ; Liberté de Vivre.

## Langage visuel

Un anneau unique orienté par des flèches relie les 17 jalons. Les jalons sont numérotés et regroupés en trois arcs de couleur, un par chapitre. Les intitulés restent brefs afin de préserver la lisibilité en salle.

Le sens de lecture est horaire. Une flèche relie explicitement la dernière étape à la première : le changement achevé ne clôt pas l'histoire, il rend possible un nouveau cycle.

### États visuels

- **À venir** : traits et jalons atténués.
- **Arc actif** : couleur pleine et labels visibles ; il situe l'audience dans le chapitre qui commence.
- **Parcouru** : couleur pleine, jalons validés et chemin continu ; il matérialise le chemin accompli.
- **Synthèse finale** : les trois arcs sont en couleur pleine ; la flèche de bouclage et un centre textuel rendent le cycle explicite.

Les couleurs respecteront le thème SunnyTech en privilégiant un contraste fort avec le fond. Elles seront cohérentes sur tous les SVG et ne porteront pas seules le sens : les titres et la position dans l'anneau restent lisibles sans distinction chromatique.

## Slides

### Ouvertures de chapitre existantes

Chaque slide de chapitre reçoit le SVG correspondant : l'anneau complet est visible, l'arc du chapitre est mis en avant, les autres arcs restent discrets. Cette slide sert de carte avant l'entrée dans les étapes détaillées.

### Bilans ajoutés

Après les cinq, onze et dix-sept étapes respectivement, une nouvelle slide affiche le même anneau avec le parcours accompli en évidence. Elle contient une formule courte de transition :

- fin du Départ : « Le premier pas transforme déjà la personne qui l'a fait. »
- fin de l'Initiation : « L'épreuve transforme l'intention en capacité d'agir. »
- fin du Retour : « Le changement n'existe que lorsqu'il circule. »

Les notes de ces nouvelles slides guideront l'oral et conserveront les timings comme `TBD`, sans inventer de durée.

### Synthèse finale

La slide placée après le bilan du Retour montre l'anneau complet, ses trois chapitres et le bouclage de « Liberté de Vivre » vers « Appel de l'Aventure ». Son message central est : **« Transformé·e, on repart. »** Elle prépare directement les slides de conclusion existantes, notamment « Voilà. Fin de l'histoire …ou pas ? ».

## Fichiers et intégration

- Ajouter un ou plusieurs SVG autonomes sous `assets/`, plutôt que du HTML dessiné dans les slides, pour garder les visuels réutilisables et faciles à vérifier.
- Insérer les images avec la syntaxe `!image(...)` existante.
- Ajouter les slides dans `slides/01-main.md` aux points narratifs correspondants ; aucun renommage de fichier n'est requis.
- Chaque nouvelle slide aura un bloc de notes `/* ... */`.

## Validation

- Le vérificateur SliDesk doit accepter le deck.
- Les SVG doivent exister sous `assets/` et être référencés correctement.
- Les 17 étapes doivent être présentes une seule fois dans le chemin global et réparties 5 / 6 / 6.
- Les trois slides d'ouverture, les trois bilans et la synthèse finale doivent être présents dans l'ordre narratif.
- Les commentaires `//@` existants ne doivent pas être modifiés.
