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
        // params:{
        //   archetype: store.research
        // }
      })
        .then(result =>{
          console.log(result.data);
          store.cardList = result.data.data

          store.cardList.forEach( type => {
            if(!store.archetypeList.includes(type.archetype)){
              store.archetypeList.push(type.archetype)
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
