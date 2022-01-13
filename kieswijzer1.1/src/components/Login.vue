<template>
  <div id="container">
    <div id="links"></div>
    <div id="midden">
      <div id="imgCenter">
        <img src="../assets/login.png" alt="login">
      </div>
      <form>
        <div class="form-group">
          <label for="InputEmail">gebruikers naam</label>
          <input type="text" class="form-control" id="InputEmail" placeholder="mijn gebruikers naam">
        </div>
        <div class="form-group">
          <label for="InputPassword">wachtwoord</label>
          <input type="password" class="form-control" id="InputPassword" placeholder="mijn wachtwoord">
        </div>
        <button type="submit" class="btn btn-primary">login</button>
      </form>
    </div>
    <div id="rechts"></div>
  </div>

</template>

<script>
export default {
  name: "Login"
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