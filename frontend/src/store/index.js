import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import { EncryptStorage } from 'encrypt-storage';
export const encryptStorage = new EncryptStorage(toString(process.env.VUE_APP_USER_ID_SECRET), {
  storageType: 'localStorage',
  stateManagementUse: true
});

export default createStore({
  state: {
     user: null,
     serverUrl: null,
     semester: null,
     school_year: null,
     accessible: null,
  },
  getters: {
  },
  mutations: {
      UPDATE_USER(state, payload){
        state.user = payload
      },
      UPDATE_SERVERURL(state, payload){
        state.serverUrl = String(payload)
      },
      UPDATE_SEMESTER(state, payload){
        state.semester = payload
      },
      UPDATE_SCHOOLYEAR(state, payload){
        state.school_year = payload
      },
      UPDATE_ACCESS(state, payload){
        state.accessible = payload
      }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({ 
    storage: { 
      setItem: (key, state) => encryptStorage.setItem(key, state),
      getItem: (key) => encryptStorage.getItem(key),
      removeItem: (key) => encryptStorage.removeItem(key)
    }
  })],
})
