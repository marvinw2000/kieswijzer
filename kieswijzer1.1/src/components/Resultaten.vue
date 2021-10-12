<template>
  <div class="headerTekst">
    <h1>Best passende scholen</h1>
  </div>
  <div class="container">
      <div class="column1">
        <button class="resultatenButton">Autotechniek</button>
        <img src="../assets/ICT.jpg" alt="Autotechniek">
      </div>
      <div class="column2">
        <button class="resultatenButton">ICT</button>
        <img src="../assets/ICT.jpg" alt="Elektro">
      </div>
      <div class="column3">
        <button class="resultatenButton">Mobiel</button>
        <img src="../assets/ICT.jpg" alt="ICT" >
      </div>
  </div>
  <div class="container-aanmelden">
    <div class="footerColumn1">
      <h2>Keuze al gemaakt?</h2>
    </div>
    <div class="footerColumn2">
      <button class="buttonColumn" type="button" formtarget="_blank" onclick="window.location.href='https://rocmondriaan.nl/alle-opleidingen'">Meld je nu aan</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Resultaten"
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

.resultatenButton{
  background-color: #1a61a1;
  color:white;
  font-size: 12px;
  padding: 12px 18px 12px 18px;
  margin-top: 20px;
  margin-right: 35px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
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

.footerColumn1{
  text-align: right;
  margin-top:10px;
}

.footerColumn2{
  text-align: left;
}

</style>