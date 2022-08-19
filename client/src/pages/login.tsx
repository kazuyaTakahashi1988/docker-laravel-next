import { Props } from "../lib/props";
import Layout from "../components/layout";

export const Login = ({ posts }: Props) => {
  return (
    <Layout
      /* -------------------------------------------------------
        ▽ 固有 meta ▽
      ---------------------------------------------------------- */
      pageTtl="ログインのタイトル"
      // pageDes=""
      // pageUrl=""
      // pageKey=""
      // pageThum=""
      pageType="home"
    >

      {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl">Login </h2>

    </Layout>
  );
};

// export const getStaticProps = async () => {

//   /* -------------------------------------------------------
//     ▽ 記事情報の取得  ▽
//   ---------------------------------------------------------- */
// };

export default Login;