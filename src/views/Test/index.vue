<template>
    <div class="Test">
        <router-link to="/">跳转到Home</router-link>
        <div @click="handleTestHttp">测试HTTP请求</div>
        <div @click="handleTestVant">测试Vant定制样式</div>
        <test-vant v-if="testVant" />
        <div @click="handleTestToast">测试Toast</div>
        <div @click="handleTestStore">测试Store</div>
        <test-store v-if="testStore" />
        <img v-lazy="img" alt="" class="g-width"/>
    </div>
</template>

<script>
import TestVant from './children/TestVant'
import TestStore from './children/TestStore'
export default {
    name: 'Test',
    components: {
        TestVant,
        TestStore
    },
    data () {
        return {
            testVant: false,
            testStore: false,
            img: 'http://img0.imgtn.bdimg.com/it/u=3452659517,4039325939&fm=26&gp=0.jpg'
        }
    },
    methods: {
        handleTestHttp () {
            this.$apis.getUserDetail({
                uid: 11114
            }).then(({ code, data, message }) => {
                if (code === '2000') {
                    this.$Toast('成功')
                }
            })
        },
        handleTestVant () {
            this.testVant = true
        },
        handleTestToast () {
            this.$Toast('提示内容')
        },
        handleTestStore () {
            this.testStore = true
        }
    }
}
</script>
