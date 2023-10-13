<script>
import { store } from './data/store';
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  name:'App',
  components: {
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      store.isLoading = true;
      axios.get(store.apiUrl,{
        params:{
          archetype:store.research
        }
      })
        .then(result =>{
          store.cardList = result.data.data
          store.isLoading = false;

        })
        .catch(error => {
          console.log(error);
          store.isLoading = false;
        })
    },
    getApiType(){
      axios.get(store.typeUrl)
        .then(result =>{
          store.archetypeList = result.data

        })
  
        .catch(error => {
          console.log(error);
        })
    }
  },
  mounted(){
    this.getApi();
    this.getApiType();
  }
}
</script>


<template>
  <Header/>
  <Main @changeResearch="getApi"/>
</template>



<style lang="scss">

@use './scss/main.scss';

</style>
