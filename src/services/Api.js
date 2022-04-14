import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://backend-podcast-directory.herokuapp.com'
}) 


export {
    Api
}