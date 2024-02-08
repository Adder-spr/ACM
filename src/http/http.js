// const BaseURL = "http://localhost:32275";
import axios from "axios";
axios.defaults.baseURL = "/acm";

//发送邮箱验证码
export function EmilCode() {

}

//发送短信验证码
export function PhoneCode() {

}

//发送Post请求
export function Post(url, params) {
  return new Promise((resolve, reject) => {
    axios({
        method: 'post',
        url: url,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((res) => {
        resolve(res)
    }).catch((err) => {
        reject(err)
    })
  })
}



