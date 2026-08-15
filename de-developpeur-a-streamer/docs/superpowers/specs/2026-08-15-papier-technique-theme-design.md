# Thème « Papier technique » — Design

## Objectif

Adapter le thème de la présentation `de-developpeur-a-streamer` du mode sombre au mode clair afin d’améliorer la lisibilité sur les rétroprojecteurs, sans modifier le contenu éditorial.

## Décision

Le thème conserve son identité « console humaine » : accents vert terminal, orange chaud, typographie monospace pour les invites et les tags, ainsi que les gradients décoratifs. La palette de surface devient ivoire clair, le texte devient bleu-noir, et les accents sont assombris pour rester lisibles sur fond clair.

## Portée

- Modifier uniquement `themes/console-humaine.css`.
- Remplacer les couleurs sombres de fond et de panneaux par `#fbfaf6` et des tons ivoire/vert brume.
- Remplacer le texte clair par un bleu-noir foncé.
- Assombrir les accents vert et orange.
- Adapter les couleurs du mode speaker/compteur et des bordures.
- Préserver les slides Markdown, notes, timings, images et HTML brut.

## Validation

- Exécuter le checker Slidesk sur le deck.
- Vérifier le diff Git pour confirmer que seul le thème et les documents de suivi sont modifiés.
- Contrôler l’absence des anciennes couleurs de fond sombre dans le thème.
