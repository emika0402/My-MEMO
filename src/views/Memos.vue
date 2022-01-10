<template>
    <v-container text-xs-center justify-center>
        <v-layout row wrap>
            <v-flex xs12 mt-3 justify-center>
                <v-flex xs12 text-xs-right>
                    <router-link :to="{ name: 'Memo_edit' }" class="add">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" v-on="on" dark flat icon>
                                    <v-icon large>{{ icon }}</v-icon>
                                </v-btn>
                            </template>
                            <span>追加</span>
                        </v-tooltip>
                    </router-link>
                </v-flex>
                <v-data-table :headers='headers' :items='memos'>
                {{ memos }}
                    <template v-slot:items="props">
                        <td class="text-xs-left">{{ props.item.date }}</td>
                        <td class="text-xs-left">{{ props.item.memo }}</td>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    created() {
        this.memos = this.$store.state.memos
    },
    data() {
        return {
            headers: [
                { text: 'DATE', value: 'date' },
                { text: 'MEMO', value: 'memo' }
            ],
            memos: [],
            icon: 'add_circle'
        }
    }
}
</script>

<style>
.add {
    text-decoration: none;
}
</style>