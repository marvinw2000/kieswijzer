<template>
  <div class="container">
    <div class="section">
      <h1>Meer informatie over de scholen</h1>
      <section class="accordion">
        <input type="checkbox" name="collapse" id="handle1" checked="checked">
        <h2 class="handle">
         <label for="handle1">Autotechniek en mobilitiet</label>
        </h2>
          <div class="content">
            <p><strong>Overall Impression:</strong> A pale, bitter, highly attenuated and well carbonated Trappist ale, showing a fruity-spicy Trappist yeast character, a spicy-floral hop profile, and a soft, supportive grainy-sweet malt palate.</p>
            <p><strong>History:</strong> While Trappist breweries have a tradition of brewing a lower-strength beer as a monk’s daily ration, the bitter, pale beer this style describes is a relatively modern invention reflecting current tastes. Westvleteren first brewed theirs in 1999, but replaced older lower-gravity products.</p>
          </div>
      </section>
  <section class="accordion">
    <input type="checkbox" name="collapse2" id="handle2">
    <h2 class="handle">
      <label for="handle2">Metaal-, elektro en installatietechniek</label>
    </h2>
    <div class="content">
      <p><strong>Overall Impression:</strong> A deep reddish-copper, moderately strong, malty, complex Trappist ale with rich malty flavors, dark or dried fruit esters, and light alcohol blended together in a malty presentation that still finishes fairly dry.</p>
      <p><strong>History:</strong> Originated at monasteries in the Middle Ages, and was revived in the mid-1800s after the Napoleonic era.</p>
    </div>
  </section>
  <section class="accordion">
    <input type="checkbox" name="collapse2" id="handle3">
    <h2 class="handle">
      <label for="handle3">ICT</label>
    </h2>
    <div class="content">
      <p><strong>Overall Impression:</strong> A pale, somewhat spicy, dry, strong Trappist ale with a pleasant rounded malt flavor and firm bitterness. Quite aromatic, with spicy, fruity, and light alcohol notes combining with the supportive clean malt character to produce a surprisingly drinkable beverage considering the high alcohol level.</p>
      <p><strong>History:</strong> Originally popularized by the Trappist monastery at Westmalle.</p>
    </div>
  </section>
    </div>
    <div class="aanmeld-blok">
      <img src="../assets/meldJeAan.jpg" alt="aanmelden" onclick="window.location.href='https://rocmondriaan.nl/alle-opleidingen'" height="500">

    </div>
  </div>

<!--  <div class="container">-->
<!--    <div class="section">-->
<!--      <h2>Meer informatie over de scholen</h2>-->
<!--      <div class="item" v-if="[isActive === true]" v-on:click="toggle">-->
<!--        <span>{{ toggleIcon }} Metaal-, elektro en installatietechniek</span>-->
<!--      </div>-->
<!--      <div class="item" v-if="[isActive ? 'block' : 'none', 'content']" v-show="isActive">-->
<!--        <div class="body">-->
<!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper aliquet pharetra.-->
<!--          Phasellus imperdiet malesuada mattis. Etiam dictum nisi id ullamcorper elementum. Nullam-->
<!--          pharetra tortor a nulla feugiat scelerisque. Fusce interdum eu orci vitae sodales. Sed gravida-->
<!--          felis congue, efficitur erat et, interdum tortor. In dignissim mauris sit amet libero fermentum-->
<!--          tempor. Morbi condimentum lacinia auctor. Integer eleifend placerat odio non eleifend. Fusce sed-->
<!--          libero varius, pulvinar tortor id, elementum erat. In ac consectetur eros. Ut condimentum sem-->
<!--          sodales eleifend laoreet. Quisque nec augue sollicitudin, semper nisl vitae, viverra risus.-->
<!--          Etiam eget dapibus purus, ac hendrerit tellus. Proin faucibus massa quis ex ullamcorper semper.-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="item" v-if="[isOpen ? 'active' : '']" v-on:click="toggle2">-->
<!--        <span>{{ toggleIcon }} Autotechniek en mobiliteit</span>-->
<!--      </div>-->
<!--      <div class="item" v-if="[isOpen ? 'block' : 'none', 'content']" v-show="isOpen">-->
<!--        <div class="body">-->
<!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper aliquet pharetra.-->
<!--          Phasellus imperdiet malesuada mattis. Etiam dictum nisi id ullamcorper elementum. Nullam-->
<!--          pharetra tortor a nulla feugiat scelerisque. Fusce interdum eu orci vitae sodales. Sed gravida-->
<!--          felis congue, efficitur erat et, interdum tortor. In dignissim mauris sit amet libero fermentum-->
<!--          tempor. Morbi condimentum lacinia auctor. Integer eleifend placerat odio non eleifend. Fusce sed-->
<!--          libero varius, pulvinar tortor id, elementum erat. In ac consectetur eros. Ut condimentum sem-->
<!--          sodales eleifend laoreet. Quisque nec augue sollicitudin, semper nisl vitae, viverra risus.-->
<!--          Etiam eget dapibus purus, ac hendrerit tellus. Proin faucibus massa quis ex ullamcorper semper.-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="item" v-if="[isOpen ? 'active' : '']" v-on:click="toggle2">-->
<!--        <span>{{ toggleIcon }} Autotechniek en mobiliteit</span>-->
<!--      </div>-->
<!--      <div class="item" v-if="[isOpen ? 'block' : 'none', 'content']" v-show="isOpen">-->
<!--        <div class="body">-->
<!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper aliquet pharetra.-->
<!--          Phasellus imperdiet malesuada mattis. Etiam dictum nisi id ullamcorper elementum. Nullam-->
<!--          pharetra tortor a nulla feugiat scelerisque. Fusce interdum eu orci vitae sodales. Sed gravida-->
<!--          felis congue, efficitur erat et, interdum tortor. In dignissim mauris sit amet libero fermentum-->
<!--          tempor. Morbi condimentum lacinia auctor. Integer eleifend placerat odio non eleifend. Fusce sed-->
<!--          libero varius, pulvinar tortor id, elementum erat. In ac consectetur eros. Ut condimentum sem-->
<!--          sodales eleifend laoreet. Quisque nec augue sollicitudin, semper nisl vitae, viverra risus.-->
<!--          Etiam eget dapibus purus, ac hendrerit tellus. Proin faucibus massa quis ex ullamcorper semper.-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


<!--  </div>-->

</template>

<script>
export default {
  name: "Informatie",
  data() {
    return {
      isOpen: false,
      isActive: false,
      toggleIcon: '+',
    }
  },

  methods: {
    // toggle() {
    //   this.isActive = !this.isActive
    //     },
    //
    // toggle2(){
    //   this.isOpen = !this.isOpen
  }
}
</script>

<style scoped>



.container{
  display: grid;
  grid-template-columns: 45% 50%;
  margin-top:50px;
}

/*.item {*/
/*  color: black;*/
/*  cursor: pointer;*/
/*  padding: 18px;*/
/*  border: none;*/
/*  text-align: left;*/
/*  outline: none;*/
/*  border: 1px solid #00639d;*/
/*}*/

.aanmeld-blok{
  margin-left: 60px;
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
  color: #333;
  cursor: pointer;
  font-weight: normal;
  padding: 15px;
  background-color: white;
  border: 1px solid #00639d;
}

.accordion label:hover,
.accordion label:focus {
  background: white;
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


</style>