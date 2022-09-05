import axios from 'axios'
import useSWR from 'swr'
import { ChangeEvent, useState, useContext } from 'react'
import { useRouter } from 'next/router';
import Layout from "../../../components/layout"

//fetcher関数の作成
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then(res => res.data)

type formData = {
    title: string
    category: string
    content: string
    image: any
    // password: string
    // passwordConform: string
}

export const PostsCreate = () => {

    const router = useRouter();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState();
    // const [password, setPassword] = useState('')
    // const [passwordConform, setPasswordConform] = useState('')

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const changeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }
    const changeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
    }
    const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.files)
        console.log(image)
    }

    const handleClick = () => {
        const formData: formData = { title, category, content, image }
        // 投稿処理
        axios
            .post(
                `${process.env.API_HOST}/api/posts/store`,
                formData,
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                    withCredentials: true
                }
            )
            .then((response: { data: any }) => {
                console.log(response.data)
                // router.push(`/posts/detail/${response.data.id}`);
            })
    }


    //fetcher関数の作成
    const { data, error } = useSWR(`${process.env.API_HOST}/api/posts/create`, fetcher)
    //エラー
    if (error) return <Layout>failed to load</Layout>
    //ロード中
    if (!data) return <Layout>loading...</Layout>
    //成功
    const cateOptions = data;

    return (
        <Layout
            /* -------------------------------------------------------
            ▽ 固有 meta ▽
            ---------------------------------------------------------- */
            pageTtl="Q&A 投稿"
            // pageDes=""
            // pageUrl=""
            // pageKey=""
            // pageThum=""
            pageType="posts"
        >

            {/* -------------------------------------------------------
            ▽ アカウント作成・フォーム  ▽
        ---------------------------------------------------------- */}

            <h2 className="sttl font-semibold text-xl mb-3">Q&A 投稿・フォーム</h2>
            <div className="text-left">
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-4 col-form-label text-md-right">タイトル</label>
                        <div className="col-md-6">
                            <input id="title" className="form-control" type="text" onChange={changeTitle} />
                        </div>
                    </div>
                    <div className="form-group row mb-4">
                        <label className="col-md-4 col-form-label text-md-right">カテゴリー</label>
                        <div className="col-md-6">
                            <select id="categories" className="form-control" onChange={changeCategory}>
                                <option selected>---</option>
                                {cateOptions.map((category: any, index: number) => (
                                    <option value={category.id}>{category.category_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-4 col-form-label text-md-right">内容</label>
                        <div className="col-md-6">
                            <textarea id="content" className="form-control" rows="10" onChange={changeContent}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-4 col-form-label text-md-right">サムネイル画像</label>
                        <div className="col-md-6">
                        <input name="image" type="file" onChange={changeImage} />
                        </div>
                    </div>
                </div>
                <div className="form-group row text-left">
                    <div className="col-md-8 offset-md-4">
                        <button type="submit" className="btn btn-danger" onClick={handleClick}>作成</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>

        </Layout >
    );
};

export default PostsCreate;