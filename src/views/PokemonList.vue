<template>
  <section>
    <h2>Current Pokemon</h2>
    <p>As of {{ currentDate }} we have caught {{ numberOfPokemon }} pokemon:</p>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type 1</th>
          <th>Type 2</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="p in $store.state.pokemon" v-bind:key="p.id">
          <td>
            <!-- ID -->
            <router-link
              v-bind:to="{ name: 'PokemonDetails', params: { id: p.id } }"
            >
              {{ p.id }}
            </router-link>
          </td>

          <td>
            <!-- Name -->
            <router-link
              v-bind:to="{ name: 'PokemonDetails', params: { id: p.id } }"
            >
              {{ p.name }}
            </router-link>
          </td>

          <td>
            <!-- Type 1 -->
            {{ p.type1 }}
          </td>
          <td>
            <!-- Type 2 -->
            {{ p.type2 }}
          </td>

          <!-- <td>
            <span v-if="p.priority === 1" class="priority priority-1"
              >Very Low</span
            >
            <span v-if="p.priority === 2" class="priority priority-2">Low</span>
            <span v-if="p.priority === 3" class="priority priority-3"
              >Medium</span
            >
            <span v-if="p.priority === 4" class="priority priority-4"
              >High</span
            >
            <span v-if="p.priority === 5" class="priority priority-5"
              >Very High</span
            >
          </td> -->
          <td>
            <!-- Type 1 -->
            <span
              class="status"
              :class="{
                'status-closed': p.active,
                'status-open': !p.active,
              }"
            >
              {{ p.active ? "Active" : "Inactive" }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="addBtn" @click="showForm">Add a Pokemon</button>

    <form class="TODO" v-if="formShow" v-on:submit.prevent="savePokemon">
      <input type="text" placeholder="Name" v-model="pokemon.name" />
      <input type="text" placeholder="Type 1" v-model="pokemon.type1" />
      <input type="text" placeholder="Type 2" v-model="pokemon.type2" />

      <label for="rating">Level: </label>
      <select id="priority" v-model.number="pokemon.priority">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>Save</button>
    </form>
  </section>
</template>



<script>
export default {
  data() {
    return {
      pokemon: {
        id: "",
        name: "",
        type1: "",
        type2: "",
        level: "",
        evolvesFrom: "",
        evolvesTo: "",
        active: false,
      },
      formShow: false,
      defaultimg: "pokeball.png",
    };
  },
  computed: {
    currentDate() {
      const date = new Date();
      return date.toLocaleDateString();
    },
    numberOfPokemon() {
      return this.$store.state.lastId;
    },
  },

  methods: {
    showForm() {
      this.formShow = !this.formShow;
    },
    savePokemon() {
      this.pokemon.id = this.getNewId();
      // this.bug.image = this.defaultimg;
      this.$store.commit("SAVE_POKEMON", this.pokemon);
      this.bug = {
        id: "",
        title: "",
        description: "",
        priority: "",
        isOpen: true,
        resolution: "",
        image: "",
      };
      this.formShow = false;
    },
    getNewId() {
      let lastId = this.$store.state.lastId;
      this.$store.state.lastId++;
      return lastId + 1;
    },
  },
};
</script>
















<style lang="scss">
.addBtn {
  margin: 20px;
}
.TODO {
  color: red;
}
.status {
  border-radius: 0.5rem;
  padding: 0.25rem;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 1px 1px gray;

  &.status-open {
    background-color: lightcoral;
  }
  &.status-closed {
    background-color: lightgreen;
  }
}

.priority {
  border-radius: 0.5rem;
  padding: 0.25rem;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 1px 1px gray;

  &.priority-1 {
    background-color: lightseagreen;
  }
  &.priority-2 {
    background-color: lightblue;
  }
  &.priority-3 {
    background-color: gray;
  }
  &.priority-4 {
    background-color: lightsalmon;
  }
  &.priority-5 {
    background-color: lightcoral;
  }
}

table {
  width: 100%;
  margin: auto;
  max-width: 800px;

  td,
  th {
    text-align: left;
    padding: 0.25rem;
  }

  thead tr {
    background-color: purple;
    color: yellow;
  }

  tbody {
    tr:nth-child(even) {
      background-color: lemonchiffon;
    }
    tr:nth-child(odd) {
      background-color: palegoldenrod;
    }
  }
}
</style>