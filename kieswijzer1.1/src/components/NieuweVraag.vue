<template>
    <div class="container">
      <h2>Nieuwe vraag toevoegen</h2>
      <form method="POST" enctype="multipart/form-data" class="question-form">
        <div class="form-group">
          <label>Vraag</label>
          <input type="text" v-model="form.vraag" required class="form-control" placeholder="Plaats uw vraag">
        </div>
        <div class="form-group">
          <label>Juiste antwoord</label>
          <input type="text" v-model="form.juisteAntwoord" required class="form-control" placeholder="true/false">
        </div>
        <div class="form-group">
          <label>Punten ICT</label>
          <input type="number" v-model="form.puntenIct" min="0" max="3" required class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>Punten AenM</label>
          <input type="number" v-model="form.puntenAenM" min="0" max="3" required class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>Punten BenI</label>
          <input type="number" v-model="form.puntenBenI" min="0" max="3" required class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>Punten MeI</label>
          <input type="number" v-model="form.puntenMei" min="0" max="3" required class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>Punten TenI</label>
          <input type="number" v-model="form.puntenTenI" min="0" max="3" required class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>upload een afbeelding</label>
          <input required class="form-control upload-file" type="file" name="image" @change="catchImg">
        </div>
        <button type="submit" v-on:click="toevoegen()" class="buttonToevoegen">Toevoegen</button>
      </form>
    </div>
</template>

<script>
export default {
  name: "NieuweVraag",
  //deze functie word aangeroepen voor de pagina word gemaakt.
  beforeCreate() {
    // de roll van de gebruiker word opghaald.
    let userRoll = sessionStorage.getItem("userRoll")
    // de roll van de user word gecontroleerd.
    if(userRoll === 'admin'){
      console.log('suc6')
    }else{
      this.$router.push("/kieswijzer")
    }
  },
  data(){
    return{
      form:{
        vraag: null,
        juisteAntwoord: null,
        puntenIct: null,
        puntenAenM: null,
        puntenBenI: null,
        puntenMei: null,
        puntenTenI: null,
        naamImg: null
      },
      imgFile:""
    }
  },
  methods:{
    //functie om image toe te voegen.
    catchImg(event) {
      //de naam van de image word opgehaald
      this.form.naamImg = event.target.files[0].name
      //de image zelf word opgehaald.
      const uploadFile = document.querySelector('.upload-file').files[0]
      //een nieuwe formData word aangemaakt om de image file in te versturen.
      let formData = new FormData()
      //file word toegevoegt aan formdata.
      formData.append('uploadfile', uploadFile)
      const url = `${process.env.VUE_APP_BACKEND_URL}/savePicture`
      const request = new Request(url, {
        method: 'POST',
        body: formData
      });
      fetch(request)
          .then(response => response.json())
          .then(data => { console.log(data); })
    },
    //functie om vraag toe te voegen.
    toevoegen(){
      //fetch request voor het toevoegen van een nieuwe vraag, variablen staan in data.
      fetch(`${process.env.VUE_APP_BACKEND_URL}/createQuestion`, {
        body: JSON.stringify(this.form),
        method: "POST"
      })
          .then((response) => {
            return response.json();
          })
      this.$router.push("/crud")
    }
  }
}
</script>
<style scoped>
.custom-file-input::before {

}
label{
  margin-right: 10px;
}
input{
  margin-right: 10px;
}
.container{
  margin-top: 50px;
}
.form-group{
  margin-top: 10px;
  margin-bottom: 10px;
}

.buttonToevoegen{
  background-color: #E30513;
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
</style>