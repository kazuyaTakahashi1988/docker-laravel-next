import axios from 'axios'
import React,{ ChangeEvent, useState, useContext } from 'react'
import { useRouter } from 'next/router';
import { Props } from "../lib/props"
import Layout from "../components/layout"
import { AuthContext } from '../lib/AuthContext'

type registerParams = {
    name: string
    email: string
    password: string
    passwordConform: string
}

export const Register = ({ posts }: Props) => {
    const auth = useContext(AuthContext);
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
        if ( password ==  passwordConform){
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
                            auth?.setUserAuth(response.data);
                            router.push('/dashboard');
                        })
                })
        } else {
            alert('パスワード確認が違います')
        }
    }

    return (
        <Layout
            /* -------------------------------------------------------
            ▽ 固有 meta ▽
            ---------------------------------------------------------- */
            pageTtl="アカウント作成"
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
                        <label className="col-md-4 col-form-label text-md-right">名前</label>
                        <div className="col-md-6">
                            <input id="name" className="form-control" type="text" onChange={changeName} />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <label className="col-md-4 col-form-label text-md-right">メールアドレス</label>
                        <div className="col-md-6">
                            <input id="email" className="form-control" type="email" onChange={changeEmail} />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <label className="col-md-4 col-form-label text-md-right">パスワード</label>
                        <div className="col-md-6">
                            <input id="pass" className="form-control" type="password" onChange={changePassword} />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <label className="col-md-4 col-form-label text-md-right">パスワード確認</label>
                        <div className="col-md-6">
                            <input id="passconform" className="form-control" type="password" onChange={changePasswordConform} />
                        </div>
                    </div>
                    <div className="form-group row text-left">
                        <div className="col-md-8 offset-md-4">
                            <button type="submit" className="px-5 btn btn-danger" onClick={handleClick}>作成</button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default Register;