<template>
  <div class="serial-page">
    <div class="container-sm">
      <div class="title mt-20">
        <h2>سریال اکشن</h2>
      </div>
      <div class="grid grid-cols-8 gap-x-10 gap-y-30 mt-30">
        <CardMovie v-for="i in 23" :key="i"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'main',
}
</script>

<style>
</style>