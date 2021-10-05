
<template>
  <header>
    <div id="upper">
      <div id="logo">
        <img  v-bind:src="logoHeader" :alt="logoHeader"/>
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
      logoHeader: require('@/assets/logo.jpeg')
    }
  },
  methods: {

  }
}
</script>
<style scoped>
#logo{}
#logo img{ height: 50px; width: 50px; margin: 20px;}



</style>