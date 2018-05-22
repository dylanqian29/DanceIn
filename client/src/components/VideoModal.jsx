import React from 'react';

class VideoModal extends React.Component {
  render() {
    return (
      <div className="modal" onClick={() => this.props.closeModal()}>
        <div className="modal-video" onClick={(event) => event.stopPropagation()}>
          <iframe className="embed-responsive-item" width='100%' height='100%' src={`https://www.youtube.com/embed/${this.props.id}`} allowFullScreen></iframe>

          {/* <iframe className="modal-choreolink" src='https://youtu.be/CMmERsMz7FM'></iframe> */}
        </div>
      </div>
    )
  }
}

export default VideoModal;