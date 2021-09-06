<template>
  <footer>
    <div id="contact">
      <h4>contact</h4>
      <ul>
        <li>adres: tinwerf 16</li>
        <li>Email: rocmondriaan@gmail.com</li>
        <li>tel: 070 93278497</li>
        <li>author: Marvin A wallaard, Mucahid Sarikaya, Srishti Brijobhokun</li>
      </ul>
    </div>
  </footer>

</template>

<script>
export default
{
  name: "Footer",
  data()
  {
    return{

    }
  },
  methods: {

  }
}
</script>

<style scoped>
footer
{
  border-top: solid #333 1px;
  width: 100%;
  height: 100%;
}
footer ul
{
  color: #333;
  list-style: none;
}
footer h4
{
  color: #333;
  margin-left: 30px;
}
#contact
{
  margin:20px;
}

</style>