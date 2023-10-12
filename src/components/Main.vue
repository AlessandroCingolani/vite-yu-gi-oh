<script>
import CardContainer from './partials/CardContainer.vue';
export default {
  name:'Main',
  components:{
    CardContainer
  }
}
</script>


<template>
  <main>
    <div class="my_container">
      <select class="form-select form-select-sm" aria-label="Small select example">
        <option selected>Alien</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
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