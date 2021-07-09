import { Video } from './Video';
import axios from 'axios';

const API = 'http://localhost:4000';

export const getVideos = async() => {
    return await axios.get<Video[]>(`${API}/videos`)
    
}

export const createVideo = async (video: Video) => {
    return await axios.post(`${API}/videos`, video)
}