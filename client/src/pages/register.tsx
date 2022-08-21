import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { Props } from "../lib/props"
import Layout from "../components/layout"

type registerParams = {
    name: string
    email: string
    password: string
    passwordConform: string
}

export const Register = ({ posts }: Props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConform, setPasswordConform] = useState('')

    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const changePasswordConform = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConform(e.target.value)
    }

    const handleClick = () => {
        const registerParams: registerParams = { name, email, password, passwordConform }
        axios
            // CSRF保護の初期化
            .get(`${process.env.API_HOST}/sanctum/csrf-cookie`, { withCredentials: true })
            .then(() => {
                // ログイン処理
                axios
                    .post(
                        `${process.env.API_HOST}/register`,
                        registerParams,
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
            pageTtl="registerのタイトル"
            // pageDes=""
            // pageUrl=""
            // pageKey=""
            // pageThum=""
            pageType="register"
        >

            {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}

            <div>
                名前
                <input onChange={changeName} />
            </div>
            <div>
                メールアドレス
                <input onChange={changeEmail} />
            </div>
            <div>
                パスワード
                <input onChange={changePassword} />
            </div>
            <div>
                パスワード確認
                <input onChange={changePasswordConform} />
            </div>
            <div>
                <button onClick={handleClick}>作成</button>
            </div>
            <div>
                <button onClick={handleUserClick}>ユーザー情報を取得</button>
            </div>

        </Layout>
    );
};

export default Register;