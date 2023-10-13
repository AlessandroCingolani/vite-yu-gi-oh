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
      axios.get(store.apiUrl,{
        params:{
          archetype: store.research
        }
      })
        .then(result =>{
          store.cardList = result.data
          console.log(result.data);
          store.cardList = result.data.data

          store.charctersList.forEach( char => {
            if(!store.statusList.includes(char.status)){
              store.statusList.push(char.status)
            }
          })

        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  mounted(){
    this.getApi();
    console.log(store.cardList);
    console.log(store.archetypeList);
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
