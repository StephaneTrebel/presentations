Mais «qu'est-ce que les Méta-lois ?», vous demandez-vous ?

Hmm...Revenons à notre protagoniste, Laurie


<img class="r-stretch" src="assets/metacortex.jpeg" alt="Metacortex">
Notes:Laurie débarque fraîchement dans sa nouvelle boîte Metacortex. Un fleuron de l'industrie du numérique qui recrute dès la sortie d'école pour offrir un avenir radieux dans le développement logiciel !


<img class="r-stretch" src="assets/metacortex-manager.jpeg" alt="Le manager de Laurie, pas commode !">
Notes: Et son manager la colle sur un projet en tant que "Développeuse Front sur la page Panier du site d'Ecommerce d'une grande marque".

Elle aura en charge de contribuer à développer les fonctionnalités de cette page avec son équipe, et elle dépendra intégralement des autres équipes, que ce soit du Back pour récupérer les données du panier, ou encore des autres équipes Front pour récupérer les informations utilisateur.

Laurie s'interroge. Elle est développeuse Web, elle pourrait tout à fait s'occuper du Front, et du Back. D'ailleurs elle a été formée à pouvoir traiter de toutes les couches, de la Conception à l'infrastructure, en passant bien sûr par le Front et le Back


<img class="r-stretch" src="assets/new−agent-smith-matrix.jpg" alt="Un agent de la Matrice !">
Notes: Et là son manager lui dit:
"Non nous on ne fait que du Front, et encore sur la page Panier. Écoute, tu viens d'arriver, tu es jeune, tu ne sais pas comment ça se passe dans le monde des adultes. Ici chez Metacortex on est très très sérieux et on utilise des méthodes de pointe comme SCRUM, etc. Toi tu t'adaptes. T'es ici pour faire du Front, et uniquement du Front."

Laurie vient de découvrir…



### La Loi de Conway

> Toute organisation qui conçoit un système produira un système dont la structure est une copie de la structure de communication de l'organisation


Ce que ça veut dire concrètement pour vous, comme pour Laurie :
<ul role="list" class="custom-list-types">
  <li data-icon="🛑">Votre architecture est déjà décidée d'avance: Vos interfaces sont les équipes de l'entreprise.</li>
  <li data-icon="🙅">Si vous allez à l'encontre de cette Loi, vous allez avoir des soucis</li>
  <li data-icon="🥲">C'est de loin la plus connue et pour une bonne raison: Elle. est. OMNIPRÉSENTE.</li>
</ul>
Notes: Comme souci on peut tout simplement évoquer «Qui va être responsable de la fonctionnalité transverse: l'équipe A ou l'équipe B ?».

On peut également parler des équipes et le problème d'attribution des gens à plusieurs équipes, et bien sûr la friction de gérer ça dans le temps.


Comment mitiger la Loi de Conway ?
<ul role="list" class="custom-list-types">
  <li data-icon="🙈">« That's the neat thing: You don't. »</li>
  <li data-icon="😫">Changer l'organisation _permettrait_ de changer l'architecture, mais c'est dur</li>
  <li data-icon="🦄">Adopter des modèles d'organisation qui permettent de contourner le problème</li>
</ul>
Notes: Par exemple utiliser des stack techniques dites "FullStack"

Pour les RH, valoriser la pluridisciplinarité (création de TASK FORCES)

Pour éviter les pyramides et ces notions d'appartenance, envisager plutôt les modèles "Attributes based" qui permettent de la Composition de droits et pas de l'héritage (L'héritage c'est mal tfaçon 😝)


Bon c'est pas tout ça, revenons à Laurie.


<img class="r-stretch" src="assets/laurie-strode-focused.jpg" alt="Laurie, concentrée comme jamais">

« Et si je virais ce bout de code moche… »
Notes: Notre Laurie s'attaque donc à la base de code de son équipe, d'ailleurs entièrement composée de juniors comme elle, et c'est un vrai plat de spaghetti ! Ardente et motivée elle commence à mettre de l'ordre là-dedans, pour vite se rendre compte que quoi qu'elle touche, une autre partie de la page se casse la figure...un vrai Mikado !


<img class="r-stretch" src="assets/dawn-of-the-dead-1978-zombies.png" alt="Des collègues pas très ouverts d'esprits">
Notes: Et elle se fait vite reprendre par ses collègues car tout le sprint en prend pour son grade avec ses bugs à répétition. Oui les boutons sont moches, oui il y a du contenu qui bouge au chargement, mais tout ça c'est pour corriger d'autres bugs bien plus gênants !


La pauvre, la voilà au prise avec…



### La Palissade de Chesterton

> Tout changement ne devrait être réalisé que lorsque la raison derrière l'état actuel a été comprise.
Notes: «Chesterton's Fence», car c'est basé sur un exercice de pensée autour d'une palissade, que quelqu'un envisage de détruire car il ne voit pas à quoi elle sert. Ce à quoi son compagnon non seulement lui interdit de la détruire, mais l'oblige en outre à déterminer la raison de l'existence de cette palissade AFIN de pouvoir comprendre pourquoi il faut la détruire.

Pas vraiment besoin de vous détailler le lien avec cette naïve Laurie, vous l'aurez compris: toucher à une base de code sans savoir vraiment pourquoi les choses sont comme elles sont vous exposera à la plus sévère des punitions: corriger un bug de Prod en urgence un Vendredi à 18h30 !


<ul role="list" class="custom-list-types">
  <li data-icon="🧓">Le « Legacy », ça n'existe pas. Il n'y a que des projets nouveaux et des projets anciens</li>
  <li data-icon="💰">Les projets anciens sont ceux qui paient les factures, traitons-les avec respect !</li>
  <li data-icon="😅">Le code est "moche" <em>parce que</em> le métier est complexe. Simplifier impliquerait de simplifier le métier (bon courage !)</li>
</ul>


Comment mitiger la Palissade de Chesterton ?
<ul role="list" class="custom-list-types">
  <li data-icon="🤔">Prendre le temps de *comprendre* le Domaine (pas réservé aux POs !)</li>
  <li data-icon="📝">Documenter les règles de gestion, d'où elles viennent et leur raison d'être</li>
  <li data-icon="💪">Écrire des tests E2E. Oui c'est cher, mais ce sont vos invariants au niveau le plus haut !</li>
</ul>
Notes: Pas grand-chose à ajouter à tout ça. Mais vous pouvez déjà noter que la Loi de Conway n'incite pas à ce genre de travaux. On a toujours des "équipes dédiées", d'ailleurs toujours surchargées, qui sont censées s'occuper de tout ça, mais bon, investir dans votre compréhension des choses devrait être une évidence 😉


Allez, on retourne voir comment va notre Laurie...


<img class="r-stretch" src="assets/michael-myers-nonono.gif" alt="Le seul, l'unique, Michael Myers, ne valide pas ta PR">
Notes: La voilà aux prises d'un individu peu recommandable, un Team Lead nommé "Michael", qui lui dit qu'elle a intérêt à bosser car la couverture de code est passée en-dessous des 80%, ce qui est contraire à la politique de l'entreprise, et donc que sa PR restera bloquée dans la CI, épissétou !


<img class="r-stretch" src="assets/laurie_crying.jpeg" alt="Laurie pleure">
Notes: Stressée par l'envie de bien faire, elle devient un peu prête à tout, quitte à écrire des tests unitaires juste pour faire remonter le taux de couverture de code au-dessus des 80%, et ainsi éviter les foudres de Sonarqube.

Il faut qu'elle passe la Quality Gate, coûte que coûte !


Pas de bol pour Laurie, elle est tombée en plein dans...



### La cruelle Loi de Goodhart

> Lorsqu'une mesure devient une cible à absolument atteindre, elle cesse d'être une bonne mesure.
Notes: Les humains sont prédictibles: iels cherchent la voie du moindre effort surtout en situation de stress.

Si vous leur mettez la pression à un sujet, leur énergie sera dépensée non pour atteindre les objectifs,
mais pour pervertir le thermomètre à moindre effort.


Comment mitiger cette stratégie de dévitalisation systématique ?
<ul role="list" class="custom-list-types">
  <li data-icon="🤨">Arrêter le "Un problème est survenu; vite, un KPI !"</li>
  <li data-icon="🦾">Délimitez un ensemble <em>limité</em> de SLO/SLA/SLI attribuables à <em>l'Équipe</em> sur un périmètre qu'elle <em>maîtrise</em></li>
  <li data-icon="🫂">Suivre avec <strong>bienveillance</strong>. Un SLI mauvais est simplement une opportunité de s'améliorer</li>
</ul>
Notes: SLO/A/I: Service Level Objective/Agreement/Indicators


Bon, comment elle va, Laurie ?


<img class="r-stretch" src="assets/laurie_armed_knife.jpg" alt="Laurie, armée d'un joli couteau">
Notes: Elle en marre de se faire marcher dessus, elle s'est (bon ici, un peu trop littéralement) armée de son expérience pour affronter les métas-lois. Elle est sûre d'elle, très sûre d'elle...trop sûre d'elle ?



### L'effet Dunning-Kruger

> Les personnes ayant une compétence limitée dans un domaine surestiment souvent leurs capacités.

Corollaire:
> Les gens performants ont tendance à sous-estimer leurs compétences dans un domaine d'expertise


<img class="r-stretch" src="assets/dunning-kruger.png" alt="Un graphe tiré de l'étude de Dunning et Kruger">
Notes: Voilà le graph originel de l'étude.
Alors celui-là est assez controversé car il a été souvent mal compris, notamment dans le cadre de l'étude de la porosité des gens à la désinformation. Il y a d'ailleurs apparemment des différences culturelles qui tempéreraient tout ça. Il reste que c'est quand même assez logique dans les grandes lignes à cause du fameux "Ce qu'on sait pas qu'on ne sait pas", cher à Donald Rumsfeld. C'est le fait de ne pas prêter attention à ça qui vous fait facilement basculer dans un orgueil destructeur


Reconnaître qu'il y a trois types d'informations:
<ul role="list" class="custom-list-types">
  <li data-icon="😌">Ce qu'on sait</li>
  <li data-icon="😨">Ce qu'on sait qu'on ne sait pas</li>
  <li data-icon="🤯">Ce qu'on ne sait pas qu'on ne sait pas</li>
</ul>
Notes: Si vous pensez ne pas être affecté par l'effet Dunning-Kruger, vous êtes très probablement affecté par l'effet Dunning-Kruger :)


Pour mitiger, rien de plus simple:
<ul role="list" class="custom-list-types">
  <li data-icon="🏃">Se remettre en question continuellement</li>
  <li data-icon="👂">Identifier et écouter ces "High Performers", qui ne sont pas celleux qui se vendent le mieux, loin de là !</li>
  <li data-icon="🧘">Attention au syndrome de l'imposteur: tenter et échouer, c'est aussi apprendre</li>
</ul>


Avec ça, Laurie peut repartir sur des bases saines 😌


<img class="r-stretch" src="assets/matrix_architect.jpg" alt="l'Architecte, le Garant du Système">

« Tout fonctionne sur mon Powerpoint, hein »
Notes: Sauf qu'en rétrospective elle se fait un peu gentiment allumer par l'Architecte, car elle avait dit que son dev prendrait 3j et ça a fini par prendre trois semaines (merci Dunning-Kruger !) donc avec tout ça elle est à la bourre et c'est pas ce qu'il avait prévu dans son joli powerpoint. Et il s'est engagé auprès du client sur le fait que la page Panier serait capable de montrer des vidéos en 4K des produits réservés, donc ça va pas du tout, ça !


<img class="r-stretch" src="assets/the_shining-twins.jpg" alt="Les jumelles de The Shining">
Notes: Aïe, oui, ça a pris plus de temps que prévu, car deux sœurs jumelles ourdissaient déjà dans le dos de Laurie...

Qui ? Je veux bien sûr parler de...



### Loi de Hofstadter:
> Ça prendra toujours plus de temps que vous le pensez, même en prenant en compte la loi de Hofstadter.

### Loi de Parkinson:
> Quel que soit le travail à faire, la durée d'une tâche s'étirera pour remplir le temps qui lui est alloué.
Notes: Ou pourquoi les estimations c'est de la daube 🙄

On va commencer par Hofstadter: Les humains sont *catastrophiquement* mauvais dans leurs estimations:

Soit on sous-estime parce que Dunning Kruger, Chesterton, Conway, etc.
Soit on sur-estime parce que bon, on a dit qu'on s'occupait de trois tickets dans le sprint donc on ne pas s'en rajouter plus que ça, hein les gens ! 😉


<img class="r-stretch" src="assets/dhh-software-estimates-never-worked.png" alt="Article de DHH: Software estimates have never worked and never will">
Notes: Et ça reste un sujet qui fait régulièrement l'actualité !


<img src="assets/yo-dawg.jpg" alt="I heard you like meetings so I scheduled a meeting to talk about meetings">
Notes: Et la Loi de Parkinson, elle, est particulièrement pernicieuse car on va avoir tendance à prendre "la place disponible" dans notre emploi du temps, alors que si on avait rationalisé le temps on aurait pu faire plus de choses.

Et vous savez ce qui me gonfle ? C'est que la Loi de Parkinson s'applique à tout le monde, et donc aux managers de tout poil. Aux SCRUMMasters. Aux POs. Et tout ce monde là va "occuper la place disponible" avec des réunions, à tel point que des fois on se demande si on travaille encore, ou bien si notre travail est devenu, juste, de la réunionnite.


Ben kékonfait alors ?
<ul role="list" class="custom-list-types">
  <li data-icon="👂">Ne pas estimer ? Tentant ! Mais difficile à vendre !</li>
  <li data-icon="🏋️‍♂️">Admettre que dans MVP, le "M" veut dire "Minimum": Itérez, itérez, itérez !</li>
  <li data-icon="🐷">Délimitez les tâches, soyez francs avec les ROTIs, privilégiez l'asynchrone</li>
</ul>

On en revient à la <strong>bienveillance</strong>.
Notes: Ne pas estimer ça se fait: OpenSource, par exemple.

Et ne pas avoir de réunions, ça se fait aussi, hein. Comme tout il faut mesurer le ROI, remettre en question, etc.

Et, pour aider à la prédictibilité des tâches, on peut par exemple utiliser des «Boring Technologies» (cf L'Effet Lindy).


<img class="r-stretch" src="assets/laurie_wondering.jpeg" alt="Laurie va encore découvrir un truc">
Notes: En m'entendant parler (oui après tout y a pas que Deadpool qui a le droit de casser le 4e mur), Laurie s'interroge à haute voix:

« Attends, il a dit quoi, là ? C'est quoi, ça, l'Effet Lindy ? »


<img class="r-stretch" src="assets/boring-is-good.jpg" alt="Boring technologies are good">
Notes: Un collègue Senior, d'une antique équipe chargée de maintenir un logiciel de comptabilité en COBOL, entend la question de Laurie et décide d'intervenir pour y répondre.

« En gros, les technologies dites "ennuyeuses", ou "anciennes" sont de bonnes technologies, car elles ont passé l'épreuve du temps »



### L'effet Lindy

> Plus longtemps quelque chose de non-périssable existe ou est actuellement utilisé, plus longtemps son espérance de vie s'allonge.
Notes: Je vous laisse vous chauffer le ravioli avec ça deux secondes 😁


<ul role="list" class="custom-list-types">
  <li data-icon="🗻">Ce qui dure a une raison de durer, et cette raison fait qu'il continuera à durer</li>
  <li data-icon="👶">À l'inverse, ce qui est nouveau n'a pas encore suffisamment subi les foudres du monde réel</li>
  <li data-icon="🙏">La nouveauté doit redécouvrir ces principes…quitte à y laisser sa jeunesse !</li>
  <li data-icon="💡">Être moderne c'est simplement être contemporain, pas être "meilleur"</li>
</ul>
Notes:
- Le statu quo est cette fois votre allié: se concentrer sur la maintenabilité de ce qui est existe coûte beaucoup moins cher que de faire fonctionner le dernier truc à la mode qui vient de sortir et qui sera probablement has-been dans un an, ou cinq.
- Faire sa veille mais ne pas en faire sa boussole
- Bannir le « CV Driven Development ». Le monde ne tourne pas autour de votre CV. Les utilisateurs se contrefichent que ça aide votre carrière.


<img class="r-stretch" src="assets/laurie-strode-at-last-senior.jpg" alt="Le poids des Méta-lois se voit sur son visage">
Sur ces sages paroles, Laurie repart à l'assaut de sa page Panier
Notes: Elle décide d'appliquer ce qu'elle a appris, et elle se rend compte qu'elle pourrait dramatiquement simplifier son code si elle affichait chaque produit dans une page dédiée: en effet elle pourrait réutiliser la page d'affichage des produits dans le catalogue ! Woah, pourquoi n'y a t'elle pas pensé avant ? En plus ça corrigerait pas mal de bugs qu'elle avait lorsqu'elle s'est prise la Palissade de Chesterton ! Coup double, donc ?


<img class="r-stretch" src="assets/john-carpenters-the-thing-dog.png" alt="Un joli chien">

C'est qui la belle complexité ? Oui c'est toi, oui c'est toi !

Notes: Sauf que…Les utilisateurs se plaignent immédiatement d'un tel changement: plutôt que d'avoir toutes les informations sur la page Panier, v'la't'y pas qu'iels doivent maintenant ouvrir chaque produit dans un nouvel onglet pour en voir les détails ? Un scandale !

La complexité, terrifiant, prend des formes multiples, et il faut savoir qui va l'assumer.

Car on ne fait pas ce qu'on veut avec la complexité, à cause de...



### L'implacable loi de Tesler

> La complexité inhérente d'une application ne peut jamais être totalement retirée, ou cachée. On ne peut que la traiter à travers des compromis.


<ul role="list" class="custom-list-types">
  <li data-icon="😅">Il y aura toujours de la complexité dans votre application</li>
  <li data-icon="💵">Est-elle est dans votre code (coût) ou dans son utilisation (engagement)</li>
  <li data-icon="⚖">Trouver le bon équilibre, et se concentrer sur vos forces</li>
</ul>
Notes: Il y a la "bonne" et la "mauvaise" complexité quoi.

Par ex: Une application web interne qui fait du CRUD pour 10 personnes a-t-elle besoin de Kubernetes, ou de Microfrontend ? C'est là une complexité qu'il faut être capable de justifier, car le cœur de l'application n'est pas sa scalabilité, ni l'agnosticité du déploiement, c'est de faire du CRUD ! Donc ptet pas justifié

En revanche si votre application contient de l'algorithmique complexe pour éviter à vos utilisateurs d'avoir à jongler entre deux écrans, la question peut se poser. Le jeu peut en valoir la chandelle, mais là-aussi il faut être conscient du coût (et pas que financier, la santé mentale de la maintenance aussi c'est un coût)

On en revient à nos différentes technologies, à la veille, etc. Améliorer son discernement pour comprendre la valeur ajoutée de l'application (ou de la couche sur laquelle vous bossez) et qui JUSTIFIE sa complexité. Le reste c'est de la littérature.


<img class="r-stretch" src="assets/young-laurie-strode-smiling.jpg" alt="Laurie a enfin trouvé un truc utile à faire">

Bon, c'est pas tout ça mais Laurie se concentre sur la complexité de son application...
Notes: Et elle voit un truc qui est très débile: quand le Panier est vide, il y a quand même un article, mais avec une quantité à 0 et un prix à 0€. Elle recroise avec sa PO (éviter le Chesterton) qui lui dit que c'est effectivement un vieux bug, mais qu'on s'en fiche car la page Panier n'est pas affichable si le total est nul.

Elle supprime, confiante que ça n'a aucun sens, et en plus ça simplifie son code...


💥...Bug en production ! Le total de la commande dans le header indique `undefined` 😱
Notes: C'est ballot, hein. Voilà que son pire cauchemar se produit...elle est pourtant sûre que ce comportement n'a aucun sens. Il n'est d'ailleurs même pas documenté. Comment est-ce possible que ça serve à quelqu'un un truc pareil ?


<img class="r-stretch" src="assets/a-nightmare-on-elm-street.jpg" alt="Fredundefined trouvera toujours moyen de vous retrouver">
Hé oui, les pires cauchemars c'est sa spécialité. Je veux bien sûr parler de...



### La loi d'Hyrum, ou le Contrat Involontaire

> Dès que vous atteignez un certain nombre d'utilisateurs de votre API, votre contrat ne sert plus à rien: Tous les comportements de votre système seront utilisés tels quels par quelqu'un
Notes:
Et oui, ça pique.

Ce qu'il s'est passé c'est que l'équipe qui est en charge du header se servait de ce comportement pour afficher le total de la commande, et comme maintenant il n'y a plus d'article dans le panier, ben ça devient undefined.

Et en plus ce code tout pourri ils ne vont pas le changer parce que tu comprends Laurie y a un NOUVEAU HEADER qui va arriver et remplacer ce header Legacy tout pourri donc…rollback stp !


<img class="r-stretch" src="assets/xkcd-workflow.png" alt="Le fameux XKCD 'Workflow' qui parle de ça">
Notes: There's always an XKCD for that :D


Par conséquent c'est assez facile à mitiger sur le papier:
<ul role="list" class="custom-list-types">
  <li data-icon="😅">N'exposez que ce qui doit l'être</li>
  <li data-icon="📣">Communiquez largement les changements</li>
  <li data-icon="🤓">Semver est un <em>mensonge</em></li>
  <li data-icon="😤">Testez, testez, testez</li>
</ul>
Notes: Il faut arrêter de se cacher derrière son petit doigt et accepter que toute mise à jour (oui, même un patch) peut être un Breaking Change.

Et, pour les briques qui sont utilisées par des clients internes, rappelez que le client est tout autant responsable de ce qu'il accepte que vous êtes responsables de ce que vous livrez: ils ont le droit, et l'obligation morale, de faire des tests, non mais !


<img class="r-stretch" src="assets/linus-was-right.png" alt="Linus a toujours raison">
Notes: Rappelez vous Linus Torvalds: WE DO NOT BREAK USERSPACE!


<img class="r-stretch" src="assets/laurie-au-telephone.jpg" alt="Laurie au téléphone">

« Bonjour la Guilde, j'ai fait une PR pour mettre à jour le framework maison »

Notes: Laurie, voulant bien faire, va faire une modification (pour une fois) bien appropriée dans l'un des nombreux repos du projet, pour sa page panier. Car bien sûr que même sur sa page de prédilection, elle doit quand même aller demander le droit d'aller modifier des choses car c'est """transverse""".


<img class="r-stretch" src="assets/dracula.jpeg" alt="Dracula, de Francis Ford Coppola">
Notes: Sauf que bon, elle n'a aucune idée que sa PR, son besoin, est le cadet des soucis de la Guilde, qui a des choses beaucoup plus importantes à faire, comme débattre de la plus belle manière d'arranger des ternaires avec Prettier...

Elle n'a qu'à ouvrir un ticket et on lui répondra un jour, peut-être, si on a du temps et l'envie de le faire.


En voilà un personnage qui illustre magnifiquement…



### Le Principe de Shirky

> Toute institution essaiera inconsciemment de préserver le problème qu'elle est sensée résoudre.
Notes: La siloisation n'a jamais de limite. Elle s'insinue, puis elle se bureaucratise (ticketing), et ensuite vous ne pouvez. plus. l'extirper.

Comme toujours ce genre d'initiative part d'une bonne intention: on veut rationaliser les efforts, on veut éviter que "ça dérive", on veut garder le contrôle, parce que les devs, forcément, ils sont pas doués.

Mais la faute à qui ? En infantilisant les devs on n'arrive seulement qu'à verrouiller la créativité. Et on se retrouve avec les bons qui s'en vont ailleurs, où ils et elles peuvent travailler, et les autres…


<ul role="list" class="custom-list-types">
  <li data-icon="🛑">Les "guildes", "Design Authorities", et autres qui gardent les droits d'approbation de PR/MR</li>
  <li data-icon="🔒">Les Équipes de Production qui rejettent le DevOps</li>
  <li data-icon="👮">La Cybersécurité qui impose des règles sans prendre en compte la DX</li>
  <li data-icon="🙄">« C'est pas nous, c'est l'Équipe Support XYZ qui nous bloque ! »</li>
</ul>
Notes: L'Enfer est pavé de bonnes intentions. Vraiment, je vais le répéter. L'Enfer est PAVÉ DE BONNES INTENTIONS.

Les services "Support" doivent intégrer leur nom: ce sont des services qui sont censés "supporter" le développement des fonctionnalités. Ça peut bien évidemment être des "lignes de défenses", car il y a tout un tas de domaines où les devs ne peuvent être experts, bien sûr.

Mais à partir du moment où on monte dans sa tour d'Ivoire et qu'on a jeté la clé, c'est terminé. Vous n'êtes plus un service support mais un service "chien de garde".

(dernier item) Et c'est bien pratique pour certaines équipes de Dev qui fuient leur responsabilités, hein. Tout le monde est concerné par cette histoire !


Alors soyons un peu positifs:
<ul role="list" class="custom-list-types">
  <li data-icon="😌">Le point de départ doit être la Developer Experience</li>
  <li data-icon="👮">« Rendre impossible à représenter les états invalides »</li>
  <li data-icon="🎭">Stop au "Théâtre de la Sécurité"</li>
  <li data-icon="🤗">La <em>bienveillance</em>, encore et toujours</li>
</ul>
Notes: Ce que je veux dire par « Rendre impossible à représenter les états invalides », c'est de faire en sorte que vos devs ne peuvent _physiquement_ pas se retrouver dans une situation qui serait inadmissible. Un moyen pour la partie Ops, par exemple c'est d'envisager du Platform Engineering de manière à proposer en self-service des capacités de déploiement aux Devs pour éviter qu'ils vous montent un cluster k8s n'importe comment dans un coin parce que Dudule il l'a fait en bootcamp.

Le Théâtre de la Sécurité, plus largement, c'est cette apparence de "la sécurité pour valider des audits" qui n'apporte aucune sécurité, mais qui valide que vous avez bien faite le webinaire de 2h en temps et en heure. C'est un peu comme le Sentiment d'Insécurité, comme on peut difficilement lui coller un KPI (rappelez-vous Goodhart !), on trouve un peu n'importe quoi histoire d'avoir une courbe qui monte ou qui descende en fonction du gain politique.

La réalité, elle, on s'en moque. Même si la Réalité, elle, continue son petit bout de chemin malgré tout ça.

L'idée, en somme c'est d'arriver à ça:


<img class="r-stretch" src="assets/help-me-help-you-copy.jpg" alt="Help me help you !">

Mon service support préféré 💗
Notes: Et c'est pas être une diva que de demander ça. Parce que ça c'est ce qu'on attend que les Devs disent aux clients

(et je me tue à le dire à mes clients d'ailleurs)

Bref, disruptez, bousculez, interagissez, remettez en question, piratez vos organisations ! :V
Vos clients internes et externes vous en seront reconnaissants (et envoyez-moi les récalcitrants...)



<img class="r-stretch" src="assets/photo-de-groupe.jpg" alt="Tous les méchants de film d'horreur sont là">

Il y aurait encore beaucoup à dire sur les Meta-lois...
Notes: Mais je vais commencer à manquer de temps, c'est d'ailleurs pour ça qu'il y a quelques temps j'ai décidé de répertorier dans un dépôt Git celles qui s'appliquent plus ou moins à notre métier.

Et sachez qu'il n'y a pas que l'informatique qui a des Méta-lois, il y a une page Wikipédia qui essaie de toutes les répertorier ! Je la cite dans mon repo donc vous verrez ça vous même.


<img class="r-stretch" src="assets/laurie-strode-smiling.jpg" alt="À la fin, Laurie sourit enfin">
Notes: Ça y est, Laurie est désormais un peu mieux armée pour survivre dans le monde merveilleux du développement logiciel. On le voit pas à sa tête ? Oui bon elle a pris un coup de vieux, hein, ça nous arrive à tous et à toutes 😅


<img class="r-stretch" src="assets/laurie-strode-au-pe-pom.jpg" alt="Laurie y va au pe-pom, carrément">
Notes: La raison pour laquelle j'ai décidé de vous parler de ce sujet qui continue de beaucoup m'intéresser encore aujourd'hui, c'est afin de pouvoir mettre des mots sur des situations plus ou moins malheureuses qu'on a tous et toutes rencontrés à un moment.

Et mon idée est de vous donner des outils afin de vous permettre d'identifier, puis de combattre efficacement les méta-lois.

Car sinon vous risquez de subir...



### Le marteau de Maslow 🔨

> Si le seul outil que vous avez est un marteau, tout finit par ressembler à un clou.
Notes: Appelée aussi la loi du marteau en or, on encore la Loi de l'instrument

C'est en particulier applicable aux hard-skills. Si vous ne connaissez qu'un langage, qu'un framework, qu'un paradigme (comme le FrontEnd), comment voulez-vous être utile dans la durée pour vos utilisateurs et vos utilisatrices ?

J'ai un autre talk autour d'HTMX qui parle un peu plus de ça si ça vous intéresse (rendez-vous à Bordeaux pour la BDX I/O en novembre 😉)


Bon, j'ai une question pour vous...


Est-ce que cette histoire vous a plu ?
Non, ne répondez pas tout de suite 😅, car ici peut s'appliquer...



### La loi de Betteridge

> Toute question dans un titre éditorialisé a vraisemblablement pour réponse "Non"
Notes: Ah. Tant pis pour moi alors :D
