<template>
  <div class="headerTekst">
    <h1>Best passende techniek scholen</h1>
  </div>
  <div class="container">
      <div class="column">
        <router-link to="/informatie" class="informatie" exact>
          <button class="resultatenButton">1 - Autotechniek</button>
        </router-link>
        <img src="../assets/ICT.jpg" alt="Autotechniek">
      </div>
      <div class="column">
        <router-link to="/informatie" class="informatie" exact>
          <button class="resultatenButton">2 - ICT</button>
        </router-link>
        <img src="../assets/ICT.jpg" alt="Elektro">
      </div>
      <div class="column">
        <router-link to="/informatie" class="informatie" exact>
          <button class="resultatenButton">3 - Mobiel</button>
        </router-link>
        <img src="../assets/ICT.jpg" alt="ICT" >
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
//import VraagComponent from "./VraagComponent";
//import vragenData from "../data/vragenData";
export default {

  data() {
    return{

    }
  }
}
</script>

<style scoped>

.headerTekst{
  width: 100%;
  text-align: center;
  margin-top: 50px;
}

.container{
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33% ;
  text-align: center;
}

.column{
  margin-left: 20px;
  margin-right: 20px;
}

.resultatenButton{
  background-color: #1a61a1;
  color:white;
  font-size: 15px;
  padding: 12px 18px 12px 18px;
  margin-top: 20px;
  margin-right: 35px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 3px solid #1a49a1;
  transition: all .2s ease;
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