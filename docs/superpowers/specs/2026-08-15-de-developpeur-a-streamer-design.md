# De développeur à streamer — design du bootstrap

## Objectif

Créer un modèle Slidesk Markdown personnalisable pour la présentation « De développeur à streamer, remettre de l'Humain dans le Dev », avec des slides placeholder et un thème visuel local orienté « Console humaine ».

## Périmètre

Le bootstrap couvre uniquement :

- la structure actuelle Slidesk (`slidesk.toml`, `main.md`, `slides/*.md`) ;
- un thème CSS dédié à cette présentation ;
- un ensemble ordonné de slides placeholder inspirées de l'abstract ;
- un bloc de notes `To Be Defined` sur chaque slide ;
- une validation structurelle avec le checker Slidesk.

Il ne couvre pas encore la rédaction détaillée, les visuels finaux, les timings, les assets de conférence ni les variantes éditoriales.

## Architecture retenue

Le deck sera créé dans `de-developpeur-a-streamer/`.

`main.md` restera un scaffold minimal avec le conteneur de personnalisation Slidesk et `!include(slides, md)`. Les slides seront réparties en fichiers Markdown ordonnés par préfixe numérique. L'ordre des fichiers fera foi.

Le thème sera volontairement **WET** : un fichier CSS complet sera copié et adapté pour chaque conférence cible. Il n'y aura pas de couche CSS partagée ou de variante héritant d'un thème commun. Le fichier initial sera `de-developpeur-a-streamer/themes/console-humaine.css`, chargé par `main.md`.

Le CSS initial donnera une identité sombre de console/terminal, avec accents néon et chaleur humaine, sans imposer de contenu ou d'images. Le dossier `assets/` sera créé pour les futurs assets locaux.

## Bootstrap narratif

Les placeholders suivront cette progression :

1. couverture ;
2. constat : « le métier va disparaître ? » ;
3. thèse : davantage d'humain ;
4. pourquoi créer du contenu Tech en 2026 ;
5. l'attention comme ressource limitée ;
6. transmission et pont entre générations ;
7. formats : streamer, YouTuber, TikToker ;
8. itération, erreurs et apprentissage ;
9. identité « Le Permacodeur » ;
10. conclusion et invitation au pas de côté ;
11. slide speaker/bio placeholder.

Chaque slide contiendra un corps très court et remplaçable, ainsi qu'un bloc de notes :

```md
/*
To Be Defined
*/
```

Aucun commentaire `//@` ne sera inventé pendant ce bootstrap.

## Validation

La commande de référence sera :

```bash
rtk python3 .agents/skills/smart-slidesk/scripts/check_deck.py de-developpeur-a-streamer
```

Le résultat attendu est un deck au format `current`, sans erreur structurelle. Les éventuels avertissements non bloquants seront rapportés séparément.
