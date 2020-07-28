import { FETCH_POSTS, NEW_POST } from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then( response => dispatch({
        type: FETCH_POSTS,
        payload: response.data
    }))
    .catch(error=>console.log(error))
}

export const newPost = ({ title, body }) => dispatch => {
    axios.post('https://jsonplaceholder.typicode.com/posts',{title: title, body: body})
    .then(response => dispatch({
        type: NEW_POST,
        payload: response.data
    }))
} 