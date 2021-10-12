<template>
  <div id="app">
    <Header/>

    <Resultaten/>
  </div>
</template>
<script>

import Header from "../src/components/Header";
//import Home from "../src/components/Home";
import Resultaten from "./components/Resultaten";

export default {
  name: 'App',
  components: {
    Header,
    Resultaten
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
</style>
