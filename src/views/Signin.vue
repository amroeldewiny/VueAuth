<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit="login">
          <input type="text" v-model="email" placeholder="Youremail@example.com">
          <input type="password" v-model="password" placeholder="*******">
          <button type="submit">Login</button>
        </form>
    <div id="nav">
      <router-link to="/signup">New user singup</router-link>
    </div>
    </div><!-- container -->
</template>

<script>
import firebase from "firebase";
export default {
  name: "signin",
  data:() => {
    return {
      email: "",
      password: ""
    };
  },
  methods:{
    login(e) {
      //console.log('email => ', this.email, 'password => ', this.password);
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          if(user){
            console.log(user);
            this.$router.replace("home");
          }
        },
        error => {
          console.log(error.message);
        }
      )
      e.preventDefault();
    }
  }
}
</script>

<style>

</style>
