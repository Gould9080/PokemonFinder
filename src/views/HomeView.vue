<template>
  <div class="home">
    <img alt="pokemon logo" src="../assets/pokemonlogo2.png" />

    <h2>Do you <span style="font-style: italic;">really</span> have to catch them all?</h2>
    <p>
      If you must insist on catching them all, please
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
    };
  },
  computed: {},
  components: {},
};
</script>
