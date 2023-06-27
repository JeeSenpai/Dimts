<template>
    <div class="-mt-0.5">
      <div class="sm:h-full sm:w-full overflow-x-hidden overflow-y-hidden">
        <keep-alive>
           <CitizenSignup/>
        </keep-alive>
      </div>
    </div>
      
</template>

<script>
    import CitizenSignup from '../components/Auth/CitizenSignup.vue'
    export default {
        name: 'CitizenSignupView',
        components: { CitizenSignup },
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