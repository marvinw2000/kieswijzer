<template>
  <div class="headerTekst">
    <h1>Word jij de Mondriaan van...</h1>
    <p>
      Hieronder zijn de top drie techniek scholen weergegeven op basis van jouw studiekeuzetest. Klik op de opleiding voor meer informatie!
    </p>
  </div>
  <div class="container">

      <div class="column">
        <h2 class="nummer">1</h2>
        <router-link to="/informatie" class="informatie" exact>
          <button class="resultatenButton">{{ titelPlaats1 }}</button>
          <img v-bind:src="fotoPlaats1" >
        </router-link>
      </div>

      <div class="column">
        <h2 class="nummer">2</h2>
        <router-link to="/informatie" class="informatie" exact>
          <button class="resultatenButton">{{ titelPlaats2 }}</button>
          <img v-bind:src="fotoPlaats2" >
        </router-link>
      </div>

      <div class="column">
        <h2 class="nummer">3</h2>
        <router-link to="/informatie" class="informatie" exact>
          <button class="resultatenButton">{{ titelPlaats3 }}</button>
          <img v-bind:src="fotoPlaats3" >
        </router-link>
      </div>
  </div>
  <div class="container-aanmelden">
    <div class="footerText">
      <h2>Keuze al gemaakt?</h2>
    </div>
    <div class="footerButton">
      <button class="buttonColumn" type="button" formtarget="_blank" onclick="window.location.href='https://rocmondriaan.nl/alle-opleidingen'">Meld je nu aan</button>
    </div>
  </div>
</template>

<script>
import mixins from "../mixins/mixins";

export default {
  name: "Resultaten",
  mixins:[mixins]
}

</script>


<style scoped>
.headerTekst{
  width: 100%;
  text-align: center;
  margin-top: 50px;
}

.container{
  display: grid;
  grid-template-columns: 33% 33% 33% ;
  text-align: center;
  margin-top: 3%;
}

.column{
  margin-left: 20px;
  margin-right: 20px;
}

.nummer{
  width: 33%;
  font-size: 20px;
  color: white;
  background-color: #E20D18;
  border-radius: 5px;
  padding: 5px 10px 5px 10px ;

}

.resultatenButton{
  background-color: #1a61a1;
  color:white;
  font-size: 15px;
  padding: 12px 18px 12px 18px;
  margin-right: 35px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 3px solid #1a49a1;
  transition: all .2s ease;
  cursor: pointer;
}

.resultatenButton:hover{
  background-color: #1a49a1;
}

.container-aanmelden{
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 70px;
}

.buttonColumn{
  background-color: #E20D18;
  color:white;
  font-size: 15px;
  padding: 15px 20px 15px 20px;
  margin-top: 20px;
  margin-right: 35px;
  border: none;
  border-radius: 5px;
  border-bottom: 3px solid #B50811;
  transition: all .2s ease;
}

.buttonColumn:hover{
  background-color: red;
}

img{
  width: 100%;
}

.footerText{
  text-align: right;
  margin-top:10px;
  margin-right: 20px;
}

.footerButton{
  text-align: left;
}

@media screen and (max-width: 768px){
  .container{
    grid-template-columns: minmax(0,1fr);
  }
}

@media screen and (max-width: 480px){
  .container {
    grid-template-columns: minmax(0, 1fr);
  }
}


</style>