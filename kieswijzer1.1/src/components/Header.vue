
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
        <a class="navButton" href="">kieswijzer</a>
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
#titel{}
#titel h1{
  margin: 20px;
  color: #1A61A1;

}
#logo{}
#logo img{ height: 50px; width: 50px; margin: 20px;}
#upper
{
  width: 100%;
  height: 90px;
  border-bottom: solid #999 1px;
  display: flex;
}
#lower
{
  width: 100%;
  height: 47px;
  border-bottom: solid #999 1px;
  display: flex;
}
#nav
{
  margin: 15px;
}
.navButton
{
  padding: 15px;
  text-decoration: none;
  color: #1A61A1;
}
.navButton:hover
{
  color: #fff;
  background-color: #1A61A1;
}

</style>