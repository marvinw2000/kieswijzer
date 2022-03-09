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
        userName:'',
        userRoll:'',
        role:'admin'
      }
    }
  },
  methods:{
    //login functie
    login(){
      //controle of input niet leeg is
      if (this.inputGebruikersNaam != '' && this.inputWachtwoord != '')
      {
        //fetch request voor login
        fetch(`${process.env.VUE_APP_BACKEND_URL}/login`,{
          body: JSON.stringify(this.form),
          method: "POST"
        }).then((response) => {
          return response.json();
        }).then((myJson)=>{
          console.log(myJson);
          //controleer de roll van de user.
          if(this.role === myJson[0] ){
              //de roll van de user word opgeslagen in locale storage
              this.userRoll = 'admin'
              this.userName = myJson['name']
              //console.log(this.userName)
              sessionStorage.setItem("userName",this.userName)
              sessionStorage.setItem("userRoll",this.userRoll)
              //admin woord naar de crud pagina gestuurd
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