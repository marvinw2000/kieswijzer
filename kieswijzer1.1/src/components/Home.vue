<template>
  <body>
    <div class="homeContainer">
     <h1 class="homeHeaderText">Heb jij al een keuze gemaakt?</h1>
      <p>
        word jij de nieuwe mondriaan.<br>
        twijfel je nog maak nu de kieswijzer
      </p>
      <router-link to="/vragen" class="start" exact>
         <button class="startButton" type="button">Start kieswijzer!</button>
      </router-link>
    </div>
  </body>
</template>
<script>
export default {
  name: "Home"
}
</script>
<style scoped>

@media (min-width: 700px){
}
*{
  color: #fff;
  margin: 0px;
}
body{
  background-color: #1A61A1;
  height: 500px;
  width: 100%;
}
.homeContainer{
  width: 100%;
  text-align: center;
  color:white;
}
.homeHeaderText{
  padding-top: 50px;
  margin-bottom: 30px;
}
.startButton{
  background-color: #E20D18;
  color: white;
  font-size: 25px;
  margin-top: 50px;
  padding: 35px 40px 35px 40px;
  border-radius: 7px;
  margin-bottom: 50px;
  border-bottom: 3px solid #B50811;
  transition: all .2s ease;
}
.startButton:hover{
  padding: 40px 45px 40px 45px;
  background-color: red;
}

</style>