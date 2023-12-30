// components/VideoModal.js
import ReactModal from "react-modal";
import YouTube from "react-youtube";

const VideoModal = ({ isOpen, closeModal }) => {
  const videoId = "s5Tjnpb1iQQ"; // Extract video ID from the YouTube URL

  const youtubeOpts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="YouTube Video Modal"
      className={`p-0 flex h-fit  justify-center items-center w-fit mx-auto top-1/2 -translate-y-1/2 relative`}
    >
      <div
        className="absolute -top-4 rounded py-3 px-5 bg-white z-10 -right-4 cursor-pointer "
        onClick={closeModal}
      >
        X
      </div>
      <YouTube videoId={videoId} opts={youtubeOpts} />
    </ReactModal>
  );
};

export default VideoModal;
