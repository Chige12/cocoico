<template lang="pug">
  .chat-list.mt-8
    .chat-item(v-for="(chat, chatKey) in chats" :key="`chat-item-${chatKey}`")
      .announce.mb-6(v-if="chat.type === 'announce'") 
        span.mr-4 {{chat.time}}
        span {{chat.text}}
      .comment.mb-6(v-if="chat.type === 'comment'" :class="{'--me': chat.user.id === 'hoge'}")
          .mr-4
            v-avatar(size="40")
              img(src="https://cdn.vuetifyjs.com/images/john.jpg" :alt="chat.user.name")
          .comment-box.mr-4 {{chat.text}}
</template>
<script>
export default {
  data() {
    return {
      chats: [
        {
          type: 'announce',
          text: '淺田さんが募集を立ち上げました。',
          time: '10:53'
        },
        {
          type: 'comment',
          text: 'ユニクロ行くついでに映画見たいです！',
          user: {
            id: 'foo',
            url: '',
            name: ''
          }
        },
        {
          type: 'comment',
          text: 'ついていきたいです！',
          user: {
            id: 'hoge',
            url: '',
            name: ''
          }
        },
        {
          type: 'comment',
          text: 'ぜひぜひ！',
          user: {
            id: 'foo',
            url: '',
            name: ''
          }
        },
        {
          type: 'announce',
          text: '石山さんが 「一緒に行く」 しました!',
          time: '11:14'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.announce {
  color: $black;
  display: flex;
  flex-wrap: nowrap;
}

.comment {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
}
.--me {
  flex-direction: row-reverse;
}
.comment-box {
  background: $black;
  color: $white;
  padding: 12px 14px;
  border-radius: 20px 20px 20px 0;
}
.--me .comment-box {
  background: $theme-green;
  border-radius: 20px 20px 0 20px;
}
</style>