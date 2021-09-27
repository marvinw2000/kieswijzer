<template>
  <img src="../assets/mondriaanOpaque.png" alt="imgBG" id="imgBG">
  <div id="gridContainer">
    <div id="grid_item1"></div>
    <div id="grid_item2">
      <h1 id="title">roc mondriaan technische kieswijzer </h1>
      <p class="text">
        Word jij de nieuwe mondriaan, maar weet je nog niet welke oplijding je wil gaan doen.
        <br>
        Maak nu de juisten keuzen, met de ROC Mondriaan technische studie kieswijzer.
        <br>
      </p>
      <button id="callToAction">start de kieswijzer</button>
    </div>
    <div id="grid_item3" ></div>
  </div>
</template>
<script>
export default {
  name: "Home"
}
</script>
<style scoped>
*{
  text-align: center;
}
#imgBG{
display: none;
}
#gridContainer{
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 5% 90% 5%;
}
#grid_item1{
}
#grid_item2{
}
#title{
  margin-top: 25px;
  color: #1A61A1;
}
.text{
  margin-top: 25px;
  color: #1A61A1;
}
#callToAction{
  margin-top: 10px;
  background-color: #e20d18;
  font-size:15px;
  color: white;
  border-radius: 10px;
  padding:5px 10px 5px 10px;
  margin-bottom: 15px;
}
#grid_item3{

}
@media (min-width: 700px){
  #gridContainer{
    position: absolute;
    top: 175px;
    grid-template-columns: 25% 50% 25%;
  }
  #title{
    margin-top: 100px;
    color: #1A61A1;
  }
  .text{
    margin-top: 50px;
    color: #1A61A1;
  }
  #imgBG{
    display: inline-block;
    z-index: -1;
    margin-left: 5%;
    width: 90%;
  }
}
</style>