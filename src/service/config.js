import axios from 'axios'

export const  http = axios.create({
    baseURL: 'https://course-java-alexandredias.herokuapp.com/'
})