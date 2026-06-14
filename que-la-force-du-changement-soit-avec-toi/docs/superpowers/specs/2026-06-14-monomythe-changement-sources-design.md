# Design: recherche sourcee Monomythe et conduite du changement

## Contexte

La conference "Que la Force (du Changement) soit avec toi" rapproche les 17 etapes du Monomythe de Joseph Campbell de situations vecues dans la conduite du changement des projets informatiques.

Le besoin est de verifier, pour chaque etape, si un cas concret public peut soutenir ce rapprochement. Le resultat doit aider a selectionner ensuite les exemples les plus pertinents pour enrichir les slides, sans forcer artificiellement les paralleles.

## Objectif

Produire un fichier Markdown `docs/research/monomythe-changement-sources.md` qui liste les 17 etapes du parcours du heros et, pour chacune :

- le rapprochement propose avec la conduite du changement IT ;
- un cas concret public lorsque disponible ;
- au moins une URL partageable avec le public ;
- le type de source ;
- le niveau de confiance ;
- les limites ou reserves ;
- une suggestion d'usage en conference.

## Approche retenue

L'approche retenue est une matrice par etape. Elle est preferable a une analyse par grands cas, car elle rend visibles les trous, les rapprochements faibles et les etapes pour lesquelles aucune source robuste n'a ete trouvee.

La recherche partira du niveau de preuve "equilibre" :

- sources d'entreprise, post-mortems, rapports publics, documentation officielle ;
- articles de reference, conferences, interviews ou billets d'engineering reconnus ;
- sources academiques lorsque disponibles et exploitables.

Si aucune source de niveau equilibre n'est trouvee pour une etape, une source plus large peut etre proposee, mais elle devra etre marquee explicitement `Niveau large`. Si aucun rapprochement defendable n'est trouve, la ligne indiquera `Aucun rapprochement solide trouve`.

## Structure du livrable

Le fichier de recherche sera organise ainsi :

1. Une courte introduction rappelant la methode et les niveaux de preuve.
2. Un tableau principal avec une ligne par etape du Monomythe.
3. Une section de synthese listant :
   - les etapes fortes, utilisables telles quelles ;
   - les etapes plausibles mais a manier avec prudence ;
   - les etapes sans source satisfaisante.

Colonnes du tableau :

- `Etape du Monomythe`
- `These de rapprochement`
- `Cas concret`
- `Source`
- `Type de source`
- `Niveau`
- `Limites`
- `Usage possible en slide`

## Regles de qualite

- Ne pas inventer de source ni surinterpreter un cas public.
- Preferer une ligne honnete "aucun rapprochement solide" a un exemple decoratif.
- Distinguer explicitement ce que la source affirme de ce qui est une inference pour la conference.
- Eviter les cas purement anecdotiques quand une source plus solide existe.
- Ne pas modifier les slides pendant cette phase.

## Validation

La validation portera sur :

- la presence des 17 etapes ;
- la presence d'une URL pour chaque cas propose ;
- le marquage explicite des sources faibles ou absentes ;
- la coherence entre le cas cite et l'etape du Monomythe ;
- l'absence de modifications du deck.
