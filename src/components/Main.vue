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
      <h6>Select Archetype</h6>
      <select 
      @change="$emit('changeResearch')" 
      v-model="store.research"
      class="form-select " 
      aria-label="Small select example"
      >
          <option
            v-for="(arch, index) in store.archetypeList"
            :key="index"
            :value="arch.archetype_name"
          >{{ arch.archetype_name }}

        </option>
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
      width: 180px;
    }
  }
</style>