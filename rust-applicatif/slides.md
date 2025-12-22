Bienvenue ! 👋
Notes : Bienvenue tout le monde !


Rust 🦀 est connu pour être un langage qui favoriserait le "bas-niveau"...

<img src="assets/embedded_rust_example.png" alt="Os court !">
Notes : Ajouter une image d'exemple "embedded"


Pour des masochistes férus d'optimisations mémoire...

<img src="assets/borrow_checker_meme.jpeg" alt="Cosplay de policier">
Notes : Meme borrow checker


À la syntaxe souvent qualifiée d'exigeante, quand ce n'est pas carrément "cryptique"... 🤯

<img src="assets/coerce_what_now.png" alt="Coercing Arc<Mutex<Option<Box<MyStruct>>>>> to Arc<Mutex<Option<Box<dyn Trait>>>>> won't work">
Notes : Mind blown sur le Arc<Box<Dyn<Mutex<UltraInstinct<SSJ4<String>>>>>>


Et si je vous disais que tout ceci est probablement vrai, mais que ce n'est pas pour ça que Rust m'intéresse ?

<img src="assets/bernie_rust.jpeg" alt="I am once again asking you to try Rust">
Notes : C'est vrai, en plus 


🦀Rust, pour des applications métiers 🦀
Notes : "applications métiers", c'est à dire de bonnes vieilles applications qui ont pour objectif la modélisation de processus qui ont des conséquences sur la vie réelle, sans pour autant dépendre d'un matériel spécifique.

Donc pas d'embarqué, pas vraiment de contraintes en dehors de ce qu'on connaît: des WebApps qui causent avec une base de données et 2/3 trucs autour (de l'IAM, par ex)



Un système typal expressif et multi-paradigmes
Notes : À vos souhaits. Promis je ne vais pas vous expliquer le Arc<Mutex>


La base: Structs, et "Newtypes"


Un cas ultra-classique:
```rust
pub struct NewUser {
    pub email: String,
}

fn ma_fonction(user: NewUser) {
  if !user.email.contains("@") {
     // Gestion de l'erreur, etc.
  }
  // On continue...

  // Possible, mais pas voulu -> Bug !
  let city: String = user.email
}
```
Notes : Nul. On va devoir multiplier les types partout.
Re-nul. "String", ça ne veut rien dire, on met un email dans une variable qui contient une ville ?
Non mais allo, quoi !


Encoder la logique métier, le rêve ! 😌
```rust
use crate::domain::UserEmail;

pub struct NewUser {
    // Attendez…c'est quoi ça ?
    pub email: UserEmail,
}
```
Notes : Exemple canonique, on veut créer un utilisateur, on a besoin de son email.

Ici, pas de String qui voudrait dire tout et n'importe quoi. On type tout fortement (sinon, ça va hurler à la compilation)


On "impl"émente la logique pour traiter les cas :
```rust
use validator::ValidateEmail;

#[derive(Debug)]
pub struct UserEmail(String);

impl UserEmail {
    pub fn parse(s: String) -> Result<UserEmail, String> {
        if s.validate_email() {
            Ok(Self(s))
        } else {
            Err(format!("{} is not a valid user email", s))
        }
    }
}
```
Notes : Un newtype va "emballer" un type (ici String)

Très pratique car un UserEmail n'est pas un String, ni n'est équivalent à un autre NewType(String) -> compilateur pas content si on mélange -> pas de Duck Typing

On délègue la validation elle-même à une "crate" (on reviendra là-dessus), un lib externe, quoi


Comment on valide ça ? Avec des tests ! 🤩
```rust
#[cfg(test)]
mod tests {
    #[test]
    fn email_missing_at_symbol_is_rejected() {
        let email = "stephanedomain.com".to_string();
        assert_err!(UserEmail::parse(email));
    }

    #[test]
    fn email_missing_subject_is_rejected() {
        let email = "@domain.com".to_string();
        assert_err!(UserEmail::parse(email));
    }
}
```
Notes : On reviendra là-dessus, mais les tests sont colocalisés avec le code.


💥 Un newtype n'est pas égal à un autre type !
```rust
pub struct Address(String);
pub struct UserEmail(String);

pub struct NewUser { pub email: UserEmail }

let my_user = NewUser {
  // Erreur ! Pas un UserEmail, mais un String !
  email: "steph@mydomain.com"
}

let my_user = NewUser {
  // Erreur ! Pas un UserEmail, mais un Address !
  email: Address("steph@mydomain.com")
}
```
Notes : Et c'est ce qu'on veut !


Il faut utiliser le newtype prévu :
```rust
use crate::domain::UserEmail;

pub struct NewUser {
    // Attendez…c'est quoi ça ?
    pub email: UserEmail,
}

let my_user = NewUser {
  // Ok 👍
  email: UserEmail::parse("steph@mydomain.com")?;
}
// Note: Pour l'instant le `?` c'est "magique" 🪄
```


<img class="r-stretch" src="assets/parse_dont_validate.png" alt="Parse, don't validate, d'Alexs King">
Notes : Un principe fondamental en Rust.
Lié à la philosophie Impureim: on veut au plus possible travailler dans un univers "pur", sans effects secondaires, qu'on maîtrise.

On _encode notre logique_ -> Type Driven Development.


"Mais, attends, c'est quoi Result, Ok, et Err ?"
```rust
use validator::ValidateEmail;

#[derive(Debug)]
pub struct UserEmail(String);

impl UserEmail {
    pub fn parse(s: String) -> Result<UserEmail, String> {
        if s.validate_email() {
            Ok(Self(s))
        } else {
            Err(format!("{} is not a valid user email", s))
        }
    }
}
```


<!-- .slide: data-background-image="assets/kahoot_billion_dollar_mistake.jpg" data-background-size="contain" -->
Notes : Toutes les réponses sont valables, mais une l'est historiquement


<img class="r-stretch" src="assets/billion_dollar_mistake.png" alt="Tony Hoare Wikipedia">
L'ajout de `null` à Algol W, et sa réplication dans (presque) tous les languages qui l'ont suivi
Notes : Dont Javascript, et c'est la raison pour laquelle Microsoft dépense une fortune dans mon linter préféré (TypeScript)


<img class="r-stretch" src="assets/nilnilnil.jpeg" alt="Mohg est innocent !">
Notes : En Rust, pas de gestion de erreurs en tant qu'exceptions (Java/JS), ni en tant que valeur (Nil)


L'Α et l'Ω du Type Driven Development:

Le Pattern Matching
```rust
/// validate_credentials:
///   (Credentials)-> Result<Uuid, AuthenticationError>
match validate_credentials(credentials).await {
}                       ╭Choose action ─────╮
                        │1. Fill match arms │
                        ╰─────────────────╯
```


Et y a plus qu'à remplir !
```rust
match validate_credentials(credentials).await {
    Ok(_) => todo!("rajouter le cas où tout est ok"),
    Err(_) => todo!("rajouter la gestion d'erreur"),
}
```


Et ensuite, on met le code final:
```rust
match validate_credentials(credentials).await {
  Ok(user_id) => {
    return HttpResponse::SeeOther()
      .insert_header((LOCATION, "/admin/dashboard"))
      .finish());
  }
  Err(e) => {
    return login_redirect(LoginError::AuthError(e));
  }
}
```


"On est obligés de gérer à chaque fois `Ok` et `Err` ?"
Non.
```rust
/// In this case, we ALWAYS have an IP Address
let port = listener.local_addr().unwrap().port();
```


Mais pourquoi qu'on s'inflige ça, alors ?
Parce que l'alternative est... pire.

<img src="assets/unwrap-me-i-double-dare-you.jpg" alt=".unwrap() me, I double dare you !">


Et même les plus gros se font avoir :

<img class="r-stretch" src="assets/cloudflare-incident.png" alt="La fameuse erreur Cloudflare de novembre 2025">


Moralité: Réservez `.unwrap` pour le code de test, et apprenez à propager/gérer les Results
```rust
fn my_function() -> Result<PortNumber, Error> {
  /// In this case, we SHOULD have an IP address.
  /// If not, bubble up the error upwards
  let port = listener.local_addr()?.port();
  return port;
}
```


D'ailleurs, en parlant d'erreurs...


`anyhow` et `thiserror`, les jumeaux surdoués de la gestion d'erreur.
Notes : Si les erreurs sont relous à gérer, vous les gérerez mal, et c'est là qu'il y aura des bugs.
Fort heureusement, la communauté Rust a tout prévu ^^


`thiserror`, les erreurs faciles à décrire :
```rust
use thiserror::Error;
#[derive(Error, Debug)]
pub enum DataStoreError {
  #[error("data store disconnected")]
  Disconnect(#[from] io::Error),
  #[error("the data for key `{0}` is not available")]
  Redaction(String),
  #[error("invalid ({expected:?}, found {found:?})")]
  InvalidHeader {
      expected: String,
      found: String,
  },
  #[error("unknown data store error")]
  Unknown }
```
Notes : thiserror va automatiquement faire le lien entre des erreurs et leur traduction (Display), juste avec des proc macros (donc zero cost abstraction).

Ce code est tiré de la doc officielle de la crate.

Notez d'ailleurs l'enum: toutes les erreurs sont exhaustivement décrites ici (permettant d'utiliser le pattern matching)


`anyhow`, les erreurs faciles à créer et propager :
```rust
use anyhow::{Context, Result};

// Le Result ne précise même plus le type d'erreur
// car ce sera un `anyhow::Error` 👌
fn main() -> Result<()> {

  // .context permet d'emballer l'erreur avec…du contexte 😁
  it.detach().context("Failed to detach the thing")?;

  // L'utilisation de `?` veut simplement dire:
  // Si c'est une `Err` alors on bubble up !
  // Sinon on "ouvre" la boîte `Ok` et on prend son contenu
  let content = std::fs::read(path)?;
}
```
Notes : C'est plus simple quand on n'a plus à y penser.

Ce code est tiré de la doc officielle de la crate.



Traits, la POO turbo-chargée
Notes : Pas d'héritage, pas de "abstract static final etc.". Une composition simple de méthodes


Un exemple simple: J'ai une `LoginError`, et je veux la déboguer
Notes : Par exemple, j'ai un test qui plante et je veux comprendre pourquoi


Une "fonction" super pratique: `dbg!(my_error)`
```rust
let my_error = LoginError::AuthError("Oulà !");
dbg!(&my_error)
```


Sauf que LoginError n'est pas un type élémentaire...
```rust
`LoginError` doesn't implement `std::fmt::Debug`
add `#[derive(Debug)]` to `LoginError` or manually `impl
std::fmt::Debug for LoginError`

Related information:

  * error.rs#53,18: required by a bound in `Error`
  * post.rs#18,1: consider annotating `LoginError` with
    `#[derive(Debug)]`

 (rustc E0277)
────────────────────────────────────────────────
https://doc.rust-lang.org/error-index.html#E0277
```
Notes : Regardez la puissance du message d'erreur !


Une solution, simple et bien pratique dans 90% des cas : `#[derive()]`
```rust
#[derive(Debug)]
pub enum LoginError {
    AuthError(Error),
    UnexpectedError(Error),
}
```


Ok pour les cas de base, mais implémenter explicitement `Debug` (ou autre trait) ?


Encore une fois, le LSP est là pour nous aider 😍

<img class="r-stretch" src="assets/impl-debug.png">


On obtient une implémentation "par defaut", qu'on peut customiser 🤤

<img class="r-stretch" src="assets/impl-debug-full.png">


Et on obtient alors le code final :
```rust
impl std::fmt::Debug for LoginError {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result {
        writeln!(f, "{}\n", e)?;
        let mut current = e.source();
        while let Some(cause) = current {
            writeln!(f, "Caused by:\n\t{}", cause)?;
            current = cause.source();
        }
        Ok(())
    }
}
```


Ce qui nous permet d'avoir un détail de l'erreur bien plus clair :
```rust
Failed to log in user.
Caused by:
    Failed to retrieve user informations
Caused by:
    error returned from database
Caused by:
    table "user" does not exist
```


La "blanket implementation"

<img class="r-stretch" src="assets/cozy-pepe.png" alt="Pepe sait être cosy sous son plaid">
Notes : L'art d'implémenter des méthodes pour d'autres types.


Ça serait pas mal de "convertir" un type en un autre 🤔
```rust
struct FormData {
    key: String,
}

let secure_key: SecurityKey = form.key
  .try_into()
  .map_err(error_400)?;
```
Notes : Et s'éviter ainsi d'avoir à appeller le .parse() qu'on a écrit


`SecurityKey` a une _blanket implementation_ pour le type `String` 💡
```rust
impl TryFrom<String> for SecurityKey {
type Error = anyhow::Error;
fn try_from(s: String) -> Result<Self, Self::Error> {
    if s.is_empty() {
        anyhow::bail!("The security key cannot be empty.")
    }
    let min_length = 50;
    if s.len() < min_length {
        anyhow::bail!(r#"The security key must be
        longer that {min_length} characters"#)
    }
    Ok(Self(s))
}}
```
Notes : Suffit d'importer `SecurityKey` et cet `impl` et le tour est joué !



Architecture Hexagonale
Notes : Le mot est lâché !


Rappel à toutes fins utiles:

<img class="r-stretch" src="assets/hexagonal-architecture-diagram.jpg">


Donc, si vous avez bien suivi…

<img class="r-stretch" src="assets/hexagonal-architecture-diagram-in-rust.png">


Mais, en vrai…

<img class="r-stretch" src="assets/hexagonal-architecture-diagram-in-TRUE-rust.png">



Domain Driven Design + Rust = 💓

<img class="r-stretch" src="assets/master-hexa-architecture-in-rust.png">



Un écosystème de librairies applicatives solide, complet, et agréablement documenté
(ou: Cargo, mon amour 💓)


Les vénérables librairies axum, actix-web


Les furieux frameworks dioxus, leptos


Il faut qu'on parle de `sqlx`


Les autres poids lourds : serde, tera



La Documentation en Rust



Une manière de tester les applications qui n'a pas son pareil,


Test unitaires colocalisés avec le code


On peut même tester…sa doc 🤯


Tests d'Intégration


Mocks (wiremocks)


Property Testing


Aller plus loin...


Zero2Production in Rust !
