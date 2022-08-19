// ログインページ

import axios from 'axios'
import { ChangeEvent, useState } from 'react'

type LoginParams = {
  email: string
  password: string
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleClick = () => {
    const loginParams: LoginParams = { email, password }
    axios
      // CSRF保護の初期化
      .get('http://localhost:8000/sanctum/csrf-cookie', {headers: { 'X-Requested-With': 'XMLHttpRequest' }}, { withCredentials: true })
      .then((response) => {
　　　　　// ログイン処理
        axios
          .post(
            'http://localhost:8000/login',
            loginParams,
            { withCredentials: true }
          )
          .then((response) => {
            console.log(response.data)
          })
      })
  }

  // SPA認証済みではないとアクセスできないAPI
  const handleUserClick = () => {
    axios.get('http://localhost:8000/api/user', { withCredentials: true }).then((response) => {
      console.log(response.data)
    })
  }

  return (
    <>
      <div>
        メールアドレス
        <input onChange={changeEmail} />
      </div>
      <div>
        パスワード
        <input onChange={changePassword} />
      </div>
      <div>
        <button onClick={handleClick}>ログイン</button>
      </div>
      <div>
        <button onClick={handleUserClick}>ユーザー情報を取得</button>
      </div>
    </>
  )
}