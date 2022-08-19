import fetch from "node-fetch";
import { Props } from "../../../lib/props";
import Layout from "../../../components/layout";
import Articles from "../../../components/articles";

export const Page = ({ posts, total, id }: Props) => {

  return (
    <Layout
      /* -------------------------------------------------------
        ▽ 固有 meta ▽
      ---------------------------------------------------------- */
      pageTtl={`Page-${id} | Blog`}
      pageDes={`Page-${id}のディスクリプション`}
      pageUrl={`blog/page/${id}`}
      // pageKey=""
      // pageThum=""
      pageType="blog"
    >

      {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl">new Blog - {id}</h2>
      <Articles
        posts={posts}
        slug={`blog`}
        total={total}
        currentNum={Number(id)}
        postDetail={undefined}
        id={""}
      />

    </Layout>
  );
};

export const getStaticPaths = async () => {

  /* -------------------------------------------------------
    ▽ SSG用のパス指定  ▽
  ---------------------------------------------------------- */
  const now = new Date();
  const clear = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
  const count = 6; // 記事取得数
  const res = await fetch(
    `${process.env.MICROCMS_HOST}/api/v1/blogs?limit=${count}&cache=${clear}`, {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
    }
  });
  const json = await res.json();
  const total = parseInt(json.totalCount / count) + 1;
  const pageCount = Array.from(new Array(Number(total))).map((v, i) => i + 1);
  const paths = pageCount.map((int) => `/blog/page/${int}`);
  return { paths, fallback: false };

};

export const getStaticProps = async (context: { params: any }) => {

  /* -------------------------------------------------------
    ▽ 記事情報の取得  ▽
  ---------------------------------------------------------- */
  const now = new Date();
  const clear = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
  const { id } = context.params;
  const count = 6; // 記事取得数
  const offset = id * count - count; // 記事取得数
  const res = await fetch(
    `${process.env.MICROCMS_HOST}/api/v1/blogs?limit=${count}&offset=${offset}&cache=${clear}`, {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
    }
  });
  const json = await res.json();
  return {
    props: {
      posts: json.contents,
      total: json.totalCount / count,
      id: id,
    },
  };

};

export default Page;
