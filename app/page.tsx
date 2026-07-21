"use client";
import { motion } from "framer-motion";
import { FileText, MapPin, Phone, Shield } from "lucide-react";

export default function Home() {
  const brochureUrl = "https://drive.google.com/file/d/1KbCf1m4ilMSGEcjOLy_LrF2oAvOmt1Gz/view?usp=drivesdk";

  return (
    <main className="relative min-h-screen">
      {/* Cinematic Hero */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold tracking-[0.5em] uppercase text-xs mb-4 block">Building Trust & Premium Homes</motion.span>
          <h1 className="text-5xl md:text-8xl font-heading mb-6">Jaipur’s Most <br /><span className="text-gold italic">Exclusive Plots</span></h1>
          <p className="max-w-xl mx-auto opacity-60 mb-10">Own land in Jaipur’s most promising premium locations. Invest with confidence. Build your dream home.</p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-gold text-midnight px-10 py-4 font-bold uppercase tracking-widest text-xs">Explore Plots</button>
            <a href={brochureUrl} target="_blank" className="glass px-10 py-4 border border-gold/40 flex items-center gap-2 uppercase tracking-widest text-xs">
              <FileText size={16} /> Request Brochure
            </a>
          </div>
        </div>
      </section>

      {/* RERA Section */}
      <section className="py-20 bg-royal/10 text-center border-y border-gold/10">
        <h2 className="text-3xl font-heading mb-4 text-gold">Trusted & Verified</h2>
        <p className="opacity-50 mb-8 uppercase tracking-[0.3em] text-[10px]">RERA Registration: 2025-14205</p>
        <div className="grid md:grid-cols-3 max-w-4xl mx-auto gap-10">
          <div className="p-8 glass"><Shield className="mx-auto text-gold mb-4" /> <h3>100% Legal</h3></div>
          <div className="p-8 glass"><MapPin className="mx-auto text-gold mb-4" /> <h3>Prime Locations</h3></div>
          <div className="p-8 glass"><Phone className="mx-auto text-gold mb-4" /> <h3>9610155338</h3></div>
        </div>
      </section>
      
      {/* Consultant Section */}
      <section className="py-32 px-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-40 h-40 bg-gold/20 rounded-full border border-gold flex items-center justify-center font-heading text-4xl text-gold">PC</div>
        <div>
          <h3 className="text-4xl font-heading text-gold mb-2">Pradeep Choudhary</h3>
          <p className="opacity-40 uppercase tracking-widest text-xs mb-6">Real Estate Consultant</p>
          <p className="opacity-60 leading-loose">Specializing in premium residential plots across Mansarovar, Jagatpura, and Ajmer Road. We provide end-to-end assistance from site visits to legal documentation.</p>
        </div>
      </section>

      <footer className="py-10 border-t border-gold/10 text-center text-[10px] opacity-20 uppercase tracking-[0.5em]">
        © 2025 GHAR NIWAS • Mansarovar, Jaipur
      </footer>
    </main>
  );
}
