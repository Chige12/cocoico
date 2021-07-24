<template lang="pug">
  <div>
    h1 Login
    v-btn(@click="loginWithGoogle()") Sign in with Google
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['loginWithGoogle'])
  }
}
</script>