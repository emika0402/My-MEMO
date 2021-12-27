<template>
    <v-layout wrap style="height: 200px;">
        <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
            <v-list class="pa-1">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="../assets/fukui.png">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>福井のメモ帳</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile v-for="item in items" :key="item.title" @click="a">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: 'メモ帳', icon: 'list' }
            ]
        }
    }
}
</script>