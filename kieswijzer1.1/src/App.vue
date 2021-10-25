<template>
  <div id="app">
    <Header/>
    <Home/>
  </div>
</template>
<script>

import Header from "../src/components/Header";
import Home from "./components/Home";

export default {
  name: 'App',
  components: {
    Home,
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
