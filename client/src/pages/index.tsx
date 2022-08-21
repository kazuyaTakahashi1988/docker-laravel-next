import fetch from "node-fetch";
import { Props } from "../lib/props";
import Layout from "../components/layout";
import SwiperComp from "../components/swiper";
import Articles from "../components/articles";

export const Home = ({ posts }: Props) => {
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
      <h2 className="sttl">new Blog</h2>

    </Layout>
  );
};

export default Home;