<template>
    <div tabindex="-1" aria-hidden="false" class="checkFade animated modal overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 md:h-full">
    <div class="flex-auto mt-52">
        <div class="spinner-border animate-spin inline-block first:w-52 h-52 border-4 rounded-full text-purple-700" role="status">
           <span class="visually-hidden">Loading...</span>
        </div>
        <div class="relative -mt-32 text-4xl text-gray-200">DMITS</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LoadingScreen'
}
</script>

<style scope>
   
</style>