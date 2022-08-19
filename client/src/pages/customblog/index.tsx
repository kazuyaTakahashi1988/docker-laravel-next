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
      pageTtl="Page-1 | CustomBlog"
      pageDes="Page-1のディスクリプション"
      pageUrl="customblog"
      // pageKey=""
      // pageThum=""
      pageType="customblog"
    >

      {/* -------------------------------------------------------
        ▽ 記事一覧  ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl">new CustomBlog - 1</h2>
      <Articles
        posts={posts}
        slug={`customblog`}
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
    `${process.env.MICROCMS_HOST}/api/v1/customblogs?limit=${count}&cache=${clear}`, {
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
