import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Toptan Pantolon | Kadın Giyim Tedariği",
  description:
    "E-ticaret için toptan kadın pantolon modelleri arıyorsanız Merter'den ürün tedariği. Aradığınız pantolonun fotoğrafını gönderin, ürün seçeneklerini araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-toptan-pantolon",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20toptan%20kad%C4%B1n%20pantolon%20ar%C4%B1yorum.%20Pantolon%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const modeller = [
  ["Kumaş Pantolon", "Online mağazalar için farklı kesim ve sezonlarda kadın kumaş pantolon modelleri."],
  ["Bol Paça Pantolon", "Kadın giyim koleksiyonlarında değerlendirilebilecek bol paça pantolon seçenekleri."],
  ["Yüksek Bel Pantolon", "E-ticaret mağazaları için farklı renk ve modellerde yüksek bel kadın pantolonları."],
  ["Palazzo Pantolon", "Online kadın giyim satışında değerlendirilebilecek palazzo pantolon modelleri."],
  ["Kemerli Pantolon", "Farklı kombinlere uygun kemerli kadın pantolon modelleri."],
  ["Yeni Sezon Pantolon", "Mağaza koleksiyonunu güncellemek için yeni sezon kadın pantolon seçenekleri."],
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
            PANTOLON SOR →
          </a>
        </div>
      </header>

      <article>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • TOPTAN PANTOLON • MERTER
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.95] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin
            <span className="block">Toptan Pantolon</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret sitenizde veya online mağazanızda satmak için toptan
            kadın pantolon modelleri mi arıyorsunuz? Aradığınız modelin
            fotoğrafını WhatsApp'tan gönderin. Merter'deki aynı veya benzer
            ürün seçeneklerini araştıralım.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
            >
              PANTOLON FOTOĞRAFI GÖNDER →
            </a>

            <a
              href="#modeller"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              MODELLERE BAK
            </a>
          </div>
        </section>

        {/* HIZLI BİLGİ */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["TOPTAN", "Kadın Pantolon"],
              ["MERTER", "Ürün Tedariği"],
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

        {/* MODELLER */}
        <section id="modeller" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            TOPTAN KADIN PANTOLON
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Toptan Kadın Pantolon Modelleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Online kadın giyim mağazanız için farklı kesim, renk ve
            modellerde kadın pantolon ürünlerini değerlendirebilirsiniz.
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

        {/* WHATSAPP CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MODELİ GÖNDER
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Aradığınız pantolonu bize gösterin.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram'da, başka bir e-ticaret sitesinde veya sosyal
              medyada gördüğünüz kadın pantolon modelinin ekran görüntüsünü
              gönderin. Merter'deki aynı veya benzer ürünleri araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              FOTOĞRAFI WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>

        {/* SEO İÇERİK */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-4xl font-black">
            E-Ticaret İçin Toptan Kadın Pantolon Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            E-ticaret üzerinden kadın giyim satan işletmeler toptan kadın
            pantolon ürünlerini üreticilerden, toptancılardan ve tekstil
            ticaretinin yoğun olduğu bölgelerdeki tedarikçilerden temin
            edebilir. İstanbul Merter, kadın giyim toptan ticaretinin yoğun
            olduğu bölgelerden biridir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Satış İçin Toptan Pantolon
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İnternetten kadın pantolon satışı yaparken farklı modellerin yanı
            sıra beden, renk ve stok seçenekleri de önemlidir. Mağazanızın
            müşteri kitlesine uygun ürünleri seçerek koleksiyonunuzu
            oluşturabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptan Kadın Pantolon
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter'deki kadın pantolon seçeneklerini tek tek araştırmak
            yerine aradığınız modelin görselini paylaşabilirsiniz. Ürün
            fotoğrafı üzerinden aynı veya benzer pantolon modelleri için
            tedarik araştırması yapılabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İnternette Gördüğünüz Pantolon Modelini Bulun
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret mağazanızda satmak istediğiniz bir kadın pantolon
            modelini gördüyseniz ekran görüntüsünü alın ve WhatsApp üzerinden
            bize gönderin. Aradığınız modele yakın ürün seçeneklerini
            Merter'de araştıralım.
          </p>

          {/* CTA KUTUSU */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Hangi pantolonu satmak istiyorsunuz?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Beğendiğiniz kadın pantolon modelinin fotoğrafını gönderin.
              Merter'deki aynı veya benzer ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              PANTOLON FOTOĞRAFI GÖNDER →
            </a>
          </div>

          {/* İÇ LİNK AĞI */}
          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET İÇİN TOPTAN KADIN GİYİM
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Elbise →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/internetten-satmak-icin-kadin-giyim-urunleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                İnternetten Satmak İçin Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
                className="font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim Modelleri →
              </Link>
            </div>
          </div>
        </section>

        {/* SON CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              TOPTAN KADIN PANTOLON
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Modeli gönder. Biz araştıralım.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Online mağazanız için aradığınız kadın pantolon modelini
              WhatsApp'tan gönderin.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN PANTOLON SOR →
            </a>
          </div>
        </section>
      
        {/* SEO-KUME-IC-LINK */}
        <section className="border-t border-black/10 bg-[#f5f2eb]">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET İÇİN TOPTAN KADIN GİYİM
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Diğer kadın giyim ürünlerini inceleyin
            </h2>

            <div className="mt-7 grid gap-3 md:grid-cols-3">
              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold transition hover:border-black/30"
              >
                E-Ticaret İçin Toptan Elbise →
              </Link>
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold transition hover:border-black/30"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri →
              </Link>
              <Link
                href="/blog/internetten-kadin-giyim-satmak-icin-urun-nereden-alinir"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold transition hover:border-black/30"
              >
                Kadın Giyim Satmak İçin Ürün Nereden Alınır? →
              </Link>
            </div>
          </div>
        </section>

      </article>

      {/* MOBİL SABİT WHATSAPP */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          PANTOLON FOTOĞRAFINI WHATSAPP'TAN GÖNDER →
        </a>
      </div>
    </main>
  );
}
