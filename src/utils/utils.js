import axios,{HttpStatusCode} from "axios";

export function isAxiosError(error){
    return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError(error){
    return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}