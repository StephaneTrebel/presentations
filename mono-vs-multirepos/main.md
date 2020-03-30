# Mono-vs-multirepos

Cette présentation à été réalisée grâce à [vimdeck](https://github.com/tybenz/vimdeck).


## Multirepo

• Attrait de la modularité: « un livrable, un dépôt »
• Comportement par défaut (nouveau module = nouveau dépôt)
• Séparation des responsabilités: chaque dépôt est concentré sur sa raison d'être
• Réutilisation facilitée: on partage le livrable du dépôt


## Les limites

• Gestion des versions pour les dépendances intra-projet (et parfois du support multi-versions)
	• Besoin d'un manifeste ou de contrats d'API pour le suivi
• Dépendances souvent mal maîtrisées:
	Un service qui a besoin d'une base de données
	Des services qui partagent des dépendances communes
	et souvent des découvertes après-coup !
• Maintenance accrue des dépôts: droits d'accès, gouvernance, etc.
• Une modification = plusieurs PullRequests:
	Perte de visibilité
	Test d'intégration à organiser
	Problématique du déploiement des modifications
• Sauf rares exceptions il n'y a pas de _reuse_: tout est spécifique au projet. L'utilité de l'isolation est donc limitée.
• Le code est facilement éclaté entre plusieurs —voire beaucoup— de dépôts, et le couplage faible entre eux rend le cheminement d'une fonctionnalité difficile à suivre
• _Feature Flipping_ difficile car à gérer dans chaque dépôt


## Monorepo

• Attrait de la consolidation: « un projet, un dépôt ». Après tout, le build concerne la plupart du temps une solution globale demandée par le Client
• Les dépendances implicites intra-projet sont éliminées -> Beaucoup moins de friction pour implémenter un changement
• Maintenance du dépôt simplifié par une gouvernance à un seul endroit
• *Une PR pour les unir tous et dans le projet les lier*
• Trouver l'origine d'une anomalie trans-module peut être aussi simple qu'un `git bisect`
• S'accorde très bien avec le _Trunk Based Development_ et le _Feature Flipping_ (« on fait avancer tout le monde, tout le temps, et on ne montre que quand on est prêt »)


## Les limites

• Risque de voir les différents sous•projets empièter sur leurs périmètres respectifs.
• Les cycles de vie des sous-projets peuvent être différents -> Quid du déploiement d'une fonctionnalité ?
• Nécessite de l'outillage spécifique car ce n'est pas natif dans la manière de fonctionner des outils (cf Bazel, Lerna, etc.)
• Tous les commits, branches, etc. sont au même endroit, ce qui peut être très brouillon à la lecture
• Devoir cloner un gros monorepo pour changer un petit bout de code peut paraître sub-optimal.


## Changer d'avis

Des outils existent:

• De Mono à Multi: [splitsh](https://github.com/splitsh/lite)
• De Multi à Mono: [tomono](https://github.com/hraban/tomono)


## Conseils pratiques

• Multi: + adaptés aux équipes fonctionnelles _séparées_, avec des livrables qui ont leur cycle de vie propre
• Mono:  + adaptés à un livrable conséquent qui incluent plusieurs briques distinctes
• Mais dans tous les cas on peut arguer de faire l'inverse !

Il est également possible de panacher: il existe projets qui fonctionnent en "multi-monorepos" (découpage par «grand livrable», qui eux-mêmes peuvent inclure des livrables issus de technologies différentes, par ex Android).

La synthèse pourrait être de commencer avec un modèle et de le remettre en question régulièrement en utilisant les outils nécessaires pour gérer la transition en toute souplesse.

L'important reste l'expérience utilisateur des développeurs (accueil, intégration continue, construction des livrables, etc.).


## Fin

Questions • Réponses

Merci à vous pour votre participation !
