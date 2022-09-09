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
    if (error) return <Layout>failed to load</Layout>
    //ロード中
    if (!data) return <Layout>loading...</Layout>
    //成功
    console.log(data);
    const post = data;
    // const comments = data;

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
            pageThum={post.image && `${process.env.API_HOST}/storage/image/${post.image}`}
            pageType="posts"
        >

            {/* -------------------------------------------------------
         ▽ 記事一覧  ▽
        ---------------------------------------------------------- */}
            <h2 className="sttl font-semibold text-xl">{post.title}</h2>
            <div className="post_contents-area">
                <div className="data">{post.created_at ? post.created_at.slice(0, 10) : "00-00-00"}</div>
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
                                    ? `${process.env.API_HOST}/storage/image/${post.image}`
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
                <div className="d-block mt-5 border rounded btn btn-secondary">
                    <Link href={`/posts/comment/${post.id}`}>
                        <a className="d-block text-white p-2">+ コメントする</a>
                    </Link>
                </div>
            </div>


            {post.comments.reverse().map((comment: any, index: number) => (
                <div className="balloon1 p-4">
                    <p className="text1 text-left">{comment.comment}</p>
                    <div className="d-flex justify-content-between py-1 pt-3">
                        <div><a href="/posts/user/<%= comment.User.id %>" className="user">
                            <small><span className="text-dark">ユーザー：</span><span className="text2">{comment.user.name}</span></small>
                        </a></div>
                        <div><span className="text3"><small>{comment.created_at ? comment.created_at.slice(0, 10) : "00-00-00"}</small></span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span></div>
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default PostsDetail;