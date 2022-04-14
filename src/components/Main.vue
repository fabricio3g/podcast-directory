<script  lang="ts">
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'



import FeedsSerivces from '../services/FeedsServices.js'

export default {
  name: 'Menu',
  data(){
    return {
      feeds: [Object],
      searchValue: '',
      showEnterMesseg: false,
      showResults: false,
      searchResaults: ''
    }
  },
  components: {
    Navbar,
    Card
  },
  methods:{
    async serchInput(){
        let result = (await FeedsSerivces.searchByTerm(this.searchValue)).data.feeds
        this.searchResaults = result
        this.searchValue = ''
    }
  },
  async mounted(){
    this.feeds = (await FeedsSerivces.show()).data.feeds
    
  },
  watch: {
    'searchValue': function(value) {

      if((value).toString().trim() !== ''){

          this.showEnterMesseg = true
      }
      if((value).toString().trim() === ''){

        this.showEnterMesseg = false
      }
    }
  }
}


</script>

<template>
  <Navbar />
  <div class="pt-12 bg-gray-100 w-100 mb-2 border-b-2 border-white-500">
    <div class="relative mx-auto py-4 md:block w-80">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          class="w-5 h-5 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        v-on:keyup.enter="serchInput()"
        v-model="searchValue"
        id="email-adress-icon"
        class="hover:border-green-900 block p-2 pl-10 w-full text-gray-900 bg-white-50 rounded-lg border border-green-500 sm:text-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="Search..."
      />
     
    </div>
     <div v-if="showEnterMesseg" class="flex justify-center mb-3  mx-auto py-3 border bg-green-200">Press enter to search</div>
  </div>
    <div v-if="searchResaults != ''" class="mt-5 text-center">
  <h2>Search results</h2>
    <Card  :data="searchResaults" />
  </div>
  <div class="mt-5 text-center">
  <h2>Trending</h2>
  <Card v-if="feeds != ''" :data="feeds" />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
