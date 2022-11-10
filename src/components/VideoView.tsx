import video from "../assets/landing-video.mp4";
function VideoView() {
  return (
    <video className="w-full h-full object-cover fixed" loop autoPlay playsInline muted>
        <source src={video} type="video/mp4" />
    </video>
  )
}

export default VideoView