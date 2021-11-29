<template>
  <div class="container">
    <div class="section">
      <h1>Word jij de Mondriaan van...</h1>
      <p>
        Hieronder zijn de best passenden drie techniek scholen weegegeven op basis van jouw studiekeuzetest. Lees voor meer informatie een neem contact op voor al je vragen!
      </p>
      <section class="accordion">
        <h2 class="nummer">1</h2>
        <input type="checkbox" name="collapse" id="handle1" checked="checked">
        <h2 class="handle">
         <label for="handle1">{{ titelPlaats1 }}</label>
        </h2>
          <div class="content">
            <p>{{ tekstPlaats1 }}</p>
          </div>
      </section>
      <section class="accordion">
        <h2 class="nummer">2</h2>
        <input type="checkbox" name="collapse2" id="handle2">
        <h2 class="handle">
        <label for="handle2">{{ titelPlaats2 }}</label>
        </h2>
          <div class="content">
            <p>{{ tekstPlaats2 }}</p>
          </div>
      </section>
      <section class="accordion">
        <h2 class="nummer">3</h2>
        <input type="checkbox" name="collapse2" id="handle3">
        <h2 class="handle">
        <label for="handle3">{{ titelPlaats3 }}</label>
        </h2>
          <div class="content">
            <p>{{ tekstPlaats3 }}</p>
          </div>
      </section>
    </div>
    <div class="aanmeld-blok">
      <img src="../assets/meldJeAan.jpg" alt="aanmelden" onclick="window.location.href='https://rocmondriaan.nl/alle-opleidingen'" height="500">
    </div>
  </div>
</template>

<script>
//import schoolData from "../data/schoolData";
import mixins from "../mixins/mixins";

export default {
  name: "Informatie",
  mixins:[mixins]

}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top:30px;
  margin-left: 30px;
  margin-right: 30px;
}

.section{
  margin-top: 50px;
}

.accordion > input[type="checkbox"] {
  position: absolute;
  left: -100vw;
}

.accordion .content {
  overflow-y: hidden;
  height: 0;
  transition: height 0.3s ease;
}

.accordion > input[type="checkbox"]:checked ~ .content {
  height: auto;
  overflow: visible;
}

.accordion label {
  display: block;
}

body {
  color: #333;
  font-weight: 300;
}

.accordion {
  margin-bottom: 1em;
}

.accordion > input[type="checkbox"]:checked ~ .content {
  padding: 15px;
  border: 1px solid #e8e8e8;
  border-top: 0;
}

.accordion .handle {
  margin: 0;
  font-size: 1.125em;
  line-height: 1.2em;
}

.accordion label {
  color: white;
  cursor: pointer;
  font-weight: normal;
  padding: 15px;
  background-color: #1a61a1;
  border: 1px solid #00639d;
  border-radius: 5px;
}

.accordion label:hover,
.accordion label:focus {
  background: #1a49a1;
}

.accordion .handle label:before {
  font-family: 'fontawesome';
  content: "+";
  display: inline-block;
  margin-right: 10px;
  font-size: .58em;
  line-height: 1.556em;
  vertical-align: middle;
}

.accordion > input[type="checkbox"]:checked ~ .handle label:before {
  content: "-";
  color:lawngreen;
}

.aanmeld-blok{
  text-align: center;
}

.nummer{
  width: 15%;
  font-size: 20px;
  color: white;
  text-align: center;
  background-color: #E20D18;
  border-radius: 5px;
  padding: 5px 10px 5px 10px ;

}



@media screen and (max-width: 768px){
  .container{
    text-align: center;
    grid-template-columns: minmax(0,1fr);
  }




}

@media screen and (max-width: 480px){
  .container {
    text-align: center;
    grid-template-columns: minmax(0, 1fr);
  }
}

</style>