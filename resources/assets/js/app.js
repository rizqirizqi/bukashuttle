

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
        instruction: 'Pilih lokasi penjemputan:',
        departureSchedules: [
            {id: 0, time:'08:00', isFull:false},
            {id: 1, time:'09:00', isFull:false},
            {id: 2, time:'10:00', isFull:false},
            {id: 3, time:'11:00', isFull:true},
            {id: 4, time:'12:00', isFull:true},
            {id: 5, time:'13:00', isFull:false},
            {id: 6, time:'14:00', isFull:false},
            {id: 7, time:'15:00', isFull:true},
            {id: 8, time:'16:00', isFull:false},
            {id: 9, time:'17:00', isFull:true},
            {id: 10, time:'18:00', isFull:false},
            {id: 11, time:'19:00', isFull:false},
        ],
        bookingData: {
            origin: null,
            destination: null,
            departureTime: null
        },
        originElem: null,
        destinationElem: null
    },
    watch: {
        formStep() {
            if (this.formStep == 0) {
                this.instruction = 'Pilih lokasi penjemputan:'
            } else if (this.formStep == 1) {
                this.instruction = 'Pilih lokasi tujuan:'
            } else {
                this.instruction = 'Pilih lokasi tujuan:'
            }
        }
    },
    methods: {
        selectLocation($thisEl) {
            if (this.formStep == 0) {
                this.selectOrigin($thisEl)
            } else if (this.formStep == 1) {
                this.selectDestination($thisEl)
            } else {
                return null
            }
        },
        selectOrigin($thisEl) {
            this.originElem = $thisEl
            this.bookingData.origin = $(this.originElem).data('locationId')
            this.formStep = 1
            $(this.originElem).css({
                filter: 'gray',
                filter: 'grayscale(100%)'
            })
        },
        selectDestination($thisEl) {
            this.destinationElem = $thisEl
            this.bookingData.destination = $(this.destinationElem).data('locationId')
            this.formStep = 2
            $(this.destinationElem).css({
                filter: 'gray',
                filter: 'grayscale(100%)'
            })
            $('#departureTimeModal').modal('open')
        },
        selectDepartureTime(departureTimeId) {
            if (this.formStep == 2) {
                this.bookingData.departureTime = departureTimeId
                this.formStep = 3
                $('#departureTimeModal').modal('close')
                // call ajax here, get list of users which have booked the schedule
            }
        }
    },
    mounted () {
        const _this = this
        $(".button-collapse").sideNav();
        $('#departureTimeModal').modal({
            dismissible: false,
            complete() {
                if (_this.bookingData.departureTime == null) {
                    $(_this.destinationElem).css({
                        filter: 'none'
                    })
                    _this.formStep = 1
                    _this.bookingData.destination = null
                    _this.destinationElem = null
                }
            }
        });
    }
});
