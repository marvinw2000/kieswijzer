<template>
<div id="ContainerBuiten">
  <div id="links"></div>
  <div id="midden">
    <div id="ContainerBinnen">
      <div id="vraag">
        <h1>vraag {{id}}:</h1>
        <p>{{vraag}}</p>
      </div>
      <div id="buttons">
        <div class="button"></div>
        <div class="button"></div>
      </div>
      <div id="progresionBar">
        <img src="" alt="">
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

</style>