import Link from "next/link";
import fetch from "node-fetch";
import { Props } from "../../../lib/props";
import Layout from "../../../components/layout";

export const Detail = ({ postDetail, id }: Props) => {
  return (
    <Layout
      /* -------------------------------------------------------
        ▽ 固有 meta ▽
      ---------------------------------------------------------- */
      pageTtl={`${postDetail.title} | Blog`}
      pageDes={postDetail.content
        .replace(/(<([^>]+)>)/gi, "")
        .slice(0, 130)}
      pageUrl={`blog/detail/${id}`}
      pageThum={
        postDetail.eyecatch &&
        postDetail.eyecatch.url
      }
      // pageKey=""
      pageType="blog"
    >
      {/* -------------------------------------------------------
        ▽ 記事詳細 ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl">{postDetail.title}</h2>
      <div className="post_contents-area">
        <div className="data">{postDetail.createdAt.slice(0, 10)}</div>
        <div className="cate">
          <span>category:</span>
          <Link href={`/blog/category/${postDetail.category.id}`}>
            {postDetail.category.name}
          </Link>
        </div>

        <div className="wclmn">
          <div className="thum">
            <span>サムネイル</span>
            <img src="/frame.png" alt="フレーム" />
            <img
              src={
                postDetail.eyecatch
                  ? postDetail.eyecatch.url
                  : "/dummy.png"
              }
              alt={postDetail.title}
              className="thum-img"
            />
          </div>
          <div
            className="content editor-style"
            dangerouslySetInnerHTML={{ __html: postDetail.content }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {

  /* -------------------------------------------------------
    ▽ SSG用のパス指定  ▽
  ---------------------------------------------------------- */
  const now = new Date();
  const clear = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
  const res = await fetch(
    `${process.env.MICROCMS_HOST}/api/v1/blogs?limit=99999&cache=${clear}`, {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
    }
  });
  const json = await res.json();
  const paths = json.contents.map((jsonChild: { id: string; }) => `/blog/detail/${jsonChild.id}`);
  return { paths, fallback: false };

};

export const getStaticProps = async (context: { params: string }) => {

  /* -------------------------------------------------------
    ▽ 記事情報の取得  ▽
  ---------------------------------------------------------- */
  const now = new Date();
  const clear = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
  const { id } = context.params;
  const res = await fetch(
    `${process.env.MICROCMS_HOST}/api/v1/blogs/${id}?cache=${clear}`, {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
    }
  });
  const json = await res.json();
  return {
    props: {
      postDetail: json,
      id: id,
    },
  };

};

export default Detail;
