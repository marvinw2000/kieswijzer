<template>
  <div id="app">
    <Header/>
    <Home/>
    <div id="placeholder"></div>
    <Footer/>
  </div>
</template>
<script>
import Header from "../src/components/Header";
import Home from "../src/components/Home"
import Footer from "../src/components/Footer";
export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>
<style>
*{
  padding: 0px;
  margin: 0px;
}
#placeholder {
  height:425px;
}

</style>
