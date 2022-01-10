<template>
    <v-container text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs5 mt-5>
                <v-card>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="memo.date" label="日付"></v-text-field>
                            <v-text-field v-model="memo.memo" label="メモ"></v-text-field>
                            <v-btn @click="$router.push({ name: 'Memos' })">キャンセル</v-btn>
                            <v-btn color="primary" @click="submit">保存</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from "vuex"
export default {
    data () {
        return {
            memo: {
                date: new Date().toLocaleDateString(),
            }
        }
    },
    methods: {
        submit() {
            this.addMemo(this.memo)
            this.$router.push({ name: 'Memos' })
            this.memo = {
                date: new Date().toLocaleDateString(),
                }
            },
        ...mapActions(['addMemo'])
    },
}
</script>