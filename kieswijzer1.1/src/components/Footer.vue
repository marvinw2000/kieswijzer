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
    <div id="socials">
      <a href=""><i class="fab fa-instagram socials"></i></a>
      <a href=""><i class="fab fa-facebook socials"></i></a>
      <a href=""><i class="fab fa-youtube socials"></i></a>
    </div>
    <div id="aanmelden">
      <h4>Aanmelden</h4>
      <p>Keuze gemaakt? Meld je direct aan!</p>
      <button type="button" formtarget="_parent" onclick="window.location.href='https://rocmondriaan.nl/alle-opleidingen'">Direct aanmelden!</button>
      <p class="tekstSchuin">
        ...en wordt de Mondriaan van morgen!
      </p>
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
  border-top: solid #999 1px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
footer ul
{
  color: #1A61A1;
  list-style: none;
}
footer h4
{
  color: #1A61A1;
}

#contact
{
  text-align: center;
}
#socials{
  text-align: center;
}
.socials{
  color: #1A61A1;
  font-size: 50px;
}

#aanmelden
{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #1A61A1;
}

button{
  background-color: #e20d18;
  font-size:15px;
  color: white;
  border-radius: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
.tekstSchuin{
  font-style: italic;
  font-size: 15px;
  margin-left: 30px;
}
@media (min-width: 700px){
  footer{
    flex-direction: row;
    align-items: center;
    align-content: center;
  }
  #contact{
    margin-left: 7.5%;
  }
}
</style>