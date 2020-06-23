<template>
  <div class="container">
    <div v-if="images&&images.length" class="block-viewer">
      <viewer :images="images" @inited="inited" class="block-viewer">
        <img
          v-for="(src,index) in images"
          :src="src"
          :key="index"
          :height="height"
          :width="width"
          :style="{display:index<num ? 'block': 'none' }"
        >
      </viewer>
      <span v-if="images.length>num" class="block-viewer_more" @click="preview">···</span>
    </div>
    <div v-else :style="{'line-height': `${height}px`}" class="block-viewer_noData">暂无图片</div>
  </div>

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
Viewer.setDefaults({
  'inline': true,
  'button': true,
  'navbar': true,
  'title': true,
  'toolbar': true,
  'tooltip': true,
  'movable': true,
  'zoomable': true,
  'rotatable': true,
  'scalable': true,
  'transition': true,
  'fullscreen': true,
  'keyboard': true,
  'url': 'data-source'
});

@Component({
  components: {
  }
})

export default class ImgViewer extends Vue {
  @Prop({type: Array, default: []}) private images!: any[];
  @Prop({type: Number, default: 1}) private num!: number;
  @Prop({type: Number, default: 48}) private width!: number;
  @Prop({type: Number, default: 48}) private height!: number;
  private $viewer: any = null;
  private inited (viewer) {
    this.$viewer = viewer;
  }
  private preview () {
    this.$viewer.show();
  }
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
