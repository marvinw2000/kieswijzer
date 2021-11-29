<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<script>

import Header from "./components/Header";
export default {
  name: 'App',
  components: {Header}
}

</script>
<style>
*{
  font-family: ff-scala-sans-pro,sans-serif;
  color: #00639D;
  padding: 0px;
  margin-left: 0px;
  margin-right: 0px;
}

</style>
