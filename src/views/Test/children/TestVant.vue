<template>
    <div class="testVant">
        <van-button type="primary">默认按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-cell title="单元格" value="内容" label="描述信息" />
    </div>
</template>

<script>
export default {
    name: 'testVant',
    methods: {
        handleClick () {
            this.$apis.getUserDetail({
                uis: 11114
            }).then(res => {
                console.log(res)
            })
        }
    }
}
</script>
