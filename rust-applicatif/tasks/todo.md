# Correction des images à l’impression — thème BDX I/O

- [x] Identifier les dimensions inline en pixels ajoutées par SliDesk et l’absence d’adaptation à l’impression.
- [x] Reproduire le débordement avec Chrome sur un cas minimal utilisant les styles servis.
- [x] Ajouter une correction CSS limitée à l’impression dans le thème.
- [x] Vérifier images larges, verticales et petites ; documenter les limites et le signalement upstream.

## Approche

Conserver les dimensions demandées lorsque possible, contraindre le conteneur et l’image à la page, et supprimer la hauteur inline devenue incorrecte. Aucun changement au rendu écran, aux slides ou au code de SliDesk.

## Revue

- Chrome 156 : échec reproduit avant correction, puis 4 cas validés après correction (large, vertical, petit, sans attribut width).
- Commande : `rtk proxy node /tmp/check-slidesk-print.mjs` ; script ponctuel de cette session.
- Dimensions écran inchangées ; dimensions imprimées bornées et ratios conservés sur les cas testés.
- `rtk git diff --check` : réussi.
- Signalement et reproduction : `tasks/print-images-upstream.md`.
- Non vérifié : aperçu Chrome interactif et pagination du PDF complet ; validation manuelle restante.
- Présentation legacy SDF : le checker structurel Markdown n’est pas applicable.
