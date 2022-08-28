import axios from 'axios'
import { ChangeEvent, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Props } from "../lib/props"
import Layout from "../components/layout"
import { AuthContext } from '../lib/AuthContext'

type LoginParams = {
  email: string
  password: string
}

export const Login = ({ posts }: Props) => {
  const auth = useContext(AuthContext);
  const router = useRouter();
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
            // console.log(response.data)
            auth?.setUserAuth(response.data);
            localStorage.setItem('authJudge', true);
            const authJudge = localStorage.getItem("authJudge");
            console.log(authJudge);
            router.push('/');
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
        ▽ ログイン・フォーム  ▽
      ---------------------------------------------------------- */}

      <h2 className="sttl font-semibold text-xl mb-3">ログイン・フォーム</h2>
      <div className="text-left">
        <div className="card-body">
          <div className="form-group row">
            <label for="email" className="col-md-4 col-form-label text-md-right">メールアドレス</label>
            <div className="col-md-6">
              <input id="email" className="form-control" type="email" onChange={changeEmail} />
            </div>
          </div>
          <div className="form-group row mb-4">
            <label for="pass" className="col-md-4 col-form-label text-md-right">パスワード</label>
            <div className="col-md-6">
              <input id="pass" className="form-control" type="password" onChange={changePassword} />
            </div>
          </div>
          <div class="form-group row text-left">
            <div class="col-md-8 offset-md-4">
              <button type="submit" className="btn btn-danger" onClick={handleClick}>ログイン</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn btn-secondary" onClick={handleUserClick}>ユーザー情報を取得</button>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Login;