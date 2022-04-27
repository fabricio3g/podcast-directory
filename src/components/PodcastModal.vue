<script  >
export default {
    props: {
       data: [Array]
    },
    data() {
       return {
           info: ''
        }
    },
    mounted(){
        this.info = this.data  
    },
    methods:{
        closeModal(){
            this.info = ''  
        }
        
    },
    watch: { 
      	data: function(newVal, oldVal) { 
          this.info = newVal 
        }
      }
}


</script>
<template>
    <div v-if="this.info != ''"
        id="popup-modal"
        tabindex="-1"
        class="position-absolulte bg-black bg-gray-300 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
    >
        <div class="p-5  ">
            
            <div class="w-56 min-w-full  p-3  mt-5 bg-white rounded-lg shadow-lg border w-1/2 max-w-2xl">
                
                <div @click="closeModal()" class="flex absolute justify-end p-2 z-50">
                    <button
                        type="button"
                        class="text-gray-400 bg-white border hover:border-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="popup-modal"
                    >
                        <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div class="z-10 -translate-y-2/2 transform">
                    <img
                        :src="data.image"
                       
                        class="border border-3 mx-auto rounded-lg h-48"
                    />
                </div>
                <div class="text-center">
                    <h3 class="text-center text-4xl font-bold">{{data.title}}</h3>
                    <span class="text-gray-700 text-sm ">{{data.author}}</span>
                </div>
                <ul class="mt-5 mb-5 flex flex-col justify-center text-center text-2xl">
                    <li class="flex flex-col">
                        <span>Description: </span>
                        <span v-html='data.description' class="text-gray-700 text-sm  px-2"></span> 
                    </li>
                    <span class="mt-2 mb-1">Categories:</span>
                    <li class=" mx-6 flex flex-row justify-center flex-wrap">
                        
                        <span v-for="d in data.categories" class="p-2 my-1 bg-sky-100 mx-2 rounded text-muted text-xs">{{d}}</span>
                    </li>
                </ul>
                <div class="text-center">
                    <a :href="data.url" target="_blink">
                    <button class="rounded-xl bg-black px-24 py-2 text-white">View</button>
                     </a>
                </div>
            </div>
        </div>
    </div>
</template>