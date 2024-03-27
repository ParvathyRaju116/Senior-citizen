import baseurl from './baseurl'
import { commonApi } from './commonApi'

//user register
export const registerApi = async(user)=>{
    return await commonApi(`POST`,`${baseurl}/user/register`,user,"")
}

//user login
export const loginApi = async(user)=>{
    return await commonApi('POST',`${baseurl}/user/login`,user,"")
}

//profile edit
export const editApi = async (id, user) => {
    return await commonApi('PUT', `${baseurl}/editUser/${id}`, user);
}