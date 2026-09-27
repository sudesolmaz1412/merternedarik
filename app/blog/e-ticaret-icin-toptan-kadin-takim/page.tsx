import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Toptan Kadın Takım | Merter Kadın Giyim",
  description:
    "E-ticaret için toptan kadın takım modelleri arıyorsanız Merter'den ürün tedariği. Aradığınız takımın fotoğrafını gönderin, ürün seçeneklerini araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-toptan-kadin-takim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20toptan%20kad%C4%B1n%20tak%C4%B1m%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const modeller = [
  ["İkili Kadın Takım", "Online mağazalar için farklı renk ve modellerde ikili kadın takım seçenekleri."],
  ["Ceket Pantolon Takım", "Kadın giyim koleksiyonları için ceket ve pantolondan oluşan takım modelleri."],
  ["Bluz Pantolon Takım", "Online satışta değerlendirilebilecek bluz ve pantolon kombinli kadın takımları."],
  ["Yelek Pantolon Takım", "Yeni sezon koleksiyonlarında kullanılabilecek yelek pantolon kadın takım modelleri."],
  ["Günlük Kadın Takım", "Günlük kullanıma yönelik rahat ve kombinlenmiş kadın takım seçenekleri."],
  ["Yeni Sezon Takım", "E-ticaret mağazaları için yeni sezon kadın takım modelleri."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#1d2226] pb-20 md:pb-0">

      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-black tracking-[.16em]">
            ROTA TEDARİK
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-3 text-xs font-black text-white"
          >
            TAKIM SOR →
          </a>
        </div>
      </header>

      <article>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • TOPTAN KADIN TAKIM • MERTER
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.95] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin
            <span className="block">Toptan Kadın Takım</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Online mağazanızda satmak için toptan kadın takım modelleri
            arıyorsanız, beğendiğiniz ürünün fotoğrafını bize gönderin.
            Merter'deki aynı veya benzer kadın takım seçeneklerini
            araştıralım.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
            >
              TAKIM FOTOĞRAFI GÖNDER →
            </a>

            <a
              href="#modeller"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              MODELLERE BAK
            </a>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["TOPTAN", "Kadın Takım"],
              ["MERTER", "Ürün Araştırma"],
              ["E-TİCARET", "Online Satış"],
              ["TÜRKİYE", "Gönderim"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-r border-black/10 p-7 md:border-b-0"
              >
                <strong className="block text-lg">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="modeller" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            TOPTAN KADIN TAKIM MODELLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Kadın Takım Modelleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret kadın giyim koleksiyonunuz için farklı kadın takım
            modellerini değerlendirebilir, aradığınız modeli görsel üzerinden
            bize iletebilirsiniz.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modeller.map(([title, text], index) => (
              <div
                key={title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-black/55">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MODELİ GÖNDER
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Beğendiğiniz kadın takımı bize gösterin.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram, sosyal medya veya başka bir e-ticaret sitesinde
              gördüğünüz kadın takım modelinin ekran görüntüsünü gönderin.
              Merter'deki aynı veya benzer ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              TAKIM GÖRSELİNİ WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-4xl font-black">
            E-Ticaret İçin Toptan Kadın Takım Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            E-ticaret üzerinden kadın giyim satan işletmeler toptan kadın
            takım ürünlerini üreticilerden, toptancılardan ve tekstil
            ticaretinin yoğun olduğu bölgelerdeki tedarikçilerden temin
            edebilir. İstanbul Merter, kadın giyim toptan ticaretinin yoğun
            olduğu bölgelerden biridir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Satış İçin Toptan Kadın Takım
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online mağazanız için kadın takım seçerken modelin yanı sıra renk,
            beden, stok ve ürün seçeneklerini de değerlendirebilirsiniz.
            Ceket pantolon, yelek pantolon ve farklı ikili takım modelleri
            kadın giyim koleksiyonlarına eklenebilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptan Kadın Takım
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter'deki ürünleri tek tek araştırmak yerine aradığınız kadın
            takım modelinin görselini paylaşabilirsiniz. Böylece aynı veya
            benzer ürünlere yönelik tedarik araştırması yapılabilir.
          </p>

          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Aradığınız kadın takımın fotoğrafını gönderin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              E-ticaret mağazanızda satmak istediğiniz modeli WhatsApp'tan
              gönderin. Merter'deki ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              TAKIM FOTOĞRAFI GÖNDER →
            </a>
          </div>

          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET İÇİN TOPTAN KADIN GİYİM
            </p>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                E-Ticaret İçin Toptan Elbise →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-pantolon"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                E-Ticaret İçin Toptan Pantolon →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/internetten-satmak-icin-kadin-giyim-urunleri"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold"
              >
                İnternetten Satmak İçin Kadın Giyim Ürünleri →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              TOPTAN KADIN TAKIM
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Modeli gönder. Biz araştıralım.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Online mağazanız için aradığınız kadın takım modelini
              WhatsApp'tan gönderin.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN KADIN TAKIM SOR →
            </a>
          </div>
        </section>
      </article>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          TAKIM FOTOĞRAFINI WHATSAPP'TAN GÖNDER →
        </a>
      </div>
    </main>
  );
}
