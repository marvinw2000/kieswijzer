<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>
<script>
import Header from "../src/components/Header";
import Home from "../src/components/Home";
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
  font-family: ff-scala-sans-pro,sans-serif;
  padding: 0px;
  margin-left: 5px;
  margin-right: 5px;
}
#placeholder {
  height:425px;
}
</style>
