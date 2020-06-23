import ImgViewer from './components/index.vue';
import * as pkg from './package.json';
const version = pkg.version;

const install = function(Vue) {
  Vue.component(ImgViewer.name, ImgViewer);
};

export {
  version,
  install,
  ImgViewer
};

export default ImgViewer;
