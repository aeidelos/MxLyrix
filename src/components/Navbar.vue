<template>
  <div class="navbar skin-roselia">
    <router-link to="/" class="center" >
      <font-awesome-icon icon="home" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style type="text/scss" scoped>
  font-awesome-icon {
    color: #2E3645;
  }
</style>
