import React from "react";

const VideoForm = () => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New video</h3>

            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this video"
                  className="form-control"
                  autoFocus
                />
              </div>

              <div className="form-group mt-2">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                />
              </div>

              <div className="form-group mt-2">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description"
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
