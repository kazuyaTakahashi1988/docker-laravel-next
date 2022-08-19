import fetch from "node-fetch";
import { Props } from "../../lib/props";
import Layout from "../../components/layout";
import Articles from "../../components/articles";

export const Post = ({ posts, total }: Props) => {
  
  return (
    <Layout
      /* -------------------------------------------------------
        ▽ 固有 meta ▽
      ---------------------------------------------------------- */
      pageTtl="Page-1 | Blog"
      pageDes="Page-1のディスクリプション"
      pageUrl="blog"
      // pageKey=""
      // pageThum=""
      pageType="blog"
    >

      {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl">new Blog - 1</h2>
      <Articles
        posts={posts}
        slug={`blog`}
        total={total}
        currentNum={1}
        postDetail={undefined}
        id={""}
      />

    </Layout>
  );
};

export const getStaticProps = async () => {

  /* -------------------------------------------------------
    ▽ 記事情報の取得  ▽
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
  return {
    props: {
      posts: json.contents,
      total: json.totalCount / count,
    },
  };
  
};

export default Post;
