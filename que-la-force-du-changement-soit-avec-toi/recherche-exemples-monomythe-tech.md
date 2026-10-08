# Vignettes atomiques pour le Monomythe du changement dans la Tech

> Cette sélection répond à un besoin de **vignettes autonomes** : un fait précis, associé à **une seule étape** de l'adaptation Tech du Monomythe dans `slides/01-main.md`.
>
> Elles ne sont pas des fils rouges. Chacune doit pouvoir tenir en 20 à 40 secondes, puis laisser la parole au propos de la conférence.

## Méthode de tri

Le score d'intérêt est sur 10 :

- **pertinence pour l'étape** : /5 ;
- **récence** : /5 — 2024–2025 = 5, 2022–2023 = 4, 2020–2021 = 3.

La proximité francophone est indiquée par le tag **[FR]** ; elle n'entre pas dans le score, afin de respecter le critère demandé : le classement combine seulement pertinence et récence.

---

## 1. **10/10** — XZ Utils : l'alerte d'Andres Freund (mars 2024)

**Étape : Se sauver de l'Absence**

Andres Freund, développeur chez Microsoft, remarque un comportement anormal — notamment de la consommation CPU — dans `sshd`. Son investigation révèle une porte dérobée dans `xz`, une bibliothèque extrêmement répandue. La communauté peut réagir parce qu'une personne extérieure au projet regarde, alerte et partage l'information.

**Angle à raconter :** ne pas rester seul ne signifie pas seulement avoir un sponsor. Cela signifie aussi que le collectif, ses utilisateurs et utilisatrices, peut voir ce que l'équipe ne voit plus. Le changement — ici la sécurité du logiciel libre — existe parce qu'il devient observable par d'autres.

**Pourquoi c'est fort :** une histoire récente, technique, humaine et très concrète, sans besoin d'expliquer toute la chaîne d'attaque.

Source : [message initial sur oss-security](https://www.openwall.com/lists/oss-security/2024/03/29/4).

---

## 2. **9/10** — OpenTofu rejoint la Linux Foundation (septembre 2023)

**Étape : L'Aide Extérieure**

Après le changement de licence de Terraform par HashiCorp, un collectif lance OpenTF. La Linux Foundation fournit alors un cadre : marque, gouvernance, neutralité et capacité à fédérer des organisations concurrentes. Le projet devient OpenTofu.

**Angle à raconter :** l'aide n'est pas nécessairement une personne providentielle. C'est parfois une institution qui prend une partie du risque politique et donne au groupe les moyens d'agir.

**Pourquoi c'est fort :** un exemple très actuel de sponsor, immédiatement intelligible pour un public DevOps / plateforme / open source.

Source : [annonce de la Linux Foundation](https://www.linuxfoundation.org/press/announcing-opentofu).

---

## 3. **9/10** — Python accepte le PEP 703, un Python sans GIL optionnel (octobre 2023)

**Étape : L'Apothéose**

Après des décennies de débats autour du Global Interpreter Lock, le projet Python accepte le PEP 703 : le GIL pourra devenir optionnel. Ce n'est pas la fin du travail, mais le moment où un blocage historique devient pensable autrement, avec une trajectoire explicite.

**Angle à raconter :** l'apothéose n'est pas « on a gagné ». C'est le moment où, après le conflit et les échecs précédents, le groupe comprend enfin sous quelles conditions son problème peut être résolu.

**Pourquoi c'est fort :** une décision technique précise, prise par une communauté mature, qui évite le faux récit du génie solitaire.

Source : [PEP 703](https://peps.python.org/pep-0703/).

---

## 4. **9/10** — Unity révise sa Runtime Fee après la mobilisation des studios (septembre 2023)

**Étape : Le Conflit**

Unity annonce une tarification à l'installation qui menace directement le modèle économique de nombreux studios. Les réactions sont publiques et massives ; Unity revoit rapidement sa proposition et retire notamment l'application rétroactive aux versions déjà publiées.

**Angle à raconter :** le conflit n'est pas un défaut de communication à éviter à tout prix. C'est l'instant où le rapport de force révèle ce qui est réellement acceptable, et où il faut apprendre à perdre, transiger ou revoir son plan.

**Pourquoi c'est fort :** un changement de règle très clair, un collectif affecté, une confrontation visible et une issue imparfaite — exactement ce que la slide décrit.

Source : [mise à jour de Unity sur la Runtime Fee](https://blog.unity.com/news/open-letter-on-runtime-fee).

---

## 5. **9/10** — France Identité devient utilisable avec FranceConnect+ (2024) **[FR]**

**Étape : Franchir le Seuil du Retour**

Une identité numérique ne prend son sens que lorsqu'elle arrive dans des démarches administratives ordinaires. L'enjeu n'est plus de démontrer que l'application fonctionne, mais de la raccorder à des services concrets, avec des parcours compréhensibles et des solutions pour les personnes qui ne peuvent ou ne veulent pas l'utiliser.

**Angle à raconter :** revenir vers le réel oblige à abandonner la solution « objectivement bonne » dans son coin. Le produit doit accepter les contraintes d'accessibilité, de confiance et d'usage de celles et ceux qu'il prétend servir.

**Pourquoi c'est fort :** très récent, français, et particulièrement net pour distinguer une preuve de concept d'un changement effectivement revenu vers ses bénéficiaires.

Source : [France Identité](https://france-identite.gouv.fr/) ; [FranceConnect+](https://franceconnect.gouv.fr/franceconnect-plus).

---

## 6. **8/10** — Kubernetes 1.24 retire dockershim (mai 2022)

**Étape : Franchir le Premier Seuil**

Kubernetes 1.24 retire dockershim. Les équipes qui s'étaient contentées de « Docker marche chez nous » doivent choisir un runtime compatible, inventorier, tester et programmer une migration.

**Angle à raconter :** le seuil n'est pas l'annonce du changement. C'est le premier geste irréversible : réserver le temps, migrer un premier cluster et accepter d'entrer dans un environnement dont on ne maîtrise pas encore toutes les règles.

**Pourquoi c'est fort :** c'est une transition familière, limitée et concrète ; elle évite de raconter le changement comme une grande révolution abstraite.

Source : [Kubernetes Blog — _Ready for Dockershim Removal_](https://kubernetes.io/blog/2022/03/31/ready-for-dockershim-removal/).

---

## 7. **8/10** — Panoramax fédère données, collectivités et communs (depuis 2022) **[FR]**

**Étape : Maître des Deux Mondes**

Panoramax propose une alternative ouverte à l'imagerie de rue centralisée. Le projet doit faire tenir ensemble des acteurs qui ne parlent pas spontanément le même langage : IGN et institutions, collectivités productrices de données, communautés OpenStreetMap, développeurs et usages de terrain.

**Angle à raconter :** maîtriser deux mondes, ce n'est pas devenir supérieur aux autres. C'est savoir traduire : besoin public, contraintes de terrain, qualité de données, code et gouvernance.

**Pourquoi c'est fort :** un exemple francophone de commun numérique ; il donne une définition positive et collective de l'expertise.

Source : [Panoramax](https://panoramax.openstreetmap.fr/).

---

## 8. **7/10** — Lancement public de SNCF Connect (janvier 2022) **[FR]**

**Étape : La Route des Épreuves**

Au lancement de SNCF Connect, les difficultés de parcours et les retours négatifs deviennent immédiatement publics. L'équipe n'est plus face à ses maquettes ni à ses indicateurs internes : elle rencontre des personnes qui doivent réellement acheter, modifier ou comprendre un voyage.

**Angle à raconter :** les épreuves ne prouvent pas que l'idée était mauvaise. Elles transforment une équipe qui pensait connaître le problème en équipe qui apprend de ses utilisatrices et utilisateurs.

**Pourquoi c'est fort :** la situation est connue du public français, et l'exemple permet de parler d'échecs sans se réfugier dans une catastrophe technique spectaculaire.

Source de départ : communication de lancement SNCF Connect (25 janvier 2022) et retours publics associés.

---

## 9. **7/10** — Faker.js : quand le mainteneur unique coupe la chaîne (janvier 2022)

**Étape : Le Refus du Retour**

Le mainteneur de `faker.js` et `colors.js` publie volontairement des versions qui perturbent les applications dépendantes. Au-delà du geste, l'épisode expose la fragilité d'un écosystème qui dépend du travail invisible d'une seule personne. La communauté doit forker, stabiliser et redistribuer la responsabilité.

**Angle à raconter :** devenir la personne indispensable est une fausse victoire. Quand la connaissance et le pouvoir ne reviennent pas au collectif, le projet devient une prison — et le risque de burn-out ou de rupture augmente.

**Pourquoi c'est fort :** l'exemple rend immédiatement tangible le passage de la slide sur l'irremplaçabilité et le « bus factor ».

Source : dépôt et historique de [faker.js](https://github.com/faker-js/faker) ; analyse de l'incident par [Snyk](https://snyk.io/blog/open-source-npm-packages-colors-faker/).

---

## 10. **7/10** — L'incendie d'OVHcloud à Strasbourg (mars 2021) **[FR]**

**Étape : Le Ventre de la Baleine**

L'incendie du site SBG2 met brutalement à l'épreuve les hypothèses de sauvegarde, de réplication et de reprise des clientes, clients et équipes. Pour beaucoup, la résilience cesse d'être une case d'architecture : elle devient une transformation douloureuse de leurs pratiques, de leurs budgets et de leur rapport au risque.

**Angle à raconter :** avant de vouloir changer le monde, il faut accepter que ses propres certitudes soient incomplètes. Le « ventre de la baleine » est précisément ce moment où l'on ne peut plus se raconter que le système est sous contrôle.

**Pourquoi c'est fort :** un fait français marquant, avec un lien immédiat vers les pratiques concrètes de la Tech.

Source de départ : communications d'incident et retours d'expérience OVHcloud, mars 2021.

---

## 11. **6/10** — Log4Shell force les organisations à regarder leurs dépendances (décembre 2021)

**Étape : L'Appel de l'Aventure**

La vulnérabilité Log4Shell ne crée pas à elle seule les pratiques de sécurité logicielle, mais elle rend le statu quo intenable. Inventaires de dépendances, mises à jour, SBOM, revue de la chaîne d'approvisionnement : beaucoup d'équipes doivent soudain commencer un chantier qu'elles repoussaient.

**Angle à raconter :** l'appel n'est pas toujours une brillante idée ou une opportunité. C'est souvent le moment où ne rien faire devient plus dangereux que changer.

**Pourquoi c'est fort :** un déclencheur partagé par tout l'écosystème, avec une traduction très simple vers le vécu d'une équipe.

Source : [CISA — Apache Log4j Vulnerability Guidance](https://www.cisa.gov/news-events/news/apache-log4j-vulnerability-guidance).

---

## 12. **6/10** — Le Health Data Hub sur Azure : l'argument du « il n'y a pas d'alternative » (2020–2021) **[FR]**

**Étape : La Tentation du Cynisme**

Le choix initial d'héberger la plateforme de données de santé sur Azure déclenche des controverses relatives à la souveraineté, au droit applicable et à l'existence d'alternatives. La discussion risque alors de basculer dans deux cynismes opposés : « rien ne peut changer face aux contraintes » ou « toute solution imparfaite est forcément illégitime ».

**Angle à raconter :** le cynisme ne consiste pas à voir les problèmes ; il consiste à en déduire qu'aucune amélioration n'est possible. Conduire le changement demande de garder l'exigence, sans se satisfaire du renoncement.

**Pourquoi c'est fort :** l'exemple porte une tension française très concrète entre contraintes de délai, souveraineté, sécurité et intérêt public.

Source de départ : [CNIL — Health Data Hub](https://www.cnil.fr/fr/le-conseil-detat-demande-au-health-data-hub-des-garanties-supplementaires).

---

## Répartition rapide par partie du deck

| Partie | Vignettes les plus adaptées |
|---|---|
| **Le Départ** | Log4Shell ; OpenTofu ; Kubernetes / dockershim ; OVHcloud |
| **L'Initiation** | SNCF Connect ; Health Data Hub ; Unity ; Python PEP 703 |
| **Le Retour** | Faker.js ; XZ Utils ; France Identité ; Panoramax |

## À privilégier si le temps est très contraint

1. **OpenTofu / Linux Foundation** — Aide extérieure.
2. **Unity Runtime Fee** — Conflit.
3. **OVHcloud Strasbourg** — Ventre de la Baleine.
4. **Faker.js** — Refus du Retour.
5. **Panoramax** — Maître des Deux Mondes.

Ces cinq exemples couvrent le récit, restent racontables rapidement et mêlent cas internationaux et contexte francophone.
