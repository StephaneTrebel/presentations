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



Un système typal expressif multiparadigmique
Notes : À vos souhaits. Promis je ne vais pas vous expliquer le Arc<Mutex>


Structs, et "Newtypes"


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


On peut, et on doit mieux faire:
```rust
use crate::domain::UserEmail;

pub struct NewUser {
    // Attendez…c'est quoi ça ?
    pub email: UserEmail,
}
```
Notes : Exemple canonique, on veut créer un utilisateur, on a besoin de son email.

Ici, pas de String qui voudrait dire tout et n'importe quoi. On type tout fortement (sinon, ça va hurler à la compilation)


On "impl"émente la logique, pour traiter le cas droit, et le cas d'erreur:
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


Comment on valide ça ?
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
///   (Credentials)-> Result<Uuid, AuthError>
match validate_admin_credentials(credentials, &pool).await {
}                       ╭Choose action ─────╮
                        │1. Fill match arms │
                        ╰─────────────────╯
```


Et y a plus qu'à remplir !
```rust
match validate_admin_credentials(credentials, &pool).await {
    Ok(_) => todo!("rajouter le cas où tout est ok"),
    Err(_) => todo!("rajouter la gestion d'erreur"),
}
```


Et ensuite, on met le code final:
```rust
match validate_admin_credentials(credentials).await {
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



Traits, la POO turbo-chargée
Notes : Pas d'héritage, pas de "abstract static final etc.". Une composition simple de méthodes


Un exemple simple: J'ai une `LoginError`, et je veux la logger en Debug
Notes : Par exemple, j'ai un test qui plante et je veux comprendre pourquoi


Une "fonction" super pratique: `dbg!(my_error)`
```rust
let my_error = LoginError::AuthError("Oulà !");
dbg!(my_error)
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


Une autre solution, implémenter explicitement le trait `Debug`
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


On obtient alors quelque chose de plus clair
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


"Améliorer" le type `String` :
```rust
let FormData {
    key: String,
} = form;
let key: SecurityKey = key.try_into().map_err(error_400)?;
```


`SecurityKey` a une _blanket implementation_ pour le type `String`
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


Des Architecture Hexagonale


Domain Driven Design



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
