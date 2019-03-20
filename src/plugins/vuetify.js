import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.indigo.base,
    secondary: colors.cyan.base,
    accent: colors.purple.base,
    error: colors.pink.base,
    warning: colors.red.base,
    info: colors.teal.base,
    success: colors.green.base,
  },
});
