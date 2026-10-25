# SliDesk : images trop grandes à l’impression Chrome

## Cause observée

Dans le `slidesk.js` servi par l’instance locale, le gestionnaire `load` des images `.sd-img img` calcule leurs dimensions avec `window.innerWidth / WIDTH`, puis écrit une largeur et une hauteur en pixels sur l’image et son conteneur.

Les règles d’impression de `slidesk.css` définissent une page A4 paysage sans adapter ces dimensions. Le `max-width: 90vw` du conteneur ne contraint pas son image enfant : elle peut conserver une largeur de 1800 px sur une page d’environ 1123 pixels CSS.

## Reproduction minimale

1. Utiliser Chrome, une fenêtre de 1920 × 1080 et les styles de présentation de SliDesk.
2. Afficher ce contenu (les styles inline représentent les dimensions écrites par le JS) :

```html
<div class="sd-app">
  <section class="sd-slide sd-current">
    <figure class="sd-img" style="width:1800px;height:1000px">
      <img src="image-1800x1000.png" width="1800"
           style="width:1800px;height:1000px">
    </figure>
  </section>
</div>
```

3. Imprimer en A4 paysage. Le conteneur se réduit mais l’image déborde.
4. Ajouter les règles `@media print` de `themes/@steph__bdxio/THEME/theme.css`, puis recommencer.

## Contournement dans le thème

- Conserver la largeur inline du conteneur, plafonnée à `90vw`.
- Remplacer sa hauteur inline par `auto !important`.
- Remplacer largeur et hauteur inline de l’image par `auto !important`.
- Contraindre l’image à `max-width: 100%` et `max-height: 80vh`.

Les dimensions automatiques conservent le ratio intrinsèque de l’image. Les `!important` sont nécessaires pour remplacer les dimensions inline normales écrites par SliDesk. La limite de hauteur de 80 % réserve de la place au titre et aux légendes ; c’est une politique de thème, pas une valeur universelle pour toutes les slides.

## Vérification effectuée

Chrome 156 headless via le Chrome DevTools Protocol, avec les styles SliDesk réellement servis par `http://localhost:1337/slidesk.css` et le thème local. Cas minimal sans le reste du JS de l’application, dimensions inline reproduites explicitement. Images SVG de dimensions intrinsèques connues.

- Écran : 1920 × 1080.
- Impression émulée : 1123 × 794, média `print`, sans recharger les images.
- Avant correction : échec sur l’image large, qui conserve 1800 px.
- Après correction : les quatre cas passent, dimensions écran inchangées, proportions conservées.

| Cas | Dimensions avant | Dimensions après, impression (environ) |
| --- | --- | --- |
| Image large | 1800 × 1000 | 1011 × 561 |
| Image verticale | 600 × 2400 | 159 × 635 |
| Petite image | 250 × 250 | 250 × 250 |
| Image sans attribut HTML `width` | 2400 × 1600 | 953 × 635 |

Le script de vérification ponctuel est `/tmp/check-slidesk-print.mjs` dans cette session (`node /tmp/check-slidesk-print.mjs`, avec l’instance SliDesk sur le port 1337 et le port Chrome 9337 disponible). Il n’est pas un outil installé dans le dépôt.

## Limites et piste upstream

- L’aperçu Chrome interactif et le PDF complet de la présentation restent à vérifier manuellement ; l’émulation CSS ne prouve pas la pagination complète.
- Les images HTML brutes hors `.sd-img` ne sont pas concernées par ce contournement.
- Ce correctif ajuste les images au papier, mais ne garantit pas la conservation exacte de leur taille relative à la slide écran. Une image ne sera pas agrandie au-delà de sa taille intrinsèque.
- Une correction upstream peut généraliser ces contraintes d’impression ou remplacer le calcul de dimensions écran en pixels par un dimensionnement relatif adapté aux médias. Éviter de figer une seconde fois la valeur de `WIDTH` dans le thème.
