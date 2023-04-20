import axios from 'axios';



async function postSignup(URL, signudpData) {

    const { data } = await axios.post(URL, signudpData, {
                    headers : {
                        'Content-Type': 'application/json',
                    }})
    return data
}

export { postSignup }