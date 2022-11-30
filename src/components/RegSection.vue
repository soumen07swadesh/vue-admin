<template>
  <div class="hold-transition register-page">
    <div class="register-box">
      <div class="register-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>
      <div class="card">
        <div class="card-body register-card-body">
          <p class="login-box-msg">Register a new membership</p>
          <form action="" method="">
            <div class="input-group mb-3">
              <input type="text" v-model="name" class="form-control" placeholder="Full name">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="email" v-model="email" class="form-control" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" v-model="password" class="form-control" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                  <label for="agreeTerms">
                    I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <div class="col-4">
                <button v-on:click="signup" type="button" class="btn btn-primary btn-block">Register</button>
              </div>
            </div>
          </form>
          <router-link to="/login" class="text-center">I already have a membership</router-link><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "RegSection",
  data(){
    return{
      name:"",
      email:"",
      password:""
    }
},
methods:{
  async signup()
  {
    console.log(this.name,this.email,this.password)
    let result=await axios.post("http://localhost:3000/user",{
      name:this.name,
      email:this.email,
      password:this.password,
    });
    console.log(result);
    if(result.status==201){
      localStorage.setItem("user-info",JSON.stringify(result.data))
   this.$router.push({name:'HomeSection'})
    }
  }
},
  mounted() {
    let user=localStorage.getItem('user-info');
    if(user){
      this.$router.push({name:'HomeSection'})

    }
  }
}
</script>