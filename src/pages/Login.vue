<template>
  <div>
    <div class="jumbotron bg-primary text-white h-6 p-3 text-center">
      <h2 class="lead display-3 ">
        #Slack#
      </h2>
      <p>Realtime communication at its best</p>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col text-center">
          <button
            @click="loginWithGoogle"
            class="btn btn-outline-danger btn-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col text-center">
          <button class="btn btn-outline-info btn-lg">
            Login with Twitter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import auth from "firebase/auth";
let provider = new firebase.auth.GoogleAuthProvider();
export default {
  name: "login",

  methods: {
    loginWithGoogle() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          console.log(result);
          console.log(credential);
          console.log(token);
          console.log(user);
          // ...
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
};
</script>

<style>
.btn,
.jumbotron {
  border-radius: 0px;
}
</style>
