<template>
  <div class="results">
    <button class="btn" @click="getGifs()">get gifs</button>
    <ol>
      <li v-for="gif in gifs" :key="gif.id" @click="setActiveGif(gif)">{{gif.title}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Results",
  methods: {
    getGifs() {
      this.$store.dispatch("gifResults");
    },
    setActiveGif(gif) {
      this.$store.dispatch("setActiveGif", gif);
    }
  },
  computed: {
    gifs() {
      debugger;
      return this.$store.state.gifs;
    }
  }
};
</script>

<style>
.results {
  background-color: #42b983;
}
</style>