# KT - Asynchronicite en js

_Thinkin' in Async_

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
autour de l'asynchronicité en Javascript, de ses raisons d’exister, et de la façon de s’en servir le plus
efficacement possible dans vos projets.

Elle a été réalisée à l’aide de [vimdeck](https://github.com/tybenz/vimdeck)


## Async AF

- Events (dont XHR)
- Callbacks
- Promises
- Observables
- Async/Await

Dans ce KT nous nous concentrerons surtout sur les Events, les Callbackset les Promises, car:

- Il n'y a pas d'XHR dans dans les frameworks front modernes, mais les passionnés d'archéologie informatique sont conviés à faire des recherches sur l'historique de cette bestiole qui a permis l'émergence du fameux "Web 2.0" !
- Les _Observables_ sont exclusivement utilisés côté Front et surtout parce qu'Angular a fait reposer ses librairies HTTP sur cette manière de faire de l'asynchrone (ce qui n'exclut pas qu'on enreparle dans un éventuel futur KT qui traiterait de la Programmation Réactive](https://en.wikipedia.org/wiki/Reactive_program=))
- _Async/Await_ est un sucre syntaxique par-dessus les Promises qui apporte son lot d'avantages, de contraintes, et de risques, mais il ne sera pas abordé ici par pur manque de temps (à creuser cependant dans un prochain KT une fois que celui-ci sera digéré par l'équipe).

Rappel de ce qu'est [l'Asynchronicité](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)): C'est une rupture dans le traitement synchrone d'un programme. Cette rupture est donc caractérisée par le moment où la logique est interrompue (où on déclenche une opération asynchrone) et le moment où cette logique reprend (avec éventuellement le résultat de l'opération effectuée pendant cet intervalle).


## Les Events

L'asynchrone à l'ancienne :

```javascript
fn.on('tata', () => {
  // ...trucs super...
})

// ...ailleurs (dans un XHR, un worker, etc.):
fn.send('tata')
```

## Caveats

- Il est difficile de tracer les chemins parcourus par les événements, car ils peuvent être émis n'importe quand.
- Certains événements peuvent même être (à tort ou à raison) émis plusieurs fois, ce qui complexifie davantage lesuivi/débogage.
- La possible mutabilité de variables accessibles à plusieurs [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures):

```javascript
fn.on('tata', () => {
  state = "tata";
})
fn.on('toto', () => {
  state = "toto";
})

// ...ailleurs (dans un XHR, un worker, etc.):
fn.send('tata');
// ...et encore ailleurs:
fn.send('toto');
// Bon courage pour savoir ce que vaut «state» au fil du temps !
```


-> Le meilleur conseil pour se prémunir de ces fourbes effets de bord est de de [privilégier l'immutabilité des variables:](https://medium.com/@alexnault/functional-programming-with-javascript-in-3-tips-f282934947e5)

```javascript
fn.on('tata', () => {
  var state;
  state = "tata";
})

fn.on('toto', () => {
  var state;
  state = "toto";
})

// À noter que ça n'enlève rien à la problématique de la gestion d'un «state» au niveau global mais au moins on évite de se créer des problèmes au niveau local
```


# Callbacks

Pas si différents des Events, mais avec déjà un départ du monde de la rupture incontrôlée vers le monde du chaînage:

```javascript
function myFunction(params, cb) {
  // ...trucs supers...
  cb();
}

myFunction({ foo: "bar" }, saveDatabase); // «saveDatabase» sera exécutée _juste après_ «myFunction», quelque soit la durée d'exécution de cette dernière
```

## Caveats

- Il peut arriver de malencontreusement déclencher le callback plusieurs fois:

```javascript
function myFunction(params, cb) {
  if(params.test) {
    cb(null, 'foo');
  }
  cb(null, 'bar');
}

// Si params.test est «truthy» alors le callback «cb» sera exécuté deux fois...
```


-> Toujours retourner quelque chose, et ce le plus tôt possible:

```javascript
function myFunction(params, cb) {
  if(params.test) {
   return cb('foo');
  }
  return cb('bar');
}

// Le deuxième «return» peut paraître inutile, mais dans le futur on peut étendre le code avec moins de risques que précédemment.
```

Note: Éviter les «else/else if» permet de limiter la [Complexité Cyclomatique](https://fr.wikipedia.org/wiki/Nombre_cyclomatique), qui grimpe bien plus vite qu'on ne le souhaiterait...


- Les soucis de mutabilité sont toujours possibles avec les Callbacks:

```javascript
var state;
function myFunction1(params, cb) {
  state = "foo";
  return cb();
}

myFunction1(params, (err, null) => {
  state = "bar";
})

// Ici c'est visible, mais dans une fonction d'une centaine de lignes, c'est nettement plus ardu...
```


- La syntaxe (erreur, données) des callbacks fait qu'on doit toujours «douter» du premier argument:

```javascript
// que ce soit lorsqu'on appelle le callback:
function myFunction1(params, cb) {
  ...
  if (problem) {
    return cb(new Error("ouch")); // Et encore, il faut penser à passer un objet de type Error, trop de fois on se retrouve avec un cb("ouch") qui n'aide en rien (pas de stacktrace par exemple)
  }
  return cb(null, data); // Il suffit d'oublier ce «null» disgracieux pour commencer à souffrir...
}

// ou quand on est du côté callback:
anAsyncFunction(params, (err, data) => {
  if (err) {
    // Il faut, pour chaque callback, effectuer ce contrôle, pour s'assurer que l'erreur va bien remonter, ou alors on prend le risque de la « manger » sans l'avoir traitée.
    // C'est perturbant car on finit par ne plus savoir à quel niveau il faudra concrètement traiter l'erreur...
    ...
  }
  ...
})
```


- Le nom de variable « cb » utilisé un peu partout rend difficile la lecture, et très faciles les oublis, notamment lorsqu'on tombe dans le Callback Hell:

```javascript
// Et ajoutons là-dessus du «state leak» tant qu'on y est...
function myAwesomeFunction(params, cb) {
		var state;
		state = "";
		//...du code...
		fn1(params1, (err, null) => {
				if (err) {
				  	cb(err) // oubli de return
				}
				//...encore du code...
				fn2(params2, (err, null) => {
						if (err) {
								return cb() // oubli de passer l'erreur au callback
						}
						state = "bar"; // mutation de state
						//...encore du code...
						fn3(params3, (err, null) => {
								// ici on a carrément un oubli de contrôler «err»
								// ...et ainsi de suite...
						});
				});
		});
		//...non, la solution ce ne sont pas des écrans toujours plus larges...
}
```


- Il y a finalement toute une charge cognitive à gérer:
- Est-ce que les erreurs ont toujours été bien contrôlées à chaque étape ?
- La variable d'erreur est-elle toujours correctement nommée ? (et donc pas tout le temps en «err», ce qui alimente encore la confusion, comme dans cet exemple)
- Y a-t-il des «return» partout, pour éviter des chemins non prévus ?
- Avons-nous évité des mutations de variables partagées à mauvais escient dans les closures ?
- Comment on teste un monstre pareil ?


La solution: Externaliser les fonctions autant que possible (ici `fn1,` `fn2,` et `fn3`), ce qui permet de donner à chacune:

- L'assurance de ne pas muter des variables dans des _closures_  indues.
- Une définition JSDoc qui leur est propre (côté Typescript, c'est l'occasion de pouvoir appliquer à la signature de la fonction un type contraignant plutôt que de simplement se reposer sur l'inférence de type).
- Des tests unitaires dédiés (le [Test Driven Development](https://fr.wikipedia.org/wiki/Test_driven_development) est d'ailleurs un formidable outil pour inciter à la décomposition).
- La possibilité d'une recomposition avec d'autres fonctions, pour un autre usage.


Ce qui donne:

```javascript
const fn1 = (params, cb) => {
  var state;
  // ...
  state = "foo"; // Ici l'utilisation de la variable oblige qu'elle soit déclarée, ce qui limite très grandement le risque de «state leak» qu'on a pu voir ci-dessus
  // ...
  return fn2(otherParams, cb);
}

function myAwesomeFunction(params, cb) {
  var state;
  // ...
  state = "";
  return fn1(params, cb);
}

// ...et ainsi de suite...
```

_Pour aller plus loin_ : Les callbacks sont un exemple de [Continuation Monad en Javascript](https://blog.mattbierner.com/the-delimited-continuation-monad-in-javascript).


# Promesses

Les promesses sont un concept qui a connu plusieurs implémentations différentes (`async, $q, bluebird`, etc.), avant d'être standardisé dans le langage lui-même.
D'une certaine manière les promesses sont un [sucre syntaxique](https://fr.wikipedia.org/wiki/Sucre_syntaxique) sur les Callbacks, elles peuvent donc être vues comme une évolution de ceux-ci:

En suivant le paradigme des callbacks:
```javascript
function foo(params, cb) {
  ...stuff...
  asyncOperation(params, (error, result) => {
    if (error) {
      return callback(new Error("Au secours "));
    }
    return cb(null, result);
  })
}
// Utilisation:
foo(params, (err, data) => {
  if (err) {
    return errorHandlerFn(err);
  }
  return happyPathFn(data);
})
```


En suivant le paradigme des promesses:
```javascript
function foo(params) {
  // ...stuff...
  return asyncOperationPromise(params)
}
// Utilisation:
return foo(params)
  .then(happyPathFn)
  .catch(errorHandlerFn);

// ...et ainsi de suite...
```


-> Le code est ainsi remanié de manière à expliciter les deux chemins possibles :

- La suite d'exécution normale ("[happy path](https://en.wikipedia.org/wiki/Happy_path)")
- Le traitement d'une exception ("unhappy path")

là où précédemment, les deux chemins étaient entremêlés dans les callbacks (et leurs pléthoriques `if` ).


## Caveats

- Les conseils applicables aux Callbacks se retrouvent peu ou prou avec les Promesses ("Externaliser les définitions", notamment)
- Bien penser à toujours retourner une promesse, notamment pour "transmettre" la chaîne en cours à la fonction appelante (voir carrément au niveau le plus haut — à node.js ou au navigateur):

```javascript
function foo(params) {
  ...
  maSuperPromesse(params)
    .then(resultat => autreChose(resultat))
}
// Que "maSuperPromesse" finit sa t=C3=A2che avec succès ou pas, la fonction "foo" ne le saura jamais et donc ce code-là:
foo(params)
  .then(resultat => suiteDuTraitement(resultat))
// ne produira probablement pas le résultat escompté car l'exécution de "suiteDuTraitement" n'est pas chaînée à celle de "autreChose" (qui, elle, en revanche, est bien chaînée à "maSuperPromesse")
// Pour corriger ça, il faut bien penser à retourner la promesse dans "foo":
function foo(params) {
  ...stuff...
  return maSuperPromesse(params)
    .then(resultat => autreChose(resultat))
}
```


- Il est inutile de créer des promesses dans des promesses (phénomène bien connu du «prominception») car les imbrications de promesses sont systématiquement "aplaties" en une seule promesse:

```javascript
// Ce code:
foo(params)
  .then(()  => {
    return new Promise((resolve, reject) => {
      // ici du code qu'on peut résumer à une fonction "myFn"=E2=80=A6
      ...
      // en cas d'erreur:
      return reject(error);
      ...
      // en cas de succès:
      return resolve(result);
  	})
	})
  .then(result => doStuff(result))
  .catch(error => errorHandler(error))
// est équivalent à celui-là:
foo(params)
  .then(() => myFn())
  .then(result => doStuff(result))
  .catch(error => errorHandler(error))
```


- Il peut d'ailleurs être intéressant d'exploiter le [Passage Par Référence](https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293) de javascript pour simplifier encore davantage la lecture:

```javascript
// Ce code:
foo(params)
  .then(() => myFn())
  .then(result => doStuff(result))
  .catch(error => errorHandler(error))

// est équivalent à celui-là:
foo(params)
  .then(myFn)
  .then(doStuff)
  .catch(errorHandler)
// si et seulement si les fonctions «myFn», «doStuff», et «errorHandler» ne prennent qu'un seul argument
```


_Pour aller plus loin:_ Appliquer les stratégies de [Currying et d'Application Partielle](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983) pour arriver à facilement transformer une fonction multi-arguments de manière à ce qu'elle ne prenne qu'un seul argument, mais en s'exécutant en "plusieurs fois":

```javascript
// Cette fonction:
const foo = (dependency, input) => {
  ...
}
// utilisée de cette façon:
...
  .then(result => foo(myDependency, result))
...

// Peut être réécrite de cette manière:
const foo = dependency => input => {
  ...
}
// et peut alors être utilisée de cette façon:
...
  .then(foo(myDependency))
...
```

-> Individuellement la valeur ajoutée peut paraître faible, mais d'une part l'effet se démultiplie assez rapidement lorsque les chaînes de promesses deviennent plus longues, et d'autre part on évite d'introduire des variables temporaires (comme `result` dans l'exemple précédent) qu'on peut être tenté de manipuler (et donc de se créer de subtils problèmes de mutation).


## Erreurs

Les erreurs pourraient couvrir une documentation entièrement dédiée au sujet, d'autant que c'est un sujet qui est rarement traité avec le même soin que le _happy paths_ d'une fonction. D'où des problèmes qui peuvent être individuellement anecdotiques, mais qui peuvent créer une grande confusion à plus grande échelle:

```javascript
const fn1 = input => new Promise((resolve, reject) => {
  if (!input) {
    throw new Error('oups') // Ou "return reject(new Error('oups'))", =C3=A7a revient au même
  }
  return resolve(input);
})

const fn2 = input => input + " bar"
const fn3 = input => input + " qux"

const fn = input => fn1(input) // On rentre dans une chaîne de promesses
.then(fn2) // Happy path si input est defini
.then(fn3) // Suite du happy path

fn('foo'); // Renvoie une Promise résolue avec 'foo bar qux'
fn(); // Renvoie une Promesse rejetée avec une erreur dont le message est 'oups', les deux ".then" sont donc ignorés
```


Note: S'il n'y a aucun `.catch`, l'erreur est propagée jusqu'au niveau le plushaut (node.js, resp. le navigateur) et une erreur est loggée (stdout,resp. la console):

`UnhandledPromiseRejectionWarning: Unhandled promise rejection`

-> Le même conseil s'applique donc: toujours retourner une chaîne de promesses


Et utiliser les `.catch` à bon escient: Ne pas « manger » les erreurs:
```javascript
const fn1 = input => {
  if (!input) {
    throw new Error('oups')
  }
  return Promise.resolve(input) // Ou un «resolve(input)» dans un «new Promise((resolve, reject) => ...)», ça revient au même
}
const fn2 = input => input + " bar"
const fn3 = input => input + " qux"
const fn = input => fn1(input) // On rentre dans une chaîne de promesses
	.then(fn2) // Happy path si input est defini
	.catch(error => console.log('Erreur:', error. message))
	.then(fn3) // Suite du happy path
fn(); // Le message «Erreur:oups» va bien s'afficher dans la console mais fn3 va être exécutée, car l'erreur a été «mangée» par le catch.
// Pour éviter ça il vaut mieux soit lever à nouveau l'exception:
...
.catch(error => {
  console.log('Erreur:', error. message);
  throw error; // Attention à ne pas en recréer une, ou sinon on va perdre la stack trace de l'erreur originelle !
})
...
// soit retourner une promesse rejetée:
...
.catch(error => {
  console.log('Erreur:', error. message);
  return Promise.reject(error);
})
...
// Dans tous les cas il est recommandé d'avoir au moins un .catch dans le traitement d'une chaîne de promesses pour éviter de laisser le navigateur se débrouiller avec les erreurs qui n'auraient pas été précédemment attrapées:
const Mega2 = () =>
MyMegaFn()
.catch(fatalErrHandler)
```


Note: Lever une exception et retourner une promesse rejetée ne sont pas des mécanismes parfaitement équivalents. Il y a quelques [subtilités](https://stackoverflow.com/a/33446005) qui les différencient...

- Autre subtilité, les exceptions qu'on pense asynchrones mais qui ne le sont pas:

```javascript
// Le plus classique des cas de ce genre est la "guard clause" avant le traitement asynchrone:
const parse = input => {
  if (!input) {
    throw new Error('oups');
  }
  return new Promise((resolve, reject) => {
    // ...
  });
}
const fn = input => parse(input)
  .then(doStuff)
  .catch(error => console.log('Erreur', error.message))
fn() // Le console.log ne se sera pas executé car «parse» aura planté de manière synchrone.
// Mieux vaut dans ce cas retourner systématiquement une promesse et gérer la logique à l'intérieur:
const parse = input => new Promise((resolve, reject) => {
  if (!input) {
    throw new Error('oups'); // Ou «return reject(new Error('oups'))» qui revient au même, mais jamais «return reject('oups')=C2=BB qui, même si c'est syntaxiquement valide, ne permet pas de capturer la stack trace !
  }
  // ...
});
```
_Pour aller plus loin_: Certaines librairies (`bluebird` notamment) permettent d'avoir des Promesses avec des fonctions avancées, comme [Promise.try](http://bluebirdjs.com/docs/api/promise.try.html), [Promise.finally](http://bluebirdjs.com/docs/api/finally.html), etc. N'hésitez-pas à consulter les documentations !


# Conseils Généraux

- Ne pas mélanger les paradigmes, [c'est presque toujours un risque inconsidéré](https://spin.atomicobject.com/2017/04/06/nodejs-promises-callbacks/).
- Favoriser la «bonne» abstraction: Aucun humain ne peut raisonnablement maîtriser la lecture de fonctions interminables qui font tout et n'importe quoi (soyez [SOLIDes !).](https://fr.wikipedia.org/wiki/SOLID_%28informatique%29)
- Les Tests Unitaires (et en particulier ceux rédigés en suivant le rigorisme du [TDD](https://fr.wikipedia.org/wiki/Test_driven_development)) sont un bon moyen de vous inciter à écrire des fonctions de taille raisonnable, et dont l'API est un peu plus clairement définie (« quand on lui donne ceci, elle est sensée renvoyer ça»). De plus, ce principe de « Qualité par le code », au-delà d'aider vertigineusement à l'automatisation, peut s'appliquer à l'ensemble de la chaîne des tests ([BDD](https://en.wikipedia.org/wiki/Behavior-driven_development), [ATDD](https://en.wikipedia.org/wiki/Acceptance_test%E2%80%93driven_development), etc).
- Favoriser au plus possible la [Programmation en Binôme](https://fr.wikipedia.org/wiki/Programmation_en_bin%C3%B4me), et les [Revues deCode](https://fr.wikipedia.org/wiki/Programmation_en_bin%C3%B4me) intermédiaires (avant fusion dans la branche principale). Ce sont là des moments privilégiés où, au-delà d'aider (ou d'être aidé par) quelqu'un, vous pouvez progresser de la plus inattendue des manières.


# FIN

« Async is Love, Async is Life »
						- Vous, ~2020 après JC
						
Retrouvez cette présentation sur mon dépot de présentations:
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
