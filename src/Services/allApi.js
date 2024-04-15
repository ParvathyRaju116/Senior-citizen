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

//admi
//get Service Providers List

export const getServiceProvidersApi=async()=>{
    return await commonApi('GET',`${baseurl}/allServiceProviders/list`,"","")
}
//get approved service providers
export const getApprovedServiceProvidersApi=async()=>{
    return await commonApi('GET',`${baseurl}/approvedServiceProviders/list`,"","")
}
//get All Users
export const getUsersApi=async()=>{
    return await commonApi('GET',`${baseurl}/users/list`,"","")
}

export const getAllBlogs = async()=>{
    return await commonApi(`GET`,`${baseurl}/blogs/all-blogs`,"","")
}

export const getOneBlog = async(id)=>{
    return await commonApi(`GET`,`${baseurl}/blogs/view-blog/${id}`,"","")
}

//admin Add blogs

export const addBlogsApi = async(reqBody,header)=>{
    return await commonApi(`POST`,`${baseurl}/blogs/add-blogs`,reqBody,header)
}

//get all webinar
export const getAllwebinarApi = async () => {
    return await commonApi(`GET`, `${baseurl}/webinar/all-webinar`, "", "")
}

//get all blogs
export const getAllBlogApi = async()=>{
    return await commonApi(`GET`,`${baseurl}/blogs/all-blogs`,"","")
}
export const addWebApi = async(reqBody,header)=>{
    return await commonApi(`POST`,`${baseurl}/webinar/add-webinar`,reqBody,header)
}
export const getAllWebsApi = async()=>{
    return await commonApi(`GET`,`${baseurl}/webinar/all-webinar`,"","")
}

//login service provider
export const serviceproviderloginApi = async(service)=>{
    return await commonApi('POST',`${baseurl}/serviceProvider/login`,service,"")
}

//get attendance

export const getAllAttendanceApi = async () => {
    return await commonApi(`GET`, `${baseurl}/service-providers/attenedence`, "", "")
}