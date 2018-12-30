<template>
  <div id="app">
    <div class="demo">
      <div>
        <h1>Simple loading component for Vue.js</h1>
        <p>Make a good user experience by add a loading component</p>
        <div>
          <p><b>background[String]</b> Background can be a string like #000000 or rgba(0, 0, 0, .32)</p>
          <p><b>position[String]</b> You can select a position to show your loader below</p>
          <p><b>text[String]</b> Text strings that you want to tell your user</p>
          <p><b>show[Boolean]</b> Show it or not</p>
          <p><b>index[Number]</b> Like css stylesheet property z-index, 9999 by default</p>
          <p><b>size[Number]</b> 2-5 are recommended</p>
          <p><b>Float[String]</b> Floating string are left right center,change the position further by adding theses</p>
        </div>
      </div>
      <button @click="showLoading" class="btn btn-lg btn-primary">Open Loading</button>
      <loading :position="position" :size="size" :text="text" :show="show"></loading>
      <div class="options">
        <p>select a position to show</p>
        <select class="form-control"  v-model="position">
          <option v-for="(item, index) in positions" :key="index" :value="item">{{item}}</option>
        </select>
      </div>
      <div class="options">
        <p>Alert script to your customer:</p>
        <input class="form-control"  v-model="text"/>
      </div>
      <div class="options">
        <p>Custom your size(2-5 are recommended):</p>
        <input class="form-control"  v-model="size"/>
      </div>
    </div>
  </div>
</template>

<script>
import {loading} from '@/components/';

export default {
  name: 'Demo',
  data(){
    return{
      show: false,
      position: 'center',
      text: '正在载入数据...',
      size: 4,
      positions: [
        'top',
        'bottom',
        'center'
      ]
    }
  },
  methods:{
    showLoading(){
      this.show = true;
      setTimeout(_ => {
        this.show = false;
      }, 3000);
    }
  },
  components: {
    loading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 2rem;
}
#app .demo .options{
  border: 1px solid #dedede;
  margin-top: 1rem;
  padding: 2rem;
}
#app .demo .options select, input{
  font-size: 1rem;
  width: 10rem;
  height: 2rem;
  border-radius: 0;
}
</style>
