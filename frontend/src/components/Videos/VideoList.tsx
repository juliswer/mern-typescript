import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Video} from './Video';

const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await axios.get('http://localhost:4000/videos')
        setVideos(res.data)
    }
 
    useEffect(() => {
        loadVideos()
        return () => {
            
        };
    }, []);

    return (
        <div>
            {videos.map((video) => {
                return (
                <div>
                    <h1>{video.title}</h1>
                </div>
                )
            })}
        </div>
    )
}

export default VideoList