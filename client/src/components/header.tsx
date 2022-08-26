import Link from "next/link";
import axios from 'axios'
import { useRouter } from 'next/router';

type Props = {
  pageType?: string;
};


export const Header = ({ pageType }: Props) => {
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
              <li>
                <a onClick={logout}>ログアウト</a>
              </li>
              <li className={pageType == `login` ? `current` : ``}>
                <Link href="/login">ログイン</Link>
              </li>
              <li className={pageType == `register` ? `current` : ``}>
                <Link href="/register">アカウント作成</Link>
              </li>
            </ul>
          </nav>
        </div>



      </div>
    </header>
  );
};

export default Header;
