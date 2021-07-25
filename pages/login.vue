<template lang="pug">
  <div>
    h1 Login
    v-btn(@click="loginWithGoogle()") Sign in with Google
    v-btn(@click="logout()") logout
    .mt-8(v-if="user")
      v-btn(to="/recruit") To recruit
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({user : state => state.user})
  },
  methods: {
    ...mapActions(['loginWithGoogle', 'logout'])
  }
}
</script>