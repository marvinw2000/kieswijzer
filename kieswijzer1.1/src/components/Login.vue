<template>
  <div class="container-afbeelding">
    <img src="../assets/login.png" alt="login" width="">
  </div>
  <div class="container">
      <label><b>Gebruikersnaam</b></label>
      <input type="text" placeholder="gerbuikersnaam@rocmondriaan.nl" name="uname" required>
      <label><b>Wachtwoord</b></label>
      <input type="password" placeholder="Uw wachtwoord" name="psw" required>
      <button type="submit">Inloggen</button>
      <label>
          <input type="checkbox" checked="checked" name="remember"> Herinner mij
      </label>
  </div>
  <div class="container-cancel">
    <div class="grid-item1">
      <router-link to="/kieswijzer" class="kieswijzer" exact>
        <button type="cancelButton" onclick="" class="cancelbtn"> Annuleren</button>
      </router-link>
    </div>
    <div class="grid-item2">
      <span class="psw"><a href="#">Wachtwoord vergeten?</a></span>
    </div>
  </div>


</template>

<script>
export default {
  name: "Login",


}
</script>

<style scoped>

.container-afbeelding{
  display: grid;
  width: 100%;
  justify-content: center;
  margin: 30px 0px 30px 0px;
}

.container{
  display: grid;
  margin: 20px 200px 20px 200px;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #1a61a1;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container-cancel{
  display: grid;
  grid-template-columns: 200px 200px;
  margin: 20px 200px 20px 200px;
  width: 100%;
}

.cancelbtn{
  background-color: red;
  color: white;
  padding: 10px 5px 10px 5px;
}

.grid-item2{
  text-align: right;
  margin-top: 15px;
}

@media screen and (max-width: 768px){
  .container{
    margin: 20px 50px 20px 50px;
  }
  .container-cancel{
    margin: 20px 50px 20px 50px;
  }
}

@media screen and (max-width: 480px){
  .container {
    margin: 20px 50px 20px 50px;
  }
  .container-cancel{
    margin: 20px 50px 20px 50px;
  }
}





</style>