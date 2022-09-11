import axios from 'axios'
import { ChangeEvent, useState, useContext } from 'react'
import { useRouter } from 'next/router';
import Layout from "../../../components/layout"
import { AuthContext } from '../../../lib/AuthContext'

type formData = {
    comment: string
}

export const CommentCreate = () => {
    const auth = useContext(AuthContext);
    const router = useRouter();
    const { id } = router.query

    const authJudge = async() => {
        if (!auth?.userAuth) {
            await router.push(`/login/`);
        }
    }
    authJudge();

    const [comment, setComment] = useState('');

    const changeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
        console.log(e.target.value);
    }

    const handleClick = () => {
        const formData: formData = { comment }
        // 投稿処理
        axios
            .post(
                `${process.env.API_HOST}/api/comment/store/${id}`,
                formData,
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                    withCredentials: true
                }
            )
            .then((response: { data: any }) => {
                router.push(`/posts/detail/${id}`);
            })
    }

    return (
        <Layout
            /* -------------------------------------------------------
            ▽ 固有 meta ▽
            ---------------------------------------------------------- */
            pageTtl="コメント 投稿"
            // pageDes=""
            // pageUrl=""
            // pageKey=""
            // pageThum=""
            pageType="posts"
        >

            {/* -------------------------------------------------------
            ▽ アカウント作成・フォーム  ▽
        ---------------------------------------------------------- */}

            <h2 className="sttl font-semibold text-xl mb-3">コメント 投稿・フォーム</h2>
            <div className="text-left">
                <div className="card-body">
                    <div className="form-group row">
                        <label className="col-md-4 col-form-label text-md-right">内容</label>
                        <div className="col-md-6">
                            <textarea id="comment" className="form-control" rows="10" onChange={changeComment}></textarea>
                        </div>
                    </div>
                </div>
                <div className="form-group row text-left">
                    <div className="col-md-8 offset-md-4">
                        <button type="submit" className="px-5 btn btn-danger" onClick={handleClick}>コメントする</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>

        </Layout >
    );
};

export default CommentCreate;