import React, {useEffect, useState} from 'react'
import {Video } from './Video';
import * as videoService from './VideoService';
import VideoItem from './VideoItem';

const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async () => {
        const res = await videoService.getVideos()
        setVideos(res.data)
    }
 
    useEffect(() => {
        loadVideos()
        return () => {
            
        };
    }, []);

    return (
        <div className="row">
            {videos.map((video) => {
                return <VideoItem video={video} />
            })}
        </div>
    )
}

export default VideoList