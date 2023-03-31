<template>
  <section id="detailssection">
    <div
      id="pokemoncard"
      v-bind:class="{
        resolvedcard: activePokemon.active === true,
        unresolvedcard: activePokemon.active === false,
      }"
    >
      <h2>Pokemon ID: {{ activePokemon.id }}</h2>
      <h3>Name: {{ activePokemon.name }}</h3>
      <h3>Type 1: {{ activePokemon.type1 }}</h3>
      <h3>Type 2: {{ activePokemon.type2 }}</h3>
      <h3>Current Level: {{ activePokemon.level }}</h3>
      <h3
        v-bind:class="{
          resolved: activePokemon.active === true,
          unresolved: activePokemon.active === false,
        }"
      >
        Status: {{ activePokemon.active === true ? "Active" : "Inactive" }}
      </h3>
      <button v-if="!isResolved" @click="markResolved">Mark as Inactive</button>
      <button v-if="isResolved" @click="markUnresolved">Mark as Active</button>
      <router-link v-bind:to="{ name: 'Pokemon' }">
        <button>Go Back</button>
      </router-link>
    </div>

    <div id="bugimg">
      <!-- v-bind:src="require('../assets/' + review.image)" -->

      <img v-if="!isResolved" v-bind:src="pokemonImg" />
      <img v-if="isResolved" src="../assets/pokeball.png" />
    </div>
  </section>
</template>

<script>
export default {
  name: "pokemon-details",
  // props: {
  //   bug: Object,
  // },
  data() {
    return {};
  },
  computed: {
    activePokemon() {
      return this.$store.state.pokemon.find(
        (p) => p.id === this.$route.params.id
      );
    },
    isResolved() {
      // should return false if isOpen = true
      return !this.activePokemon.active;
    },
    pokemonImg() {
      return this.$store.state.baseUrl + this.activePokemon.id + ".png";
    },
  },
  methods: {
    markResolved() {
      this.activePokemon.active = false;
      this.activePokemon.image = "logo.png";
    },
    markUnresolved() {
      this.activePokemon.active = true;
    },
  },
};
</script>







<style>
#bugimg {
  display: flex;
  height: 100%;
  background-color: beige;
}
#bugimg img {
  height: 100%;
  height: 200px;
}
#detailssection {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid brown;
}
#pokemoncard {
  width: 50%;
  text-align: left;
}

#bugcard.resolvedcard {
  background-color: rgb(245, 242, 212);
}

#bugcard.unresolvedcard {
  background-color: rgb(255, 214, 206);
}
.resolved {
  color: green;
}
.unresolved {
  color: red;
}
</style>