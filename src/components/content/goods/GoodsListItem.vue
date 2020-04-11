<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imgLoad"/>
    <div class="goods-info">
      <p>{{product.title}}</p>
      <span class="price">{{product.price}}</span>
      <span class="collect">{{product.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      product: {
        type: Object,
        default() {
          return []
        }
      }
    },
    computed: {
      showImage() {
        return this.product.image || this.product.show.img
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('ItemImageLoad')
        // 判断页面是否需要发送这个方法
        // 第一种方式；通过路由控制
        // if (this.$route.path.indexOf('/home')) {
        //   this.$bus.$emit('ItemImageLoad')
        // }else if (this.$route.path.indexOf('/detail')) {
        //   this.$bus.$emit('ItemImageLoad')
        // }
        // 第二种 混入
      },
      itemClick() {
        this.$router.push('/detail/' + this.product.iid)
        // this.$router.push({
        //   path: '/detail',
        //   query: {
        //     id:this.goodsItem.iid
        //   }
        // })
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/image/common/collect.svg") 0 0/14px 14px;
  }
</style>
