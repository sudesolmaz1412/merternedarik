import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qustyle | QU Style Merter Kadın Giyim Ürünleri",
  description:
    "Qustyle ve QU Style Merter kadın giyim ürünleri için ürün araştırma rehberi. Elbise, pantolon ve ceket modellerini inceleyin, ürün görselini gönderin.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/qustyle",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Qustyle%20%C3%BCr%C3%BCn%C3%BC%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rselini%20g%C3%B6ndermek%20istiyorum.";

const links = [
  ["Qustyle Elbise Modelleri", "/blog/qustyle-elbise-modelleri"],
  ["Qustyle Merter Elbise", "/blog/qustyle-merter-elbise"],
  ["Qustyle Pantolon Modelleri", "/blog/qustyle-pantolon-modelleri"],
  ["QU Style Merter Ceket Modelleri", "/blog/qu-style-merter-ceket-modelleri"],
  ["QU Style Toptan Ceket", "/blog/qu-style-toptan-ceket"],
  ["QU Style Toptan Pantolon", "/blog/qu-style-toptan-pantolon"],
  ["QU Style Merter", "/blog/qu-style-merter"],
  ["Merter Kadın Giyim", "/blog/merter-kadin-giyim"],
  ["Merter Kadın Giyim Modelleri", "/blog/merter-kadin-giyim-modelleri"],
  ["Merter Toptan Kadın Giyim", "/blog/merter-toptan-kadin-giyim"],
  ["E-Ticaret İçin Kadın Giyim", "/blog/e-ticaret-icin-kadin-giyim"],
];

export default function QustylePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#171717] pb-20 md:pb-0">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link href="/" className="font-black tracking-[.17em]">
            ROTA TEDARİK
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-black md:flex">
            <Link href="/blog/qustyle-elbise-modelleri">
              ELBİSE
            </Link>
            <Link href="/blog/qustyle-pantolon-modelleri">
              PANTOLON
            </Link>
            <Link href="/blog/qu-style-merter-ceket-modelleri">
              CEKET
            </Link>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#6138ff] px-5 py-3 text-xs font-black text-white"
          >
            ÜRÜN SOR →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-[.9fr_1.1fr]">

          {/* METIN AYRI */}
          <div className="flex min-h-[650px] flex-col justify-center rounded-[42px] bg-[#6138ff] p-8 text-white md:p-14">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#dfff4f] px-4 py-2 text-xs font-black text-black">
                QUSTYLE
              </span>

              <span className="rounded-full border border-white/25 px-4 py-2 text-xs font-black">
                QU STYLE
              </span>

              <span className="rounded-full border border-white/25 px-4 py-2 text-xs font-black">
                MERTER
              </span>
            </div>

            <h1 className="mt-8 text-7xl font-black leading-[.82] tracking-[-.065em] md:text-[108px]">
              Qustyle
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-white/70">
              Qustyle kadın giyim ürünleri için elbise, pantolon ve ceket
              modellerini keşfedin. Beğendiğiniz ürünün fotoğrafını
              göndererek Merter'de ürün araştırması yapabilirsiniz.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#dfff4f] px-8 py-4 font-black text-black"
              >
                QUSTYLE ÜRÜNÜ GÖNDER →
              </a>

              <Link
                href="/blog/qu-style-merter"
                className="rounded-full border border-white/25 px-8 py-4 font-black"
              >
                QU STYLE MERTER →
              </Link>
            </div>
          </div>

          {/* JPG TEMİZ - ÜSTÜNDE HİÇBİR ŞEY YOK */}
          <div className="overflow-hidden rounded-[42px] bg-white">
            <img
              src="/images/quyeni.jpg"
              alt="Qustyle QU Style kadın giyim"
              className="h-full min-h-[650px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DIRECT INTENT */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-xs font-black tracking-[.28em] text-[#6138ff]">
              QUSTYLE
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-black leading-[.93] tracking-[-.055em] md:text-7xl">
              Qustyle kadın giyim
              <span className="block text-[#6138ff]">
                ürün araştırma rehberi
              </span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              Qustyle veya QU Style kadın giyim ürünlerini araştırırken
              beğendiğiniz elbise, pantolon veya ceket modelinin görselini
              bize iletebilirsiniz.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-black/60">
              Rota Tedarik, Merter kadın giyim piyasasında görsel üzerinden
              ürün ve benzer model araştırması yapmanıza yardımcı olur.
            </p>
          </div>
        </div>
      </section>

      {/* KATEGORİLER */}
      <section className="bg-[#171717] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-black tracking-[.28em] text-[#dfff4f]">
            QUSTYLE MODELLERİ
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
            Aradığın ürün grubuna geç.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <Link
              href="/blog/qustyle-elbise-modelleri"
              className="rounded-[32px] bg-[#ff5c58] p-8 transition hover:-translate-y-2"
            >
              <span className="text-xs font-black text-white/50">
                01 / ELBİSE
              </span>

              <h3 className="mt-20 text-4xl font-black leading-none">
                Qustyle
                <span className="block">Elbise</span>
              </h3>

              <p className="mt-5 text-white/65">
                Qustyle kadın elbise modelleri ve Merter ürün araştırması.
              </p>

              <span className="mt-10 block text-3xl">→</span>
            </Link>

            <Link
              href="/blog/qustyle-pantolon-modelleri"
              className="rounded-[32px] bg-[#72d5cb] p-8 text-black transition hover:-translate-y-2"
            >
              <span className="text-xs font-black text-black/40">
                02 / PANTOLON
              </span>

              <h3 className="mt-20 text-4xl font-black leading-none">
                Qustyle
                <span className="block">Pantolon</span>
              </h3>

              <p className="mt-5 text-black/55">
                Kadın pantolon modelleri ve görsel üzerinden ürün araştırması.
              </p>

              <span className="mt-10 block text-3xl">→</span>
            </Link>

            <Link
              href="/blog/qu-style-merter-ceket-modelleri"
              className="rounded-[32px] bg-[#ffbf36] p-8 text-black transition hover:-translate-y-2"
            >
              <span className="text-xs font-black text-black/40">
                03 / CEKET
              </span>

              <h3 className="mt-20 text-4xl font-black leading-none">
                Qustyle
                <span className="block">Ceket</span>
              </h3>

              <p className="mt-5 text-black/55">
                QU Style Merter kadın ceket modellerini araştırın.
              </p>

              <span className="mt-10 block text-3xl">→</span>
            </Link>

          </div>
        </div>
      </section>

      {/* ELBİSE */}
      <section className="bg-[#ffd6d2] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">

          {/* TEMİZ FOTO */}
          <div className="overflow-hidden rounded-[40px] bg-white">
            <img
              src="/images/qustyleelbise.jpg"
              alt="Qustyle elbise kadın giyim modeli"
              className="h-[650px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-black tracking-[.28em] text-[#a52235]">
              QUSTYLE ELBİSE
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
              Qustyle
              <span className="block text-[#a52235]">
                elbise modelleri
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Kadın elbise modeli araştırıyorsanız ürünün ekran görüntüsünü
              göndererek aradığınız model veya benzer ürünler için araştırma
              talebinde bulunabilirsiniz.
            </p>

            <Link
              href="/blog/qustyle-elbise-modelleri"
              className="mt-9 inline-block rounded-full bg-[#a52235] px-8 py-4 font-black text-white"
            >
              QUSTYLE ELBİSE MODELLERİ →
            </Link>
          </div>
        </div>
      </section>

      {/* PANTOLON */}
      <section className="bg-[#c9e8e4] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">

          <div>
            <p className="text-xs font-black tracking-[.28em] text-[#254f46]">
              QUSTYLE PANTOLON
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.92] tracking-[-.055em] md:text-7xl">
              Qustyle
              <span className="block text-[#254f46]">
                pantolon modelleri
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-black/60">
              Qustyle kadın pantolon modelleri için beğendiğiniz ürünün
              fotoğrafını göndererek Merter ürün araştırmasına başlayın.
            </p>

            <Link
              href="/blog/qustyle-pantolon-modelleri"
              className="mt-9 inline-block rounded-full bg-[#254f46] px-8 py-4 font-black text-white"
            >
              PANTOLON MODELLERİ →
            </Link>
          </div>

          {/* TEMİZ FOTO */}
          <div className="overflow-hidden rounded-[40px] bg-white">
            <img
              src="/images/buzmaviqu.jpg"
              alt="Qustyle kadın pantolon modeli"
              className="h-[650px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* MERTER */}
      <section className="bg-[#6138ff] py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-[#dfff4f]">
            QU STYLE MERTER
          </p>

          <div className="mt-6 grid gap-12 md:grid-cols-[1.25fr_.75fr]">
            <h2 className="text-5xl font-black leading-[.9] tracking-[-.055em] md:text-8xl">
              Merter'de
              <span className="block text-[#dfff4f]">
                ürün araştır.
              </span>
            </h2>

            <div>
              <p className="text-lg leading-8 text-white/70">
                Qustyle ürününü gördüyseniz ekran görüntüsünü WhatsApp
                üzerinden gönderin. Aradığınız ürün veya benzer seçenekler
                için Merter kadın giyim piyasasında araştırma yapabilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-[#dfff4f] px-8 py-4 font-black text-black"
              >
                ÜRÜN GÖRSELİ GÖNDER →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          <p className="text-xs font-black tracking-[.28em] text-[#6138ff]">
            QUSTYLE SAYFALARI
          </p>

          <h2 className="mt-5 max-w-5xl text-5xl font-black tracking-[-.05em] md:text-6xl">
            Qustyle ve Merter kadın giyim rehberi
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {links.map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[105px] items-center justify-between rounded-[25px] border border-black/10 bg-[#f7f3ed] p-6 transition hover:-translate-y-1 hover:bg-[#dfff4f]"
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

      {/* FINAL CTA */}
      <section className="bg-[#171717] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">

          <p className="text-xs font-black tracking-[.3em] text-[#dfff4f]">
            QUSTYLE
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-6xl font-black leading-[.84] tracking-[-.065em] md:text-9xl">
            Ürünü bul.
            <span className="block text-[#dfff4f]">
              Görseli gönder.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Beğendiğiniz Qustyle kadın giyim ürününü gönderin, Merter'de
            ürün araştırmasına başlayın.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-[#dfff4f] px-10 py-5 font-black text-black"
          >
            WHATSAPP'TAN GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-white/30">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            QU Style markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>

        </div>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#171717] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#dfff4f] px-5 py-4 text-center text-sm font-black text-black"
        >
          QUSTYLE ÜRÜNÜ SOR →
        </a>
      </div>

    </main>
  );
}
