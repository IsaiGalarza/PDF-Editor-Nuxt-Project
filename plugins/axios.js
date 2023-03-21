export default function ({ $axios, redirect }) {
//   $axios.onRequest((config) => {
//     const token = localStorage.getItem('auth._token.local')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//       return config
//     } else {
//       return config
//     }
//   })

  $axios.onError(async (error) => {
    const code = parseInt(error?.response?.status)
   
    if (code === 401) {
    //   redirect('/login')
    //   await this.logout()
    //   await this.$fire.auth.signOut()
    }
  })
}
