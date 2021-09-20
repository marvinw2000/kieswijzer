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
  font-family: ff-scala-sans-pro,sans-serif;
  padding: 0px;
  margin-left: 5px;
  margin-right: 5px;
}
#placeholder {
  height:425px;
}

</style>
