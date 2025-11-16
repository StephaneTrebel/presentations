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


Un cas ultra-bateau:
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


<img class="r-stretch" src="assets/nilnilnil.jpeg" alt="Mohg est innocent !">
Notes : En Rust, pas de gestion de erreurs en tant qu'exceptions (Java/JS), ni en tant que valeur (Nil)


<!-- .slide: data-background-image="assets/kahoot_billion_dollar_mistake.jpg" data-background-size="contain" -->
Notes : Toutes les réponses sont valables, mais une l'est historiquement


<img class="r-stretch" src="assets/billion_dollar_mistake.png" alt="Tony Hoare Wikipedia">
L'ajout de `null` à Algol W, et sa réplication dans (presque) tous les languages qui l'ont suivi
Notes : Dont Javascript, et c'est la raison pour laquelle Microsoft dépense une fortune dans mon linter préféré (TypeScript)







L'Alpha et l'Omega du Type Driven Development:

Le Pattern Matching
```rust
match validate_credentials(credentials, &pool).await {
  Ok(user_id) => {
    Ok(HttpResponse::SeeOther()
      .insert_header((LOCATION, "/admin/dashboard"))
      .finish())
  }
  Err(e) => {
    let e = match e {
    AuthError::InvalidCredentials(_) => { LoginError::AuthError(e.into()) }
    AuthError::UnexpectedError(_) => { LoginError::UnexpectedError(e.into()) }
    };
    Err(login_redirect(e))
  }
}
```


Traits


La "blanket implementation"


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
