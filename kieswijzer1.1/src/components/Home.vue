<template>
  <body>
    <div class="homeContainer">
     <h1 class="homeHeaderText">Heb jij al een keuze gemaakt?</h1>
      <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit.<br>
        Aenean vitae ullamcorper neque
      </p>
     <button class="startButton" type="button">Start kieswijzer!</button>
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
body{
  background-color: #1A61A1;
  height: auto !important;
  min-height: 100%;
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
  border-radius: 35px;
  margin-bottom: 50px;
  border: none;
}
.startButton:hover{
  padding: 40px 45px 40px 45px;
  background-color: #E20D33;
}
</style>