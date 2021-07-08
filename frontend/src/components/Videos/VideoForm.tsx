import React, {ChangeEvent, FormEvent, useState} from "react";
import { Video } from "./Video";
import * as videoService from './VideoService';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const VideoForm = () => {
    const history = useHistory();

    const initialState = {
        title: '', 
        description: '',
        url: ''
    }

    const [video, setVideo] = useState<Video>(initialState);

    const handleInputChange = (e: InputChange) => {
        setVideo({...video, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await videoService.createVideo(video)
        toast.success("New video added")
        setVideo(initialState)
        history.push('/')
    }

    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h3>New video</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="Write a title for this video"
                    className="form-control"
                    value={video.title}
                    onChange={handleInputChange}
                    autoFocus
                  />
                </div>
                <div className="form-group mt-2">
                  <input
                    type="text"
                    name="url"
                    value={video.url}
                    placeholder="https://somesite.com"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-2">
                  <textarea
                    name="description"
                    rows={3}
                    value={video.description}
                    className="form-control"
                    placeholder="Write a description"
                    onChange={handleInputChange}
                  ></textarea>
                  <button className="btn btn-primary mt-2">Create Video</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
);
};

export default VideoForm;
