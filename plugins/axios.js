export default function ({ $axios }) {
  // request interceptor
  $axios.interceptors.request.use(
    config => {
      // do something before request is sent
      return config
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  )
  
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  // response interceptor
  $axios.interceptors.response.use(
    response => {
      const res = response.data

      return res
    },
    error => {
      return Promise.reject(error)
    }
  )

  $axios.onError(error => {

  })
}
