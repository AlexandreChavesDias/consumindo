
<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Cadastro de Usuarios</a>
      </div>
    </nav>

    <div class="container">
      <ul>
        <li v-for="(erro, index) of errors" :key="index">
          campo <b>{{erro.field}}</b> - {{erro.defaultMessage}}
        </li>
      </ul>
      <form @submit.prevent="salvar">
        <label>NAME</label>
        <input type="text" placeholder="NAME" v-model="user.name">
        <label>E-MAIL</label>
        <input type="text" placeholder="E-MAIL" v-model="user.email">
        <label>PHONE</label>
        <input type="number" placeholder="PHONE" v-model="user.phone">
        <label>PASSWORD</label>
        <input type="text" placeholder="PASSWORD" v-model="user.password">

        <button class="waves-effect waves-light btn-small">
          Salvar<i class="material-icons left">save</i>
        </button>
      </form>

      <table>

        <thead>

          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>passsword</th>
          </tr>

        </thead>

        <tbody>
          <tr v-for=" user of users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.password }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import User from "./service/users";

export default {
  name:'app',
  data() {
    return {
      user:{
      nome:'',
      email:'',
      phone:0,
      password:''
      },
      users: [],
      errors: []
    }
  },
  mounted() {
  this.listar()
  },
  
  methods:{

    listar(){
       User.listar().then(resposta => {
      this.users = resposta.data;
    });
    },
    salvar(){

      User.salvar(this.user).then(resposta => {
        this.user = {}
        alert('Salvo com sucesso!')
        this.listar()
        this.errors = []
      }).cath(e => {
        this.errors= e.response.data.errors
      })
    }
  }
};
</script>

<style>

</style>
