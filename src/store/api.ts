import {baseUrl} from "../consts";

export const get = (path: string) => {
return fetch(`${baseUrl}/${path}`)
}