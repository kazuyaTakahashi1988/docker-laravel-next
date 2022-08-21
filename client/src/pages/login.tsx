import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { Props } from "../lib/props"
import Layout from "../components/layout"

type LoginParams = {
  email: string
  password: string
}

export const Login = ({ posts }: Props) => {
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
      .get(`${process.env.API_HOST}/sanctum/csrf-cookie`, { withCredentials: true })
      .then(() => {
        // ログイン処理
        axios
          .post(
            `${process.env.API_HOST}/login`,
            loginParams,
            { withCredentials: true }
          )
          .then((response: { data: any }) => {
            console.log(response.data)
          })
      })
  }

  // SPA認証済みではないとアクセスできないAPI
  const handleUserClick = () => {
    axios.get(`${process.env.API_HOST}/api/user`, { withCredentials: true }).then((response: { data: any }) => {
      console.log(response.data)
    })
  }

  return (
    <Layout
      /* -------------------------------------------------------
        ▽ 固有 meta ▽
      ---------------------------------------------------------- */
      pageTtl="Loginのタイトル"
      // pageDes=""
      // pageUrl=""
      // pageKey=""
      // pageThum=""
      pageType="login"
    >

      {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}

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

    </Layout>
  );
};

export default Login;