import Link from "next/link"
import { useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { AuthContext } from '../lib/AuthContext'

type Props = {
  pageType?: string;
};


export const Header = ({ pageType }: Props) => {
  const auth = useContext(AuthContext);
  const router = useRouter();
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

  return (
    <header>
      <div className="head_bar clear">

        { /* -------------------------------------------------------
           ▽ ロゴ  ▽
        ---------------------------------------------------------- */ }
        <div className="logo_area">
          <Link href="/">
            <img src="/logo-laravel.png" alt="Laravelロゴ" />
          </Link>
        </div>

        { /* -------------------------------------------------------
           ▽ グローバルナビ ▽
        ---------------------------------------------------------- */ }
        <div className="right_clmn">
          <nav>
            <ul>
              <li className={pageType == `posts` ? `current` : ``}>
                <Link href="/posts">Q&A 一覧</Link>
              </li>
              {auth?.userAuth ?
                <>
                  <li className={pageType == `like` ? `current` : ``}>
                    <Link href="/posts/like">お気に入り 一覧</Link>
                  </li>
                  <li className={pageType == `create` ? `current` : ``}>
                    <Link href="/posts/create">投稿する</Link>
                  </li>
                  <li><a onClick={logout}><small>{`${auth?.userAuth.name}`}：
                  ログアウト</small></a></li>
                </>
                :
                <>
                  <li className={pageType == `login` ? `current` : ``}>
                    <Link href="/login">ログイン</Link>
                  </li>
                  <li className={pageType == `register` ? `current` : ``}>
                    <Link href="/register">アカウント作成</Link>
                  </li>
                </>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
