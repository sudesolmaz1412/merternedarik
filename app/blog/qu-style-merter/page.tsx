import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QU Style Merter | Kadın Giyim Ürün Tedariği",
  description:
    "QU Style Merter ürünleri arayan butik ve e-ticaret mağazaları için kadın giyim ürün araştırma ve Merter tedarik hizmeti. Ürün fotoğrafını gönderin.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/qu-style-merter",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20QU%20Style%20Merter%20%C3%BCr%C3%BCn%C3%BC%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20foto%C4%9Fraf%C4%B1%20g%C3%B6ndermek%20istiyorum.";

const categories = [
  {
    no: "01",
    title: "QU Style Toptan Elbise",
    text: "Elbise modeli arıyorsanız ürün görselini göndererek araştırma talebi oluşturun.",
    href: "/blog/qustyle-toptan-elbise",
  },
  {
    no: "02",
    title: "QU Style Toptan Pantolon",
    text: "Kadın pantolon modelleri için Merter ürün araştırma seçeneklerini inceleyin.",
    href: "/blog/qu-style-toptan-pantolon",
  },
  {
    no: "03",
    title: "QU Style Kadın Giyim",
    text: "Butik ve e-ticaret mağazaları için kadın giyim ürün araştırması.",
    href: "/blog/qustyle-toptan-kadin-giyim",
  },
  {
    no: "04",
    title: "Merter Toptan Kadın Giyim",
    text: "Merter'deki daha geniş kadın giyim tedarik seçeneklerini keşfedin.",
    href: "/blog/merter-toptan-kadin-giyim",
  },
];

const internalLinks = [
  ["Merter Kadın Giyim Toptancıları", "/blog/merter-kadin-giyim-toptancilari"],
  ["Merter Toptancılar", "/blog/merter-toptancilar"],
  ["Merter Toptan Giyim", "/blog/merter-toptan-giyim"],
  ["Merter Toptan Kadın Elbise", "/blog/merter-toptan-kadin-elbise"],
  ["Merter Toptan Kadın Pantolon", "/blog/merter-toptan-kadin-pantolon"],
  ["Merter Toptan Kadın Ceket", "/blog/merter-toptan-kadin-ceket"],
  ["Merter Toptan Kadın Takım", "/blog/merter-toptan-kadin-takim"],
  ["Merter Toptan Kadın Kazak", "/blog/merter-toptan-kadin-kazak"],
  ["E-Ticaret İçin Kadın Giyim", "/blog/e-ticaret-icin-kadin-giyim"],
  ["Online Butik İçin Toptan Kadın Giyim", "/blog/online-butik-icin-toptan-kadin-giyim"],
];

export default function QuStyleMerterPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#181b1d] pb-20 md:pb-0">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f4f0e7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-lg font-black tracking-[.17em]">
            ROTA TEDARİK
          </Link>

          <div className="hidden items-center gap-7 text-sm font-bold md:flex">
            <a href="#urunler">Ürünler</a>
            <a href="#merter">Merter</a>
            <a href="#rehber">Rehber</a>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#181b1d] px-5 py-3 text-xs font-black text-white"
          >
            WHATSAPP →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pt-5 md:px-8 md:pt-8">
        <div className="relative min-h-[680px] overflow-hidden rounded-[28px] md:min-h-[760px] md:rounded-[42px]">
          <img
            src="/images/banner.jpg"
            alt="QU Style Merter kadın giyim ürün araştırma ve tedarik"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[680px] max-w-4xl flex-col justify-center px-7 py-20 text-white md:min-h-[760px] md:px-16">
            <div className="mb-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
                MERTER
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
                KADIN GİYİM
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
                ÜRÜN ARAŞTIRMA
              </span>
            </div>

            <h1 className="max-w-4xl text-6xl font-black leading-[.87] tracking-[-.065em] md:text-[105px]">
              QU Style
              <span className="block">Merter</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Aradığınız kadın giyim modelini bize gönderin. Merter'deki
              ürün ve tedarik seçeneklerini sizin için araştıralım.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-4 text-sm font-black text-black transition hover:scale-[1.03]"
              >
                FOTOĞRAF GÖNDER →
              </a>

              <a
                href="#urunler"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-black backdrop-blur"
              >
                ÜRÜN GRUPLARI ↓
              </a>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 hidden rounded-3xl border border-white/20 bg-black/35 p-6 text-white backdrop-blur md:block">
            <span className="text-xs font-bold tracking-[.18em] text-white/50">
              NASIL ÇALIŞIR?
            </span>
            <strong className="mt-2 block text-xl">
              Görsel → Araştırma → Tedarik
            </strong>
          </div>
        </div>
      </section>

      {/* MARQUEE STYLE BAR */}
      <section className="overflow-hidden border-b border-black/10 py-7">
        <div className="flex min-w-max gap-10 text-xl font-black tracking-tight md:text-2xl">
          <span>QU STYLE MERTER ✦</span>
          <span>TOPTAN KADIN GİYİM ✦</span>
          <span>ÜRÜN ARAŞTIRMA ✦</span>
          <span>ONLINE BUTİK ✦</span>
          <span>E-TİCARET ✦</span>
          <span>MERTER TEDARİK ✦</span>
          <span>QU STYLE MERTER ✦</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[.75fr_1.25fr] md:px-8">
        <div>
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            QU STYLE / MERTER
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-black leading-[.98] tracking-[-.04em] md:text-6xl">
            QU Style Merter ürünü arayan butiklere hızlı ürün araştırma.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            İnternette, sosyal medyada veya farklı bir mağazada gördüğünüz
            kadın giyim ürününün fotoğrafını gönderin. Aradığınız model
            üzerinden Merter tedarik seçeneklerini araştıralım.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 border-b-2 border-black pb-2 font-black"
          >
            ÜRÜNÜ WHATSAPP'TAN GÖNDER
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section id="urunler" className="bg-[#181b1d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black tracking-[.24em] text-white/40">
                ÜRÜN GRUPLARI
              </p>
              <h2 className="mt-4 text-5xl font-black tracking-[-.05em] md:text-7xl">
                Ne arıyorsunuz?
              </h2>
            </div>

            <p className="max-w-md leading-7 text-white/50">
              İlgilendiğiniz kategoriye geçin veya doğrudan ürün
              fotoğrafını gönderin.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {categories.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group min-h-[280px] rounded-[30px] border border-white/10 bg-white/[.06] p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black md:p-10"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-black opacity-40">
                    {item.no}
                  </span>
                  <span className="text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                <h3 className="mt-14 text-3xl font-black md:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-md leading-7 opacity-55">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MERTER */}
      <section
        id="merter"
        className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-2 md:px-8"
      >
        <div className="relative min-h-[570px] overflow-hidden rounded-[36px]">
          <img
            src="/images/merterdentedarik.jpeg"
            alt="Merter kadın giyim tedarik"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-0 p-8 text-white md:p-10">
            <p className="text-xs font-black tracking-[.2em] text-white/50">
              ROTA TEDARİK
            </p>
            <h3 className="mt-3 text-4xl font-black">
              Merter'den ürün araştırma.
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            MERTER KADIN GİYİM
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[.95] tracking-[-.04em] md:text-6xl">
            Aradığınız modeli fotoğrafıyla bulun.
          </h2>

          <p className="mt-8 text-lg leading-8 text-black/60">
            QU Style ürünü veya benzer bir kadın giyim modeli arıyorsanız
            ürün kodunu bilmeniz gerekmiyor. Görseli ileterek ürün araştırma
            sürecini başlatabilirsiniz.
          </p>

          <div className="mt-10 space-y-3">
            <div className="rounded-2xl bg-white p-6">
              <strong className="text-xl">01 — Fotoğrafı gönder</strong>
              <p className="mt-2 text-black/50">
                Beğendiğiniz ürünün ekran görüntüsünü iletin.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <strong className="text-xl">02 — Model araştırılsın</strong>
              <p className="mt-2 text-black/50">
                Ürün ve uygun alternatif seçenekleri araştırılsın.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6">
              <strong className="text-xl">03 — Siparişi değerlendirin</strong>
              <p className="mt-2 text-black/50">
                Bulunan seçeneklerden işletmeniz için uygun olanı seçin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ECOMMERCE */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="rounded-[40px] bg-[#d8ff52] p-8 md:p-16">
          <p className="text-xs font-black tracking-[.22em] text-black/50">
            ONLINE BUTİK / E-TİCARET
          </p>

          <div className="mt-5 grid gap-10 md:grid-cols-[1.3fr_.7fr] md:items-end">
            <h2 className="text-5xl font-black leading-[.9] tracking-[-.055em] md:text-7xl">
              Mağazanız için
              <span className="block">ürün mü arıyorsunuz?</span>
            </h2>

            <div>
              <p className="leading-7 text-black/65">
                QU Style veya farklı kadın giyim modellerini araştırmak
                için ürün fotoğrafını bize gönderin.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-black px-7 py-4 font-black text-white"
              >
                WHATSAPP'TAN BAŞLA →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINK HUB */}
      <section id="rehber" className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            MERTER REHBERİ
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-5xl font-black tracking-[-.045em] md:text-6xl">
              İlgili kadın giyim sayfaları
            </h2>

            <Link
              href="/blog/merter-toptan-kadin-giyim"
              className="font-black underline underline-offset-4"
            >
              TÜM MERTER TEDARİK →
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[30px] border border-black/10 bg-black/10 md:grid-cols-2">
            {internalLinks.map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[120px] items-center justify-between bg-white p-7 transition hover:bg-[#f4f0e7]"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-black text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-lg md:text-xl">{title}</strong>
                </div>

                <span className="text-xl transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#181b1d] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
          <p className="text-xs font-black tracking-[.26em] text-white/40">
            QU STYLE MERTER
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[.9] tracking-[-.055em] md:text-8xl">
            Ürünü gördünüz.
            <span className="block text-white/35">Şimdi bize gönderin.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Fotoğrafını gönderin, Merter kadın giyim tedarik seçeneklerini
            araştırmaya başlayalım.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-white px-9 py-5 text-sm font-black text-black transition hover:scale-105"
          >
            ÜRÜN FOTOĞRAFI GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-white/25">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            QU Style markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>
        </div>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#181b1d] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#d8ff52] px-5 py-4 text-center text-sm font-black text-black"
        >
          QU STYLE ÜRÜNÜ GÖNDER →
        </a>
      </div>
    </main>
  );
}
