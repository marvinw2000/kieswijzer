<template>
    <div class="homeContainer">
     <h1 class="homeHeaderText">Heb jij al een keuze gemaakt tussen de techniek scholen?</h1>
      <p>
        Start de kieswijzer en zie welke techniekscholen bij jou passen!
      </p>
      <router-link to="/vragen" class="start" exact>
         <button class="startButton" type="button">Start kieswijzer!</button>
      </router-link>
    </div>
</template>
<script>
export default {
  name: "Home"
}
</script>

<style scoped>

*{
  color:#fff;
  margin: 0px;
}

.homeContainer{
  width: 100%;
  height: 84vh;
  max-height: 100% !important;
  text-align: center;
  background-color: #1A61A1;
}

.homeHeaderText{
  padding-top: 100px;
  margin-bottom: 30px;
}
.startButton{
  cursor: pointer;
  background-color: #E20D18;
  color: white;
  font-size: 40px;
  margin-top: 50px;
  padding: 35px 40px 35px 40px;
  border:none;
  border-radius: 20px;
  border-bottom: 3px solid #B50811;
  transition: all .2s ease;
}
.startButton:hover{
  padding: 40px 45px 40px 45px;
  background-color: red;
}

</style>