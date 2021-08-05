<template>
<div class="background">

    <v-row>
            <v-card
            width="80%"
            min-height="570"
            elevation="10"
            class=" card-bg mx-auto my-10 rounded-xl">

            <v-row>
                <v-col cols="12" md="6">
                    <v-img class="mx-auto" height="120" width="250" src="@/assets/images/ekota-white-logo.png"></v-img>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card flat class="login-card mx-auto my-4">
                        <h1 class="text-center white--text my-7">Login</h1>
                        <v-form class="mx-5">
                             <v-text-field
                            label="Your Email Address"
                            outlined
                            type="email"
                            dark
                            class="mx-auto"
                        ></v-text-field>
                         <v-text-field
                            label="Password"
                            outlined
                            type="password"
                            dark
                            class="mx-auto"
                        ></v-text-field>

                        <v-row class="mx-auto my-3 forgot-pass">
                            <router-link to="" class="forgot-pass-text">Forgot Password ?</router-link>
                            <v-spacer></v-spacer>
                            <v-btn outlined dark class="login">Login</v-btn>
                        </v-row>

                        <v-row class="mx-auto or-divider">
                            <v-divider width="30%" color="#fff" class="__divider mr-3 mt-3"></v-divider>
                            <span class="white--text">Or</span>
                            <v-divider  width="30%" color="#fff" class="__divider ml-3 mt-3"></v-divider>
                        </v-row>
                        </v-form>
                        <div class="text-center white--text mb-8">
                            <br><p>Don't have an account ?</p>
                            <router-link to="/signup-for-coach" class="forgot-pass-text"><u>Create Account For Coach</u></router-link><br>
                            <router-link to="/signup-for-manager" class="forgot-pass-text"><u>Create Account For Manager</u></router-link><br>
                            <router-link to="/signup-for-athlate-or-parent" class="forgot-pass-text"><u>Create Account For Athlate or Parent</u></router-link><br>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            </v-card>
    </v-row>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: '',
      imageURL: axios.defaults.baseURL + ''
    }
  }
}
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border: 2px solid #fff !important;
}
.login.v-btn--outlined {
    border: 2px solid #fff;
  }
  .v-text-field{
    width: 400px !important;
}
    .background {
        background-image: url('../assets/images/bg.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .card-bg {
        background-color: #FF8228 !important;
        background-image: url('../assets/images/log-in-page-image.png') !important;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .login-card {
        background: none !important;
    }
    .forgot-pass {
        max-width: 400px !important;
    }

    .forgot-pass-text {
        text-decoration: none;
        color: #fff;
    }
    .or-divider {
        max-width: 400px !important;
    }

@media (min-width: 960px) and (max-width: 1230px) {
.card-bg {
        background-image: url('../assets/images/log-in-page-image-md.png') !important;
    }
}
    /********** Small devices only **********/
@media (min-width: 601px) and (max-width: 960px) {
  .card-bg {
        background-image: none !important;
        background-color: #FF8228 !important;
   }

}

/********** Extra small devices only **********/
@media (max-width: 600px) {
  .card-bg {
        background-color: #FF8228 !important;
        background-image: none !important;
    }
}

/********** Super extra small devices Only :-) (e.g., iPhone 4) **********/
@media (max-width: 479px) {
  .card-bg {
        background-color: #FF8228 !important;
        background-image: none !important;
    }
}
</style>
