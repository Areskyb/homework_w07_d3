import Vue from 'vue';

document.addEventListener("DOMContentLoaded",()=>{
  new Vue({
    el:"#app",
    data:{
      rates: '',
      asked: 0
    },
    mounted(){
      this.fetchCoins()
    },
    methods: {
      fetchCoins: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => {
          this.rates = (data.rates)  
        })
      }
    }
  })
});