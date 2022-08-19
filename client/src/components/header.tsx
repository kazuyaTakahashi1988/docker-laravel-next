import Link from "next/link";

type Props = {
  pageType?: string;
};

export const Header = ({ pageType }: Props) => {
  return (
    <header>
      <div className="head_bar clear">

        { /* -------------------------------------------------------
           ▽ ロゴ  ▽
        ---------------------------------------------------------- */ }
        <div className="logo_area">
          <a
            href="https://microcms.io/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/logo-microcms.svg" alt="microCMSロゴ" />
          </a>
        </div>

        { /* -------------------------------------------------------
           ▽ グローバルナビ ▽
        ---------------------------------------------------------- */ }
        <div className="right_clmn">
          <nav>
            <ul>
              <li className={pageType == `home` ? `current` : ``}>
                <Link href="/">Home</Link>
              </li>
              <li className={pageType == `blog` ? `current` : ``}>
                <Link href="/blog">Blog</Link>
              </li>
              <li className={pageType == `customblog` ? `current` : ``}>
                <Link href="/customblog">CustomBlog</Link>
              </li>
              <li className={pageType == `contact` ? `current` : ``}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
