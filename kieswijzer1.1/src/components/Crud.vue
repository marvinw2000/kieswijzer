<template>
<div id="container">
  <div id="links"></div>
  <div id="midden">
    <h1 class="titel">admin functionaliteiten</h1>
    <div id="containerMidden">
      <div id="delete" class="card">
        <h2 class="rood">delete</h2>
        <p class="rood important">Kies de vraag die je wilt verwijderen, en klik dan op submit.</p>
        <form action="">
          <label class="rood" for="deleteVragen">kies een vraag:</label>
          <select class="rood" name="deleteVragen" id="deleteVragen">
            <option value="vraag1">vraag1</option>
            <option value="vraag2">vraag2</option>
            <option value="vraag3">vraag3</option>
            <option value="vraag4">vraag4</option>
          </select><br>
          <input class="rood submitBtnRood" type="submit" value="Submit">
        </form>
      </div>
      <div id="create" class="card">
        <h2>create</h2>
        <p class="important">Vul alle velden in om een nieuwe vraag te maken.</p>
        <form action="">
          <label for="vraaginput">Vraag:</label>
          <input type="text" id="vraaginput" name="vraagInput" value="dit is mijn vraag"><br>

          <label for="trueOrFalse">Is de vraag Waar of niet waar:</label>
          <select name="trueOrFalse" id="trueOrFalse">
            <option value="true">waar</option>
            <option value="false">niet waar</option>
          </select><br>

          <label for="puntenIct">Hoeveel punten krijgt ict:</label>
          <input type="number" id="puntenIct" name="puntenIct" min="0" max="10" value="0"><br>

          <label for="puntenAenM">Hoeveel punten krijgt AenM:</label>
          <input type="number" id="puntenAenM" name="puntenAenM" min="0" max="10" value="0"><br>

          <label for="puntenTenI">Hoeveel punten krijgt TenI:</label>
          <input type="number" id="puntenTenI" name="puntenTenI" min="0" max="10" value="0"><br>

          <label for="puntenMei">Hoeveel punten krijgt Mei:</label>
          <input type="number" id="puntenMei" name="puntenMei" min="0" max="10" value="0"><br>

          <label for="puntenBenI">Hoeveel punten krijgt BenI:</label>
          <input type="number" id="puntenBenI" name="puntenBenI" min="0" max="10" value="0"><br>

          <input class="submitBtnBlauw" type="submit" value="Submit">
        </form>
      </div>
      <div id="update" class="card">
        <h2 class="geel">update</h2>
        <p class="geel important" >Kies de vraag en vul de velden in.</p>
        <form action="">
          <label class="geel" for="updateVragen">kies een vraag:</label>
          <select class="geel" name="updateVragen" id="updateVragen">
            <option value="vraag1">vraag1</option>
            <option value="vraag2">vraag2</option>
            <option value="vraag3">vraag3</option>
            <option value="vraag4">vraag4</option>
          </select><br>

          <label class="geel" for="vraaginput">Vraag:</label>
          <input class="geel" type="text" id="vraaginput" name="vraagInput" value="dit is mijn vraag"><br>

          <label class="geel" for="trueOrFalse">Is de vraag Waar of niet waar:</label>
          <select class="geel" name="trueOrFalse" id="trueOrFalse">
            <option value="true">waar</option>
            <option value="false">niet waar</option>
          </select><br>

          <label class="geel" for="puntenIct">Hoeveel punten krijgt ict:</label>
          <input class="geel" type="number" id="puntenIct" name="puntenIct" min="0" max="10" value="0"><br>

          <label class="geel" for="puntenAenM">Hoeveel punten krijgt AenM:</label>
          <input class="geel" type="number" id="puntenAenM" name="puntenAenM" min="0" max="10" value="0"><br>

          <label class="geel" for="puntenTenI">Hoeveel punten krijgt TenI:</label>
          <input class="geel" type="number" id="puntenTenI" name="puntenTenI" min="0" max="10" value="0"><br>

          <label class="geel" for="puntenMei">Hoeveel punten krijgt Mei:</label>
          <input class="geel" type="number" id="puntenMei" name="puntenMei" min="0" max="10" value="0"><br>

          <label class="geel" for="puntenBenI">Hoeveel punten krijgt BenI:</label>
          <input class="geel" type="number" id="puntenBenI" name="puntenBenI" min="0" max="10" value="0"><br>

          <input class="geel submitBtnGeel" type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
  <div id="rechts"></div>
</div>
</template>

<script>
export default {
  name: "Crud",

  beforeCreate() {
    fetch('http://127.0.0.1:8000/getAllQuestions')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.vragenData = myJson;
          console.log(this.vragenData)
          console.log(this.vragenData[0].vraag)
        });
  },
  data(){
    return{
      vragenData: null
    }
  },
}
</script>

<style scoped>

p{margin:5px;}
form{margin: 5px}
label{margin: 5px}
input{margin: 5px}
.rood{
  color: #E30513;
}
.geel{
  color: #FFDA05;
}
.important{
  text-decoration: underline;
}
.titel{font-size: 2em}
.submitBtnBlauw{
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: #1A61A1 1px solid;
  cursor: pointer;
}
.submitBtnRood{
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: #B50811 1px solid;
}
.submitBtnGeel{
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: #FFDA05 1px solid;
}
#container{
  text-align: center;
  display: flex;
}
#links{
  width: 2.5%;
  height: 800px;
}
#midden{
  width: 95%;
  height: 800px;
}
#containerMidden{
  display: flex;
  flex-direction: column;
  align-items: normal;
}
.card{
  margin: 5px;
}
#delete{
  border: solid 1px #E30513;
  border-radius: 15px;
  text-decoration-color: #E30513;
}
#create{
  border: solid 1px #00639D;
  border-radius: 15px;
}
#update{
  border: solid 1px #FFDA05;
  border-radius: 15px;
}

#rechts{
  height: 800px;
  width: 2.5%;
}
@media (min-width: 800px) {
  .titel{font-size: 2.5em}
  #containerMidden{
    flex-direction: row;
    justify-content: space-around;
    align-items: self-start;
  }
}
</style>