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

Cette présentation a pour objectif de servir de support à un transfert de connaissances
autour de Git, de ses raisons d’exister, et de la façon de s’en servir le plus
efficacement possible dans vos projets.

Elle a été réalisée à l’aide de [vimdeck](https://github.com/tybenz/vimdeck)


## Git

D’après la page `man` de git:
« git - the stupid content tracker

Git is a fast, scalable, distributed revision control system with an unusually
rich command set that provides both high-level operations and full access to
internals. »

En résumé:

- Git est un système de contrôle de version distribué.
- Git offre la possibilité d’être haut-niveau et bas-niveau selon les besoins.
- Git est rapide…quand on s'en sert directement !


## Qui,Quoi,Quand

Fondamentalement Git sert à savoir *qui* a fait *quoi*, et *quand*.

Le *quoi* est un «changement» -> Notion importante et hautement philosophique !

La [doc de git](https://git-scm.com/docs/gitworkflows) est claire:

« As a general rule, you should try to split your changes into small logical steps,
and commit each of them. They should be consistent, working independently of any
later commits, pass the test suite, etc. »


## Les fondamentaux

- L'espace de travail courant (`git status`, `git diff`)
- L'index (`git add`)
- Le changement (`git commit`)
- La branche (`git branch`)


## Le quotidien

- Voir le dernier commit qui a touché à une ligne de code (`git blame`)
- Voir le détail d'un commit (`git show`)
- Voir les changements (commits) dans le temps (`git log`)
- `git checkout`, et ses nombreux usages (restaurer un fichier, changer de branche, se mettre sur un commit particulier)
- Les tags (`git tag`)
- Les remotes (`git remote`)


## Le message de commit

Les messages de commit expliquent _pourquoi_ vous avez fait une modification, profitez-en !

- Penser _Single Responsibility Principle_: Un commit === une « modification »
- Un message qui indique le ticket en cours ce qui le relie à sa raison d’être
- Un corps de message qui précise pourquoi votre modification va faire avancer le code vers ce qu’il devrait être.
- Les _smells_ : «et» «,» «plus» «multiple» etc…


## Bons conseils

- Objectif: Que les MRs deviennent compréhensibles (surtout quand elles sont petites !)
- Avant d'ajouter du code pensez à faire un commit de nettoyage (formattage, fautes d’orthographe, doc manquante, etc.)
- Committez régulièrement, rebasez régulièrement, et à la fin nettoyez (rebase interactif)
- Notez que vous pouvez ajouter seulement une partie des modifications à l'index -> `git add --patch`
- Committer régulièrement permet de facilement `revert` un commit problématique sans pour autant avoir à faire un hotfix (moche) qui pourra, lui aussi, déclencher des régressions...


## Dans vos branches

- Rebasez régulièrement vos commits entre eux (edit squash reword fixup)
- Rebasez votre branche par rapport à la branche cible plutôt que de fusionner la branche cible. Fusionner systématiquement est inutile et pollue la lecture des commits, et il y aura de toute façon un commit de fusion si conflit il y a.
- Ne pas toucher l’historique partagé avec les autres: Immutabilité avant tout.
- Par contre dans vos branches, défoulez-vous: `git push --force-with-lease` est là pour ça
- Il est donc important d'avoir des branches petites, à courte durée de vie
- Et tout ça a des conséquences sur le découpage du travail en amont


## Next level

- Arrêter de jouer a WipWip et le Coyote ? -> `git commit --amend` / `git rebase -i`
- Mettre de coté vos modifications en cours ? -> `git stash {,list,pop}`
- Besoin d’un seul commit qui est rattaché à une autre branche ? -> `git cherry-pick`
- .gitconfig -> Le git dont VOUS êtes le héros !
- La différence entre `git fetch`/`git pull`/`git rebase`
- Les styleguides de commit comme https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit


## Next next level

- Trouver les bugs pour vous ? -> `git bisect`
- Ajouter des infos à un commit qui est sur une branche protégée ? -> `git notes`
- Résoudre à nouveau les conflits de merge ? -> `git rerere`
- Ne plus dépendre des Gitlab et compagnie ? -> `git format-patch/send-email/am`


## No problemo

- La quasi-totalité des commandes git peuvent être rattrapées (`git reflog`)
- N’hésitez pas à alerter «ceux qui savent», ils sont là pour ça !
- Ça va sans dire mais plus vous utiliserez git, plus vous serez à l'aise avec :)
- Pratiquez dans le terminal, et seulement ensuite vous serez à l'aise avec vos IDEs


# FIN

« Git good, scrub »
						- Vous, ~2021 après JC
						
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
