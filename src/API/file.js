import * as axios from 'axios';
const baseURL = 'https://camp-courses.api.kreosoft.space/swagger/index.html';

const instance = axios.create({
    baseURL: baseURL
})

function getProfile(){
    return instance.get('Profile')
        .then(response => {
            if(response.status === 200) {
                return response.data;
            }
            else if(response.status === 401){
                console.log("Unauthorized");
            }
            else{
                console.log("InternalServerError")
            }
        })
        .catch(error => {
            console.log(error.response.data.error)
        })
}

export const profileApi = {
    getProfile: getProfile()
};