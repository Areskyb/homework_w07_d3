import Vue from 'vue';

document.addEventLiestener("DOMContentLoaded",()=>{
  new Vue({
    el:"#app",
    data:{
      
    },
    mounted(){
      this.fetchCoins()
    },
    methods: {
      fetchCoins: function(){
        
      }
    }
  })
});