# vue-static-data-plugin

## Intro
Use data that is not reactive in vue.

## Usage
### Vue Defined
```js
import Vue from 'vue';
import staticDataPlugin from 'vue-static-data-plugin';

Vue.use(staticDataPlugin);
```

### SFC
```js
<template>
  <component :data="test"></component>
</template>

<script>
  export default {
    staticData: {
      test: 'static data'
    }
  }
</script>
```