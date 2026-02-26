import Image from "next/image";
import { Phone, MessageCircle, Sparkles, Star } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({
  title,
  subtitle = "Escorts and call girls across Goa — Panjim, Calangute, Baga, Anjuna and nearby. Discreet booking, in-call or out-call. We keep it straightforward.",
}: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced background with overlay gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/goa_escorts.avif"
          alt="Luxury Goa escorts - premium companionship"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-[10s] hover:scale-110"
          sizes="100vw"
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-purple-900/80 to-pink-900/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(236,72,153,0.3),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(168,85,247,0.3),_transparent_50%)]" />
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Premium badge with sparkle */}
              <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-gradient-to-r from-amber-500/20 to-pink-500/20 rounded-full pl-1 pr-6 py-1 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <div className="bg-gradient-to-r from-amber-500 to-pink-500 rounded-full p-1.5">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-white/90 tracking-wide">
                  Goa Escorts & Call Girls
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="font-handwriting text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  {title ? (
                    <span className="block bg-gradient-to-r from-amber-200 via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                      {title}
                    </span>
                  ) : (
                    <>
                      <span className="block bg-gradient-to-r from-amber-200 via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                        Goa Escorts
                      </span>
                      <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                        & Call Girls
                      </span>
                    </>
                  )}
                </h1>

                {/* Decorative line */}
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="h-[2px] w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>

                {/* Description with glass morphism */}
                <p className="max-w-xl text-lg md:text-xl text-white/90 leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
                  {subtitle}
                </p>
              </div>

              {/* CTA Buttons with enhanced styling */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918121426651"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden shadow-2xl shadow-rose-500/30 hover:shadow-rose-500/50 transition-all duration-300 hover:scale-105"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">Instant Call</span>
                  <span className="relative z-10 text-xs bg-white/20 px-2 py-1 rounded-full">Free</span>
                </a>

                <a
                  href="https://wa.me/918121426651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <MessageCircle className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">WhatsApp</span>
                  <span className="relative z-10 text-xs bg-white/20 px-2 py-1 rounded-full">24/7</span>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>500+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                  <span>Discreet Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  <span>Instant Response</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats/Features Card */}
            <div className="hidden lg:block">
              <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl transform hover:translate-y-[-8px] transition-all duration-500">
                <h3 className="text-xl font-semibold text-white mb-6">Why Choose Us</h3>
                <div className="space-y-4">
                  {[
                    "Premium Verified Profiles",
                    "Discrete & Confidential",
                    "24/7 Customer Support",
                    "Wide Selection in Goa",
                    "Luxury Experience"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
                      </div>
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}