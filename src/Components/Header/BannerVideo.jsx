
import videoBanner from '../../assets/banner-video/pexels_videos_1111421 (1080p).mp4'; // Import your video file

const BannerVideo = () => {
  return (
    <div className="relative">
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
        src={videoBanner}
        type="video/mp4"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-9xl opacity-85 font-serif font-bold">Simply the Finest</h1>
      </div>
    </div>
  );
};

export default BannerVideo;