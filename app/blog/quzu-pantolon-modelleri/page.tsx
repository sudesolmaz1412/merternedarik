import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quzu Pantolon Modelleri | Quzu Giyim Kadın Pantolon",
  description:
    "Quzu pantolon modelleri ve Quzu Giyim kadın pantolon ürünleri için ürün araştırma rehberi. Beğendiğiniz pantolon görselini gönderin.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/quzu-pantolon-modelleri",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Quzu%20pantolon%20modeli%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

const related = [
  ["Quzu Giyim", "/blog/quzu-giyim"],
  ["Merter Kadın Giyim", "/blog/merter-kadin-giyim"],
  ["Merter Kadın Giyim Modelleri", "/blog/merter-kadin-giyim-modelleri"],
  ["Merter Toptan Kadın Pantolon", "/blog/merter-toptan-kadin-pantolon"],
  ["Merter Toptan Kadın Giyim", "/blog/merter-toptan-kadin-giyim"],
  ["E-Ticaret İçin Toptan Pantolon", "/blog/e-ticaret-icin-toptan-pantolon"],
  ["E-Ticaret İçin Kadın Giyim", "/blog/e-ticaret-icin-kadin-giyim"],
  ["Online Butik İçin Toptan Kadın Giyim", "/blog/online-butik-icin-toptan-kadin-giyim"],
];

export default function QuzuPantolonModelleriPage() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] text-[#171717] pb-20 md:pb-0">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ec]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">

          <Link href="/" className="font-black tracking-[.17em]">
            ROTA TEDARİK
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-black md:flex">
            <Link href="/blog/quzu-giyim">
              QUZU GİYİM
            </Link>

            <Link href="/blog/merter-kadin-giyim">
              MERTER
            </Link>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#742d4c] px-5 py-3 text-xs font-black text-white"
          >
            PANTOLON SOR →
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[.9fr_1.1fr]">

          <div className="flex min-h-[660px] flex-col justify-center rounded-[42px] bg-[#742d4c] p-8 text-white md:p-14">

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#ffdf62] px-4 py-2 text-xs font-black text-black">
                QUZU
              </span>

              <span className="rounded-full border border-white/25 px-4 py-2 text-xs font-black">
                KADIN PANTOLON
              </span>
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[.84] tracking-[-.065em] md:text-[92px]">
              Quzu
              <span className="block text-[#ffdf62]">
                Pantolon
              </span>
              <span className="block">
                Modelleri
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              Quzu pantolon modeli arıyorsanız beğendiğiniz ürünün
              görselini gönderin. Kadın pantolon modelleri için ürün
              veya benzer model araştırması yapabilirsiniz.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#ffdf62] px-8 py-4 font-black text-black"
              >
                PANTOLON FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/quzu-giyim"
                className="rounded-full border border-white/30 px-8 py-4 font-black"
              >
                QUZU GİYİM →
              </Link>
            </div>

          </div>

          {/* FOTO TEMİZ */}
          <div className="overflow-hidden rounded-[42px] bg-white">
            <img
              src="/images/quzupantolon.webp"
              alt="Quzu pantolon modelleri kadın pantolon"
              className="h-full min-h-[660px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* SEO INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-[.65fr_1.35fr]">

          <p className="text-xs font-black tracking-[.28em] text-[#742d4c]">
            QUZU GİYİM
          </p>

          <div>
            <h2 className="max-w-5xl text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
              Quzu kadın
              <span className="block text-[#742d4c]">
                pantolon modelleri
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              Quzu pantolon modelleri araştıran butik, mağaza ve
              e-ticaret işletmeleri beğendikleri ürünün fotoğrafını
              göndererek ürün araştırması talep edebilir.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/60">
              Farklı kesim, renk ve kadın pantolon modellerinde aradığınız
              ürünü görsel üzerinden tarif ederek ürün veya benzer
              seçeneklerin araştırılmasını sağlayabilirsiniz.
            </p>

          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-[#171717] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-[#ffdf62]">
            QUZU PANTOLON
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
            Farklı modelleri
            <span className="block text-[#ffdf62]">
              görsel üzerinden araştır.
            </span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {/* FOTO 1 */}
            <div className="overflow-hidden rounded-[36px] bg-white">
              <img
                src="/images/quzugiyimpantolon.webp"
                alt="Quzu Giyim kadın pantolon"
                className="h-[680px] w-full object-cover"
              />
            </div>

            {/* FOTO 2 */}
            <div className="overflow-hidden rounded-[36px] bg-white">
              <img
                src="/images/quzupantolonbordo.webp"
                alt="Quzu bordo pantolon modeli"
                className="h-[680px] w-full object-cover"
              />
            </div>

          </div>

          <div className="mt-8 flex flex-col justify-between gap-6 rounded-[32px] bg-[#742d4c] p-8 md:flex-row md:items-center md:p-10">

            <div>
              <h3 className="text-3xl font-black">
                Aradığın Quzu pantolonu gördün mü?
              </h3>

              <p className="mt-3 text-white/60">
                Ekran görüntüsünü gönder, model üzerinden araştırmaya başlayalım.
              </p>
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[#ffdf62] px-8 py-4 text-center font-black text-black"
            >
              GÖRSELİ GÖNDER →
            </a>

          </div>
        </div>
      </section>

      {/* BORDO INTENT */}
      <section className="bg-[#ead3dc] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-8">

          <div>
            <p className="text-xs font-black tracking-[.28em] text-[#742d4c]">
              QUZU BORDO PANTOLON
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
              Quzu bordo
              <span className="block text-[#742d4c]">
                pantolon
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Bordo veya benzer renklerde Quzu kadın pantolon modeli
              araştırıyorsanız beğendiğiniz ürünün fotoğrafını
              WhatsApp üzerinden gönderebilirsiniz.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-[#742d4c] px-8 py-4 font-black text-white"
            >
              BU TARZ PANTOLON ARA →
            </a>
          </div>

          {/* FOTO TEMİZ */}
          <div className="overflow-hidden rounded-[40px] bg-white">
            <img
              src="/images/quzupantolonbordo.webp"
              alt="Quzu bordo kadın pantolon"
              className="h-[650px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ECOMMERCE */}
      <section className="bg-[#ffdf62] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-black/45">
            BUTİK & E-TİCARET
          </p>

          <div className="mt-6 grid gap-12 md:grid-cols-[1.2fr_.8fr]">

            <h2 className="text-5xl font-black leading-[.9] tracking-[-.055em] md:text-7xl">
              Online mağazanız için
              <span className="block text-[#742d4c]">
                kadın pantolon
              </span>
            </h2>

            <div>
              <p className="text-lg leading-8 text-black/60">
                E-ticaret veya butik mağazanız için kadın pantolon
                araştırıyorsanız ürün görselini göndererek istediğiniz
                modele odaklanabilirsiniz.
              </p>

              <Link
                href="/blog/e-ticaret-icin-toptan-pantolon"
                className="mt-8 inline-block border-b-2 border-black pb-2 font-black"
              >
                E-TİCARET İÇİN TOPTAN PANTOLON →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* QUZU HUB */}
      <section className="bg-[#e45137] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-[#ffdf62]">
            QUZU GİYİM REHBERİ
          </p>

          <div className="mt-6 grid gap-12 md:grid-cols-[1.2fr_.8fr]">

            <h2 className="text-5xl font-black leading-[.88] tracking-[-.055em] md:text-8xl">
              Daha fazla
              <span className="block text-[#ffdf62]">
                Quzu Giyim
              </span>
            </h2>

            <div>
              <p className="text-lg leading-8 text-white/70">
                Pantolon dışında blazer ceket ve diğer kadın giyim
                ürünleri için ana Quzu Giyim rehberine geçebilirsiniz.
              </p>

              <Link
                href="/blog/quzu-giyim"
                className="mt-8 inline-block rounded-full bg-[#ffdf62] px-8 py-4 font-black text-black"
              >
                QUZU GİYİM →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-[#742d4c]">
            İLGİLİ SAYFALAR
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-black tracking-[-.05em] md:text-6xl">
            Kadın giyim ve pantolon rehberi
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-2">

            {related.map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[105px] items-center justify-between rounded-[25px] border border-black/10 bg-[#f6f3ec] p-6 transition hover:-translate-y-1 hover:bg-[#ffdf62]"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-black text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong className="text-lg md:text-xl">
                    {title}
                  </strong>
                </div>

                <span className="text-2xl transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#171717] py-28 text-center text-white">
        <div className="mx-auto max-w-6xl px-5">

          <p className="text-xs font-black tracking-[.3em] text-[#ffdf62]">
            QUZU PANTOLON
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[.84] tracking-[-.06em] md:text-9xl">
            Pantolonu gördün.
            <span className="block text-[#ffdf62]">
              Görselini gönder.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Aradığınız Quzu pantolon modelinin ekran görüntüsünü
            göndererek ürün araştırmasına başlayın.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#ffdf62] px-10 py-5 font-black text-black"
          >
            WHATSAPP'TAN GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-white/30">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            Quzu markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>

        </div>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#171717] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#ffdf62] px-5 py-4 text-center text-sm font-black text-black"
        >
          QUZU PANTOLON SOR →
        </a>
      </div>

    </main>
  );
}
