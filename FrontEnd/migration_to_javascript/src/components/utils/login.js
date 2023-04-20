import axios from 'axios';



async function postLogin(URL, loginData) {

        const { data } = await axios.post(URL, loginData, {
                        headers : {'Content-Type': 'application/json'}, 
                        withCredentials: true
                    })
        console.log(data)
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`
        return data
}

export { postLogin }