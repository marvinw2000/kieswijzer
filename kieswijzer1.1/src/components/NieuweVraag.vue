<template>
    <div class="container">
      <h2>Nieuwe vraag toevoegen</h2>
      <form>
        <div class="form-group">
          <label>Vraag</label>
          <input type="text" v-model="form.vraag" class="form-control" placeholder="Plaats uw vraag">
        </div>
        <div class="form-group">
          <label>Juiste antwoord</label>
          <input type="number" v-model="form.juisteAntwoord" class="form-control" placeholder="true = 1 & false = 0">
        </div>
        <div class="form-group">
          <label>Punten ICT</label>
          <input type="number" v-model="form.puntenAenM" class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>Punten AenM</label>
          <input type="number" v-model="form.puntenAenM" class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>Punten BenI</label>
          <input type="number" v-model="form.puntenBenI" class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>Punten MeI</label>
          <input type="number" v-model="form.puntenMei" class="form-control" placeholder="aantal punten">
        </div>
        <div class="form-group">
          <label>Punten TenI</label>
          <input type="number" v-model="form.puntenTenI" class="form-control" placeholder="aantal punten">
        </div>
        <button type="submit" v-on:click="toevoegen()" class="buttonToevoegen">Toevoegen</button>
      </form>
    </div>
</template>

<script>
export default {
  name: "NieuweVraag",

  data(){
    return{
      form:{
        vraag: null,
        juisteAntwoord: null,
        puntenIct: null,
        puntenAenM: null,
        puntenBenI: null,
        puntenMei: null,
        puntenTenI: null
      }
    }
  },
  methods:{
    toevoegen(){
      //alert(this.form)
      console.log(this.form.vraag)
      fetch('http://localhost:8000/createQuestion', {
        body: JSON.stringify(this.form),
        method: "POST"
      })
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((myJson) => {
      //       console.log(myJson);
      //     });
      // this.$router.push("/crud")
    }
  }
}
</script>

<style scoped>

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