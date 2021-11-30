<template>
  <header>
    <div class="upper">
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
      logoHeader: require('@/assets/logoROC.jpg')
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
  height: 75px;
  margin: 20px;
}
.upper{
  width: 100%;
  border-bottom: 1px solid #D8D8D8;
  border-inline-width: 30px;
  display: flex;
}

.buttonOpleidingen{
  margin-left: auto;
}

.headerButton{
  background-color: #E20D18;
  color:white;
  font-size: 15px;
  padding: 15px 20px 15px 20px;
  margin-top: 20px;
  margin-right: 35px;
  border: none;
  border-radius: 5px;
  border-bottom: 3px solid #B50811;
  transition: all .2s ease;
}
.headerButton:hover{
  background-color: red;
}

</style>