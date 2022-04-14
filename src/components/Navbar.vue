
<template>
    <nav class="fixed top z-10 w-full bg-white border-gray-200 px-5 shadow sm:px-5 p-2 m-0 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
           
                <span
                    class="flex flex-column self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                >
                <img src="../assets/icon.svg" alt="icon" width="20" class="shadow lg mr-4"> <p>Podcast Directory</p>  
                </span>
  
            <div class="flex ">
                
                <button
                    data-collapse-toggle="mobile-menu-3"
                    type="button"
                    class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-3"
                    aria-expanded="false"
                    @click='activeNav'
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <svg
                        class="hidden w-6 h-6"
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
            <div
                :class="isActive ? 'hidden ': '' ||  'justify-between items-center w-full md:flex md:w-auto md:order-1' "
                id="mobile-menu-3"
            >
                <ul
                    class="flex    flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
                >
                    <li>
                        <a
                            href="#"
                            class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white"
                            aria-current="page"
                        >Home</a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >Bookmark <span class="bg-red-400 p-2 rounded  text-white"> ( 0 )  </span> </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class=" block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
interface DataInterface{
    isActive: Boolean
    windowWidth: Number
}
export default defineComponent({
   
    data():DataInterface{
        return{
            isActive: false,
            windowWidth: window.innerWidth
        }
    },
    methods:{
        activeNav(): void{
            this.isActive = !this.isActive
        }
    },
    mounted():void {
            window.onresize = () => {
                this.windowWidth = window.innerWidth
                console.log(this.windowWidth)
                if(this.windowWidth <= 768){
                    this.isActive = true
                
                }else{
                    this.isActive = false
                }
            }
    }
})


</script>

