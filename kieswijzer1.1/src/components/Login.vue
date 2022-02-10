<template>
  <div id="container">
    <div id="links"></div>
    <div id="midden">
      <div id="imgCenter">
        <img src="../assets/login.png" alt="login">
      </div>
        <div class="form-group">
          <label>gebruikers naam</label>
          <input type="text" v-model="form.inputGebruikersNaam" class="form-control" placeholder="mijn gebruikers naam">
        </div>
        <div class="form-group">
          <label>wachtwoord</label>
          <input type="password" v-model="form.inputWachtwoord" class="form-control" placeholder="mijn wachtwoord">
        </div>
        <button type="submit"  v-on:click="login()" class="btn btn-primary">login</button>
    </div>
    <div id="rechts"></div>
  </div>

</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      form:{
        inputGebruikersNaam:null,
        inputWachtwoord:null,
        userRoll:'',
        role:'admin'
      }
    }
  },
  methods:{
    login(){
      //console.log('test')
      //console.log(`de gebruikersnaam is ${this.form.inputGebruikersNaam}`)
      //console.log(`het wachtwoord is ${this.form.inputWachtwoord}`)
      if (this.inputGebruikersNaam != '' && this.inputWachtwoord != '')
      {
        //console.log('suc6')
        fetch(`${process.env.VUE_APP_BACKEND_URL}/login`,{
          body: JSON.stringify(this.form),
          method: "POST"
        }).then((response) => {
          return response.json();
        }).then((myJson)=>{
          console.log(myJson);
          if(this.role === myJson[0] ){
              console.log('ok')
              this.userRoll = 'admin'
              sessionStorage.setItem("userRoll",this.userRoll)
              this.$router.push("/crud")
          }
        }).catch((error) => {
          console.log(error)
          alert('login mislukt')
        })

      }
    }
  }

}
</script>

<style scoped>
#container{
  margin: 15px;
  text-align: center;
 display: flex;
 flex-direction: row;
}
#links{
  height: 100%;
  width: 25%
}
#midden{
  height: 100%;
  width: 50%
}
label{
  margin: 5px;
}
button{
  margin: 10px;
}
input {
  text-align: center;
}
form{

}
#rechts{
  height: 100%;
  width: 25%
}
#imgCenter{
  margin: 25px;
}



</style>