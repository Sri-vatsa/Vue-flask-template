<template>
        <div class="login">
          <div v-if="proccessing" class="text-center"> Please wait... </div>
          <div v-if="message" class="text-center"> {{message}} </div>

          <b-form-input
            v-model="username"
            type="text"
            class="input-form"
            placeholder="Username">
          </b-form-input>

          <b-form-input
            v-model="password"
            class="input-form"
            type="password"
            placeholder="Password">
          </b-form-input>

          <b-button 
            v-on:click="login" 
            variant="primary" 
            class="btn-block"
          >
          Log me in
         </b-button>

        </div>
</template>

    <script>
    export default {
      name: "Login",
      data() {
        return {
          username: "",
          password: "",
          proccessing: false,
          message: ""
        };
      },
    };
    </script>

    <style scoped>
    .login {
      width: 500px;
      border: 1px solid #cccccc;
      background-color: #ffffff;
      margin: auto;
      margin-top: 200px;
      padding: 20px;
    }
    .input-form {
      margin-bottom: 9px;
    }
    </style>