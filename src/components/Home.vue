<script  lang="">
import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import Footer from '../components/Footer.vue'


import FeedsSerivces from '../services/FeedsServices.js'



export default {
  name: 'Home',
  data() {
    return {
      feeds: null,
      searchValue: '',
      showEnterMesseg: false,
      searchResaults: null,
    }
  },
  components: {
    Navbar,
    Card,
    Footer
  },
  methods: {
    async serchInput() {
      let result = (await FeedsSerivces.searchByTerm(this.searchValue)).data.feeds
      this.searchResaults = result
      this.searchValue = ''
      console.log(this.searchResaults)
    }
  },
  async mounted() {
    this.feeds = (await FeedsSerivces.show()).data.feeds

  },
  watch: {
    'searchValue': function (value) {

      if ((value).toString().trim() !== '') {

        this.showEnterMesseg = true
      }
      if ((value).toString().trim() === '') {

        this.showEnterMesseg = false
      }
    }
  }
}


</script>


<template>
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
    <div
      v-if="showEnterMesseg"
      class="flex justify-center mx-auto py-1  border bg-green-500 text-white border"
    >Press enter to search</div>
  </div>
  <div  v-if="searchResaults"  class="mt-5 text-center">
    <h2>Search results</h2>
    <Card :data="searchResaults" />

  </div>
  
  <div class="mt-5 text-center">
    <h2>Trending</h2>
   
      <img v-if="!feeds" class="mx-auto" src="https://c.tenor.com/Tu0MCmJ4TJUAAAAC/load-loading.gif" alt="loading">
    <Card v-if="feeds"  :data="feeds" />
  </div>
</template>