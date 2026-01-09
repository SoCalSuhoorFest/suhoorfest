import suhoorFestVideo from "@/assets/suhoor-fest-video.mp4";

const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">
              Experience the Vibe
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              A Glimpse of Suhoor Fest
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <video
              src={suhoorFestVideo}
              controls
              playsInline
              className="w-full aspect-[9/16] object-cover bg-muted"
              poster=""
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
