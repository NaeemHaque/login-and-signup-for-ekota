<template>
<div class="background">

    <v-row>
            <v-card
            width="80%"
            min-height="570"
            elevation="24"
            class=" card-bg mx-auto my-10 rounded-xl">
            <v-row>
                <v-col cols="12" md="6">
                         <v-img class="mx-auto" height="120" width="250" src="@/assets/images/ekota-white-logo.png"></v-img>

                        <v-img class="mx-auto hidden-sm-and-down" src="@/assets/images/login-side-image.png"></v-img>

                </v-col>
                <v-col cols="12" md="6">
                   <v-card flat class="login-card mx-auto my-4">
                        <h2 class="text-center white--text my-9">Signup For Coach</h2>
                        <v-form class="mx-5 mt-7">
                            <v-text-field
                            label="Your First Name"
                            outlined
                            dark
                            class="mx-auto"
                        ></v-text-field>
                        <v-text-field
                            label="Your Last Name"
                            outlined
                            dark
                            class="mx-auto"
                        ></v-text-field>
                             <v-text-field
                            label="Your Email Address"
                            outlined
                            type="email"
                            dark
                            class="mx-auto"
                        ></v-text-field>
                        <v-text-field
                            label="Your Phone Number"
                            outlined
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
                        <v-text-field
                            label="Confirm Password"
                            outlined
                            type="password"
                            dark
                            class="mx-auto"
                        ></v-text-field>

                        <v-row class="mx-1 my-3">
                           <div class="mx-auto text-center">
                               <v-btn outlined dark class="pa-3">
                                    Signup
                                </v-btn>
                            </div>
                        </v-row>

                        <v-row class="mx-auto or-divider">
                            <v-divider width="25%" color="#fff" class=" mr-3 mt-3"></v-divider>
                            <span class="white--text">Or</span>
                            <v-divider  width="25%" color="#fff" class="ml-3 mt-3"></v-divider>
                        </v-row>
                        </v-form>
                        <div class="text-center white--text my-7">
                            <p>Don't have an account ?  <router-link to="/">Login</router-link><br></p>

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
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      imageUrl: axios.defaults.baseURL + 'assets/images/'
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
        background-image: url('../../assets/images/bg.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .card-bg {
        background-color: #FF8228 !important;
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

</style>
