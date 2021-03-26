import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
var token

AsyncStorage.getItem('token').then(userToken=>{
    axios.defaults.headers.common['x-access-token'] = userToken ? userToken : "";
}).catch(err =>{
    console.warn(err)
})

export default {
    // apiUrl:"http://redapp.paperbyte.co/api/staff/",
    // imgUrl:"http://redapp.paperbyte.co/api/admin/",
    imgUrl:"http://192.168.1.3:9002/api/admin/",
    apiUrl: "http://192.168.1.3:9002/api/staff/"
}

// import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// let headers = {}

// if (AsyncStorage.getItem('token')) {
//     headers['x-access-token'] = AsyncStorage.getItem('token')
// }

// const config = axios.create({
//     apiUrl: "http://192.168.1.2:5000/api/",
//     headers,
// })

// export default config 