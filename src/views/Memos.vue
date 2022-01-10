<template>
    <v-container text-xs-center justify-center>
        <v-layout row wrap>
            <v-flex xs12 mt-3 justify-center>
                <v-flex xs12 text-xs-right>
                    <router-link :to="{ name: 'Memo_edit' }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" v-on="on" dark flat icon>
                                    <v-icon large>{{ icon }}</v-icon>
                                </v-btn>
                            </template>
                            <span>add</span>
                        </v-tooltip>
                    </router-link>
                </v-flex>
                <v-data-table :headers='headers' :items='memos'>
                {{ memos }}
                    <template v-slot:items="props">
                        <td class="text-xs-left">{{ props.item.date }}</td>
                        <td class="text-xs-left">{{ props.item.memo }}</td>
                        <td class="text-xs-left">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <span>
                                        <router-link :to="{ name: 'Memo_edit', params: { memo_id: props.item.id } }">
                                            <v-icon class="edit mr-3" small v-on="on">edit</v-icon>
                                        </router-link>
                                    </span>
                                </template>
                                <span>edit</span>
                            </v-tooltip>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <span>
                                        <v-icon class="delete mr-3" small v-on="on" @click="deleteConfirm(props.item.id)">delete</v-icon>
                                    </span>
                                </template>
                                <span>delete</span>
                            </v-tooltip>
                        </td>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from "vuex"

export default {
    created() {
        this.memos = this.$store.state.memos
    },
    data() {
        return {
            headers: [
                { text: 'DATE', value: 'date' },
                { text: 'MEMO', value: 'memo' },
                { text: 'ACTION', sortable: false }
            ],
            memos: [],
            icon: 'add_circle'
        }
    },
    methods: {
        deleteConfirm(id) {
            if (confirm('削除する？')) {
                this.deleteMemo({ id })
            }
        },
        ...mapActions(['deleteMemo'])
    },
}
</script>

<style>
a {
    text-decoration: none;
}

.edit:hover {
    color: darkorange;
    opacity: 0.7;
}

.delete:hover {
    color: darkred;
    opacity: 0.7;
}
</style>