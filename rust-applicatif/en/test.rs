use axum::{ routing::{get, post}, http::StatusCode, Json, Router, };
use serde::{Deserialize, Serialize};

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init(); // initialize tracing
    let app = Router::new()
        .route("/", get(root))
        .route("/users", post(create_user)); // `POST /users` goes to `create_user`
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await;
}

async fn root() -> &'static str { "Hello, World!" }

// the input to our `create_user` handler
#[derive(Deserialize)]
struct CreateUser { username: String, }

// the output to our `create_user` handler
#[derive(Serialize)]
struct User { id: u64, username: String, }

async fn create_user(
    Json(payload): Json<CreateUser>, // Parse the request body as JSON into a `CreateUser` type
) -> (StatusCode, Json<User>) {
    let user = User { id: 1337, username: payload.username, };
    (StatusCode::CREATED, Json(user)) // Converts into a JSON response with 201 HTTP code
}

