import {Api} from './Api'

export default{
    show(){
        return Api.get('/recentFeeds')
  
    },
    searchByTerm(name){

        return Api.post('/searchByTerm', { name })
  
    }
}