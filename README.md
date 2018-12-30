# vue-lite-spinner

> a simple loading components for vue

[Online Demo](https://virskor.github.io/vue-loading/)
[Github](https://github.com/virskor/vue-loading.git)

<img width="50px" src="https://image.flaticon.com/icons/png/512/189/189768.png">

## Installation

``` bash
# install by NPM
npm install vue-lite-spinner

# or Yarn
yarn add vue-lite-spinner
```
## Notice
make sure your browser support css3

## Usage

``` js
    import {loading} from 'vue-lite-spinner';
    export default {
        ...,
        components: {
            loading
        }
    }
```

``` html
    <loading :position="position" :size="size" :text="text" :show="show"></loading>
```

## Parameter

<p><b>background[String]</b> Background can be a string like #000000 or rgba(0, 0, 0, .32)</p>
<p><b>position[String]</b> You can select a position to show your loader below</p>
<p><b>text[String]</b> Text strings that you want to tell your user</p>
<p><b>show[Boolean]</b> Show it or not</p>
<p><b>index[Number]</b> Like css stylesheet property z-index, 9999 by default</p>
<p><b>size[Number]</b> 2-5 are recommended</p>