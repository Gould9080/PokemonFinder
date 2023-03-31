<template>
  <footer>
    <small
      >This site is copyright &copy; {{ currentYear }} {{ company }}. Do not
      even.</small
    >
  </footer>
</template>

<script>
export default {
  data() {
    return {
      company: "James Craig Designs",
    };
  },
  computed: {
    currentYear() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>

<style>
footer {
  margin: 2rem;
  text-align: center;
}
</style>