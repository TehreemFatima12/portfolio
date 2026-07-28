import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Particles from "./Particles";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050010] flex items-center pt-28 lg:pt-0">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 0%, rgba(124,58,237,0.18), transparent 35%),
            radial-gradient(circle at 50% 0%, rgba(168,85,247,0.12), transparent 40%),
            linear-gradient(180deg, #13031f 0%, #090114 55%, #050010 100%)
          `,
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[180px]" />
      <div className="absolute left-1/2 -translate-x-1/2 -top-52 h-[650px] w-[650px] rounded-full bg-purple-600/10 blur-[220px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

      {/* Particles */}
      <Particles />

      {/* Stars */}
      <div className="absolute inset-0 bg-[url('/images/stars.png')] bg-cover bg-center opacity-15 pointer-events-none" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-8 lg:gap-6">

          {/* Left Image */}
          <div className="order-1 flex justify-center lg:justify-end">
            <HeroImage />
          </div>

          {/* Right Content */}
          <div className="order-2 flex justify-center lg:justify-start">
            <HeroContent />
          </div>

        </div>

      </div>

    </section>
  );
}