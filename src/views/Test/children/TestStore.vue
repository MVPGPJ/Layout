<template>
    <div class="testStore">
        <van-button type="default" @click="handleSave">存</van-button>
        <van-button type="default" @click="handleGet">取</van-button>
    </div>
</template>

<script>
import { homeModule, HOME_DETAIL_SAVE } from '@/store/modules/home'
export default {
    name: 'testVant',
    methods: {
        handleSave () {
            this.$apis.getUserDetail({
                uid: 11114
            }).then(({ code, data, message }) => {
                if (code === '2000') {
                    this.$store.dispatch(`${homeModule.name}/${HOME_DETAIL_SAVE}`, data)
                }
            })
        },
        handleGet () {
            let { detail = {} } = this.$store.state.home
            console.log(detail)
        }
    }
}
</script>
