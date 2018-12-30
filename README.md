# vue-loading

> a simple loading components for vue

[Online Demo](https://virskor.github.io/vue-loading/)
[Github](https://github.com/virskor/vue-loading.git)

## Installation

``` bash
# install by NPM
npm install vue-loading

# or Yarn
yarn add vue-loading
```

## Usage

``` js
    import {loading} from '@/components/';
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
<p><b>Float[String]</b> Floating string are left right center,change the position further by adding theses</p>