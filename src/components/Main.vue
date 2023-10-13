<script>
import { store } from '../data/store';
import CardContainer from './partials/CardContainer.vue';
export default {
  name:'Main',
  components:{
    CardContainer
  },
  data(){
    return{
      store
    }
  }
}
</script>


<template>
  <main>
    <div class="my_container">
      <select 
      @change="$emit('changeResearch')" 
      v-model="store.research"
      class="form-select form-select-sm" 
      aria-label="Small select example"
      >
        <option v-for="(arch, index) in store.archetypeList"
            :key="index"
            :value="arch"
          >{{ arch }}

        </option>
        <option value="Sinful Spoils">Sinful Spoils</option>
        <option value="Melodious">Melodious</option>
      </select>
      <CardContainer/>
    </div>
  </main>
</template>



<style lang="scss" scoped>
@use '../../scss/partials/vars' as *;

  main {
    background-color: $background-orange;
    padding-top: 20px;
    select {
      width: 150px;
    }
  }
</style>