<template>
  <div id="container">
    <div id="links"></div>
    <div id="midden">
      <div id="explanation">
        <img src="images/vraag.webp">
      </div>
      <div id="imgCenter">
        <img src="images/profile-placeholder.png" alt="">
      </div>
      <div class="form-group">
        <label>mijn gebruikers naam</label>
        <input type="text" class="form-control" v-bind:value="myUsername">
      </div>
      <div class="form-group">
        <label>mijn wachtwoord</label>
        <input type="password" id="mijnPassword" class="form-control"  v-bind:value="myPassword">
        <input type="checkbox" v-on:click="toggle"> toon wachtwoord
      </div>
      <button type="submit"  class="btn btn-primary">update</button>
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
    if(userRoll === 'admin'){
      console.log('suc6')
      let name = sessionStorage.getItem("userName")
      console.log(name)
      fetch(`${process.env.VUE_APP_BACKEND_URL}/findUser/${name}`).then((response) =>{
        return response.json();
      }).then((myJson)=>{
        console.log(myJson);
        this.myPassword = myJson['password']
      })
    }else{
      this.$router.push("/login")
    }
  },
  data(){
    return{
      myUsername: sessionStorage.getItem("userName"),
      myPassword: null
    }
  },
  methods:{
    toggle(){
      let password = document.getElementById("mijnPassword");
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
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
#imgCenter img{
  width: 80px;
  border-radius: 40px;
}
#explanation img{
  width: 15px;
  margin-left: 350px;
}

</style>