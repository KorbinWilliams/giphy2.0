<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 bg-head">
        <h1>Gifinator 5000</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <results />
      </div>
      <div class="col-6">
        <info />
      </div>
    </div>
  </div>
</template>


<script>
import Results from "@/components/Results";
import Info from "@/components/Info";

export default {
  name: "Home",
  components: {
    Results,
    Info
  }
};
</script>

<style>
.bg-head {
  background-color: deepskyblue;
}
</style>

<img alt="Vue logo" src="../assets/logo.png" />