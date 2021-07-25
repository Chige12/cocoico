<template>
<v-card
    class="mx-auto"
>

    <v-app-bar>
    <v-spacer />
        <v-toolbar-title>
            現在 NAIST では募集が 4 件あります
        </v-toolbar-title>
    <v-spacer />
    </v-app-bar>

    <v-container>
    <v-row dense>
        <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        >
        <v-card
            :color="item.color"
        >
            <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-title
                class="headline"
                v-text="item.place"
                ></v-card-title>

                <v-card-subtitle v-text="item.comment"></v-card-subtitle>
                
                <v-card-text v-text="item.time"></v-card-text>
                <v-card-text v-text="item.hour"></v-card-text>
                <v-card-text v-text="item.fare"></v-card-text>
                <v-card-text v-text="item.now"></v-card-text>
                <v-card-text v-text="item.more"></v-card-text>

                <v-btn
                class="ma-2"
                dark
                to="/chat"
                >
                    <v-icon
                    dark
                    left
                    >
                    mdi-walk
                    </v-icon>一緒に行く
                </v-btn>
            </div>

            <v-avatar
                class="ma-3"
                size="125"
                tile
            >
                <v-img :src="item.src"></v-img>
            </v-avatar>
            </div>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
</v-card>
</template>

<script>
export default {
    data: () => ({
    items: [
        {
        place: 'イオンモール高の原',
        comment: 'ユニクロ行くついでに映画見たいです！',
        time: '13:00',
        hour: '約3時間',
        fare: '2,600/4人=650',
        now: '現在2名',
        more: 'あと2名'
        },
        {
        place: 'イオンモール奈良登美ヶ丘',
        commnet: '食材の買い物に行きたいです！',
        ime: '15:00',
        hour: '約1時間',
        fare: '1,500/4人=400',
        now: '現在1名',
        more: 'あと3名'
        },
        {
        place: '生駒北大和郵便局',
        comment: '速達で出したいものがあります！',
        time: '14:00',
        hour: '約0.5時間',
        fare: '730/4人=650',
        now: '現在2名',
        more: 'あと2名'
        },
        {
        place: '国立国会図書館関西館',
        comment: '調べ物をしたいです！',
        time: '15:00',
        hour: '約4時間',
        fare: '2,260/4人=650',
        now: '現在1名',
        more: 'あと3名'
        },
    ],
    }),
}
</script>