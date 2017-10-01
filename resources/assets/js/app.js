

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app',
    data: {
        formStep: 0,
        instruction: '',
        bookingData: {
            origin: null,
            destination: null,
            departure: null
        },
        originElem: null,
        destinationElem: null
    },
    methods: {
        selectLocation ($thisEl) {
            if (this.formStep == 0) {
                this.selectOrigin($thisEl)
            } else if (this.formStep == 1) {
                this.selectDestination($thisEl)
            } else {
                return null
            }
        },
        selectOrigin ($thisEl) {
            this.originElem = $thisEl
            this.bookingData.origin = $(this.originElem).data('locationId')
            this.instruction = 'Silakan pilih lokasi tujuan:'
            this.formStep = 1
            $(this.originElem).css({
                filter: 'gray',
                filter: 'grayscale(100%)'
            })
        },
        selectDestination ($thisEl) {
            this.destinationElem = $thisEl
            this.bookingData.destination = $(this.destinationElem).data('locationId')
            this.instruction = 'Silakan pilih jam keberangkatan:'
            this.formStep = 2
            $(this.destinationElem).css({
                filter: 'gray',
                filter: 'grayscale(100%)'
            })
        }
    },
    mounted () {
        $(".button-collapse").sideNav();
        this.instruction = 'Silakan pilih lokasi penjemputan:'
    }
});
