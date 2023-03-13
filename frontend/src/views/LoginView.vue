<template>
<div class="-mt-0.5">
  <div class="xl:h-full xl:w-full m-auto">
    <keep-alive>
       <Login/>
    </keep-alive>
  </div>
</div>
  
</template>

<script>
import Login from '../components/Auth/Login.vue'
export default {
    name: 'LoginView',
    components: { Login },
    mounted(){
    }   
}
</script>

<style scoped>
.body {
  background-image: url('../assets/dmits-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position:fixed;
  left:0;right:0;top:0;bottom:0;
}
</style>