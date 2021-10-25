<template>
  <div id="app">
    <Header/>
    <Informatie/>

  </div>
</template>
<script>

import Header from "../src/components/Header";
import Informatie from "./components/Informatie";


export default {
  name: 'App',
  components: {
    Informatie,
    Header,

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
