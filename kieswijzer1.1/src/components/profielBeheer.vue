<template>
<div id="container">
  <div id="links"></div>
  <div id="midden">
    <div class="container">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-10"><h2>superAdmin <b>dashboard</b></h2></div>
              <router-link class="col-sm-2" to="nieuw" exact>
                <div>
                  <button class="buttonToevoegen">Gebruiker toevoegen</button>
                </div>
              </router-link>
            </div>
          </div>
          <table class="table table-striped table-hover table-bordered">
            <thead>
            <tr>
              <th>ID</th>
              <th>gebruikers_naam</th>
              <th>wachtwoord</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(vraag, index) in vragenData" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <div contenteditable="true" class="">{{ }}</div>
              </td>
              <td>
                <div contenteditable="true" class="">{{  }}</div>
              </td>
              <td>
                <a v-on:click="updateAction(index, vraag.id)" class="edit" title="Edit" data-toggle="tooltip"><i
                    class="material-icons">&#xE254;</i></a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div id="rechts"></div>
</div>

</template>

<script>
export default {
  name: "profielBeheer",
  beforeCreate() {
    let userRoll = sessionStorage.getItem("userRoll")
    if(userRoll === 'admin' ){
      //console.log('suc6')
      let name = sessionStorage.getItem("userName")
      console.log(name)
      fetch(`${process.env.VUE_APP_BACKEND_URL}/findUser/${name}`).then((response) =>{
        return response.json();
      }).then((myJson)=>{
        console.log(myJson);
        this.myPassword = myJson['password']
        this.myUsername = myJson['username']
        this.myUserId = myJson['id']
        this.myUserRole = myJson['role']
      }).catch(function() {
        console.log("error")
      })
    }else{
      this.$router.push("/login")
    }
  },
  data(){
    return{
      myUserRole:null,
      myUserId: null,
      myUsername: null,
      myPassword: null
    }
  }
}
</script>

<style scoped>
#container{
  margin: 15px;
  text-align: center;
  display: flex;
  flex-direction: row;
}
#links{
  height: 100%;
  width: 12.5%;
}
#midden{
  height: 100%;
  width: 75%;
}
#rechts{
  height: 100%;
  width: 12.5%;
}
.buttonToevoegen {
  background-color: #E30513;
  color: white;
  font-size: 15px;
  padding: 15px 20px 15px 20px;
  border: none;
  border-radius: 5px;
  border-bottom: 3px solid #B50811;
  transition: all .2s ease;
  margin-bottom: 15px;
}
</style>