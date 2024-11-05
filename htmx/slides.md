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


<img class="r-stretch" src="assets/eroom-law.png" alt="La loi d'EROOM">
Notes: Et il y a d'autres tendances qui viennent alourdir encore le constat.
Comme les sujets de GreenIT, lesquels viennent régulièrement nous rappeler que l'exigence de performance, et d'accessibilité, sont au cœur des enjeux de demain.

Imaginez, comme le conceptualise Tristan Nitot, qu'on vous donne un seul terminal à utiliser toute votre vie !


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


<img class="r-stretch" src="assets/htmx-over-time.png" alt="La librairie qui monte, qui monte">
Notes: Rappeler que c'est peanuts comparé à React, bien évidemment.


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

WYSIWYG, et c'est ça, finalement la "révolution"

Pas de minification ou d'obfuscation abusive, la compression et mise en cache se font avec HTTP

C'est trop simple pour être vrai, hein ?


HTMX est ce que le HTML aurait dû devenir avant qu'on bascule dans le «tout Javascript»
Notes: Mais tout n'est pas perdu !



## Pourquoi HTMX en 202x ?


<ul role="list" class="custom-list-types">
  <li data-icon="💪">WebComponents sont (enfin) matures</li>
  <li data-icon="🖌">CSS a beaucoup évolué</li>
  <li data-icon="🌠">Javascript a également évolué</li>
</ul>
Notes: Énormément de chemin parcouru sur les WebC. Libraires notamment
La moitié de la proposition de valeur des frameworks web part en fumée
Encore des choses à voir (Shadow DOM) mais ça progresse

Vous pouvez coller du Tailwind si vous vous voulez, hein !
Sauf que là on est dans un esprit plutôt #NoBuild

Les classes ont permis l'émergence des WebComponents.
Reste le problème du typage mais Typescript ou JsDocs font le taf

Cela dit, j'insiste #OnlyAddWhenNecessary



## Un ch'ti PoC
<img class="r-stretch" data-src="assets/backend-dev.jpeg" >


<ul role="list" class="custom-list-types">
  <li data-icon="🎨">Front en HTML (incluant des WebComponents), du CSS, et...HTMX !</li>
  <li data-icon="⌛">Juste du JS dans les WebComponents pour leur cycle de vie </li>
  <li data-icon="🦀">Un backend en...Rust !</li>
</ul>
Notes: Rust c'est juste pour mon plaisir personnel.
D'autres ont de très bons retours avec Go + Templ

L'important c'est la facilité de renvoyer du HTML, et de gérer le state côté backend, uniquement


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



## Le «XY problem» qui nous a conduit à vouloir tout résoudre avec du JS
Notes:
Définir le XY problem


HTML et CSS ont évolué mais pas assez vite pour le "Web 2.0"
Notes: Web au début des années "10" (Internet Explorer, Google Chrome, Iphone, No React, Angular.js débute)

Beaucoup de monde déployait encore en prod avec un simple SSH.

Plateforme de distribution de documents -> On veut distribution d'Applications

Sauf que le Web n'est pas fait pour les applications (par de libQt, VisualStudio, etc.)

HTML , CSS , et le Javascript qui est capable, avec du code exécutable, d'interagir avec le DOM.

Problématiques: composants réutilisables (WebComponents n'existent pas encore), scoping CSS (et sa non-programmatisation)

Reste un truc intéressant pour le dev applicatif: Javascript


Javascript est un langage très facile à apprendre (mais très difficile à maîtriser)

Notes: Simple à apprendre, nativement supporté dans les navigateurs, et sa légèreté versus les environnements de développement propriétaires (moi je viens de ERP).

En revanche on a clairement sous-estimé son plafond (prototypes, callbacks anyone ?)

Et bam, le ver était dans le fruit: Puisqu'on peut modifier le DOM avec le Javacript, on VA modifier le DOM avec le Javascript.

Routage qui nous fait perdre le fil de notre javascript ? SPA !

Faire des allers-retours avec les backends ? État local !

Le mobile et les progressive web apps émergent, et tout ça demande beaucoup de Javascript ! Ça par contre, ça a été assez vite douché, pour le meilleur et pour le pire, côté Mobile.


Le "problème" Node.js
Notes: Domestiqué le Front avec le Javascript -> Maintenant le Back

Node.js est une pure merveille de technologie: V8 côté serveur ! Event Loop ! Branchements C++ !

Mais attention au principe du Marteau.

Node.js s'aborde simplement mais il y a un plafond de skill très haut (Buffers, Streaming, etc.)

Combiné à la souplesse permissive de Javascript…aïe aïe aïe !

Compétences Front ne sont pas équivalentes en Back (BDD, réseau, sécurité, etc.).

Javascript en Front, en Back, et au milieu ? De la Soupe de JSON.

Et les fossoyeurs de nous vendre les pelles (Bundling, API Management, GraphQL, Typescript, etc.).



## Pour aller plus loin


<img class="r-stretch" src="assets/hyperscript.png" alt="Hyperscript, un nouveau pseudo-code pour un meilleur Web">


## En conclusion ?

<ul role="list" class="custom-list-types">
  <li data-icon="🛑">Une critique assez forte du «Javascript EVERYWHERE»</li>
  <li data-icon="🙅">Gérons le métier avant de se faire plaisir avec de la technique</li>
  <li data-icon="🍰">À chaque couche (HTML, CSS, JS, ) son objectif, ses affordances, etc.</li>
</ul>


Vous n'êtes pas Dev X/Y/Z.
<img class="r-stretch"  src="assets/you-are-not-your-web-framework.jpeg" >

Vous êtes un Dev —tout court— <!-- .element: class="fragment" -->
Notes: Être un dev ne suffirait apparemment pas, il faut être un Dev "React", "Java", etc.

Et donc croître, croître, et justifier cette croissance.

Donc on en rajoute, là où on devrait plutôt enlever et se concentrer sur les problèmes et les solutions qu'on peut apporter.

On n'est pas là pour pousser du JS à tout prix, seulement quand c'est nécessaire.
