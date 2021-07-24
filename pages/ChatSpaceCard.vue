<template lang="pug">
  v-app
    v-card(class="mx-auto"
    raised)

        .d-flex.flex-row.pa-4
          .card_left.align-stretch
            .parent-card-left.d-flex.flex-column
              .upper-card-left.d-flex.align-strech.flex-column.pa-2
                .where-go いくばしょ
                .purpose 目的

              .lower-card-left.d-flex.flex-grow-0.flex-shrink-0.flex-column.pa-2
                  v-row(dense="no-gutter")
                    v-col(cols="4")
                        .departure 出発時刻
                    v-col(cols="1")
                        v-avatar(size="20")
                            img(src="~/assets/image/タクシー.PNG")
                    v-col(cols="5")
                        .departure_time 13：00
                  v-row(dense="no-gutter")
                    v-col(cols="4")
                        .stay 滞在時間
                    v-col(cols="1")
                        v-avatar(size="20")
                            img(src="~/assets/image/時計.PNG")
                    v-col(cols="5")
                        .stay_time 約3時間
                  v-row(dense="no-gutter")
                    v-col(cols="4")
                        .transfee 交通費
                    v-col(cols="1")
                        v-avatar(size="20")
                            img(src="~/assets/image/Yen.PNG")
                    v-col(cols="5")
                        .departure_time 2,600/4人=650円
        
        
         
                

          .card_right.align-stretch.flex-grow-0.flex-shrink-0
            .parent-card-right.d-flex.flex-column.justify-space-between
              .item1.pt-4
                    .nowjoin() 現在2名｜後1名
                    v-avatar(size="24")
                      img(src="~/assets/image/淺田アイコン.PNG")
                    v-avatar(size="24")
                      img(src="~/assets/image/アイコン石田.PNG")
              .item2
                    v-btn(dark)
                        .bottun_inside 一緒に行く
        
        
        


</template>
<style lang="scss" scoped>
.parent-card-left{
  width:100%;
}
.parent-card-right{
  height:100%;
}
.where-go {
   font-weight: $font-bold;
   font-size: 20px;
}
</style>
