<template>
 <div class="w-auto h-auto overflow-y-hidden">
    <router-view/>
 </div>  
</template>

<script>
export default {
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #050708;
  margin: 0;
}

/* tr:nth-child(even) {
   background-color: #dcdcdc;
} */

body{
  background: #efefefe5;
  overflow-y: hidden;
}


@keyframes fadeIn {
    0%{
       opacity: 0;
       transform: translateZ(0);
    }
    100%{
       opacity: 1;
       transform: translateZ(100%)
    }
}

@keyframes fadeOut {
    0%{
       opacity: 1;
       transform: translateZ(100%);
    }
    100%{
       opacity: 0;
       transform: translateZ(0)
    }
}

@keyframes viewUp {
    0%{
       opacity: 0;
       transform: translateY(0);
    }
    50%{
       opacity: 0.5;
       transform: translateY(12px)
    }
    100%{
       opacity: 1;
       transform: translateY(0)
    }
}

@keyframes viewSwipe {
    0%{
       opacity: 0;
       transform: translateX(10px);
    }
    100%{
       opacity: 1;
       transform: translateX(0px)
    }
}

.toggleMenu{
    -webkit-animation-name: viewSwipe;
    animation-name: viewSwipe;
}

.toggleRouter{
    -webkit-animation-name: viewUp;
    animation-name: viewUp;
}

.checkFade {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}

.animated{
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
}

select{
    display: block
 }

</style>
