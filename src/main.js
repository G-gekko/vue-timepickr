import Vue from 'vue'
import Timepicker from './Timepicker.vue';

new Vue({
    el: '#app',
    template: '<div><timepicker v-model="time"></timepicker></div>',
    components: { Timepicker },
    data() {
        return {
            time: "21:00"
        }
    }
});

