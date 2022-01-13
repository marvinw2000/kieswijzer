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
    <div class="annuleren">
      <router-link to="/kieswijzer" class="kieswijzer" exact>
        <button type="cancelButton" onclick="" class="cancelbtn"> Annuleren</button>
      </router-link>
    </div>
    <div class="wachtwoord-vergeten">
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
  justify-content: center;
  margin: 30px 0px 30px 0px;
}

.container{
  display: grid;
}

input[type=text], input[type=password] {
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
  margin: 20px 120px 20px 120px;
}

.cancelbtn{
  background-color: red;
  color: white;
  padding: 10px 5px 10px 5px;
}

.wachtwoord-vergeten{
  text-align: right;
  margin-top: 15px;
}

@media screen and (max-width: 768px){
  .container {
    justify-content: center;
  }
  .container-cancel{
    grid-template-columns: 100%;
  }

  .wachtwoord-vergeten{
    text-align: center;
  }
}

@media screen and (max-width: 480px){
  .container {
    margin: 20px 20px 20px 20px;
    justify-content: center;
  }

  .container-cancel{
    margin: 30px 120px 30px 120px;
    grid-template-columns: 100%;
  }

  .wachtwoord-vergeten{
    text-align: center;
  }
}





</style>