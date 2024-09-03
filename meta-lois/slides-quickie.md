Mais «qu'est-ce que les Méta-lois ?», vous demandez-vous ?

Hmm...Revenons à notre protagoniste, Laurie


<img class="r-stretch" src="assets/metacortex.jpeg" alt="Metacortex">
Notes:Laurie débarque fraîchement dans sa nouvelle boîte Metacortex. Une grosse ESN !


<img class="r-stretch" src="assets/metacortex-manager.jpeg" alt="Le manager de Laurie, pas commode !">
Notes: Et son manager la colle sur un projet en tant que "Développeuse Front sur la page Panier du site d'Ecommerce d'une grande marque".

Laurie s'interroge. Elle est développeuse Web, elle pourrait tout à fait s'occuper du Front, et du Back.


<img class="r-stretch" src="assets/new−agent-smith-matrix.jpg" alt="Un agent de la Matrice !">
Notes: Et là son manager lui dit:
"Non nous on ne fait que du Front, et encore sur la page Panier. Écoute, tu viens d'arriver, tu es jeune, tu ne sais pas comment ça se passe dans le monde des adultes. Ici chez Metacortex on est très très sérieux et on utilise des méthodes de pointe comme SCRUM, etc. Toi tu t'adaptes. T'es ici pour faire du Front, et uniquement du Front. Sur la page Panier"

Laurie vient de découvrir, malgré elle…



### La Loi de Conway

> Toute organisation qui conçoit un système produira un système dont la structure est une copie de la structure de communication de l'organisation
Notes: Votre architecture est déjà décidée d'avance: Vos interfaces sont les équipes de l'entreprise.
C'est de loin la plus connue et pour une bonne raison: Elle. Est. OMNIPRÉSENTE.

Comment mitiger la Loi de Conway ?
« That's the neat thing: You don't. » Changer l'organisation _permettrait_ de changer l'architecture, mais c'est dur

Adopter des modèles d'organisation qui permettent de contourner le problème Par exemple utiliser des stack techniques dites "FullStack"


Bon c'est pas tout ça, revenons à Laurie.


<img class="r-stretch" src="assets/laurie-strode-focused.jpg" alt="Laurie, concentrée comme jamais">

« Et si je virais ce bout de code moche… »
Notes: Notre Laurie s'attaque donc à la base de code de son équipe, d'ailleurs entièrement composée de juniors comme elle, et c'est un vrai plat de spaghetti ! Ardente et motivée elle commence à mettre de l'ordre là-dedans, pour vite se rendre compte que quoi qu'elle touche, une autre partie de la page se casse la figure...un vrai Mikado !


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
  <li data-icon="🤔">Prendre le temps *comprendre* le Domaine (pas réservé aux POs !)</li>
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
Notes: Les humains sont prédictibles: ils cherchent la voie du moindre effort surtout en situation de stress.

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
Notes: Sauf qu'en rétrospective elle se fait un peu gentiment allumer par l'Architecte, car elle avait dit que son dev prendrait 3j et ça a fini par prendre trois semaines (merci Dunning-Kruger !) donc avec tout ça elle est à la bourre et c'est pas ce qu'il avait prévu dans son joli powerpoint.


<img class="r-stretch" src="assets/the_shining-twins.jpg" alt="Les jumelles de The Shining">
Notes: Aïe, oui, ça a pris plus de temps que prévu, car deux sœurs jumelles ourdissaient déjà dans le dos de Laurie...

Qui ? Je veux bien sûr parler de...



### Loi de Hofstadter:
> Ça prendra toujours plus de temps que vous le pensez, même en prenant en compte la loi de Hofstadter.

### Loi de Parkinson:
> Quel que soit le travail à faire, la durée d'une tâche s'étirera pour remplir le temps qui lui est alloué.
Notes: Ou pourquoi les estimations c'est de la daube 🙄

Les humains sont *catastrophiquement* mauvais dans leurs estimations:

Soit on sous-estime parce que Dunning Kruger, Chesterton, Conway, etc.
Soit on sur-estime parce que bon, on a dit qu'on s'occupait de trois tickets dans le sprint donc on ne pas s'en rajouter plus que ça, hein les gens ! 😉


<img class="r-stretch" src="assets/dhh-software-estimates-never-worked.png" alt="Article de DHH: Software estimates have never worked and never will">
Notes: Et ça reste un sujet qui fait régulièrement l'actualité !


Ben kékonfait alors ?
<ul role="list" class="custom-list-types">
  <li data-icon="👂">Ne pas estimer ? Tentant ! Mais difficile à vendre !</li>
  <li data-icon="🏋️‍♂️">Admettre que dans MVP, le "M" veut dire "Minimum": Itérez, itérez, itérez !</li>
  <li data-icon="🕵️‍♂️">Être transparent et sincère. Anticiper les zones de faible maîtrise (technique ou fonctionnel)</li>
</ul>

On en revient à la <strong>bienveillance</strong>.


<img class="r-stretch" src="assets/laurie_wondering.jpeg" alt="Laurie va encore découvrir un truc">

« Mais c'est fatiguant tout ça, j'en ai marre de naviguer à vue… Comment on peut faire ? »
Notes: En m'entendant parler (oui après tout y a pas que Deadpool qui a le droit de casser le 4e mur), Laurie se désespère:


<img class="r-stretch" src="assets/boring-is-good.jpg" alt="Boring technologies are good">
Notes: Un collègue Senior, d'une antique équipe chargée de maintenir un logiciel de comptabilité en COBOL, entend la question de Laurie et décide d'intervenir pour y répondre.

« Utilise une stack qui tient la route dans le temps ! Moi je pense que les technologies dites "ennuyeuses", ou "anciennes" sont de bonnes technologies, car elles ont passé l'épreuve du temps »

C'est ce qu'on appelle…



### L'effet Lindy

> Plus longtemps quelque chose de non-périssable existe ou est actuellement utilisé, plus longtemps son espérance de vie s'allonge.


<ul role="list" class="custom-list-types">
  <li data-icon="🗻">Ce qui dure a une raison de durer, et cette raison fait qu'il continuera à durer</li>
  <li data-icon="💡">Être moderne c'est simplement être contemporain, pas être "meilleur"</li>
</ul>



<img class="r-stretch" src="assets/photo-de-groupe.jpg" alt="Tous les méchants de film d'horreur sont là">

Il y aurait encore beaucoup à dire sur les Meta-lois...
Notes: Mais je vais commencer à manquer de temps, c'est d'ailleurs pour ça qu'il y a quelques temps j'ai décidé de répertorier dans un dépôt Git celles qui s'appliquent plus ou moins à notre métier.

Et sachez qu'il n'y a pas que l'informatique qui a des Méta-lois, il y a une page Wikipédia qui essaie de toutes les répertorier ! Je la cite dans mon repo donc vous verrez ça vous même.


<img class="r-stretch" src="assets/laurie-strode-au-pe-pom.jpg" alt="Laurie y va au pe-pom, carrément">
Notes: La raison pour laquelle j'ai décidé de vous parler de ce sujet qui continue de beaucoup m'intéresser encore aujourd'hui, c'est afin de pouvoir mettre des mots sur des situations plus ou moins malheureuses qu'on a tous et toutes rencontrés à un moment.

Et mon idée est de vous donner des outils afin de vous permettre d'identifier, puis de combattre efficacement les méta-lois.

Car sinon vous risquez de subir...



### Le marteau de Maslow 🔨

> Si le seul outil que vous avez est un marteau, tout finit par ressembler à un clou.
Notes: Appelée aussi la loi du marteau en or, on encore la Loi de l'instrument

Si vous ne connaissez qu'un langage, qu'un framework, qu'un paradigme (comme le FrontEnd), comment voulez-vous être utile dans la durée pour vos utilisateurs et vos utilisatrices ?

J'ai un autre talk autour d'HTMX qui parle un peu plus de ça si ça vous intéresse (rendez-vous à Bordeaux pour la BDX I/O en novembre 😉)
