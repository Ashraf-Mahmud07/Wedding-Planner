
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
        <p className="text-white xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl text-3xl opacity-85 font-serif font-bold">Simply the Finest</p>
      </div>
    </div>
  );
};

export default BannerVideo;