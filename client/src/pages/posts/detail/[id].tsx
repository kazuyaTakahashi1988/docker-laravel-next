import axios from 'axios'
// import useSWR from 'swr'
import Link from "next/link";
import Layout from "../../../components/layout";
import Likebutton from "../../../components/likebutton";
import { useRouter } from 'next/router'
import { AuthContext } from '../../../lib/AuthContext'
import React, { useContext } from 'react'

//fetcher関数の作成
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then(res => res.data)

export async function getServerSideProps(context) {
    const { id } = context.query;
    const data = await fetcher(`${process.env.DETAILE_FETCH}/api/posts/detail/${id}`);
    return { props: { data } }
}


export const PostsDetail = (props) => {
    console.log(props);

    const auth = useContext(AuthContext);
    const router = useRouter()
    const { id } = router.query
    const post = props.data.post

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
                <div className="cate">
                    {auth?.userAuth ?
                        <>
                            <Likebutton likeJudgeInt={props.data.defaultLiked} likeCountInt={props.data.post.likes.length} idParam={id} />
                        </>
                        :
                        <>
                            <b><span>Like:</span> {props.data.post.likes.length}</b>
                        </>
                    }
                </div>

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
                <div className="data text-right">
                    {post.user.icon_img && <span className='thumIcon'>
                        <Link href={`/posts/user/${post.user_id}`}>
                            <img
                                src={`${process.env.API_HOST}/storage/icon/${post.user.icon_img}`}
                                alt=""
                                className="thum-img"
                            />
                        </Link>
                    </span>}
                    {post.created_at ? post.created_at.slice(0, 10) : "00-00-00"}
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
                        <div>
                            <Link href={`/posts/user/${comment.user.id}`} >
                                <a className="user">
                                    <small>
                                        <span className="text-dark">ユーザー：</span>
                                        {comment.user.icon_img && <span className='thumIcon'>
                                            <img
                                                src={`${process.env.API_HOST}/storage/icon/${comment.user.icon_img}`}
                                                alt=""
                                                className="thum-img"
                                            />
                                        </span>}
                                        <span className="text2">{comment.user.name}</span>
                                    </small>
                                </a>
                            </Link></div>
                        <div><span className="text3"><small>{comment.created_at ? comment.created_at.slice(0, 10) : "00-00-00"}</small></span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span></div>
                    </div>
                </div>
            ))}
        </Layout>
    );
};

export default PostsDetail;