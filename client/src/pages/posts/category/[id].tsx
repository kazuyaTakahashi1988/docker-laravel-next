import axios from 'axios'
import useSWR from 'swr'
import Link from "next/link";
import Layout from "../../../components/layout";
import { useRouter } from 'next/router'

//fetcher関数の作成
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then(res => res.data)

export const PostsCategory = () => {
    const router = useRouter()
    const { id } = router.query

    //fetcher関数の作成
    const { data, error } = useSWR(`${process.env.API_HOST}/api/posts/category/${id}`, fetcher)
    //エラー
    if (error) return <Layout><img src="/loading.gif" className='loading' alt="" /><br />failed to load</Layout>
    //ロード中
    if (!data) return <Layout><img src="/loading.gif" className='loading' alt="" /><br />loading...</Layout>
    //成功
    const posts = data;

    return (
        <Layout
            /* -------------------------------------------------------
              ▽ 固有 meta ▽
            ---------------------------------------------------------- */
            pageTtl={`カテゴリー：${posts.data[0].category.category_name} | Posts`}
            // pageDes=""
            pageUrl={`posts/category/${id}`}
            // pageKey=""
            // pageThum=""
            pageType="posts"
        >

            {/* -------------------------------------------------------
         ▽ 記事一覧  ▽
       ---------------------------------------------------------- */}
            <h2 className="sttl font-semibold text-xl">カテゴリー：{posts.data[0].category.category_name}</h2>
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
                                                ? `${process.env.API_HOST}/storage/image/${post.image}`
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
        </Layout>
    );
};

export default PostsCategory;