<template>
  <div class="clientes">
    <h1>Listagem de clientes Uplanner</h1>
    <div>
     
      <md-card
        class="md-primary"
        md-theme="purple-card"
        md-with-hover       
        v-for="(clientes, id) in Clientes"
        v-bind:key="id"
      >    
        <md-ripple>
          <md-card-header>
            <div class="md-title">{{ clientes.name}}</div>
            <div class="md-subhead">{{ clientes.cpf}}d</div>
          </md-card-header>
          <p class="card-content">Email: {{ clientes.email}}</p>
          <p class="card-content">Endereço: {{ clientes.address.street}}</p>
          <p class="card-content">Telefone: {{ clientes.phoneNumber}}</p>
        </md-ripple>
      </md-card>
     

      <!-- <md-table class="tabela">
        <md-table-row>
          <md-table-head>Nome</md-table-head>
          <md-table-head>Email</md-table-head>
          <md-table-head>CPF</md-table-head>
        </md-table-row>        
        <md-table-row v-for="(clientes, id) in Clientes" v-bind:key="id">        
          <md-table-cell> {{ clientes.name}} </md-table-cell>
          <md-table-cell> {{ clientes.email}} </md-table-cell>
          <md-table-cell> {{ clientes.cpf}} </md-table-cell>
        </md-table-row>
      </md-table>-->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import axios from "axios";

Vue.use(VueMaterial);

/* eslint-disable */
export default {
  name: "Clientes",
  data() {
    return {
      Clientes: [],
    };
  },
  mounted() {
    axios
      .get("https://api-uplanner.herokuapp.com/customers")
      .then(response => {
        console.log(response.data);
        this.Clientes = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style >
.tabela {
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}
.md-table-head {
  text-align: center;
}
.md-card {
  width: 320px;
  margin: 20px;
  display: inline-table;
  vertical-align: top;
}
</style>