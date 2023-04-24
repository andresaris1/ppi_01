import axios from 'axios';



async function postLogin(URL, loginData) {

        const { data } = await axios.post(URL, loginData, {
                        headers : {'Content-Type': 'application/json'}, 
                        withCredentials: true
                    })
        return data
}

export { postLogin }