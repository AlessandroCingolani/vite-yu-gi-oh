<script>
import { store } from '../../data/store';
export default {
  name:'Result',
  data(){
    return{
      store
    }
  },
  computed:{
    outputResult(){
      if(store.cardList.length > 0){
        return 'Found ' + store.cardList.length + ' cards';
      }
      return 'Cards not found';
    }
  }
}
</script>


<template>
  <div v-if="store.isLoading" class="result">Searching...</div>
  <div v-else class="result">
    <span>{{ outputResult }}</span>
  </div>
</template>



<style lang="scss" scoped>
@use '../../../scss/partials/vars' as *;

.result {
  width: 100%;
  color: white;
  background-color:$background-result ;
  padding: 10px;
}

</style>