<template></template>

<script>
export default {
  mounted() {
    this.userLogout()
  },
  methods: {
    async userLogout() {
      await this.$auth.logout()
    },
  },
}
</script>
