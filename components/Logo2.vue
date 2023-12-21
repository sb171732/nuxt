<template>
  <div class="">
    <h1>Logo 2</h1>
    {{ counter }}
    <button @click="fetch()">add</button>
    <el-button>Click</el-button>
  </div>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods:{
    fetch(){
      this.$store.dispatch('fetchCounter')
    }
  }
}
</script>

<style>

</style>