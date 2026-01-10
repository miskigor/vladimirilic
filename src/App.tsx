import { useState, useEffect } from 'react';
import { Instagram, Music, PlayCircle, ChevronDown, Sparkles } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const images = [
    { src: '/vlado_nova_1.jpg', alt: 'Vladimir Ilić - Portrait' },
    { src: '/vlada_novi_3_2.1.1.jpg', alt: 'Vladimir Ilić - Lifestyle' },
    { src: '/still_2025-12-27_204257_1.1.4.jpg', alt: 'Vladimir Ilić - Football' }
  ];

  const trainingImages = [
    { src: '/nogomet_1.1.1.jpg', alt: 'Vladimir Ilić - Training 1' },
    { src: '/nogomet_4_1.1.1.jpg', alt: 'Vladimir Ilić - Training 2' },
    { src: '/slika_1.jpg', alt: 'Vladimir Ilić - Training 3' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)',
              left: `${mousePosition.x - 192}px`,
              top: `${mousePosition.y - 192}px`,
              transition: 'all 0.3s ease-out',
            }}
          />
        </div>

        <div className="relative z-10 text-center w-full">
          <div className="mb-6 md:mb-8 space-y-4 px-4">
            <div className="inline-block px-4 py-2 bg-amber-500/10 backdrop-blur-xl border border-amber-500/20 rounded-full mb-8">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-300 font-medium tracking-wider">CONTENT CREATOR</span>
              </div>
            </div>

            <div className="relative w-full h-[90vh] border-y-2 border-amber-400/30 overflow-visible">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/33.jpg)',
                  filter: 'brightness(0.7)'
                }}
              />

              <div className="absolute -inset-[1px] bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] md:-translate-y-[25%] w-full px-4 md:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-center leading-none animate-sharpen">
                  <span className="inline-block bg-gradient-to-br from-white via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(251,191,36,0.5)] border-4 border-amber-400/40 rounded-2xl px-6 py-2">
                    VLADIMIR ILIĆ
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <div className="px-4">
            <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light tracking-wider max-w-2xl mx-auto">
              Football • Fitness • Lifestyle • Digital Content
            </p>

            <div className="flex gap-4 justify-center mb-20">
              <a
                href="https://www.tiktok.com/@vladailic10?_r=1&_t=ZN-92gSwLrVr3y"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
              >
                <div className="flex items-center gap-3">
                  <Music className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors" />
                  <span className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">TikTok</span>
                </div>
              </a>

              <a
                href="https://www.instagram.com/ilic.10/?igsh=MXJ5MzVvd2pjaDBsYg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors" />
                  <span className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">Instagram</span>
                </div>
              </a>
            </div>

            <div className="animate-bounce mt-20">
              <ChevronDown className="w-8 h-8 mx-auto text-zinc-600" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-12 pb-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold tracking-widest text-amber-400 mb-6">O MENI</span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                ABOUT
              </span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all duration-500 group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <p className="text-lg text-zinc-300 leading-relaxed">
                Zovem se Vladimir Ilić i bavim se kreiranjem autentičnog digitalnog sadržaja iz oblasti sporta, fitnessa i zdravog načina života.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all duration-500 group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <p className="text-lg text-zinc-300 leading-relaxed">
                Kroz svoje profile svakodnevno delim motivacione i edukativne video-materijale, realne trening rutine i iskrene recenzije sportskih proizvoda.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-amber-400/30 transition-all duration-500 group">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <p className="text-lg text-zinc-300 leading-relaxed">
                Moj pristup se zasniva na praktičnom iskustvu, doslednosti i merljivim rezultatima – bez preuveličavanja i lažnih obećanja.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <section className="relative pt-16 pb-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold tracking-widest text-amber-400 mb-6">GALERIJA</span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                IN ACTION
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/40 rounded-2xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <section className="relative pt-16 pb-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold tracking-widest text-amber-400 mb-6">TRENING</span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                FOOTBALL
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                    <PlayCircle className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/40 rounded-2xl transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <section className="relative pt-16 pb-20 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold tracking-widest text-amber-400 mb-6">STATISTIKA</span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                PUBLIKA
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative p-10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_70px_rgba(251,191,36,0.1)]">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-white">Primarno tržište</h4>
                  <p className="text-base text-zinc-400">Srbija, Bosna i Hercegovina, Hrvatska, Makedonija</p>
                </div>
              </div>
            </div>

            <div className="group relative p-10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_70px_rgba(251,191,36,0.1)]">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="flex items-start gap-4">
                <div className="text-4xl">👥</div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-white">Starosna struktura</h4>
                  <p className="text-base text-zinc-400">18–34 godine</p>
                </div>
              </div>
            </div>

            <div className="group relative p-10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_70px_rgba(251,191,36,0.1)]">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚖️</div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-white">Pol</h4>
                  <p className="text-base text-zinc-400">Muška publika 50% • Ženska publika 50%</p>
                </div>
              </div>
            </div>

            <div className="group relative p-10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_70px_rgba(251,191,36,0.1)]">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              <div className="flex items-start gap-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-white">Engagement</h4>
                  <p className="text-base text-zinc-400">Iznad proseka za veličinu profila, sa visokim brojem komentara, deljenja i direktne interakcije sa pratiocima</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-20 px-4 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-bold tracking-widest text-amber-400">KONTAKT</p>
            <p className="text-lg text-zinc-400">
              Za saradnju: <a href="mailto:v.ilic4899@gmail.com" className="text-white hover:text-amber-400 transition-colors font-medium">v.ilic4899@gmail.com</a>
            </p>
          </div>

          <div className="pt-6 border-t border-white/5">
            <p className="text-sm text-zinc-600">© 2025 Vladimir Ilić. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white text-2xl hover:bg-amber-500/20 hover:border-amber-400/50 hover:text-amber-400 transition-all duration-300 hover:rotate-90"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl blur-2xl" />
            <img
              src={selectedImage}
              alt="Full size"
              className="relative max-w-full max-h-[90vh] object-contain rounded-2xl border border-white/10 shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
