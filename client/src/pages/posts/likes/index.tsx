import axios from 'axios'
import useSWR from 'swr'
import Link from "next/link";
import Layout from "../../../components/layout";
import React from 'react';

//fetcher関数の作成
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then(res => res.data)

export const PostsLikes = () => {

    //fetcher関数の作成
    const { data, error } = useSWR(`${process.env.API_HOST}/api/posts/likes/1`, fetcher)
    //エラー
    if (error) return <Layout><img src="/loading.gif" className='loading' alt="" /><br />failed to load</Layout>
    //ロード中
    if (!data) return <Layout><img src="/loading.gif" className='loading' alt="" /><br />loading...</Layout>
    //成功

    return (
        <Layout
            /* -------------------------------------------------------
              ▽ 固有 meta ▽
            ---------------------------------------------------------- */
            pageTtl={`お気に入り 一覧 | Posts`}
            // pageDes=""
            pageUrl={`posts/likes`}
            // pageKey=""
            // pageThum=""
            pageType="likes"
        >

            {/* -------------------------------------------------------
         ▽ 記事一覧  ▽
       ---------------------------------------------------------- */}
            <h2 className="sttl font-semibold text-xl">お気に入り 一覧</h2>
            <ul className="postList">
                {data.map((like: any, index: number) => (
                    <li key={`${index}`}>
                        <Link href={`/posts/detail/${like.post.id}`}>
                            <a>
                                <div className="thum">
                                    <img src="/frame.png" alt="フレーム" />
                                    <img
                                        src={
                                            like.post.image
                                                ? `${process.env.API_HOST}/storage/image/${like.post.image}`
                                                : "/dummy.png"
                                        }
                                        alt={like.post.title}
                                        className="thum-img"
                                    />
                                </div>
                                {like.post.created_at ? like.post.created_at.slice(0, 10) : "00-00-00"}
                                <br />
                                <strong>{like.post.title}</strong>
                                {like.post.content
                                    .replace(/(<([^>]+)>)/gi, "")
                                    .slice(0, 50)}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default PostsLikes;