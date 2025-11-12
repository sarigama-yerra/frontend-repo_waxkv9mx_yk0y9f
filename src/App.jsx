import { useState } from 'react'
import { ShoppingBag, Star, Mail, Phone, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 'premium-royale',
    name: 'Sarung Premium Royale',
    price: 'Rp 349.000',
    tag: 'Premium',
    image:
      'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop',
    desc: 'Bahan katun sutra eksklusif, motif elegan, finishing halus.',
  },
  {
    id: 'modern-urban',
    name: 'Sarung Modern Urban',
    price: 'Rp 259.000',
    tag: 'Modern',
    image:
      'https://images.unsplash.com/photo-1520975922284-9d06a63a52dc?q=80&w=1600&auto=format&fit=crop',
    desc: 'Warna minimalis berkelas, ringan dan nyaman dipakai harian.',
  },
  {
    id: 'tradisional-batik',
    name: 'Sarung Tradisional Batik',
    price: 'Rp 199.000',
    tag: 'Tradisional',
    image:
      'https://images.unsplash.com/photo-1602759337568-270e51f83b7f?q=80&w=1600&auto=format&fit=crop',
    desc: 'Motif batik klasik dengan pewarnaan mendalam dan tahan lama.',
  },
  {
    id: 'premium-heritage',
    name: 'Sarung Premium Heritage',
    price: 'Rp 389.000',
    tag: 'Premium',
    image:
      'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1600&auto=format&fit=crop',
    desc: 'Perpaduan tradisi dan kemewahan, tekstur lembut nan mewah.',
  },
  {
    id: 'modern-monochrome',
    name: 'Sarung Modern Monochrome',
    price: 'Rp 239.000',
    tag: 'Modern',
    image:
      'https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?q=80&w=1600&auto=format&fit=crop',
    desc: 'Estetika monokrom yang elegan, cocok untuk segala suasana.',
  },
  {
    id: 'tradisional-songket',
    name: 'Sarung Tradisional Songket',
    price: 'Rp 279.000',
    tag: 'Tradisional',
    image:
      'https://images.unsplash.com/photo-1610725661293-5f1e1f60833e?q=80&w=1600&auto=format&fit=crop',
    desc: 'Kerajinan songket berkualitas dengan detail motif yang kaya.',
  },
]

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 shadow-lg shadow-blue-500/20 grid place-items-center">
          <span className="text-white font-black">Y</span>
        </div>
        <div className="absolute -right-2 -bottom-2 h-4 w-4 rounded-full bg-white/90 backdrop-blur border border-white/50 grid place-items-center">
          <span className="text-[10px] text-blue-600 font-bold">S</span>
        </div>
      </div>
      <div className="leading-tight">
        <p className="text-lg font-extrabold tracking-tight text-slate-900">Yann-Sarung</p>
        <p className="text-xs text-slate-600">Premium • Modern • Tradisional</p>
      </div>
    </div>
  )
}

function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <LogoMark />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#produk" className="hover:text-slate-900 transition">Produk</a>
          <a href="#tentang" className="hover:text-slate-900 transition">Tentang</a>
          <a href="#kontak" className="hover:text-slate-900 transition">Kontak</a>
        </nav>
        <a
          href="#produk"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition"
        >
          <ShoppingBag size={18} /> Belanja Sekarang
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="absolute -top-24 -right-24 h-80 w-80 bg-gradient-to-br from-emerald-400/40 to-blue-500/40 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 bg-gradient-to-br from-fuchsia-400/30 to-cyan-400/30 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <LogoMark />
          <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-tight tracking-tight text-slate-900">
            Sarung Premium yang Memadukan Tradisi dan Gaya Modern
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Temukan koleksi sarung pilihan kami — dari motif tradisional yang berkelas hingga desain modern yang elegan. Nyaman dipakai, tampil memukau di setiap momen.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
            ))}
            <span className="text-sm text-slate-600">Ratusan pelanggan puas</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#produk"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Lihat Koleksi <ChevronRight size={18} />
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-xl font-semibold border border-slate-200 hover:bg-slate-50 transition"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/60">
            <img
              src="https://images.unsplash.com/photo-1612157777902-5382bc6e864b?q=80&w=1200&auto=format&fit=crop"
              alt="Koleksi sarung elegan Yann-Sarung"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-2xl p-4 border border-white/60 shadow-lg">
            <p className="text-xs text-slate-500">Eksklusif</p>
            <p className="font-semibold text-slate-900">Koleksi Edisi Terbatas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tag({ label }) {
  const color =
    label === 'Premium'
      ? 'from-amber-400 to-rose-500'
      : label === 'Modern'
      ? 'from-emerald-400 to-cyan-500'
      : 'from-indigo-400 to-fuchsia-500'
  return (
    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full bg-gradient-to-r ${color}`}>
      {label}
    </span>
  )
}

function ProductCard({ item }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-xl transition-shadow">
      <div className="relative">
        <img src={item.image} alt={item.name} className="h-56 w-full object-cover group-hover:scale-[1.02] transition-transform" />
        <div className="absolute top-3 left-3">
          <Tag label={item.tag} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
        <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-base font-extrabold text-slate-900">{item.price}</span>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-slate-900 px-3 py-2 rounded-lg hover:bg-slate-800">
            <ShoppingBag size={16} />
            Pesan
          </button>
        </div>
      </div>
    </div>
  )
}

function Products() {
  const [filter, setFilter] = useState('Semua')
  const categories = ['Semua', 'Premium', 'Modern', 'Tradisional']
  const filtered = products.filter((p) => (filter === 'Semua' ? true : p.tag === filter))

  return (
    <section id="produk" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/40 to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Koleksi Pilihan</h2>
            <p className="mt-2 text-slate-600">Kurasi sarung terbaik dengan kualitas terjamin.</p>
          </div>
          <div className="flex items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                  filter === c
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="tentang" className="relative py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white to-white/70 backdrop-blur border border-white/60 shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900">Tentang Yann-Sarung</h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Yann-Sarung menghadirkan sarung premium dengan sentuhan modern tanpa meninggalkan nilai tradisi. Kami memilih bahan terbaik dengan proses detail sehingga menghasilkan kenyamanan maksimal dan tampilan yang elegan. Cocok untuk acara formal, ibadah, maupun penggunaan harian.
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="kontak" className="relative border-t border-white/40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center">
              <ShoppingBag className="text-white" size={20} />
            </div>
            <div>
              <p className="text-lg font-extrabold">Yann-Sarung</p>
              <p className="text-sm text-white/70">Premium • Modern • Tradisional</p>
            </div>
          </div>
          <div className="space-y-2">
            <a href="mailto:halo@yann-sarung.id" className="flex items-center gap-2 text-white/90 hover:text-white">
              <Mail size={18} /> halo@yann-sarung.id
            </a>
            <a href="https://wa.me/6282334304079" target="_blank" className="flex items-center gap-2 text-white/90 hover:text-white">
              <Phone size={18} /> +62 823-3430-4079
            </a>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} Yann-Sarung. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1000px_600px_at_10%_-10%,#a5f3fc20,transparent),radial-gradient(800px_500px_at_90%_10%,#c4b5fd20,transparent)]">
      <NavBar />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  )
}

export default App
