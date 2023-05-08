<template>
  <section id="detailssection">
    <div
      id="pokemoncard"
      v-bind:class="{
        activePokemon: thisPokemon.active === true,
        inactivePokemon: thisPokemon.active === false,
      }"
    >
      <h2>Pokemon ID: {{ thisPokemon.id }}</h2>
      <h3>Name: {{ thisPokemon.name }}</h3>
      <h3>Type 1: {{ thisPokemon.type1 }}</h3>
      <h3>Type 2: {{ thisPokemon.type2 }}</h3>
      <h3>Current Level: {{ thisPokemon.level }}</h3>
      <h3
        v-bind:class="{
          activePokemon: thisPokemon.active === true,
          inactivePokemon: thisPokemon.active === false,
        }"
      >
        Status: <span>{{ thisPokemon.active === true ? "Active" : "Inactive" }}</span> 
      </h3>
      <button v-if="isActive" @click="markInactive">Mark as Inactive</button>
      <button v-if="!isActive" @click="markActive">Mark as Active</button>
      <router-link v-bind:to="{ name: 'Pokemon' }">
        <button>Go Back</button>
      </router-link>
    </div>

    <div id="pokeimg">
      <!-- v-bind:src="require('../assets/' + review.image)" -->

      <img v-if="isActive" v-bind:src="pokemonImg" />
      <img v-if="!isActive" src="../assets/pokeball.png" />
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
    thisPokemon() {
      return this.$store.state.pokemon.find(
        (p) => p.id === this.$route.params.id
      );
    },
    isActive() {
      // should return false if isOpen = true
      return this.thisPokemon.active;
    },
    pokemonImg() {
      return this.$store.state.baseUrl + this.thisPokemon.id + ".png";
    },
  },
  methods: {
    markInactive() {
      this.thisPokemon.active = false;
      this.thisPokemon.image = "logo.png";
    },
    markActive() {
      this.thisPokemon.active = true;
    },
  },
};
</script>







<style>
#pokeimg {
 min-width: 40%;
  background-color: rgb(245, 245, 222);
}
#pokeimg img {
  height: 100%;
  width: 100%;
}
#detailssection {
  margin-left: auto;
  margin-right: auto;
  height: 325px;
  max-width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#pokemoncard {
  width: 60%;
  text-align: left;
  padding-left: 1rem;
  padding-bottom: 1rem;
}

#pokemoncard.activePokemon {
  background-color: rgb(237, 237, 195);
}
#pokemoncard.inactivePokemon {
  background-color: rgb(255, 214, 206);
}
h3.activePokemon > span {
  color: green;
}
h3.inactivePokemon > span {
  color: red;
}
button {
  margin-right: 1rem;
}
</style>