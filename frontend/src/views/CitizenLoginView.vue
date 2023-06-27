<template>
    <div class="-mt-0.5">
      <div class="sm:h-full sm:w-full overflow-x-hidden overflow-y-hidden">
        <keep-alive>
           <CitizenLogin/>
        </keep-alive>
      </div>
    </div>
      
</template>

<script>
    import CitizenLogin from '../components/Auth/CitizenLogin.vue'
    export default {
        name: 'CitizenLoginView',
        components: { CitizenLogin },
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