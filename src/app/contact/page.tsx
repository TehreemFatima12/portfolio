import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Particles from "@/components/home/hero/Particles";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070814] text-white">

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[180px]" />
      <div className="absolute left-1/2 -translate-x-1/2 -top-52 h-[650px] w-[650px] rounded-full bg-purple-600/10 blur-[220px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

      {/* Home Page Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10">
        <ContactHero />

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
      </div>

    </main>
  );
}