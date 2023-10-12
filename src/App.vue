<script>
import { store } from './data/store';
import axios from 'axios';
import Header from './components/Header.vue';
import Result from './components/Result.vue';
import CardContainer from './components/CardContainer.vue';
export default {
  name:'App',
  components: {
    Header,
    Result,
    CardContainer
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
        .then(result =>{
          // store.cardList = result.data
          console.log(result.data);
          store.cardList = result.data
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  mounted(){
    this.getApi();
    console.log(store.cardList);
  }
}
</script>


<template>
  <Header/>
  <Result/>
  <CardContainer/>
</template>



<style lang="scss">

@use './scss/main.scss';

</style>
