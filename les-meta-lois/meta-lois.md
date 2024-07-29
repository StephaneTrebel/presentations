## Des remarques déjà entendues…

« Impossible de regrouper le back et le front, finalement ! »

« On refond tout, mais il y a toutes ces règles métier cachées ! »

« Le framework était sensé nous faciliter la vie, mais on galère ! »



## Quelque chose qui gratte...

Ça nous est tous arrivés au moins une fois

Une réunion de trop, un ensemble de tickets qui n'ont pas de sens

La sensation qu'un truc ne colle pas et on ne sait pas pourquoi



C'est parce que vous n'avez pas conscience de leur influence

Elles sont là, que vous le vouliez ou non, car...



# Les Méta-Lois sont plus fortes que toi

(mais ça va bien se passer, tu verras !)



## De quoi va-t-on parler ?

De ces phénomènes sur lesquels on n'arrive pas à mettre un mot

De cette sensation, parfois, de nager à contre-courant

De ces phénomènes sociaux qui dirigent la technique (et, hélas, pas l'inverse !)



### La plus connue: La Loi de Conway

« Any organization that designs a system will produce a design whose structure is a copy of the organization's communication structure. »



Ce que ça veut dire concrètement pour vous:
- Votre architecture est déjà décidée d'avance: Vos interfaces sont les services de l'entreprise.
- Si vous allez à l'encontre, vous allez avoir des soucis d'attribution des sujets
- Si c'est la plus connue c'est qu'il y a une raison: elle. est. OMNIPRÉSENTE.


Comment mitiger la Loi de Conway ?
- « That's the neat thing: You don't. »
- Utiliser la contraposée: Changer l'organisation _permet_ de changer l'architecture



### La Palissade de Chesterton

« Reforms should not be made until the reasoning behind the existing state of affairs is understood. »


Ça paraît logique, dit comme ça, mais ça a plusieurs implications:
- Le « Legacy », ça n'existe pas. Il n'y a que des projets nouveaux et des projets anciens
- Les projets anciens sont ceux qui paient les factures, traitons-les avec respect !
- Le code est moche _parce que_ le métier est complexe. Simplifier le code ne peut passer que par
une simplification du métier


Comment mitiger la Palissade de Chesterton ?
- Prendre le temps *comprendre* le Domaine
- Documenter les règles de gestion, d'où elles viennent et leur raison d'être
- Écrire des tests E2E. Oui c'est cher, mais ce sont vos invariants au niveau le plus haut !


### La cruelle Loi de Goodhart

« When a measure becomes a target, it ceases to be a good measure. »


Les humains sont prédictibles: iels cherchent la voie du moindre effort.

Si vous leur mettez la pression à un sujet, leur énergie sera dépensée non pour atteindre les objectifs,
mais pour pervertir le thermomètre à moindre effort.


Comment mitiger cette stratégie de dévitalisation systématique ?
- Arrêter de créer des KPIs pour justifier votre position de manager
- Délimitez un ensemble _limité_ de SLO/SLA/SLI attribuables à _l'Équipe_ sur un périmètre qu'elle _maîtrise_ (sinon ça ne sert strictement à rien)
- Traiter le suivi avec *BIENVEILLANCE*. Un SLI mauvais est simplement une opportunité de s'améliorer



### L'effet Dunning-Kruger

« People with limited competence in a particular domain overestimate their abilities. Corrolary: High performers have a tendency to underestimate their skills in their domain of expertise »



- Si vous pensez ne pas être affecté par l'effet Dunning-Kruger, vous êtes affecté par l'effet Dunning-Kruger :)
- Il ne s'agit pas d'humilité pour le plaisir de l'humilité, mais de reconnaître qu'il y a trois type d'information:
  - Ce qu'on sait
	- Ce qu'on sait qu'on ne sait pas
	- Ce qu'on ne sait pas qu'on ne sait pas
Ne pas considérer la troisième option, c'est ça l'effet Dunning-Krueger: on s'auto-évalue sur ce qu'on ne connaît pas en ignorant parfaitement la _globalité_ du Domaine concerné



Pour mitiger, rien de plus simple:
- Suivant le Domaine concerné, reconnaître les « High Performers ». Ce ne sont pas celles et ceux qui se vendent le mieux, loin de là !
- Se remettre en question continuellement afin de progresser (il y a toujours à quelque chose à améliorer)
- Ne pas sombrer pour autant dans une paralysie du Syndrome de l'Imposteur: expérimenter et échouer, c'est déjà apprendre



### Les loi de Hofstadter et Parkinson, ou pourquoi les estimations c'est de la daube

Hofstadter:
« It always takes longer than you expect, even when you take into account Hofstadter's Law »

Parkinson:
« The duration of work expands to fill its allotted time span, regardless of the amount of work to be done »


Les humains sont *catastrophiques* dans leurs estimations.

- Une solution serait de ne pas estimer… Tentant ! Mais difficile à vendre !
- Une autre serait d'admettre que dans MVP le "M" veut dire "Minimum": Itérez, itérez, itérez !
- Ça ne changera pas le fait que le travail de pas mal de monde consiste s'engager sur des estimations…

On en revient à la *BIENVEILLANCE*.

L'impredictibilité est un révélateur des inconnues inconnues (cf Dunning-Kruger, qui affecte donc les organisations autant que les humains).

- Limiter le Domaine métier limite la complexité attendue (cf Chesterton)
- Utiliser des «Boring Technologies» (cf Lindy) permet de limiter la charge de maintenance purement technique
- La formation est également un facteur clé: Si vous ne savez rien faire correctement, comment savoir combien de temps vous prendra n'importe quoi ?



### L'effet Lindy: Ou pourquoi l'experience triomphe toujours sur l'impétuosité

« The longer a period something non-perishable has survived to exist or be used in the present, the longer its remaining life expectancy. »


- Ce qui dure a une raison de durer, et cette raison fait qu'il continuera à durer
- À l'inverse, ce qui est nouveau n'a pas encore suffisamment subi les foudres du monde Réel
- Il faut fournir une *justification* à la nouveauté. Être moderne c'est simplement être contemporain, pas être "meilleur"- Très lié à la Palissade de Chesterton: ce qui dure a intégré les raisons de la longévité. Ce qui est nouveau doit redécouvrir ces principes…quitte à y laisser sa jeunesse !


Pour mitiger ? Rien de plus simple:
- Le statu quo est votre allié: concentrer sur la maintenabilité de ce qui est existe coûte beaucoup moins cher que de faire fonctionner le nouveau framework qui vient de sortir
- Faire sa veille mais ne pas en faire sa boussole
- Bannir le « Resume Driven Development ». Le monde ne tourne pas autour de votre CV.



### L'implacable loi de Tesler

« An application inherent complexity can never be removed, nor hidden, only dealt with trade-offs. »

- Elle envoie au tapis toutes les promesses de simplification, mais on peut jouer avec. Un peu
- Là encore un constat d'impuissance qu'il faut accepter: les applications sont _complexes_
- La question est de savoir _comment_ on va traiter cette complexité
- Non on ne peut pas «tout bourrer côté client», «tout gérer par le backend», «tout faire en no-code» (lol)


Pour mitiger il va falloir donc faire quelque chose qu'on aime rarement faire:
- Accepter la complexité et la placer à l'endroit où elle sera le plus facilement gérable
- Refuser la complexité dans toutes les autres couches (et donc refuser le complexité pour la complexité)
- Nécessite un réel contrat entre le Métier et la Technique car (Chesterton oblige), c'est du Métier que vient la complexité
- Votre application n'est-elle finalement qu'un formulaire très complexe ? Un algorithme alambiqué ? Une interface d'API glorifiée ? Acceptez-le, et faites en fonction.



### La loi d'Hyrum, ou le Contrat Involontaire

« With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody. »

- Plutôt applicable au code exposé publiquement, mais peut tout à fait arriver en code interne d'entreprise
- Incite à réfléchir à vos API *quelles qu'elles soient*. Si c'est "public" quelqu'un s'en servira


Par conséquent c'est assez facile à mitiger sur le papier:
- N'exposer que ce qui doit l'être. Le reste *DOIT* fonctionner en boîte noire
- Communiquer sur les changements (duh !)
- Accepter que toute mise à jour (oui, même un patch) peut être un Breaking Change.
- _Semver is a LIE_





### Carlson's Law

https://drvidyahattangadi.com/what-is-carlsons-law/[Carlson's Law]

[sidebar]
Interrupted work will be less effective and will take more time than if it would completed in a continuous manner.


### Hanlon's Razor

https://en.wikipedia.org/wiki/Hanlon%27s_razor[Hanlon's Razor]

[sidebar]
Never attribute to malice that which is adequately explained by stupidity.

### Hawthorne Effect

https://en.wikipedia.org/wiki/Hawthorne_effect[Hawthorne Effect]

[sidebar]
Individuals can modify an aspect of their behavior in response to their awareness of being observed.

### Murphy's Law

https://en.wikipedia.org/wiki/Murphy's_law[Murphy's Law]

[sidebar]
Anything that can go wrong will go wrong.

### Parkinson's Law

https://en.wikipedia.org/wiki/Parkinson%27s_law[Parkinson's Law]

[sidebar]


### Peter Principle

https://en.wikipedia.org/wiki/Peter_principle[Peter Principle]

[sidebar]
In a hierarchy, every employee tends to rise to his level of incompetence.



### La Loi de Brandolini's Law

https://en.wikipedia.org/wiki/Brandolini%27s_law[Brandolini's Law]

[sidebar]
The amount of energy needed to refute bullshit is an order of magnitude bigger than that needed to produce it.
