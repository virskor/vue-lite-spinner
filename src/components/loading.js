/**
 * @author virskor@gmail.com
 * @license MIT
 */

export default {
    props: {
        background: String,
        position: String,
        text: String,
        show: Boolean,
        index: Number,
        size: Number,
        float: String
    },
    data(){
        return{
            showLoading: false
        }
    },
    computed: {
        getBackgroundColor(){
            return this.background ? this.background : 'rgba(0, 0, 0, .75)'
        },
        getIndex(){
            return this.index ? this.index : 9999;
        },
        display(){
            return this.showLoading ? 'block' : 'none';
        },
    },
    render(createElement){
        return createElement(
            'div',
            {
                class: ['vue-loading'],
                style: {
                    display: this.display,
                    background:  this.getBackgroundColor,
                    'z-index': this.getIndex,
                }
            },
            /** Add loading component */
            [
                createElement(
                    'div',
                    {
                        class: `position-${this.position ? this.position : 'center'}`
                    },
                    [
                        createElement(
                            'div',
                            {
                                class: ['loader'],
                                style: {
                                    height: `${this.size ? this.size : 4}rem`,
                                    width: `${this.size ? this.size : 4}rem`,
                                }
                            }
                        ),
                        /**spinner */
                        this.text ? createElement(
                            'div',
                            {
                                class: ['text'],
                                style: {
                                    'padding-top': `${this.size ? this.size /2 : 4/2 }rem`,
                                    'padding-left': `${this.size ? this.size /2 : 4/2 }rem`,
                                }
                            },
                            this.text
                        ): null
                    ]
                ),
                createElement('div', {class: ['slot']}, this.$slots.default)
            ]
        )
    },
    watch:{
        show: {
            handler(bool){
                this.showLoading = Boolean(bool);
            },
            deep: true
        }
    }
}