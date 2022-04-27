
<script lang="ts">
import PodcastModal from '../components/PodcastModal.vue'




export default {
    name: 'Card',
    data(){
        return {
            feeds: '',
            dataModal: ''
        }
    },
    props: {
       data: [Object]
    },
    components:{
        PodcastModal
    },
    async mounted(){
        this.feeds = this.data 

    },
    methods:{
        showModal(data){
            this.dataModal = data
        } 

    }
}


</script>


<template>

 <div  class="flex flex-wrap justify-center flex-row  w-5/6 mx-auto">
        <PodcastModal v-if="dataModal != ''" :data='dataModal'/>
        <div  v-for="(d, i) in data" v-bind:key='i' class="w-58 rounded m-2.5 p-2.5 border shadow-lg">
            
            <img
                @click='showModal(d)'
                class="object-cover h-48 w-48 rounded"
                :src="(d.image == '' ? 'https://www.mylittleadventure.com/images/default/default-img.png' : d.image)"
                :alt='i'
            />
           
            <div class="px-2 py-2 max-w-fit">
                <a :href="d.link" target="_blink">
                <div class="font-bold cursor-pointer text-xl w-full mb-2 " >
                   <i class="fas fa-external-link-alt"></i> {{d.title}} 
                    
                </div>
                 </a>
                <span class="text-slate-600 my-3 ">
                     {{d.author}} 
                </span>
            
                    <small class="">
                        
                    </small> 
            </div>

        </div>
      
    </div>
</template>
