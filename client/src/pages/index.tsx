import axios from 'axios'
import { Props } from "../lib/props";
import Layout from "../components/layout";
import SwiperComp from "../components/swiper";

export const Home = ({ posts }: Props) => {
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
      pageTtl="Homeのタイトル"
      // pageDes=""
      // pageUrl=""
      // pageKey=""
      // pageThum=""
      pageType="home"
    >

      {/* -------------------------------------------------------
        ▽ スワイパースライダー ▽
      ---------------------------------------------------------- */}
      <SwiperComp />

      {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl font-semibold text-xl">new Q&A</h2><button type="submit" className="btn btn-secondary" onClick={handleUserClick}>ユーザー情報を取得</button>

    </Layout>
  );
};

export default Home;