<script>
import Cards from './Cards.vue';
import Result from './Result.vue';
export default {
  name:'CardContainer',
  components:{
    Cards,
    Result
  }
}
</script>


<template>
  <div class="container my-5">
    <Result/>     
    <div class="row">
      <Cards/>
    </div>

  </div>
</template>



<style lang="scss" scoped>

  .row {
    background-color: white;
    
  }

</style>