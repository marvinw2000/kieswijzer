<template>
  <div class="container">
    <div class="table-responsive">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-10"><h2>Beheerders <b>dashboard</b></h2></div>
            <router-link class="col-sm-2" to="nieuw" exact>
             <div ><button class="buttonToevoegen">Vraag toevoegen</button></div>
            </router-link>
          </div>
        </div>
        <table class="table table-striped table-hover table-bordered">
          <thead>
          <tr>
            <th>ID</th>
            <th>Vraag <i class="fa fa-sort"></i></th>
            <th>Juiste antwoord</th>
            <th>Punten ICT <i class="fa fa-sort"></i></th>
            <th>Punten AenM</th>
            <th>Punten BenI <i class="fa fa-sort"></i></th>
            <th>Punten MeI</th>
            <th>Punten TenI</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(vraag, index) in vragenData" :key="index">
            <td>{{ vraag.id }}</td>
            <td>{{ vraag.vraag }}</td>
            <td>{{ vraag.juisteAntwoord }}</td>
            <td>{{ vraag.puntenIct }}</td>
            <td>{{ vraag.puntenAenM }}</td>
            <td>{{ vraag.puntenBenI }}</td>
            <td>{{ vraag.puntenMei }}</td>
            <td>{{ vraag.puntenTenI }}</td>
            <td>
              <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
              <a href="#" v-on:click="deleteVraag(vraag.id)" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons ">&#xE872;</i></a>
            </td>
          </tr>

          </tbody>
        </table>
<!--        <div class="clearfix">-->
<!--          <div class="hint-text">Pagina <b>5</b> van de <b>25</b></div>-->
<!--          <ul class="pagination">-->
<!--            <li class="page-item disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>-->
<!--            <li class="page-item"><a href="#" class="page-link">1</a></li>-->
<!--            <li class="page-item"><a href="#" class="page-link">2</a></li>-->
<!--            <li class="page-item active"><a href="#" class="page-link">3</a></li>-->
<!--            <li class="page-item"><a href="#" class="page-link">4</a></li>-->
<!--            <li class="page-item"><a href="#" class="page-link">5</a></li>-->
<!--            <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>-->
<!--          </ul>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Crud",

  beforeCreate() {
    fetch('http://127.0.0.1:8000/getAllQuestions')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.vragenData = myJson;
          console.log(this.vragenData)
          console.log(this.vragenData[0].vraag)
        });
  },
  data(){
    return{
      vragenData: null
    }
  },
  methods:{
    deleteVraag(id){

      if (confirm(`weet je zeker dat je vraag ${id} wilt verwijderen`)){
        fetch(`http://localhost:8000/deleteQuestion/${id}`)
        this.$router.go('crud')
      }
    }
  }
}
</script>

<style scoped>
body {
  color: #566787;
  background: #f5f5f5;
  font-family: 'Roboto', sans-serif;
}
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  min-width: 1000px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {
  padding-bottom: 10px;
  margin: 0 0 10px;
}
.table-title h2 {
  margin: 8px 0 0;
  font-size: 22px;
}
.search-box {
  position: relative;
  float: right;
}
.search-box input {
  height: 34px;
  border-radius: 20px;
  padding-left: 35px;
  border-color: #ddd;
  box-shadow: none;
}
.search-box input:focus {
  border-color: #3FBAE4;
}
.search-box i {
  color: #a0a5b1;
  position: absolute;
  font-size: 19px;
  top: 8px;
  left: 10px;
}
table.table tr th, table.table tr td {
  border-color: #e9e9e9;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child {
  width: 130px;
}
table.table td a {
  color: #a0a5b1;
  display: inline-block;
  margin: 0 5px;
}

table.table td a.edit {
  color: #FFC107;
}
table.table td a.delete {
  color: red;
}
table.table td i {
  font-size: 19px;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li a {
  border: none;
  font-size: 95%;
  width: 30px;
  height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 30px !important;
  text-align: center;
  padding: 0;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a {
  background: #03A9F4;
}
.pagination li.active a:hover {
  background: #0397d6;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px
}
.buttonToevoegen{
  background-color: #E30513;
  color:white;
  font-size: 15px;
  padding: 15px 20px 15px 20px;
  border: none;
  border-radius: 5px;
  border-bottom: 3px solid #B50811;
  transition: all .2s ease;
}

</style>