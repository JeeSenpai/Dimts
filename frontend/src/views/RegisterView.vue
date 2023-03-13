<template>
  <div class="">
    <div class="xl:h-full xl:w-full m-auto overflow-y-auto">
          <SignUp/>
    </div>
  </div>
</template>

<script>
import SignUp from "@/components/Auth/SignUp.vue";
export default {
    name: "RegisterView",
    components: { SignUp },
}
</script>

<style scoped>
.body {
  background-image: url('../assets/background.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position:fixed;
  left:0;right:0;top:0;bottom:0;
}
</style>