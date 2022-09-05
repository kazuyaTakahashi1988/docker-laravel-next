import axios from 'axios'
import useSWR from 'swr'
import Link from "next/link";
import Layout from "../components/layout";
import SwiperComp from "../components/swiper";


//fetcher関数の作成
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then(res => res.data)

export const Home = () => {
  // SPA認証済みではないとアクセスできないAPI
  const handleUserClick = () => {
    axios.get(`${process.env.API_HOST}/api/home`, { withCredentials: true }).then((response: { data: any }) => {
      console.log(response.data)
    })
  }

  //fetcher関数の作成
  const { data, error } = useSWR(`${process.env.API_HOST}/api/home`, fetcher)
  //エラー
  if (error) return <Layout>failed to load</Layout>
  //ロード中
  if (!data) return <Layout>loading...</Layout>
  //成功
  const posts = data;

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
      <h2 className="sttl font-semibold text-xl">new Q&A</h2>
      <ul className="postList">
        {posts.data.map((post: any, index: number) => (
          <li key={`${index}`}>
            <Link href={`/posts/detail/${post.id}`}>
              <a>
                <div className="thum">
                  <img src="/frame.png" alt="フレーム" />
                  <img
                    src={
                      post.image
                        ? post.image
                        : "/dummy.png"
                    }
                    alt={post.title}
                    className="thum-img"
                  />
                </div>
                {post.created_at ? post.created_at.slice(0, 10) : "00-00-00"}
                <br />
                <strong>{post.title}</strong>
                {post.content
                  .replace(/(<([^>]+)>)/gi, "")
                  .slice(0, 50)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <button type="submit" className="btn btn-secondary" onClick={handleUserClick}>記事情報を取得</button>

    </Layout>
  );
};

export default Home;