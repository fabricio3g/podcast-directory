<script  lang="ts">
import Home from './Home.vue'


import FeedsSerivces from '../services/FeedsServices.js'








import { ref, computed } from 'vue'



const routes = {
  '/': Home,

}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})





</script>

<template>
<div class='flex flex-col min-h-screen'>
  <Navbar />
     <Home/>
  <Footer/>
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
