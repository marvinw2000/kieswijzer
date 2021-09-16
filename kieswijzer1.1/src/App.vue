<template>
  <div id="app">
    <Header/>
    <div id="placeholder"></div>
    <Footer/>
  </div>
</template>
<script>
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
export default {
  name: 'App',
  components: {
    Header,
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
