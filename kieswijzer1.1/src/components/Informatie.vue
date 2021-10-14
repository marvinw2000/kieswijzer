<template>
  <div class="container">
    <div class="section">
      <h2>Meer informatie over de scholen</h2>
      <div class="item" v-if="[isActive ? 'active' : '', 'collapsible']"  v-on:click="toggle">
        <span class="toggleIcon" id="toggleIcon">{{ toggleIcon }} Autotechniek en mobiliteit </span>
      </div>
      <div class="item" v-if="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
        <div class="content">
          <p>
            test
            stes
            test
          </p>
        </div>

<!--      <div :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">-->
<!--        <span class="toggleIcon" id="toggleIcon">{{ toggleIcon }} Autotechniek en mobiliteit </span>-->
<!--      </div>-->
<!--      <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">-->
<!--        <div class="content">-->
<!--          <p>-->
<!--            <b>Snelle service in de werkplaats</b>-->
<!--            <br><br>-->
<!--            Heb jij technische skills en heb je een passie voor alles wat met-->
<!--            (bedrijfs-) auto’s, (motor-)fietsen of scooters te maken heeft? In de-->
<!--            Autotechniek en Mobiliteit ligt de toekomst open want het is een wereld-->
<!--            van nieuwe ontwikkelingen en innovaties. Ben je op zoek naar een uitdaging?-->
<!--            Je vindt die ongetwijfeld bij ons binnen de autotechniek en mobiliteitsbranche.-->
<!--            <br><br>-->
<!--            Bij ons kun je opleidingen volgen als je voertuigen wilt repareren, verkopen,-->
<!--            je eigen onderneming wilt starten of als manager aan de slag wilt gaan.-->
<!--            Tijdens je opleiding leer je naast de ‘gewone’ autotechniek alles over hybride- en volledig-->
<!--            elektrische voertuigen. Je voert onderhoudsbeurten en reparaties uit en je vervangt-->
<!--            onderdelen van personenauto’s, bedrijfswagens, fietsen, scooters en e-bikes.-->
<!--            <br><br>-->
<!--            Wil je autoschades herstellen, kies dan voor een opleiding binnen de Carrosserietechniek.-->
<!--            Je werkt als autoschadehersteller of autospuiter bij een autoschadeherstelbedrijf.-->
<!--            <br><br>-->
<!--          </p>-->
<!--            <h4>Contact informatie</h4>-->
<!--            <a href="mailto:info@rocmondriaan.nl">E-mail: info@rocmondriaan.nl</a><br><br>-->
<!--            <a href="call:07051515151">Telefoonnummer: 070-05565265</a>-->
<!--        </div>-->
<!--      </div>-->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Informatie",
  data(){
    return{
      isActive: false,
      toggleIcon: '+',
    }
  },

  methods: {
    toggle(){
      this.isActive = !this.isActive
    },
  },
}
</script>

<style scoped>

.container{
  display: grid;
  grid-template-columns: 45% 50%;
}

.item {
  color: black;
  cursor: pointer;
  padding: 18px;
  border: none;
  text-align: left;
  outline: none;
  border: 2px solid black;
}

.content {
  padding: 0 18px;
  overflow: hidden;
}

h2{
  margin-top: 50px;
}
</style>