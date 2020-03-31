# TODO

- [ ] Mentionner `git add --patch`
- [ ] Mentionner les _caveats_ autours de la terminologie (upstream, différence fetch/pull/rebase)
- [ ] Mentionner la configuration (.gitconfig)
- [ ] Mentionner les styleguides de commit comme https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit


# KT - GIT

_All your (re)base are belong to us_

```ascii
            ,,,         ,,,
          ;"   ^;     ;'   ",
          ;    s$$$$$$$s     ;
          ,  ss$$$$$$$$$$s  ,'
          ;s$$$$$$$$$$$$$$$
          $$$$$$$$$$$$$$$$$$
         $$$$P""Y$$$Y""W$$$$$
         $$$$  p"$$$"q  $$$$$
         $$$$  .$$$$$.  $$$$
          $$DcaU$$$$$$$$$$
            "Y$$$"*"$$$Y"
               "$b.$$"
```


## A Propos

Cette présentation a pour objectif de servir de support à un Knowledge Transfer
autour de Git, de ses raisons d’exister, et de la façon de s’en servir le plus
efficacement possible dans vos projets.

Elle a été réalisée à l’aide de [vimdeck](https://github.com/tybenz/vimdeck)


# Git

D’après la page `man` de git:
« git - the stupid content tracker

Git is a fast, scalable, distributed revision control system with an unusually
rich command set that provides both high-level operations and full access to
internals. »

En résumé:

- Git est un système de contrôle de version distribué.
- Git offre la possibilité d’être haut-niveau et bas-niveau selon les besoins.
- Git est rapide.


# Git

Dit autrement:

_Git est là pour nous faciliter la tâche._

Si vous ne voyez pas les avantages de Git, à quoi bon s’en servir ?


## Et donc ?

Fondamentalement Git sert à savoir *qui* a fait *quoi*, et *quand*


## Level 1

- Qui: `git blame`
- Quoi: `git show`
- Quand: `git log`


## Next level

- Arrêter de jouer a WipWip et le Coyote ? -> `git commit --amend`
- Mettre de coté vos modifs ? -> `git stash`
- Besoin d’un seul commit qui est rattaché à une autre branche ? -> `git cherry-pick`
- Trouver les bugs pour vous ? -> `git bisect`
- Ajouter des infos à un commit qui est sur une branche protégée ? -> `git notes`
- Résoudre à nouveau les conflits de merge ? -> `git rerere`
- Ne plus dépendre des Gitlab et compagnie ? -> `git format-patch/send-email/am`
- etc…


## Monde de Merge

Une hygiène de commit permet également de faciliter la maintenance du code:

- Les MR deviennent compréhensibles (surtout quand elles sont petites !)
- On peut `revert` un commit problématique sans pour autant avoir à faire un hotfix (moche) qui pourra, lui aussi, déclencher des regressions...


## Donc ?

Ok donc y a plus qu’à ?

Hélas non ! Car tout ça à besoin d’un pré-requis: _Bien_ committer


# RTFM

La [doc de git](https://git-scm.com/docs/gitworkflows) est claire:

« As a general rule, you should try to split your changes into small logical steps,
and commit each of them. They should be consistent, working independently of any
later commits, pass the test suite, etc. »


## Dans la vraie vie

Quelques conseils pour y arriver sans (trop) se forcer:


## Dans la vraie vie

Quelques conseils pour y arriver sans se forcer:

- Avant d'ajouter du code pensez à faire un commit de nettoyage (formattage, fautes d’orthographe, jsdoc manquant, etc.)
- Penser _Single Responsibility Principle_: Un commit === une « modification »
- Protip: Le TDD vous met dans cet état d’esprit par défaut ;)


## Dans la vraie vie

Quelques conseils pour y arriver sans se forcer:

Dans vos branches:

- Rebasez régulièrement vos commits (edit squash reword fixup)
- Rebasez votre branche par rapport à develop, merger develop régulièrement est inutile et pollue les merges.
- Plus vous utilisez git, plus vous en profiterez


## Dans la vraie vie

Quelques conseils pour y arriver sans se forcer:

Les commits expliquent _pourquoi_ vous avez fait une modification, profitez-en !

- Un message qui indique le ticket en cours ce qui le relie à sa raison d’être
- Un corps de message qui précise pourquoi votre modification va faire avancer le code vers ce qu’il devrait être.
- Les _smells_ : «et» «,» «plus» «multiple» etc…


## Dans la vraie vie

Quelques conseils pour y arriver sans se forcer:

- Ne pas toucher l’historique partagé avec les autres: Immutabilité avant tout.
- Par contre dans vos branches, défoulez-vous: `git push --force` est là pour ça
- Il est donc important d'avoir des branches petites, à courte durée de vie
- Et tout ça a des conséquences sur le découpage du travail en amont


## Problem, officer ?

La quasi-totalité des commandes git peuvent être rattrapées.
N’hésitez pas à alerter «ceux qui savent», ils sont là pour ça :)


# FIN

« Git good, scrub »
						- Vous, ~2020 après JC
						
Retrouvez cette présentation sur mon dépot de KTs:
	_https://github.com/StephaneTrebel/presentations_

```ascii
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$**$$$$$$$$$**$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$"   ^$$$$$$F    *$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$     z$$$$$$L    ^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$    e$$$$$$$$$e  J$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$eee$$$$$$$$$$$$$e$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$b$$$$$$$$$$$$$$$$$$*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$)$$$$P"e^$$$F$r*$$$$F"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$d$$$$  "z$$$$"  $$$$%  $3$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$*"""*$$$  .$$$$$$ z$$$*   ^$e*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$"     *$$ee$$$$$$$$$$*"     $$$C$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$.      "***$$"*"$$""        $$$$e*$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$b          "$b.$$"          $$$$$b"$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$c.         """            $$$$$$$^$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$e..                     $$$$$$$$^$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$eeee..            J$$$$$$$$b"$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$r          z$$$$$$$$$$r$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"         z$$$$$**$$$$$^$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$*"          z$$$P"   ^*$$$ $$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$*"           .d$$$$       $$$ $$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$"           .e$$$$$F       3$$ $$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$.         .d$$$$$$$         $PJ$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$eeeeeeed$*""""**""         $\$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$                  $d$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$.                 $$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$e.              d$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$eeeeeee$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
```
