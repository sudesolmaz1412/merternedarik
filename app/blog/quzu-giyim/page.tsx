import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quzu Giyim | Kadın Giyim Modelleri ve Ürün Araştırma",
  description:
    "Quzu Giyim kadın giyim modelleri için ürün araştırma rehberi. Quzu pantolon, blazer ceket ve kadın giyim ürünlerini inceleyin, ürün görselini gönderin.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/quzu-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Quzu%20Giyim%20%C3%BCr%C3%BCn%C3%BC%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

export default function QuzuGiyimPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#171717] pb-20 md:pb-0">

      {/* HEADER */}
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="font-black tracking-[.17em]">
            ROTA TEDARİK
          </Link>

          <div className="hidden items-center gap-7 text-sm font-black md:flex">
            <a href="#pantolon">PANTOLON</a>
            <a href="#blazer">BLAZER CEKET</a>
            <Link href="/blog/merter-kadin-giyim">
              MERTER
            </Link>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#e45137] px-5 py-3 text-xs font-black text-white"
          >
            ÜRÜN SOR →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[.9fr_1.1fr]">

          {/* METİN AYRI */}
          <div className="flex min-h-[650px] flex-col justify-center rounded-[42px] bg-[#e45137] p-8 text-white md:p-14">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#f6e84e] px-4 py-2 text-xs font-black text-black">
                QUZU GİYİM
              </span>

              <span className="rounded-full border border-white/25 px-4 py-2 text-xs font-black">
                KADIN GİYİM
              </span>
            </div>

            <h1 className="mt-8 text-7xl font-black leading-[.82] tracking-[-.065em] md:text-[105px]">
              Quzu
              <span className="block text-[#f6e84e]">
                Giyim
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-white/75">
              Quzu Giyim kadın giyim modellerini araştırıyorsanız
              beğendiğiniz ürünün fotoğrafını gönderin. Pantolon,
              blazer ceket ve farklı kadın giyim modelleri için
              ürün araştırması yapabilirsiniz.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#f6e84e] px-8 py-4 font-black text-black"
              >
                QUZU ÜRÜNÜ GÖNDER →
              </a>

              <Link
                href="/blog/merter-kadin-giyim"
                className="rounded-full border border-white/30 px-8 py-4 font-black"
              >
                MERTER KADIN GİYİM →
              </Link>
            </div>
          </div>

          {/* WEBP TEMİZ - ÜSTÜNDE YAZI YOK */}
          <div className="overflow-hidden rounded-[42px] bg-white">
            <img
              src="/images/quzugiyim.webp"
              alt="Quzu Giyim kadın giyim modelleri"
              className="h-full min-h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-[.65fr_1.35fr]">
          <p className="text-xs font-black tracking-[.28em] text-[#e45137]">
            QUZU KADIN GİYİM
          </p>

          <div>
            <h2 className="max-w-5xl text-5xl font-black leading-[.93] tracking-[-.055em] md:text-7xl">
              Quzu Giyim
              <span className="block text-[#e45137]">
                ürün modelleri
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              Quzu Giyim ürünlerini araştıran butik ve e-ticaret
              işletmeleri, beğendikleri kadın giyim modelinin görselini
              göndererek ürün araştırması talep edebilir.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/60">
              Pantolon ve blazer ceket başta olmak üzere aradığınız
              modele göre ürün veya benzer seçeneklerin araştırılması
              için görsel üzerinden ilerleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* KATEGORILER */}
      <section className="bg-[#171717] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-[#f6e84e]">
            QUZU MODELLERİ
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
            Aradığın ürünü seç.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <a
              href="#pantolon"
              className="rounded-[32px] bg-[#9bc9e8] p-8 text-black transition hover:-translate-y-2"
            >
              <span className="text-xs font-black text-black/35">
                01 / PANTOLON
              </span>

              <h3 className="mt-20 text-4xl font-black">
                Quzu
                <span className="block">Pantolon</span>
              </h3>

              <p className="mt-5 text-black/55">
                Quzu kadın pantolon modellerini araştırın.
              </p>

              <span className="mt-10 block text-3xl">→</span>
            </a>

            <a
              href="#blazer"
              className="rounded-[32px] bg-[#f6e84e] p-8 text-black transition hover:-translate-y-2"
            >
              <span className="text-xs font-black text-black/35">
                02 / BLAZER
              </span>

              <h3 className="mt-20 text-4xl font-black">
                Quzu
                <span className="block">Blazer Ceket</span>
              </h3>

              <p className="mt-5 text-black/55">
                Quzu blazer ceket modellerini araştırın.
              </p>

              <span className="mt-10 block text-3xl">→</span>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[32px] bg-[#e45137] p-8 transition hover:-translate-y-2"
            >
              <span className="text-xs font-black text-white/50">
                03 / DİĞER
              </span>

              <h3 className="mt-20 text-4xl font-black">
                Başka bir
                <span className="block">Quzu ürünü</span>
              </h3>

              <p className="mt-5 text-white/65">
                Ürün görselini gönder, model üzerinden araştıralım.
              </p>

              <span className="mt-10 block text-3xl">→</span>
            </a>

          </div>
        </div>
      </section>

      {/* PANTOLON */}
      <section id="pantolon" className="bg-[#cbe7f5] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* FOTOĞRAF TEMİZ */}
            <div className="overflow-hidden rounded-[40px] bg-white">
              <img
                src="/images/quzugiyimpantolon.webp"
                alt="Quzu Giyim kadın pantolon modeli"
                className="h-[650px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-black tracking-[.28em] text-[#27556e]">
                QUZU PANTOLON
              </p>

              <h2 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
                Quzu pantolon
                <span className="block text-[#27556e]">
                  modelleri
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
                Quzu kadın pantolon modeli arıyorsanız beğendiğiniz
                ürünün fotoğrafını göndererek ürün araştırmasına
                başlayabilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-block rounded-full bg-[#27556e] px-8 py-4 font-black text-white"
              >
                PANTOLON FOTOĞRAFI GÖNDER →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* İKİNCİ PANTOLON */}
      <section className="bg-[#fff7e8] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">

          <div>
            <p className="text-xs font-black tracking-[.28em] text-[#8a273e]">
              QUZU KADIN PANTOLON
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
              Farklı renk ve
              <span className="block text-[#8a273e]">
                modeller
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Bordo ve farklı renklerde Quzu pantolon modeli
              araştırıyorsanız aradığınız ürünün ekran görüntüsünü
              WhatsApp üzerinden iletebilirsiniz.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-[#8a273e] px-8 py-4 font-black text-white"
            >
              BU TARZ ÜRÜN ARA →
            </a>
          </div>

          {/* FOTOĞRAF TEMİZ */}
          <div className="overflow-hidden rounded-[40px] bg-white">
            <img
              src="/images/quzupantolonbordo.webp"
              alt="Quzu bordo kadın pantolon modeli"
              className="h-[650px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* BLAZER */}
      <section id="blazer" className="bg-[#f6e84e] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">

          {/* FOTOĞRAF TEMİZ */}
          <div className="overflow-hidden rounded-[40px] bg-white">
            <img
              src="/images/quzublazerceket.webp"
              alt="Quzu blazer ceket kadın giyim modeli"
              className="h-[650px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-black tracking-[.28em] text-black/45">
              QUZU BLAZER CEKET
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
              Quzu blazer
              <span className="block text-[#e45137]">
                ceket modelleri
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Quzu blazer ceket modeli arıyorsanız ürün görselini
              göndererek aradığınız model veya benzer kadın ceket
              seçenekleri için araştırma yapabilirsiniz.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-[#171717] px-8 py-4 font-black text-white"
            >
              BLAZER CEKET SOR →
            </a>
          </div>

        </div>
      </section>

      {/* MERTER / TEDARIK */}
      <section className="bg-[#e45137] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-[#f6e84e]">
            ROTA TEDARİK
          </p>

          <div className="mt-6 grid gap-12 md:grid-cols-[1.2fr_.8fr]">

            <h2 className="text-5xl font-black leading-[.88] tracking-[-.055em] md:text-8xl">
              Ürünü gördün.
              <span className="block text-[#f6e84e]">
                Görselini gönder.
              </span>
            </h2>

            <div>
              <p className="text-lg leading-8 text-white/70">
                Quzu Giyim ürünü veya benzer kadın giyim modeli
                araştırıyorsanız ürün fotoğrafını göndererek
                araştırma talebi oluşturabilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-[#f6e84e] px-8 py-4 font-black text-black"
              >
                WHATSAPP'TAN GÖNDER →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-[#e45137]">
            KADIN GİYİM REHBERİ
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-black tracking-[-.05em] md:text-6xl">
            Merter kadın giyim ve ürün tedariği
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-2">

            {[
              ["Merter Kadın Giyim", "/blog/merter-kadin-giyim"],
              ["Merter Kadın Giyim Modelleri", "/blog/merter-kadin-giyim-modelleri"],
              ["Merter Kadın Giyim Toptancıları", "/blog/merter-kadin-giyim-toptancilari"],
              ["Merter Toptan Kadın Giyim", "/blog/merter-toptan-kadin-giyim"],
              ["E-Ticaret İçin Kadın Giyim", "/blog/e-ticaret-icin-kadin-giyim"],
              ["Online Butik İçin Toptan Kadın Giyim", "/blog/online-butik-icin-toptan-kadin-giyim"],
            ].map(([title, href], i) => (
              <Link
                key={href}
                href={href}
                className="flex min-h-[100px] items-center justify-between rounded-[24px] border border-black/10 bg-[#f7f3ec] p-6 transition hover:-translate-y-1 hover:bg-[#f6e84e]"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-black text-black/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <strong className="text-lg md:text-xl">
                    {title}
                  </strong>
                </div>

                <span className="text-2xl">→</span>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#171717] py-28 text-center text-white">
        <div className="mx-auto max-w-6xl px-5">

          <p className="text-xs font-black tracking-[.3em] text-[#f6e84e]">
            QUZU GİYİM
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[.84] tracking-[-.06em] md:text-9xl">
            Aradığın Quzu
            <span className="block text-[#f6e84e]">
              ürününü gönder.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Pantolon, blazer ceket veya farklı bir kadın giyim
            modelinin görselini WhatsApp üzerinden iletin.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#f6e84e] px-10 py-5 font-black text-black"
          >
            ÜRÜN FOTOĞRAFI GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-white/30">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            Quzu markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>

        </div>
      </section>

      {/* MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#171717] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#f6e84e] px-5 py-4 text-center text-sm font-black text-black"
        >
          QUZU ÜRÜNÜ SOR →
        </a>
      </div>

    </main>
  );
}
