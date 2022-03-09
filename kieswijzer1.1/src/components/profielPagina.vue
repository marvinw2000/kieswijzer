<template>
  <div class="container">
    <div class="links"></div>
    <div class="midden">
      <div id="imgCenter">
        <img src="images/profile-placeholder.png" alt="">
      </div>
      <div class="form-group">
        <label>mijn gebruikers naam</label>
        <input type="text" class="form-control" placeholder="">
      </div>
      <div class="form-group">
        <label>mijn wachtwoord</label>
        <input type="password" class="form-control" placeholder="">
      </div>
      <button type="submit"  class="btn btn-primary">update</button>
    </div>
    <div class="rechts"></div>
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
    }else{
      this.$router.push("/login")
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
#imgCenter img{
  width: 80px;
}

</style>