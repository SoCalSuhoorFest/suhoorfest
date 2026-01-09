import { motion } from "framer-motion";
import suhoorFestVideo from "@/assets/suhoor-fest-video.mp4";

const VideoSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-4 tracking-widest uppercase text-xs">
              Experience the Vibe
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              A Glimpse of Suhoor Fest
            </h2>
          </motion.div>

          {/* Video Container */}
          <motion.div 
            className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <video
              src={suhoorFestVideo}
              controls
              playsInline
              className="w-full aspect-[9/16] object-cover bg-muted"
              poster=""
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
