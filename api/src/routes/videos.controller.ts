import {RequestHandler} from 'express';
import Video from './Video'

export const createVideo: RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url})
    if(videoFound) {
        return res.status(301).json({message: 'The url already exists'})
    }

    const video = new Video(req.body)
    const savedVideo = await video.save();
    res.json(savedVideo);
}

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
        return res.json(videos);
    } catch (error) {
        res.json(error)
    }
}

export const getVideo: RequestHandler = (req, res) => {
    res.json('getting video')
}

export const deleteVideo: RequestHandler = (req, res) => {
    res.json('deleting a video')
}

export const updateVideo: RequestHandler = (req, res) => {
    res.json('updating a video')
}