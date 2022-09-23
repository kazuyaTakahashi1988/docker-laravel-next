import Link from "next/link"
import { useContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { AuthContext } from '../lib/AuthContext'

type Props = {
    pageType?: string;
};


export const Notice = ({ pageType }: Props) => {
    const auth = useContext(AuthContext);
    const router = useRouter();

    return (
        <>
            {auth?.userAuth ?
                <>
                    <h4 className="topMess font-semibold text-xl"><Link href="/posts/create">▷ 質問を投稿してみよう！</Link></h4>
                </>
                :
                <>
                    <div className="mt-6 text-gray-600">
                        <b className="clo">「Q &amp; A site - ナゼナゼのララベル -」</b> は質問を投稿、及び回答することができるC to C サービスです。<br /><br />
                        質問者の投稿に気軽にコメントとリプライを送ることができ、名前とメールアドレスの登録だけで簡単に始められます。<br />下記のボタンからアカウント作成して本サイトをご活用ください。
                        <div className="wButton mx-auto sm:block space-x-8 sm:flex">
                            <Link href="/login">▷ ログインはこちら</Link>
                            <Link href="/register">▷ アカウント作成はこちら</Link>
                        </div>
                    </div>
                </>}
        </>
    );
};

export default Notice;
