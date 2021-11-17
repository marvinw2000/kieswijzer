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
        <div v-on:click="falseGeklikt()" class="button rood">&#9587;</div>
        <div v-on:click="trueGeklikt()" class="button groen">&#10003;</div>
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
import router from "../router";

export default {
  name: "VraagComponent",

  data() {
    return{
      vragenData,
      id: vragenData.vragen[0].id,
      vraag: vragenData.vragen[0].vraag,
      juistenAntwoord: vragenData.vragen[0].juistenAntwoord,
      puntenIct: vragenData.vragen[0].puntenIct,
      puntenAenM: vragenData.vragen[0].puntenAenM,
      puntenTeni: vragenData.vragen[0].puntenTeni,
      puntenMei: vragenData.vragen[0].puntenMei,
      puntenBeni: vragenData.vragen[0].puntenBeni,
      lengtenVragen: vragenData.vragen.length,
      iteratie:0,
      geklikteButton:true,
      allPoints:[
        {name: "Ict", points: 0},
        {name: "AenM", points: 0},
        {name: "TenI", points: 0},
        {name: "Mei", points: 0},
        {name: "BenI", points: 0}
      ],
      nummer1:"",
      nummer2:"",
      nummer3:""
    }
  },
  methods:{
    next(){
      //doet vraag + 1
      this.iteratie++
      this.id = vragenData.vragen[this.iteratie].id
      this.vraag = vragenData.vragen[this.iteratie].vraag

    },
    controle() {
      //
      if (this.iteratie < this.lengtenVragen -1)
      {
        if(this.geklikteButton === vragenData.vragen[this.iteratie].juistenAntwoord){
          this.allPoints[0].points += vragenData.vragen[this.iteratie].puntenIct
          this.allPoints[1].points += vragenData.vragen[this.iteratie].puntenAenM
          this.allPoints[2].points += vragenData.vragen[this.iteratie].puntenTeni
          this.allPoints[3].points += vragenData.vragen[this.iteratie].puntenMei
          this.allPoints[4].points += vragenData.vragen[this.iteratie].puntenBeni
        }
        this.next()
      }
      else{
        //console.log("punten ict: " + this.allPoints[0].points)
        //console.log("punten AenM: " + this.allPoints[1].points)
        //console.log("punten TenI: " + this.allPoints[2].points)
        //console.log("punten Mei: " + this.allPoints[3].points)
        //console.log("punten BenI: " + this.allPoints[4].points)

        //sorteert de puntenverdeling met sort
        this.allPoints.sort((a, b) => {
          return a.points - b.points
        })

        //console.log(this.allPoints)
        // nummer 4 is de grootste
        this.nummer1 = this.allPoints[4].name
        this.nummer2 = this.allPoints[3].name
        this.nummer3 = this.allPoints[2].name

        router.push('resultaten')

        //console.log("jouw nummer een is: " + this.numer1)
        //console.log("jouw nummer twee is: " + this.numer2)
        //console.log("jouw nummer drie is: " + this.numer3)
        alert("dit is het einde van de vragen lijst");
        alert("jouw nummer een is: " + this.nummer1)
        alert("jouw nummer twee is: " + this.nummer2)
        alert("jouw nummer drie is: " + this.nummer3)


      }
    },
    //button false func. controle uitgevoerd
    falseGeklikt(){
      this.geklikteButton = false
      this.controle()
    },
    trueGeklikt(){
      this.geklikteButton = true
      this.controle()
    }
  }
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
  margin-left:0px;
  margin-top: -5px;
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