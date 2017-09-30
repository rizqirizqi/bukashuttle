

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    data: {
        originInstruction: 'Silakan pilih lokasi penjemputan:',
        destinationInstruction: 'Silakan pilih lokasi tujuan:'
    },
    methods: {
        selectOrigin: () => {
            $('.js-instruction').text(this.destinationInstruction)
        },
        selectDestination: () => {

        }
    },
    mounted: () => {
        $(".button-collapse").sideNav();
        $('.js-instruction').text(this.originInstruction)
    }
});
