<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>

      <router-link :to="{ name: 'Pokemon' }">Pokemon List</router-link>
    </nav>
    <router-view />
    <legal-footer />
  </div>
</template>

<script>
import LegalFooter from "@/components/LegalFooter.vue";

export default {
  components: {
    LegalFooter,
  },
};
</script>

<style lang="scss">
$accent: #7c09ff;
$hover: #e209ff;
$text: #2c3e50;
$bg: #ffffff;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
}

a {
  color: $accent;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
  }
}

/* Top level Styling */
html {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $bg;
  color: $text;
}

body {
  margin: 0 0 0 1rem;
}

/* Navigation Lists */
#nav,
nav {
  margin: 1rem;

  > a {
    margin-right: 1rem;
  }

  ul {
    display: inline-block;
    list-style: none;
    padding-left: 0;
  }

  li {
    display: inline-block;
    margin: 0 0.25rem;
  }
}
</style>
