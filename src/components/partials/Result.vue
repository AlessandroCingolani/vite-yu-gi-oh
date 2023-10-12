<script>
export default {
  name:'Result'
}
</script>


<template>
  <div class="result">
    <span>Found 39 card</span>
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