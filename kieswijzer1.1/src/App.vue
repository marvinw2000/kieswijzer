<template>
  <div id="app">
    <Header/>
    <VraagComponent/>
  </div>
</template>
<script>

import Header from "../src/components/Header";
import VraagComponent from "./components/VraagComponent";

export default {
  name: 'App',
  components: {
    VraagComponent,
    Header
  }
}
</script>
<style>
*{
  font-family: ff-scala-sans-pro,sans-serif;
  padding: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
</style>
