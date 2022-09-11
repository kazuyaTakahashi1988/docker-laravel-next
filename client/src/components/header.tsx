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
                  <li className={pageType == `likes` ? `current` : ``}>
                    <Link href="/posts/likes">お気に入り 一覧</Link>
                  </li>
                  <li className={pageType == `create` ? `current` : ``}>
                    <Link href="/posts/create">投稿する</Link>
                  </li>
                  <li className={pageType == `dashboard` ? `current` : ``}>
                    <Link href="/dashboard">ダッシュボード</Link>
                  </li>
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
