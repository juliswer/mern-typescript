import React from 'react'
import { Video } from './Video'

interface Props {
    video: Video
}

const VideoItem = ({video}: Props) => {
    return (
        <div>
            <div>
               <h1>{video.title}</h1>
               <p>{video.description}</p>
            </div>
        </div>
    )
} 

export default VideoItem
