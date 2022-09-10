import axios from 'axios'
import React, { useState, useEffect } from 'react'

type Props = {
    likeJudgeInt: any,
    likeCountInt: any,
    idParam: number
}

export const likebutton = ({ likeJudgeInt, likeCountInt, idParam }: Props) => {

    const [likeCount, setLikeCount] = useState(likeCountInt);
    const [likeJudge, setLikeJudge] = useState(likeJudgeInt);

    useEffect(() => {
        setLikeCount((_prev: any) => _prev = likeCountInt)
        setLikeJudge((_prev: any) => _prev = likeJudgeInt)
    }, [likeCountInt, likeJudgeInt])

    const likeClick = () => {
        axios.get(`${process.env.API_HOST}/api/posts/like/${idParam}`, { withCredentials: true }).then(
            (response: { data: any }) => {
                setLikeCount(response.data)
                setLikeJudge(true)
            })
    }
    const unlikeClick = () => {
        axios.get(`${process.env.API_HOST}/api/posts/unlike/${idParam}`, { withCredentials: true }).then(
            (response: { data: any }) => {
                setLikeCount(response.data)
                setLikeJudge(false)
            })
    }

    return (
        <div className="cate mb-2">
            {!likeJudge ?
                <>
                    <button type="submit" className="btn btn-danger" onClick={() => likeClick()}>Like - {likeCount}</button>
                </>
                :
                <>
                    <button type="submit" className="btn btn-secondary" onClick={() => unlikeClick()}>Like (済) - {likeCount}</button>
                </>}
        </div>
    )
}

export default likebutton;
