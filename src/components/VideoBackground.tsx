export default function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/personal-website/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0a0a0f]/75" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(10,10,15,0.8) 100%)',
        }}
      />
    </div>
  );
}
