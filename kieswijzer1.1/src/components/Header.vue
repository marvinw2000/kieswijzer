
<template>
  <header>
    <div id="upper">
      <div id="logo">
        <img  v-bind:src="logoHeader" :alt="logoHeader"/>
      </div>
      <div id="titel">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div id="lower">
      <div id="nav">
        <a class="navButton" href="">Ict</a>
        <a class="navButton" href="">Autotechniek en Mobiliteit</a>
        <a class="navButton" href="">Technologie en Engineering</a>
        <a class="navButton" href="">Metaal Elektro en Installatietechniek</a>
        <a class="navButton" href="">Bouw en Infra</a>
        <a class="navButton rood" href="">kieswijzer</a>
      </div>
      <label for="toggle"> &#9776; </label>

      <input type="checkbox" id="toggle" class="hidden">
      <div class="hamburgerNav">
        <a class="hamburgerNavBtn">Ict</a>
        <a class="hamburgerNavBtn">Autotechniek en Mobiliteit</a>
        <a class="hamburgerNavBtn">Technologie en Engineering</a>
        <a class="hamburgerNavBtn">Metaal Elektro en Installatietechniek</a>
        <a class="hamburgerNavBtn">Bouw en Infra</a>
        <a class="hamburgerNavBtn rood" href="">kieswijzer</a>
      </div>
    </div>
  </header>
</template>
<script>
export default
{
  name: "Header",
  data()
  {
    return{
      title:"roc mondriaan kieswijzer",
      logoHeader: require('@/assets/logo.jpeg')
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.hidden{display: none}
#titel{}
#titel h1{
  font-size: 1.5em;
  margin: 30px 10px 10px 10px;
  color: #1A61A1;
}
#logo{}
#logo img{ height: 50px; width: 50px; margin: 20px;}
#upper{
  width: 100%;
  height: 90px;
  border-bottom: solid #999 1px;
  display: flex;
}
#lower{
  width: 100%;
  height: 47px;
  border-bottom: solid #999 1px;
  display: flex;
}
#nav {display: none;}
label{
  margin-left: 90%;
  font-size: 34px;
  padding: 0px;
  color: #333;
}
.hamburgerNav {
  display: none;
  position: absolute;
  width: 90%;
  margin: 0px;
  margin-top: 49px;
  animation: fadeInAnimation ease 1000ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

}

.hamburgerNavBtn{
  margin:0px;
  padding: 5px 0px  5px 10px;
  border-bottom: solid #999 1px;
  color: #1A61A1;
  background-color: #fff;
  text-decoration: none;
  display: block;
}
.hamburgerNavBtn:hover {
  color: #fff;
  background-color: #1A61A1;
}
#toggle:checked ~ .hamburgerNav{
  display: block;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.rood:hover{
  background-color: #e20d18;
  color: white;
}

@media (min-width: 700px){
  #titel h1{
    font-size: 2em;
    margin: 20px;
  }
  label{
    display: none;
  }
  .hamburgerNav a{
    display: none;
  }
  #nav{
    display: block;
    margin: 15px;
  }
  .navButton{
    margin: 0px;
    padding: 15px 12px 15px 12px;
    text-decoration: none;
    color: #1A61A1;
  }
  .navButton:hover{
    color: #fff;
    background-color: #1A61A1;
  }
  #lower{
    border-bottom: solid #999 1px;
  }
}

.rood:hover{
  background-color: #e20d18;
  color: white;
}


</style>