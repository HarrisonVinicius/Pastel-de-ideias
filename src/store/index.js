import Vue from 'vue'
import Vuex from 'vuex'

import { UIUXModule } from './uiux.module'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {

    uiux: UIUXModule,

  }
})
