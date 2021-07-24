<template lang="pug" >
  v-row(justify="center" align="center")
    v-col(cols="12" sm="8" md="6")
      chatSpaceCard
</template>
<script>
import chatSpaceCard from '~/components/ChatSpaceCard.vue'
export default {
  components: {
    chatSpaceCard
  }
}
</script>