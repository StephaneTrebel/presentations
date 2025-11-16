# Tests Unitaires Automatises

Cette présentation à été réalisée grâce à [vimdeck](https://github.com/tybenz/vimdeck).


## Les TUs

- Kézaco ?
- La couverture de tests
- Les pièges à éviter
- Aller plus loin…


## Kezaco

Tests:
- Vous êtes responsables de votre propre _Qualité_
- «Est-ce que je comprends ce que je fais ?»
- Une forme de documentation très sous-estimée, car elle ment difficilement

Unitaires: on teste une «unité»
- Incite à bien définir ces unités (structure de la fonction, algorithmes, découpage)
- Incite à bien définir l'API de chaque unité
- Incite à réfléchir aux dépendances entre les «unités»

Automatisés:
- Un langage unifié, partagé entre les devs (voire +), et faisant partie de la revue


## Couverture de tests

- Conseil: Couvrez 100% de ce qui peut être couvert -> En discuter ensemble («Stratégie de test»)
- Très facile de tricher ! Les revues sont importantes pour éviter ça
- Si une portion de code est difficile à couvrir, ça peut indiquer qu'elle sera difficile à déboguer


## Les pieges

- Traiter les TU comme une corvée qu'on va abattre à la fin du dev. Privilégier l'écriture en amont, voire le _Test Driven Development_ !
- Tester le framework sous-jacent, ou une librairie tierce. Par contre des «tests d'apprentissage» peuvent être envisagés, afin de documenter les méthodes utilisées par le projet.
- Croire que les TU sont suffisants pour assurer l'adéquation fonctionnelle du dev avec les spécifications. Les TNR/Tests E2E sont là pour ça.
- Ne pas tester les cas d'erreurs. Chaque branche doit être testée !


## Aller plus loin

- Tests avec génération de valeurs automatiques (_Property based testing_)
- Tests qui s'assurent que vos tests testent bien le code, et réciproquement (_Mutation testing_)
- Les pipelines -> Automatiser l'automatisation


## Fin

Questions - Réponses

Merci à vous pour votre participation !
