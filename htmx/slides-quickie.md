## Sommaire

- Un constat sur le dev Web "moderne"
- HTMX, un retour aux sources
- Alors, Révolution ou pas Révolution ?

Notes: On va préfacer tout de suite: cette présentation est très "opiniated".
Elle se base sur ce que j'ai pu vivre au cours de ma désormais dizaine d'années
d'expérience dans le domaine, et de ce que j'ai pu lire et voir autour du
sujet. Ce n'est donc ni impartial ni objectif, mais je vais tenter d'être le
plus équitable possible (même si j'ai mon opinion, donc).

## Les limites du «Toujours plus de JS !!!»


<img class="r-stretch" data-src="assets/im-the-captain.jpeg" >

À la base, ça n'existe pas, une "application Web".
Notes: Web est avant tout une plateforme de distribution.

Le protocole HTTP est là pour récupérer des ressources qui vont elles-mêmes
aller récupérer d'autres ressources etc.
Le DOM du HTML, lui est là pour structurer l'information
Le CSS et le JS sont là pour rendre le tout un peu plus sympa à utiliser

Mais tout ça ne fait pas une application. Il y a du "routage" (historique, URLs),
il y a du "state" (cookies, localstorage), des API (caméra, micro, crypto),
mais rien pour ORCHESTRER tout ça.


<img class="r-stretch" data-src="assets/drowning-in-js.png" >
Réinventer la roue, constamment.
Notes: Comment simplement gérer un État applicatif front alors que la session
de l'utilisateur doit également être gérée côté Back (authentification,
d'autorisation, etc.).

Que se passe-t-il quand on fait F5 ? JS++

Que se passe-t-il s'il faut révoquer un accès ? JS++

Le SEO ? Problème auto-imposé, et donc JS++

Le SSR, l'hydration ? JS++

CSS ? Non, JS++


<img class="r-stretch" data-src="assets/goldblum-quote.jpeg" >
De la soupe de JSON.
Notes: "View as a function of State" promulgué par React, bonne idée ! Mais
dans les faits c'est surtout "as a function of JSON"

Une industrie entière basée sur un format parce qu'on a voulu séparer les Fronteux des Backeux (OpenAPI, GraphQL, zod, et pareil côté Backend)

Perversion des principes du Web pour certaines raisons (cf chapitre dédié)


<img class="r-stretch" data-src="assets/never-full-react.jpeg" >

Javascript fatigue...
Notes: Maintenir tout ça

Passer sur la nouvelle version du framework, des dépendances

Gérer les vulnérabilités, faire de la veille, appréhender la suite

Passer sur un nouveau framework...pour quel ROI ? Pour le fun ? Le CV ?

Réinventer la roue c'est cher: on prend celle des voisins (left-pad, isEven, etc.)

Rocher de Sisyphe, quoi.


<img src="assets/lazy-loading-lol.png"/>
Notes: Oui je sais Linkedin c'est le mal.

Mais c'est partout maintenant. Ce n'est pas juste "le Back", c'est un ensemble.


<img src="assets/js-bloat.png"/>
Notes: Ça veut tout dire, non ?

On fait plus compliqué, alors qu'on devrait faire plus simple

Surtout sur du CRUD


Un autre monde est possible !
Notes: Un monde où les standards ne changent pas radicalement chaque année

Et sont même là depuis des dizaines d'années

Lindy Effect

Où les briques sont backward-compatibles

Où l'onboarding des nouveaux facilité

Le vendor lock-in limité à ce que vous y mettez



## Parlons donc d'HTMX
Notes: C'est quoi donc ?


Une librairie.

<img class="r-stretch" data-src="assets/no-bundler.jpg" >
Notes: Juste une librairie, car le reste existe déjà

Dérivée d'Intercooler.js

Principe Unix: "Do one thing and do it well"

Mais dont le pitch est simple: vous avez déjà un framework pour faire du Web (HTTP, HTML, CSS et JS)


HATEOAS et AJAX

<img class="r-stretch" data-src="assets/htmx-club.jpg" >

(non ce ne sont pas des héros grecs)
Notes: Hypermedia As The Engine Of Application State

Asynchronous Javascript and XML, le très mal nommé

HATEOAS: C'est l'Hypermedia (HTML) qui porte l'application.
HTML est structuré, accessible, compressible, découvrable, etc.
Les entêtes sont extrêmement important en HATEOAS (Redirections, Liens vers d'autres ressources, etc.)

On se repose donc lourdement sur HTTP

CSS décore, comme d'hab'

HTMX porte les interactions avec son JS

On ne fait donc du JS que pour des besoins très précis: Là un langage léger est pertinent !


```html
<button hx-post="/clicked" hx-swap="outerHTML">
  Click Me
</button>
```

> “Quand un utilisateur clique sur ce bouton, envoie une requête AJAX vers `/clicked`, et remplace le bouton par le HTML de la réponse.”
Notes: Simple, net, et sans bavure.

hx-post est un trigger, hx-swap défini le comportement au retour


```html
<table>
	<thead> ... </thead>
	<tbody id="result"> ... </tbody>
</table>
<form
  method="POST"
  hx-post="post-form"
  hx-target="#result"
  hx-swap="beforeend"
>
```

> “Quand un utilisateur soumet le formulaire, envoie une requête AJAX `POST` vers `/post-form`, et ajoute le HTML de la réponse juste avant la fin du tag ayant l'id `result`.”
Notes: Simple, net, et sans bavure.


```html
<tr hx-get="/contacts/?page=2"
    hx-trigger="revealed"
    hx-swap="afterend">
  <td>Agent Smith</td>
  <td>void29@null.org</td>
  <td>55F49448C0</td>
</tr>
```

> “Lorsque cette ligne est révélée dans le viewport, envoie une requête GET vers `/contacts/?page=2`, et ajoute le HTML de la réponse après cette ligne”


Oh vous voulez plus complexe ? Ok !


```html
<h2>Contacts</h2>
<table class="table">
  <thead>...</thead>
	<tbody id="contacts-table" hx-get="/contacts/table"
		hx-trigger="newContact from:body"> ... </tbody>
</table>
<h2>Add A Contact</h2>
<form hx-post="/contacts"> ... </form>
```

> “Lorsqu'on soumet le formulaire, envoie une requête POST vers `/contacts`. La réponse aura un en-tête `HX-Trigger:newContact` qui déclenchera une requête GET vers `/contacts/table`, ce qui rafraîchira la table.
Notes: Yep, c'est de la programmation évènementielle.

Sans observable, sans signaux, sans hooks.

Get rekt.


Résumé
- Front + Back sont l'«application» Web
- HTML d'abord
- CSS pour décorer
- JS *uniquement* quand c'est nécessaire

C'est tout. <!-- .element: class="fragment" -->

Le reste, c'est votre boulot. <!-- .element: class="fragment" -->
Notes: On s'impose ni SPA, ni MPA (ça peut même être hybride, osef)

WYSIWYG, et c'est ça, finalement la révolution

Pas de minification ou d'obfuscation abusive, la compression et mise en cache se font avec HTTP

C'est trop simple pour être vrai, hein ?


HTMX est ce que le HTML aurait dû devenir avant qu'on bascule dans le «tout Javascript»
Notes: Mais tout n'est pas perdu !



## Pourquoi HTMX en 2024 ?


Parce que les WebComponents sont (enfin) matures
Notes: Énormément de chemin parcouru

La moitié de la proposition de valeur des frameworks web part en fumée

Encore des choses à voir (Shadow DOM) mais ça progresse


Parce que CSS a beaucoup évolué
Notes: et s'embarque très bien dans les WebComponents

Variables, règles, display, etc.

Mais vous pouvez coller du Tailwind si vous vous voulez, hein !
Sauf que là on est dans un esprit plutôt #NoBuild

Ou, du moins, #OnlyAddWhenNecessary


Parce que Javascript a également évolué
Notes: Les classes ont permis l'émergence des WebComponents

Les futures évolutions (private fields) permettront davantage d'isolation

Reste le problème du typage mais Typescript ou JsDocs font le taf

Cela dit, j'insiste #OnlyAddWhenNecessary



## Un ch'ti PoC
<img class="r-stretch" data-src="assets/backend-dev.jpeg" >


Front en HTML (incluant des WebComponents), du CSS, et...HTMX !


Juste du JS dans les WebComponents pour leur cycle de vie


Un backend en...Rust !
Notes: Alors c'est juste pour mon plaisir personnel

D'autres ont de très bons retours avec Go + Templ

L'important c'est la facilité de renvoyer du HTML

Pas besoin d'être une experte sur le sujet, vous allez vite vous y retrouver


C'est parti !

<img class="r-stretch" data-src="assets/dora.png" >



## En gros, c'est PHP/Django/RoR ?
<img class="r-stretch" data-src="assets/old-school.png" >

Notes: PHP a également beaucoup évolué !
C'est de toute façon le moteur de 80% du Web (Wordpress)
Reste le poids de l'historique dans le langage, l'écosystème Apache, etc.

Citons notamment Symfony et Laravel côté frameworks

La philosophie est proche d'HTMX, en tout cas, comme quoi l'idée était déjà dans l'air du temps

Django et RoR sont des frameworks qui apportent de la productivité indéniables

Très utiles pour ceux que ça aide, en plus y a de l'intégration tierce (ORMs, Authentification, etc.)

Peuvent tout à fait s'utiliser avec HTMX en front !

Donc faut ouvrir ses chakras car…


<img class="r-stretch" data-src="assets/boring-is-good.jpg" >
Notes: Lindy Effect



## Ne plus penser en Front/Back mais en Front+Back


Vous êtes des devs, vous apportez une solution
Notes: Vous n'êtes pas juste là pour "clore du ticket JIRA"


L'approche Produit est forcément globale
Notes: Des fois il y aura un peu de Front, d'autre fois beaucoup

Pareil côté Back


« Front+Back y a trop de choses à savoir ! »
Notes: Spoiler alert -> Non.

S'il y a trop c'est qu'il y a beaucoup à dégager, justement.

Revenir à quelque chose de simple, fonctionnel, "MVP"


> “Il ne faut toucher à l'architecture que d'une main tremblante.”
>
> *Montesquieu contemporain*



## En conclusion ?

- Une critique assez forte du «Resume Driven Development»
- Revenons à la simplicité: traitons du métier avant de se faire plaisir avec de la technique
- L'importance des abstractions: HTML, CSS, JS, à chaque couche son objectif


Vous n'êtes pas Dev X/Y/Z.
<img class="r-stretch"  src="assets/you-are-not-your-web-framework.jpeg" >

Vous êtes un Dev —tout court— <!-- .element: class="fragment" -->
Notes: Être un dev ne suffirait apparemment pas, il faut être un Dev "React", "Java", etc.

Et donc croître, croître, et justifier cette croissance.

Donc on en rajoute, là où on devrait plutôt enlever

et se concentrer sur les problèmes et les solutions qu'on peut apporter.

On n'est pas là pour pousser du JS à tout prix, seulement quand c'est nécessaire.



Retrouvez ce POC sur mon dépôt Github:

<img
    class="r-stretch"
		src="assets/qr-code.gif"
		style="width: 25rem; height: auto;"
		alt="QR Code pointant vers le dépôt Github"
/>

https://github.com/StephaneTrebel/poc-htmx-rust