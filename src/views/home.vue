<template>
  <div>
    我是home页面
    <div>
      <h2>vant 组件(自动注册过了 可以直接使用不用再引入)</h2>
      <van-button type="primary">主要按钮</van-button>
      <br />
      <van-image
        width="100"
        height="100"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </div>
    <h1 class="less-test">路由跳转:</h1>
    <router-link to="/about">跳转到about页面</router-link>
    <h1>pinia状态： {{ countStore.count }}</h1>
    <h1>pinia=> getters： {{ countStore.doubleCount }}</h1>
    <button @click="doIncrease">+1</button>
  </div>
</template>

<script>
import { useCountStore } from "@/pinia/count.js";
import { onMounted } from 'vue';

export default {
  setup() {
    const countStore = useCountStore();
    onMounted(() => {
      console.log('test git==')
    })
    // 累加
    const doIncrease = () => {
      countStore.increment();
    };
    return {
      countStore,
      doIncrease,
    };
  },
};
</script>

<style lang="less" scoped>
  .less-test {
    color: red;
  }
</style>
