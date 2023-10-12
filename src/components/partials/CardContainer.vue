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
  <div class="container mt-4">
    <Result/>     
    <div class="row">
      <Cards/>
    </div>

  </div>
</template>



<style lang="scss" scoped>



  .container {
    background-color: white;
    padding: 30px;
  }

</style>