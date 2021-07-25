<template lang="pug">
  .chat-header
    v-container
      .chat-header-wrapper
        .back-link
          v-btn(icon fab small to="/recruit")
            v-icon mdi-arrow-left
        .header-title.pl-2
          .header-title-place イオンモール高の原
          .header-title-comment ユニクロ行くついでに映画みたいです
        .title-right
          .text 現在 2 名 / あと 2 名
          .users
            v-avatar.mr-1(size="32" v-for="user in 3" :key="user")
              img(src="https://cdn.vuetifyjs.com/images/john.jpg")
      .chat-header-button.mt-4
        v-btn.go-with-team-btn(block large elevation="0" color="primary") 一緒に行く
</template>
<style lang="scss" scoped>
  .chat-header {
    width: 100%;
    position: fixed;
    background: $white;
    z-index: 1;
    padding-bottom: 16px;
    box-shadow: 0 0px 24px 0 rgba($black, 0.2);
  }
  .go-with-team-btn {
    border-radius: 8px;
  }
  .chat-header-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding-top: 8px;
  }
  .back-link {
    flex-shrink: 0;
  }
  .header-title {
    width: 100%;
    flex-shrink: 1;
    overflow: hidden;
  }
  .header-title-place,
  .header-title-comment {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .header-title-place {
    font-weight: $font-bold;
  }
  .title-right {
    flex-shrink: 0;
    font-size: 14px; 
    text-align: right;
  }
</style>