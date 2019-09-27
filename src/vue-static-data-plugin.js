function install(Vue) {
  Vue.mixin({
    beforeCreate() {
      const staticData = this.$options.staticData;
      if (staticData) {
        Object.assign(this, staticData);
      }
    }
  });
}

export default {
  install
};