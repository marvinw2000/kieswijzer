<template>
<div id="containerBuiten">
  <div id="links"></div>
  <div id="midden">
    <div id="containerBinnen">
      <div id="vraag">
        <h1>vraag {{id}}:</h1>
        <p>{{vraag}}</p>
      </div>
      <div id="buttons">
        <div class="button rood">&#9587;</div>
        <div class="button groen">&#10003;</div>
      </div>
      <div id="progresionBar">
        <div id="bar">
          <div id="point"></div>
        </div>
      </div>
    </div>
  </div>
  <div id="rechts"></div>
</div>

</template>

<script>

import vragenData from '../data/vragenData'

export default {
  name: "VraagComponent",
  data() {
    return{
      vragenData,
      iteratie:0,
      id: vragenData.vragen[0].id,
      vraag: vragenData.vragen[0].vraag,
      juistenAntwoord: vragenData.vragen[0].juistenAntwoord,
      puntenIct: vragenData.vragen[0].puntenIct,
      puntenAenM: vragenData.vragen[0].puntenAenM,
      puntenTeni: vragenData.vragen[0].puntenTeni,
      puntenMei: vragenData.vragen[0].puntenMei,
      puntenBeni: vragenData.vragen[0].puntenBeni
    }
  },
  methods: {}
}
</script>

<style scoped>
*{
  font-family: ff-scala-sans-pro,sans-serif;
  padding: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
#containerBuiten{
  display: flex;
  width: 100%;
  height: 100%;
}
#links{
  width: 5%;
}
#midden{
  width: 90%;
}
#containerBinnen{
  display: flex;
  flex-direction: column;
  width: 100%;
}
#vraag{
  width: 100%;
}
#vraag h1{
  text-align: center;
}
#vraag p{
  text-align: center;
}
#buttons{
  width: 100%;
  display: flex;
  justify-content: center;
}
.button{
  font-size: 80px;
  color: white;
  padding: 40px 130px 40px 130px;
  margin: 10px;
}
.rood{
  background-color: #E20D18;
}
.groen{
  background-color: green;
}
#progresionBar{
  width: 100%;
  height: 100px;
}
#bar{
  margin: 50px 25% 25px 25%;
  border: 2px solid darkgray;
  width: 500px;
  height: 0px;
}
#point{
  width: 10px;
  height: 10px;
  border: 1px cornflowerblue solid;
  border-radius: 10px;
  background-color: cornflowerblue;
}
#rechts{
  width: 5%;

}

</style>