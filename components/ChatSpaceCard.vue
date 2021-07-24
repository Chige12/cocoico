<template lang="pug">
  v-app
    v-card(class="mx-auto"
    raised)

        .d-flex.flex-row.pa-4
          .card_left.align-stretch
            .parent-card-left.d-flex.flex-column
              .upper-card-left.align-strech.d-flex.flex-column.pa-2
                .where-go いくばしょ
                .purpose 目的

              .lower-card-left.d-flex.flex-column.pa-2.flex-space-arround
                .dep-time.d-flex
                  
                  .departure 出発時刻
                  v-avatar(size="15")

                  .departure_time 13：00

                .st-time.d-flex
                  
                  .stay 滞在時間
                  v-avatar(size="15")
                  .stay_time 約3時間

                .tra-fee.d-flex
                    
                    .transfee 交通費
                    v-avatar(size="15")

                    .departure_time 2,600/4人=650円
        
        
         
                

          .card_right.align-stretch.flex-grow-0.flex-shrink-0
            .parent-card-right.d-flex.flex-column.justify-space-between
              .item1.pt-4
                    .nowjoin() 現在2名｜後1名
                    v-avatar(size="24")
                    v-avatar(size="24")
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
