import axios from 'axios'
import useSWR from 'swr'
import Link from "next/link";
import Layout from "../../../components/layout";
import { useRouter } from 'next/router'

//fetcher関数の作成
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then(res => res.data)

export const PostsDetail = () => {
    const router = useRouter()
    const { id } = router.query

    //fetcher関数の作成
    const { data, error } = useSWR(`${process.env.API_HOST}/api/posts/detail/${id}`, fetcher)
    //エラー
    if (error) return <div>failed to load</div>
    //ロード中
    if (!data) return <div>loading...</div>
    //成功
    const post = data;

    return (
        <Layout
            /* -------------------------------------------------------
              ▽ 固有 meta ▽
            ---------------------------------------------------------- */
            pageTtl={`${post.title} | Posts`}
            pageDes={post.content
                .replace(/(<([^>]+)>)/gi, "")
                .slice(0, 130)}
            pageUrl={`posts/detail/${id}`}
            pageThum={post.image && post.image}
            pageType="posts"
        >

            {/* -------------------------------------------------------
         ▽ 記事一覧  ▽
        ---------------------------------------------------------- */}
            <h2 className="sttl font-semibold text-xl">{post.title}</h2>
            <div className="post_contents-area">
                <div className="data">{post.createdAt ? post.createdAt.slice(0, 10) : "00-00-00"}</div>
                <div className="cate">
                    <span>ユーザー:</span>
                    <Link href={`/posts/user/${post.user_id}`}>
                        {post.user.name}
                    </Link>
                </div>
                <div className="cate">
                    <span>カテゴリー:</span>
                    <Link href={`/posts/category/${post.category.id}`}>
                        {post.category.category_name}
                    </Link>
                </div>

                <div className="wclmn">
                    <div className="thum">
                        <span>サムネイル</span>
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
                    <div
                        className="content editor-style"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                </div>
            </div>
        </Layout>
    );
};

export default PostsDetail;