import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'tw-elements'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import {VueCsvImportPlugin} from "vue-csv-import";
import JsonCSV from 'vue-json-csv'
import VueQrcode from '@chenfengyuan/vue-qrcode';

const options = {
    // You can set your default options here
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    filterBeforeCreate: (toast, toasts) => {
      if (toasts.filter(
        t => t.type === toast.type).length !== 0) {
        // Returning false discards the toast
        return false;
      }
      // You can modify the toast if you want
      return toast;
    }
};

const app = createApp(App)

app.use(store)
app.use(router)
app.use(Toast, options)
app.use(VueCsvImportPlugin)
app.component(VueQrcode.name, VueQrcode);
app.component('downloadCsv', JsonCSV);
app.mount('#app');





