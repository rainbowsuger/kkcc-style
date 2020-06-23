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

<script>
import Vue from 'vue';
import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
Viewer.setDefaults({
  options: {
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
  }
});

export default {
    name: 'ImgViewer',
    props: {
        images: {
            type: Array,
            default: _ => []
        },
        num: {
            type: Number,
            default: 1
        },
        width: {
            type: Number,
            default: 48
        },
        height: {
            type: Number,
            default: 48
        },
    },
    data() {
        return {
            $viewer: null
        }
    },
    methods: {
        inited (viewer) {
            this.$viewer = viewer;
        },
        preview () {
            this.$viewer.show();
        }
    }
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
