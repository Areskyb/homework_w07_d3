import Vue from 'vue';

document.addEventListener("DOMContentLoaded",()=>{
  new Vue({
    el:"#app",
    data:{
      rates: '',
      asked: 0,
      selected:'',
      from:''
    },
    mounted(){
      this.fetchCoins()
    },
    computed: {
      exange: function(){
         return (this.asked * (this.selected / this.from)).toFixed(2);
        
      }
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