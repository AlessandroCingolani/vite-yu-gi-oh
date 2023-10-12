<script>
export default {
  name:'Cards'
}
</script>


<template>
  <div class="col-2">
    <div class="sc-card">
      <img src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="..">
      <h6>A CELL BREDING DEVICE</h6>
      <p>Alien</p>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../../../scss/partials/vars' as *;
@use '../../../scss/partials/general' as *;

.sc-card{
  background-color: $background-orange;
  text-align: center;
  
  img{
    max-width:100% ;
    margin-bottom: 10px;
    }
  }
  


</style>