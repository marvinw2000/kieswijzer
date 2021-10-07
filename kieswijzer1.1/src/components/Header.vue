<template>
  <header>
    <div class="upper">
      <div id="logo">
        <img  v-bind:src="logoHeader" :alt="logoHeader"/>
      </div>
      <div class="buttonOpleidingen">
        <button type="button">opleidingen</button>
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
@media (min-width: 700px){

}
#logo{}
#logo img{
  height: 50px;
  width: 50px;
  margin: 20px;
}
.upper{
  width: 100%;
  border-bottom: solid #999 1px;
  display: flex;
}
.buttonOpleidingen{
  margin-left: auto;
}
button{
  background-color: #E20D18;
  color:white;
  font-size: 15px;
  padding: 15px 20px 15px 20px;
  margin-top: 20px;
  margin-right: 35px;
  border: none;
  border-radius: 20px;
}
</style>