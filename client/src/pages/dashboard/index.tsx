import axios from 'axios'
import useSWR from 'swr'
import Link from "next/link";
import { useRouter } from 'next/router'
import Layout from "../../components/layout";
import { AuthContext } from '../../lib/AuthContext'
import { ChangeEvent, useContext, useState } from 'react';


type profileParams = {
    name: string
    email: string
}
type passwordParams = {
    password: string
    passwordNew: string
    passwordConform: string
}

//fetcher関数の作成
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then(res => res.data)

export const Home = () => {
    const auth = useContext(AuthContext);
    const router = useRouter();

    /* ▽ ログアウト処理 ▽ */
    const loginParams = '';
    const logout = () => {
        axios
            // CSRF保護の初期化
            .get(`${process.env.API_HOST}/sanctum/csrf-cookie`, { withCredentials: true })
            .then(() => {
                // ログアウト処理
                axios
                    .post(
                        `${process.env.API_HOST}/logout`,
                        loginParams,
                        { withCredentials: true }
                    )
                    .then((response: { data: any }) => {
                        auth?.setUserAuth(false);
                        router.push('/');
                    })
            })
    }

    /* ▽ プロフィール編集処理 ▽ */
    const [name, setName] = useState(auth?.userAuth.name)
    const [email, setEmail] = useState(auth?.userAuth.email)
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleClickProfile = () => {
        const profileParams: profileParams = { name, email }

        // プロフィール編集処理
        axios
            .post(
                `${process.env.API_HOST}/api/dashboard/profile`,
                profileParams,
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                    withCredentials: true
                }
            )
            .then((response: { data: any }) => {
                console.log(response.data)
                alert('プロフィールの編集に成功しました');
                // auth?.setUserAuth(response.data);
            })
    }

    /* ▽ パスワード編集処理 ▽ */
    const [password, setPassword] = useState('')
    const [passwordNew, setPasswordNew] = useState('')
    const [passwordConform, setPasswordConform] = useState('')
    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const changePasswordNew = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordNew(e.target.value)
    }
    const changePasswordConform = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConform(e.target.value)
    }
    const handleClickPassword = () => {
        const passwordParams: passwordParams = { password, passwordNew, passwordConform }
        if (passwordNew == passwordConform && passwordNew) {

            // パスワード編集処理
            axios
                .post(
                    `${process.env.API_HOST}/api/dashboard/password`,
                    passwordParams,
                    {
                        headers: {
                            'content-type': 'multipart/form-data',
                        },
                        withCredentials: true
                    }
                )
                .then((response: { data: any }) => {
                    console.log(response.data)
                    alert(response.data);
                    // auth?.setUserAuth(response.data);
                })
        } else {
            alert("パスワードの確認が間違っています")
        }
    }

    /* ▽ アカウント削除処理 ▽ */
    const deleteuser = () => {
        axios
            // CSRF保護の初期化
            .get(`${process.env.API_HOST}/sanctum/csrf-cookie`, { withCredentials: true })
            .then(() => {
                // ログアウト処理
                axios
                    .post(
                        `${process.env.API_HOST}/deleteuser`,
                        loginParams,
                        { withCredentials: true }
                    )
                    .then((response: { data: any }) => {
                        console.log(response.data)
                        auth?.setUserAuth(false);
                        router.push('/');
                    })
            })

    }

    //fetcher関数の作成
    const { data, error } = useSWR(`${process.env.API_HOST}/api/user`, fetcher)
    //エラー
    if (error) return <Layout>failed to load</Layout>
    //ロード中
    if (!data) return <Layout>loading...</Layout>
    //成功
    const user = data;

    return (
        <Layout
            /* -------------------------------------------------------
              ▽ 固有 meta ▽
            ---------------------------------------------------------- */
            pageTtl="ダッシュボードのタイトル"
            // pageDes=""
            // pageUrl=""
            // pageKey=""
            // pageThum=""
            pageType="dashboard"
        >
            <p className='mb-5 text-right'>
                <button type="submit" className="btn btn-secondary px-5" onClick={logout}>ログアウト</button>
            </p>

            {/* -------------------------------------------------------
                ▽ プロフィール編集  ▽
            ---------------------------------------------------------- */}
            <h2 className="sttl font-semibold text-xl">プロフィール編集</h2>
            <div className="text-left">
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-4 col-form-label text-md-right">名前</label>
                        <div className="col-md-6">
                            <input id="name" className="form-control" type="text" onChange={changeName} placeholder={`${user.name}`} />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <label className="col-md-4 col-form-label text-md-right">メールアドレス</label>
                        <div className="col-md-6">
                            <input id="email" className="form-control" type="email" onChange={changeEmail} placeholder={`${user.email}`} />
                        </div>
                    </div>
                    <div className="form-group row text-left">
                        <div className="col-md-8 offset-md-4">
                            <button type="submit" className="btn btn-danger px-5" onClick={handleClickProfile}>変更する</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------
                ▽ パスワード編集  ▽
            ---------------------------------------------------------- */}
            <h2 className="sttl font-semibold text-xl">パスワード編集</h2>
            <div className="text-left">
                <div className="card-body">
                    <div className="form-group row mb-4">
                        <label className="col-md-4 col-form-label text-md-right">現在のパスワード</label>
                        <div className="col-md-6">
                            <input id="pass" className="form-control" type="password" onChange={changePassword} />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <label className="col-md-4 col-form-label text-md-right">新規のパスワード</label>
                        <div className="col-md-6">
                            <input id="passnew" className="form-control" type="password" onChange={changePasswordNew} />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <label className="col-md-4 col-form-label text-md-right">新規のパスワード確認</label>
                        <div className="col-md-6">
                            <input id="passconform" className="form-control" type="password" onChange={changePasswordConform} />
                        </div>
                    </div>
                    <div className="form-group row text-left">
                        <div className="col-md-8 offset-md-4">
                            <button type="submit" className="btn btn-danger px-5" onClick={handleClickPassword}>変更する</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------
                ▽ アカウント削除  ▽
            ---------------------------------------------------------- */}
            <h2 className="sttl font-semibold text-xl">アカウントを削除しますか？</h2>
            <div className="text-right"><button type="submit" className="btn px-5 btn-secondary" onClick={deleteuser}>Delete</button></div>

        </Layout>
    );
};

export default Home;