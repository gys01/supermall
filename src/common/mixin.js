import {debounce} from "./Utils";

export const itemListenerMixin = {
  data(){
    itemImgListener: null
  },
  mounted(){
    let refresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImgListener = () =>{
      refresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
  }
}
