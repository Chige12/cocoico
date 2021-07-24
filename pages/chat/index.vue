<template lang="pug">
  .chat
    ChatHeader
    ChatList
</template>
<script>
import ChatHeader from '~/components/chat/ChatHeader.vue'
import ChatList from '~/components/chat/ChatList.vue'
export default {
  components: {
    ChatHeader,
    ChatList
  }
}
</script>
<style lang="scss" scoped>
.chat {
  position: relative;
}
</style>