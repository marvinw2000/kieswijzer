<template>
  <div id="container">
    <div id="links"></div>
    <div id="midden">
      <div id="containerTop">
        <buttonn v-on:click="superAdmin" v-if="myUserRole[0] === 'superAdmin'" class="btn btn-danger leftButton">
          zie alle profielen
        </buttonn>
        <div id="explanation" v-on:click="explanation">
          <img src="images/vraag.webp">
        </div>
      </div>
      <div id="containerMidden">
        <div id="imgCenter">
          <img src="images/profile-placeholder.png" alt="">
        </div>
        <div class="form-group">
          <label>mijn gebruikers naam</label>
          <input type="text" id="inputUsername" class="form-control" v-bind:value="myUsername">
        </div>
        <div class="form-group">
          <label>mijn wachtwoord</label>
          <input type="password" id="inputPassword" class="form-control"  v-bind:value="myPassword">
          <input type="checkbox" v-on:click="toggle"> toon wachtwoord
        </div>
        <button type="submit"  class="btn btn-primary" v-on:click="updateUser">update</button>
      </div>
    </div>
    <div id="rechts"></div>
  </div>
</template>

<script>
export default {
  name: "profielPagina",
  beforeCreate() {
    //userRoll word opgehaald uit local storage.
    let userRoll = sessionStorage.getItem("userRoll")
    //userroll word gecontroleerd.
    if(userRoll === 'admin' ){
      //console.log('suc6')
    }
    else{
      this.$router.push("/login")
    }
    let name = sessionStorage.getItem("userName")
    fetch(`${process.env.VUE_APP_BACKEND_URL}/findUser/${name}`).then((response) =>{
      return response.json();
    }).then((myJson)=>{
      console.log(myJson);
      this.myPassword = myJson['password']
      this.myUsername = myJson['username']
      this.myUserId = myJson['id']
      this.myUserRole = myJson['role']
      //console.log(this.myUserRole[0])
    })

  },
  data(){
    return{
      myUserRole:null,
      myUserId: null,
      myUsername: null,
      myPassword: null
    }
  },
  methods:{
    superAdmin(){
      this.$router.push("/profielBeheer")
    },
    toggle(){
      let password = document.getElementById("inputPassword");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    },
    explanation(){
      //console.log('explanation')
      alert('op dezen pagina kan je jouw gegevens beheren, vul de velden in en klik op update.')
    },
    updateUser(){
      let inputUsername = document.getElementById('inputUsername')
      let inputPassword = document.getElementById('inputPassword')

      const json = {
        "inputUsername": inputUsername.value,
        "inputPassword": inputPassword.value
      }
      //console.log(json)
      if (confirm(`weet je zeker dat je, je account wil updaten`)) {
        fetch(`${process.env.VUE_APP_BACKEND_URL}/updateUser/${this.myUserId}`,{
          body: JSON.stringify(json),
          method: "POST"
        }).then((response) =>{
          return response.json();
        }).then((myJson)=>{
          console.log(myJson);
        })
      }
    }
  }
}
</script>

<style scoped>
#containerTop{
  height: 90px;
}
#containerMidden{

}
.leftButton{
  float: left;
  margin: 20px;
}
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
#imgCenter img{
  width: 80px;
  border-radius: 40px;
}
#explanation img{
  width: 15px;
  margin-left: 350px;
}

</style>