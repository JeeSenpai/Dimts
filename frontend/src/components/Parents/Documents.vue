<template>
    <div class="checkFade animated">
        <div class="text-left">
            <div class="text-sm font-semibold text-center text-gray-500 border-gray-200">
                <ul class="flex flex-wrap mb-2">
                    <li v-for="tab in tabs" :key="tab.id">
                        <button @click="changeTab(tab)" :class="tab.id == comply ? 'text-[#BF40BF] border-[#BF40BF] ': 'hover:text-gray-700 hover:border-gray-400'" class="inline-block p-4 rounded-t-lg border-b-4">{{ tab.description }}</button>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="tab.id == 1">
            <SendDocuments/>
        </div>
        <div v-if="tab.id == 2">
            <RecievedDocuments/>
        </div>
    </div>
</template>

<script>
import SendDocuments from '../Utils/SendDocuments.vue'
import RecievedDocuments from '../Utils/RecievedDocuments.vue'
export default {
    components: {
        SendDocuments,
        RecievedDocuments
    },
    data(){
        return{
            comply: 1,
            tabs: [
                { id: 1, description: 'Send Documents'},
                { id: 2, description: 'Recieved Documents' },
            ],
            tab: { id: 1, description: 'Send Documents' }
        }
    },
    methods: {
        changeTab(data){
            this.tab = data;
            this.comply = data.id
        },
    },
    mounted(){
        if(this.$route.query.notif_type == 2){
            this.changeTab({ id: 1, description: 'Send Documents' })
        }
        else if (this.$route.query.notif_type == 1){
            this.changeTab({ id: 2, description: 'Recieved Documents' })
        }
    }
}

</script>