import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router';
import { Props } from "../lib/props"
import Layout from "../components/layout"

type registerParams = {
    name: string
    email: string
    password: string
    passwordConform: string
}

export const Register = ({ posts }: Props) => {
    const router = useRouter();
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
                        // console.log(response.data)
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
            pageTtl="registerのタイトル"
            // pageDes=""
            // pageUrl=""
            // pageKey=""
            // pageThum=""
            pageType="register"
        >

            {/* -------------------------------------------------------
            ▽ アカウント作成・フォーム  ▽
        ---------------------------------------------------------- */}

            <h2 className="sttl font-semibold text-xl mb-3">アカウント作成・フォーム</h2>
            <div className="text-left">
                <div className="card-body">
                    <div className="form-group row">
                        <label for="name" className="col-md-4 col-form-label text-md-right">名前</label>
                        <div className="col-md-6">
                            <input id="name" className="form-control" type="text" onChange={changeName} />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
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
                    {/* <div className="form-group row mb-4">
                        <label for="passconform" className="col-md-4 col-form-label text-md-right">パスワード確認</label>
                        <div className="col-md-6">
                            <input id="passconform" className="form-control" type="password" onChange={changePasswordConform} />
                        </div>
                    </div> */}
                    <div class="form-group row text-left">
                        <div class="col-md-8 offset-md-4">
                            <button type="submit" className="btn btn-danger" onClick={handleClick}>作成</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="submit" className="btn btn-secondary" onClick={handleUserClick}>ユーザー情報を取得</button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Register;