<template>
    <div class="checkFade animated">
        <div class="pl-2 pr-2 pt-2 pb-2">
            <div v-if="notifData.length == 0" class="bg-white shadow-lg rounded-lg w-full mb-3.5 p-2 text-sm font-semibold"> No Notifications</div>
            <div v-for="notif in notifData" :key="document" class="bg-white shadow-lg rounded-lg w-full">
                <div class="space-y-5">
                    <button @click="isClicked(notif)" :class="notif.isClicked == false ? 'bg-purple-300 rounded-lg': 'bg-slate-100 rounded-lg' " class="flex text-left p-4">
                    <div>
                        <p class="font-semibold text-sm">{{ notif.description }}</p>
                        <p class="mt-2 text-sm">{{ notif.case.case_no }} - {{ notif.case.case_title}}</p>
                        <p class="mt-4 text-xs">Click to mark as read</p>
                    </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            token: localStorage.getItem("dimts_token"),
            notifData: [],
            citizenId: this.$store.state.user.id,
        }
    },
    methods: {
        init(){
            axios.get(this.$store.state.serverUrl + '/citizen-notification/findNotifByCaseId/' + this.citizenId, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                if(res.data){
                    this.notifData = res.data
                }
            });
        },
        isClicked(data){
            axios.patch(this.$store.state.serverUrl + '/citizen-notification/updateIsClicked/' + data.id, {headers: {Authorization: `Bearer  ${this.token}`}}).then((res)=>{
                this.init()
            });
        }
    },
    mounted(){
        this.init()
    }
}
</script>

<style>

</style>