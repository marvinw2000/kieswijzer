
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
        <a class="button" href="">Ict</a>
        <a class="button" href="">A&M</a>
        <a class="button" href="">T&E</a>
        <a class="button" href="">MEI</a>
        <a class="button" href="">B&I</a>
        <a class="button" href="">kieswijzer</a>
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
#titel h1{margin: 20px;}
#logo{}
#logo img{ height: 50px; width: 50px; margin: 20px;}
#upper
{
  width: 100%;
  height: 90px;
  border-bottom: solid #333 1px;
  display: flex;
}
#lower
{
  width: 100%;
  height: 47px;
  border-bottom: solid #333 1px;
  display: flex;
}
#nav
{
  margin: 15px;
}
.button
{
  padding: 15px;
  text-decoration: none;
  border-right: solid #333 1px;
  color: black;
}

</style>