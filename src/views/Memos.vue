<template>
    <v-container text-xs-center justify-center>
        <v-layout row wrap>
            <v-flex xs12 mt-5 justify-center>
                <v-data-table :headers='headers' :items='addresses'>
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
    data() {
        return {
            headers: [
                { text: 'DATE', value: 'date' },
                { text: 'MEMO', value: 'memo' }
            ],
            addresses: [
                {
                    date: '2021/12/25',
                    memo: 'クリスマスのご飯作る'
                },
                {
                    date: '2021/12/28',
                    memo: '歯医者'
                }
            ]
        }
    }
}
</script>