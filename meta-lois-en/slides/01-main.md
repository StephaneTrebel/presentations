##  Welcome! 👋

/*
Merci pour l'invitation 💓
*/

## .[full-image]

!image(assets/laurie-strode.gif,Laurie Strode — our heroine,800)

/*
Elle, c'est Laurie.

Et c'est la protagoniste de notre histoire.
*/

## .[full-image]

!image(assets/totally.gif,'Totally',1000)

/*
Laurie est jeune, insouciante, et elle rêve d'une chose: travailler avec ses amies dans l'univers merveilleux du développement Web.
*/

## .[full-image]

!image(assets/michael-myers-lurking.gif,Michael Myers is always lurking,1000)

/*
Mais…elle ne se doute pas qu'elle est, malgré elle, suivie par des entités qui ne lui veulent pas, mais alors pas du tout, du bien !
*/

## .[full-image]

!image(assets/psycho-shower.jpg,The shower scene from Psycho,1000)

/*
To Be Defined
*/

## “What's a Meta-Law?” I hear you ask.

/*
N'inspire pas comme Dark Vador, prends ton temps pour inspirer
*/

## .[full-image]

!image(assets/metacortex.jpeg,Metacortex,1200)

##### That's...ominous ?

/*
Laurie débarque fraîchement dans sa nouvelle boîte Metacortex. Un fleuron de l'industrie du numérique qui recrute dès la sortie d'école pour offrir un avenir radieux dans le développement logiciel !
*/

## .[full-image]

!image(assets/metacortex-manager.jpeg,Laurie's manager — not exactly friendly!,1400)

##### "Our burn-out rate is only third in the Company, you know ?"

/*
Et son manager la colle sur un projet en tant que "Développeuse Front sur la page Panier du site d'Ecommerce d'une grande marque".

Elle aura en charge de contribuer à développer les fonctionnalités de cette page avec son équipe, et elle dépendra intégralement des autres équipes, que ce soit du Back pour récupérer les données du panier, ou encore des autres équipes Front pour récupérer les informations utilisateur.

Laurie s'interroge. Elle est développeuse Web, elle pourrait tout à fait s'occuper du Front, et du Back. D'ailleurs elle a été formée à pouvoir traiter de toutes les couches, de la Conception à l'infrastructure, en passant bien sûr par le Front et le Back
*/

## .[full-image]

!image(assets/new-agent.jpeg,,1700)

##### "You have to understand: you're part of the (corporate) Matrix, now..."

/*
Et là son manager lui dit:
"Non nous on ne fait que du Front, et encore sur la page Panier. Écoute, tu viens d'arriver, tu es jeune, tu ne sais pas comment ça se passe dans le monde des adultes. Ici chez Metacortex on est très très sérieux et on utilise des méthodes de pointe comme SCRUM, etc. Toi tu t'adaptes. T'es ici pour faire du Front, et uniquement du Front."

Laurie vient de découvrir…
*/

## .[chapter]
# Conway's Law
#### > Any organization that designs a system will produce a system that mirrors how that organization communicates.

/*
Faire un sondage à main levée pour voir qui connaît
*/

## In other words…

<ul role="list" class="custom-list-types">
  <li>🛑 Your architecture is already decided: just look at your teams</li>
  <li>🙅 Every team has its habits and its own territory</li>
  <li>🍪 “Culture eats strategy for breakfast.”</li>
</ul>

/*
Citation de Peter Ferdinand Drucker, un consultant en management

Souci des modifications transverses.

Conséquences à la fois sur les API et aussi sur l'organisation du travail (ticketing) et les dépendances que ça va créer dans les équipes ("on ne sait plus qui fait quoi").

Le lien avec le métier est difficile, car le métier évolue sans que les équipes évoluent forcément
*/

## How can we work around Conway's Law?

<ul role="list" class="custom-list-types">
  <li>👷 Build teams that work across the whole stack (DevOps, Full Stack, etc.)</li>
  <li>🏴‍☠️ Let people switch teams to share good practices</li>
  <li>🦄 Value a mix of skills (cross-functional task forces)</li>
</ul>

/*
Ce ne sont pas les gens qui sont DevOps, ce sont les projets.

Task forces: couper à travers les pyramides managériales.
*/

## Anyway… back to Laurie

/*
To Be Defined
*/

## .[full-image]

!image(assets/laurie-strode-focused.jpg,Laurie has never been so focused,1500)

##### “What if I deleted this bit of code? It looks like a real mess…”

/*
Notre Laurie s'attaque donc à la base de code de son équipe, d'ailleurs entièrement composée de juniors comme elle, et c'est un vrai plat de spaghetti ! Ardente et motivée elle commence à mettre de l'ordre là-dedans, pour vite se rendre compte que quoi qu'elle touche, une autre partie de la page se casse la figure...un vrai Mikado !
*/

## .[full-image]

!image(assets/dawn-of-the-dead-1978-zombies.png,Not the most open-minded colleagues,1500)

##### "What have you doooooooone !"

/*
Et elle se fait vite reprendre par ses collègues car tout le sprint en prend pour son grade avec ses bugs à répétition. Oui les boutons sont moches, oui il y a du contenu qui bouge au chargement, mais tout ça c'est pour corriger d'autres bugs bien plus gênants !
*/

## Poor Laurie has just run into…

/*
To Be Defined
*/

## .[chapter]
# Chesterton's Fence
#### > Before changing something, first understand why it is the way it is.

/*
Timing: 5:40

«Chesterton's Fence», car c'est basé sur un exercice de pensée autour d'une palissade, que quelqu'un envisage de détruire car il ne voit pas à quoi elle sert. Ce à quoi son compagnon non seulement lui interdit de la détruire, mais l'oblige en outre à déterminer la raison de l'existence de cette palissade AFIN de pouvoir comprendre pourquoi il faut la détruire.

Pas vraiment besoin de vous détailler le lien avec cette naïve Laurie, vous l'aurez compris: toucher à une base de code sans savoir vraiment pourquoi les choses sont comme elles sont vous exposera à la plus sévère des punitions: corriger un bug de Prod en urgence un vendredi à 18 h 30 !
*/

## In other words…

<ul role="list" class="custom-list-types">
  <li>💰 “Legacy” projects pay the bills. Let's treat them with respect!</li>
  <li>🧓 “Legacy” starts at the first commit. Maintaining it is a good thing</li>
  <li>😅 That “messy” code has a long history behind it. Understand it !</li>
</ul>

/*
Marre du Legacy, qui est souvent un tapis sous lequel on met les "vieux" projets.
Oui, sauf que les projets "anciens" sont en Prod, eux.

Vouloir réécrire à côté c'est prendre un gros risque

Le fameux "On". Pourquoi on a fait ça ? "On m'a dit", etc.
*/

## How can we deal with Chesterton's Fence?

<ul role="list" class="custom-list-types">
  <li>🤔 <strong>Good</strong>: Take time to *understand* the domain (with DDD, for example)</li>
  <li>📝 <strong>Better</strong>: Document the business rules yourself (automated tests! LLMs !)</li>
  <li>💪 <strong>Best</strong>: Improve the “Legacy” code over time. We don't have excuses anymore !</li>
</ul>

/*
pas réservé aux POs, archis, etc. ! Notre métier est LITTERAIRE (lire de la doc, écrire de la doc, des ADRs, des messages de commits, etc.)

Loi de Conway n'incite pas à ce genre de réflexion -> "équipes dédiées", d'ailleurs toujours surchargées, qui sont censées s'occuper de tout ça

Règle scout: toujours laisser l'endroit plus propre qu'on l'a trouvé
*/

## Let's check in on Laurie again…

/*
To Be Defined
*/

## .[full-image]

!image(assets/michael-myers-nonono.gif,Michael Myers will not approve your PR,1200)

##### "SonarQube says NOPE !"

/*
La voilà aux prises d'un individu peu recommandable, un Tech Lead nommé "Michael", qui lui dit qu'elle a intérêt à bosser car la couverture de code est passée en-dessous des 80%, ce qui est contraire à la politique de l'entreprise, et donc que sa PR restera bloquée dans la CI, épissétou !
*/

## .[full-image]

!image(assets/laurie_crying.jpeg,Laurie is crying,1500)

##### "I got to do something to get through this Quality Gate !"

/*
Stressée par l'envie de bien faire, elle devient un peu prête à tout, quitte à écrire des tests unitaires juste pour faire remonter le taux de couverture de code au-dessus des 80%, et ainsi éviter les foudres de Sonarqube.

Il faut qu'elle passe la Quality Gate, quoi qu'il en coûte (comme dirait l'autre) !
*/

## Bad move — Laurie has walked straight into…

/*
To Be Defined
*/

## .[chapter]
# Goodhart's Law
#### > When a measure becomes a target, it stops being a good measure.

/*
Timing: 9:24.

Les humains sont prédictibles: iels cherchent la voie du moindre effort surtout en situation de stress.

Si vous leur mettez la pression à un sujet, leur énergie sera dépensée non pour atteindre les objectifs,
mais pour pervertir le thermomètre à moindre effort.
*/

## .[full-image]

!image(assets/meta-lois-goodhart.png,Ah yes — all those useless KPIs,1000)

/*
To Be Defined
*/

## How do we stop breaking the thermometer?

<ul role="list" class="custom-list-types">
  <li>🤨 Stop saying “Something went wrong — quick! We need a metric!”</li>
  <li>🦾 Use a <em>small</em> set of team metrics for things the team <em>controls</em></li>
  <li>🫂 Review them with <em>kindness</em>. A metric is just a chance to improve</li>
</ul>

/*
«Un fait divers, une loi»

L'équipe doit être maîtresse de son destin.

Moi je m'impose 115% :D

SLO/A/I: Service Level Objective/Agreement/Indicators
*/

## .[full-image]

!image(assets/teletubbies.jpg,Kindness is a big word,1500)

##### Come, we have foosball ! Pastries ! And bore-out too...

/*
Quand je parle de Bienveillance, je ne parle pas des babyfoots, des happenings, etc.

Je parle de ce qui est le plus dur à maintenir dans la durée: un écosystème qui permette à chacun de travailler dans de bonnes conditions, d'avoir la possibilité de donner le meilleur de soi-même, bref d'avoir du sens et de l'autonomie.

Exiger la bienveillance. On est intraitables avec le code tout en étant adorable avec les gens 🤗

Moi, je suis particulièrement concerné, entre le Full Remote, Linux, et Neovim, car c'est pas évident...
*/

## So… how's Laurie doing?

/*
To Be Defined
*/

## .[full-image]

!image(assets/laurie_armed_knife.jpg,Laurie with a lovely knife,1200)

##### "I have had it with these darned meta-laws in this darned meta-talk !"

/*
Elle en marre de se faire marcher dessus, elle s'est (bon ici, un peu trop littéralement) armée de son expérience pour affronter les métas-lois. Elle est sûre d'elle, très sûre d'elle...trop sûre d'elle ?
*/

## .[chapter]
# The Dunning–Kruger Effect
#### > People with limited skills in a field often overestimate their abilities.
<br/>
<br/>

#### Corrolary:

<br/>

#### > Highly skilled people tend to underestimate their abilities in their own field.

/*
Timing: 12:24
*/

## .[full-image]

!image(assets/dunning-kruger.png,A graph from Dunning and Kruger's study,1000)

/*
Voilà le graph originel de l'étude.
Alors on a dit beaucoup de bêtises sur DK, notamment dans le cadre de l'étude de la porosité des gens à la désinformation. Il y a d'ailleurs apparemment des différences culturelles qui tempéreraient tout ça.

Analyse des bottom performers et top performers
*/

## There are three kinds of knowledge:

<ul role="list" class="custom-list-types">
  <li>😌 Things we know</li>
  <li>🤔 Things we know we don't know</li>
  <li>🤯 Things <strong>we don't know</strong> we don't know</li>
</ul>

/*
Si vous pensez ne pas être affecté par l'effet Dunning-Kruger, vous êtes très probablement affecté par l'effet Dunning-Kruger :)

Détailler, parler du champ des possibles. Illustrer avec les bottoms et top performers.
*/

## The fix? Easy. Really.

<ul role="list" class="custom-list-types">
  <li>🏃 Keep questioning your own assumptions</li>
  <li>👂 Look for skilled people who don't give themselves enough credit</li>
  <li>🧘 Watch out for impostor syndrome: trying and failing is learning too</li>
</ul>

/*
To Be Defined
*/

## Now Laurie can make a fresh start 😌

/*
To Be Defined
*/

## .[full-image]

!image(assets/matrix_architect.jpg,The Architect — guardian of the System,1600)

##### “Well, it works on my PowerPoint ! So get to it !”

/*
Sauf qu'en rétrospective elle se fait un peu gentiment allumer par l'Architecte, car elle avait dit que son dev prendrait 3j et ça a fini par prendre trois semaines (merci Dunning-Kruger !) donc avec tout ça elle est à la bourre et c'est pas ce qu'il avait prévu dans son joli powerpoint. Et il s'est engagé auprès du client sur le fait que la page Panier serait capable de montrer des vidéos en 4K des produits réservés, donc ça va pas du tout, ça !
*/

## .[full-image]

!image(assets/the_shining-twins.jpg,The twins from The Shining,1300)

##### Come rewrite a monolith in Rust with us !

/*
Aïe, oui, ça a pris plus de temps que prévu, car deux sœurs jumelles ourdissaient déjà dans le dos de Laurie...

Qui ? Je veux bien sûr parler de...
*/

## .[chapter]
### Hofstadter's Law:
#### > It always takes longer than you expect, even when you take Hofstadter's Law into account.

<br/>
<br/>

### Parkinson's Law:
#### > Work expands to fill the time available for it.

/*
Timing: 15:115

Ou pourquoi les estimations c'est de la daube 🙄

On va commencer par Hofstadter: Les humains sont *catastrophiquement* mauvais dans leurs estimations:

Soit on sous-estime parce que Dunning Kruger, Chesterton, Conway, etc.
Soit on sur-estime parce que bon, on a dit qu'on s'occupait de trois tickets dans le sprint donc on ne pas s'en rajouter plus que ça, hein les gens ! 😉
*/

## .[full-image]

!image(assets/dhh-software-estimates-never-worked.png,DHH's article: Software estimates have never worked and never will,1500)

/*
Et ça reste un sujet qui fait régulièrement l'actualité !

On a beau faire des story points, des tailles de Tshirts, etc. ça fonctionne rarement.
*/

## .[full-image]

!image(assets/yo-dawg.jpg,I heard you like meetings so I scheduled a meeting to talk about meetings,1200)

## .[full-image]

!image(assets/eloge-de-la-simplicite.png,,1200)

/*
Et la Loi de Parkinson, elle, est particulièrement pernicieuse car on va avoir tendance à prendre "la place disponible" dans notre emploi du temps, alors que si on avait rationalisé le temps on aurait pu faire plus de choses.

Et on adore ça les réunions, les rituels...vocabulaire de Religion ça, non ? C'est vous dire à quel point c'est compliqué de remettre ça en cause, on atteint le stade de la croyance. Même si les réunions pouvaient être remplacées par un simple mail, même si c'est devenu un motif pour revenir sur le télétravail, c'est pernicieux à ce point là.

Et le pire ? C'est que Parkinson s'applique aussi aux managers de tout poil, aux SCRUMMasters, POs, etc. Et tout ce monde là va "occuper la place disponible" avec des réunions, à tel point que des fois on se demande si on travaille encore, ou bien si notre travail est devenu, juste, de la réunionnite.
*/

## Sooo… now what?

<ul role="list" class="custom-list-types">
  <li>👂 Stop estimating? Tempting! But a tough sell</li>
  <li>🏋️‍♂️ Remember: the “M” in MVP means “Minimum”. Iterate, iterate, iterate</li>
  <li>🐷 Give honest (anonymous!) meeting ratings (ROTI). Prefer async communication</li>
</ul>

/*
L'ancien monde et ses deadlines, diagrammes de GANTT, gestion de projet à l'ancienne (on ne fait pas des ponts…)

Trancher dans les MVP, et atteindre le cœur de l'itération.

Concernant les réunions: faut mesurer le ROI, remettre en question l'ODJ, etc.
Privilégier l'asynchrone: avez-vous besoin d'une réunion si la doc est écrite, et si elle est lue ? ADR, etc.

Et, pour aider à la prédictibilité des tâches, on peut par exemple utiliser des «Boring Technologies» (cf L'Effet Lindy).
*/

## .[full-image]

!image(assets/laurie_wondering.jpeg,Laurie is about to learn something new — again,1000)

##### “Wait… what did he just say? What's this Lindy Effect?”

/*
En m'entendant parler (oui après tout y a pas que Deadpool qui a le droit de casser le 4e mur), Laurie s'interroge à haute voix:
*/

## .[full-image]

!image(assets/boring-is-good.jpg,Boring technologies are good,1300)

/*
Un collègue Senior, d'une antique équipe chargée de maintenir un logiciel de comptabilité en COBOL, entend la question de Laurie et décide d'intervenir pour y répondre.

« En gros, les technologies dites "ennuyeuses", ou "anciennes" sont de bonnes technologies, car elles ont passé l'épreuve du temps »
*/

## .[chapter]
# The Lindy Effect
#### > For imperishable things (like code), the longer they have existed or been in use, the longer we can expect them to last.

/*
Timing: 20:17

Je vous laisse vous chauffer le ravioli avec ça deux secondes 😁
*/

## In other words…

<ul role="list" class="custom-list-types">
  <li>🗻 Things that last have a reason to last — and that reason keeps them going</li>
  <li>👶 New things haven't faced the real world yet</li>
  <li>🙏 New ideas must prove useful… even if they grow old along the way!</li>
  <li>💡 “Modern” means “of our time” — not necessarily “better”</li>
</ul>

/*
- Le statu quo est cette fois votre allié: se concentrer sur la maintenabilité de ce qui est existe coûte beaucoup moins cher que de faire fonctionner le dernier truc à la mode qui vient de sortir et qui sera probablement has-been dans un an, ou cinq.
- Faire sa veille mais ne pas en faire sa boussole
- Bannir le « CV Driven Development ». Le monde ne tourne pas autour de votre CV. Les utilisateurs se contrefichent que ça aide votre carrière.
*/

## .[full-image]

!image(assets/laurie-strode-at-last-senior.jpg,You can see the weight of Meta-Laws on her face,1500)

##### With those wise words in mind, Laurie takes on her Cart page again…

/*
Elle décide d'appliquer ce qu'elle a appris, et elle se rend compte qu'elle pourrait dramatiquement simplifier son code si elle affichait chaque produit dans une page dédiée: en effet elle pourrait réutiliser la page d'affichage des produits dans le catalogue ! Woah, pourquoi n'y a t'elle pas pensé avant ? En plus ça corrigerait pas mal de bugs qu'elle avait lorsqu'elle s'est prise la Palissade de Chesterton ! Coup double, donc ?
*/

## .[full-image]

!image(assets/john-carpenters-the-thing-dog.png,A lovely dog,1500)

##### Who's a good little complexity ? You are! Yes you are!

/*
Sauf que…Les utilisateurs se plaignent immédiatement d'un tel changement: plutôt que d'avoir toutes les informations sur la page Panier, v'la't'y pas qu'iels doivent maintenant ouvrir chaque produit dans un nouvel onglet pour en voir les détails ? Un scandale !

La complexité, terrifiant, prend des formes multiples, et il faut savoir qui va l'assumer.

Car on ne fait pas ce qu'on veut avec la complexité, à cause de...
*/

## .[chapter]
# Tesler's Law
#### > An application's inherent complexity can never be fully removed or hidden. You can only move it around and make trade-offs.

/*
Timing: 23:33
*/

## In other words…

<ul role="list" class="custom-list-types">
  <li>😅 Your application will always have some complexity</li>
  <li>💵 It's in your code (DX), the user experience (UX), the costs (FinOps), etc.</li>
  <li>⚖️ Find the right balance and focus on your strengths</li>
</ul>

/*
Il y a la "bonne" et la "mauvaise" complexité quoi. C'est FORCÉMENT un compromis

Par ex: Une application web interne qui fait du CRUD pour 10 personnes a-t-elle besoin de Kubernetes, ou de Microfrontend ? Le cœur de l'application n'est pas sa scalabilité, ni l'agnosticité du déploiement ! Donc ptet pas justifié

En revanche si votre application contient de l'algorithmique complexe pour éviter à vos utilisateurs d'avoir à jongler entre deux écrans, la question peut se poser. Mais là-aussi il faut être conscient du coût (et pas que financier, la santé mentale de la maintenance aussi c'est un coût)

On en revient à nos différentes technologies, à la veille, etc. Améliorer son discernement pour comprendre la valeur ajoutée de l'application (ou de la couche sur laquelle vous bossez) et qui JUSTIFIE sa complexité.

On n'oppose pas les devs et les users !
*/

## .[full-image]

!image(assets/young-laurie-strode-smiling.jpg,Laurie has finally found something useful to do,700)

##### Anyway… Laurie gets back to her application's complexity…

/*
Et elle voit un truc qui est très débile: quand le Panier est vide, il y a quand même un article, mais avec une quantité à 0 et un prix à 0€. Elle recroise avec sa PO (éviter le Chesterton) qui lui dit que c'est effectivement un vieux bug, mais qu'on s'en fiche car la page Panier n'est pas affichable si le total est nul.

Elle supprime, confiante que ça n'a aucun sens, et en plus ça simplifie son code...
*/

## And then…

### 💥 Production bug! The order total in the header says `undefined` 😱

/*
C'est ballot, hein. Voilà que son pire cauchemar se produit...elle est pourtant sûre que ce comportement n'a aucun sens. Il n'est d'ailleurs même pas documenté. Comment est-ce possible que ça serve à quelqu'un un truc pareil ?
*/

## .[full-image]

!image(assets/a-nightmare-on-elm-street.jpg,Fredundefined will always find you,1500)

##### Your worst nightmares? That's his specialty. Of course I'm talking about…

/*
To Be Defined
*/

## .[chapter]
# Hyrum's Law — the Accidental Contract

#### > With enough users of your API, it doesn't matter what your contract promises.
#### > Someone will depend on every observable behavior of your system.

/*
Timing: 25:59

Ce qu'il s'est passé c'est que l'équipe qui est en charge du header se servait de ce comportement pour afficher le total de la commande, et comme maintenant il n'y a plus d'article dans le panier, ben ça devient undefined.

Et en plus ce code tout pourri ils ne vont pas le changer parce que tu comprends Laurie y a un NOUVEAU HEADER qui va arriver et remplacer ce header Legacy tout pourri donc…rollback stp !
*/

## .[full-image]

!image(assets/xkcd-workflow.png,The famous XKCD 'Workflow' comic about this very problem,700)

/*
There's always an XKCD for that :D
*/

## Sounds easy enough to handle… on paper:

<ul role="list" class="custom-list-types">
  <li>😅 Expose only what you need to</li>
  <li>📣 Tell everyone about changes</li>
  <li>🤓 SemVer is a <strong>lie</strong></li>
  <li>😤 Test, test, test</li>
</ul>

/*
Il faut arrêter de se cacher derrière son petit doigt et accepter que toute mise à jour (oui, même un patch) peut être un Breaking Change.

Et même, documenter les changements c'est pas facile. Celleux qui ont déjà faite une CHANGELOG le savent.

Et, pour les briques qui sont utilisées par des clients internes, rappelez que le client est tout autant responsable de ce qu'il accepte que vous êtes responsables de ce que vous livrez: ils ont le droit, et l'obligation morale, de faire des tests, non mais !
*/

## .[full-image]

!image(assets/linus-was-right.png,Linus is always right,900)

/*
Rappelez vous Linus Torvalds: WE DO NOT BREAK USERSPACE!

D'ailleurs on pourrait légitimement me faire remarquer que Linus n'est pas très bienveillant, là, mais au-delà de la forme, son message est un message de bienveillance à l'égard de _ses_ utilisateurs. S'il pète un câble, c'est bien parce que l'un des mainteneurs du noyau a décidé de privilégier son expérience aux dépens de celle de ces utilisateurs. C'est là qu'est le drame !

Notez d'ailleurs qu'il attaque le code, la solution, mais pas la personne. C'est ça de la bienveillance. On a le droit de se tromper, mais on n'a pas le droit de ne pas le reconnaître. Bon il aurait pu y aller moins fort, mais est-ce qu'on s'en serait souvenu ?

Il l'a fait là, contre nvidia, au sujet de l'intégration de Rust dans le Kernel, etc.
*/

## .[full-image]

!image(assets/laurie-au-telephone.jpg,Laurie on the phone,1400)

##### “Hello Guild! I've opened a PR to update our in-house framework”

/*
Laurie, voulant bien faire, va faire une modification (pour une fois) bien appropriée dans l'un des nombreux repos du projet, pour sa page panier. Car bien sûr que même sur sa page de prédilection, elle doit quand même aller demander le droit d'aller modifier des choses, car c'est """transverse""".
*/

## .[full-image]

!image(assets/dracula.jpeg,Francis Ford Coppola's Dracula,1500)

/*
Sauf que bon, elle n'a aucune idée que sa PR, son besoin, est le cadet des soucis de la Guilde, qui a des choses beaucoup plus importantes à faire, comme débattre de la plus belle manière d'arranger des ternaires avec Prettier, ou encore si on change le % de couverture de code...

Elle n'a qu'à ouvrir un ticket et on lui répondra un jour, peut-être, si on a du temps et l'envie de le faire.
*/

## Now here's the perfect example of…

/*
To Be Defined
*/

## .[chapter]
# The Shirky Principle
#### > Institutions will unconsciously try to preserve the problem they are meant to solve.

/*
Timing: 31:44

La siloisation n'a jamais de limite. Elle s'insinue, puis elle se bureaucratise (ticketing), et ensuite vous ne pouvez. plus. l'extirper.

Comme toujours ce genre d'initiative part d'une bonne intention: on veut rationaliser les efforts, on veut éviter que "ça dérive", on veut garder le contrôle, parce que les devs, forcément, ils sont pas doués.

Et l'Enfer est pavé de bonnes intentions. Et vous risquez Goodhart, de la toxicité, etc. PÉDAGOGIE
*/

## In other words…

<ul role="list" class="custom-list-types">
  <li>🛑 “Guilds”, “Design Authorities” and “Support” teams that lock everything down</li>
  <li>🔒 Setups where DevOps simply can't work (thanks Conway!)</li>
  <li>🙄 “It's not us! Support Team XYZ is blocking us!”</li>
</ul>

/*
L'Enfer est pavé de bonnes intentions. Vraiment, je vais le répéter. L'Enfer est PAVÉ DE BONNES INTENTIONS.

Les services "Support" doivent intégrer leur nom: ce sont des services qui sont censés "supporter" le développement des fonctionnalités. Ça peut bien évidemment être des "lignes de défenses", car il y a tout un tas de domaines où les devs ne peuvent être experts, bien sûr.

Mais à partir du moment où on monte dans sa tour d'Ivoire et qu'on a jeté la clé, c'est terminé. Vous n'êtes plus un service support mais un service "chien de garde".

(dernier item) Et c'est bien pratique pour certaines équipes de Dev qui fuient leur responsabilités, hein. Tout le monde est concerné par cette histoire !
*/

## Let's look on the bright side:

<ul role="list" class="custom-list-types">
  <li>😌 Start with the “User”</li>
  <li>👮 “Make invalid states impossible to represent”</li>
  <li>🎭 Stop the “Security Theater”</li>
</ul>

/*
Ce que je veux dire par « Rendre impossible à représenter les états invalides », c'est de faire en sorte que vos devs ne peuvent _physiquement_ pas se retrouver dans une situation qui serait inadmissible. Un moyen pour la partie Ops, par exemple c'est d'envisager du Platform Engineering de manière à proposer en self-service des capacités de déploiement aux Devs pour éviter qu'ils vous montent un cluster k8s n'importe comment dans un coin parce que Dudule il l'a fait en bootcamp.

Le Théâtre de la Sécurité, plus largement, c'est cette apparence de "la sécurité pour valider des audits" qui n'apporte aucune sécurité, mais qui valide que vous avez bien faite le webinaire de 2h en temps et en heure. C'est un peu comme le Sentiment d'Insécurité, comme on peut difficilement lui coller un KPI (rappelez-vous Goodhart !), on trouve un peu n'importe quoi histoire d'avoir une courbe qui monte ou qui descende en fonction du gain politique.

La réalité, elle, on s'en moque. Même si la Réalité, elle, continue son petit bout de chemin malgré tout ça.

L'idée, en somme c'est d'arriver à ça:
*/

## .[full-image]

!image(assets/help-me-help-you-copy.jpg,Help me help you!,1500)

##### My favorite support team 💗

/*
Et c'est pas être une diva que de demander ça. Parce que ça c'est ce qu'on attend que les Devs disent aux clients

(et je me tue à le dire à mes clients d'ailleurs)

Bref, disruptez, bousculez, interagissez, remettez en question, piratez vos organisations ! :V
Vos clients internes et externes vous en seront reconnaissants (et envoyez-moi les récalcitrants...)
*/

## .[full-image]

!image(assets/photo-de-groupe.jpg,All the horror movie villains are here,1700)

##### There's still so much more to say about Meta-Laws…

/*
Timing: 40:00

Mais je vais commencer à manquer de temps, c'est d'ailleurs pour ça qu'il y a quelques temps j'ai décidé de répertorier dans un dépôt Git celles qui s'appliquent plus ou moins à notre métier.

Et sachez qu'il n'y a pas que l'informatique qui a des Méta-lois, il y a une page Wikipédia qui essaie de toutes les répertorier ! Je la cite dans mon repo donc vous verrez ça vous même.
*/

## .[full-image]

!image(assets/laurie-strode-au-pe-pom.jpg,Laurie went straight for the shotgun,1500)

##### Oh, no, I won't go to your 4h, so-called "Agile 6 month plan" meeting !

/*
La raison pour laquelle j'ai décidé de vous parler de ce sujet qui continue de beaucoup m'intéresser encore aujourd'hui, c'est afin de pouvoir mettre des mots sur des situations plus ou moins malheureuses qu'on a tous et toutes rencontrés à un moment.

Et mon idée est de vous donner des outils afin de vous permettre d'identifier, puis de combattre efficacement les méta-lois.

Car sinon vous risquez de subir...
*/

## .[chapter]
# Maslow's Hammer 🔨

#### > If the only tool you have is a hammer, everything starts to look like a nail.

/*
Appelée aussi la loi du marteau en or, on encore la Loi de l'instrument

C'est en particulier applicable aux hard-skills. Si vous ne connaissez qu'un langage, qu'un framework, qu'un paradigme (comme le FrontEnd), comment voulez-vous être utile dans la durée pour vos utilisateurs et vos utilisatrices ?

J'ai un autre talk autour d'HTMX qui parle un peu plus de cette remise en question.
*/

## .[full-image]

!image(assets/laurie-strode-smiling.jpg,At last — Laurie is smiling,1300)

##### Pure bliss, at a cost, though 😅

/*
Ça y est, Laurie est désormais un peu mieux armée pour survivre dans le monde merveilleux du développement logiciel. On le voit pas à sa tête ? Oui bon elle a pris un coup de vieux, hein, ça nous arrive à tous et à toutes 😅
*/
