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
      pageTtl={`${postDetail.title} | CustomBlog`}
      pageDes={postDetail.content
        .replace(/(<([^>]+)>)/gi, "")
        .slice(0, 130)}
      pageUrl={`customblog/detail/${id}`}
      pageThum={
        postDetail.eyecatch &&
        postDetail.eyecatch.url
      }
      // pageKey=""
      pageType="customblog"
    >
      {/* -------------------------------------------------------
        ▽ 記事詳細 ▽
      ---------------------------------------------------------- */}
      <h2 className="sttl">{postDetail.title}</h2>
      <div className="post_contents-area">
        <div className="data">{postDetail.createdAt.slice(0, 10)}</div>
        <div className="cate">
          <span>category:</span>
          <a href={`/customblog/category/${postDetail.category.id}`}>
            {postDetail.category.name}
          </a>
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
        {postDetail.roopItems.length >= 1 &&
          <div className="custam-fields-area">
            <h3 className="ttl">LoopField</h3>
            {postDetail.roopItems.map((roopItem: any, index: number) => (
              <div className="wclmn">
                <div className="sub-thum">
                  <span>sub-サムネイル</span>
                  <img src="/frame.png" alt="フレーム" />
                  <img
                    src={roopItem.roopItemB.url}
                    alt="sub-サムネイル"
                    className="thum-img"
                  />
                </div>
                <div className="sub-conts">
                  <div
                    className="editor-style"
                    dangerouslySetInnerHTML={{
                      __html: roopItem.roopItemA,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        }
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
    `${process.env.MICROCMS_HOST}/api/v1/customblogs?limit=99999&cache=${clear}`, {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
    }
  });
  const json = await res.json();
  const paths = json.contents.map((jsonChild: { id: string; }) => `/customblog/detail/${jsonChild.id}`);
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
    `${process.env.MICROCMS_HOST}/api/v1/customblogs/${id}?cache=${clear}`, {
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
