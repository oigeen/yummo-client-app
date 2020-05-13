import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#32A852',
                secondary: '#F7F0F0',
                background: '#F1FFFA'
            }
        }
    }
});
