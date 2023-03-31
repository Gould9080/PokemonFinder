<template>
  <div class="home">
    <img alt="pokemon logo" src="../assets/pokemonlogo2.png" />

    <h2>Do you really have to catch them all?</h2>
    <p>
      If you insist on catching them all, please
      <router-link :to="{ name: 'Pokemon' }">check out our list</router-link>
      of certified Pokemon.
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      numLawsuits: 13,
    };
  },
  computed: {
    monthsUntilOpen() {
      const monthsPerLawsuit = 5;
      return this.numLawsuits * monthsPerLawsuit;
    },
  },
  components: {},
};
</script>
