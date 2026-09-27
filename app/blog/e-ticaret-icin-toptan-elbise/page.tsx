import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Toptan Elbise | Kadın Giyim Tedariği",
  description:
    "E-ticaret için toptan elbise arayan işletmelere Merter'den kadın elbise tedariği. Aradığınız elbise modelinin fotoğrafını gönderin, ürün seçeneklerini araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-toptan-elbise",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20toptan%20kad%C4%B1n%20elbise%20ar%C4%B1yorum.%20Elbise%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const modeller = [
  ["Günlük Elbise", "Online mağazalar için günlük kullanıma uygun kadın elbise modelleri."],
  ["Şık Elbise", "Özel gün ve davet koleksiyonlarında değerlendirilebilecek elbise modelleri."],
  ["Maxi Elbise", "Uzun ve maxi kadın elbise modelleri için toptan ürün seçenekleri."],
  ["Midi Elbise", "Farklı sezon ve kombinlere uygun midi kadın elbise modelleri."],
  ["Yeni Sezon Elbise", "E-ticaret mağazanızı güncel tutabilecek yeni sezon kadın elbiseleri."],
  ["Butik Elbise", "Online butik ve kadın giyim mağazaları için farklı elbise modelleri."],
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
            ELBİSE SOR →
          </a>
        </div>
      </header>

      <article>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • TOPTAN ELBİSE • MERTER
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.95] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin
            <span className="block">Toptan Elbise</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret sitenizde veya online mağazanızda satmak için toptan
            kadın elbise mi arıyorsunuz? Aradığınız elbise modelinin
            fotoğrafını bize gönderin. Merter'deki aynı veya benzer ürün
            seçeneklerini araştıralım.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
            >
              ELBİSE FOTOĞRAFI GÖNDER →
            </a>

            <a
              href="#modeller"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              ELBİSE MODELLERİ
            </a>
          </div>
        </section>

        {/* BİLGİ ŞERİDİ */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["TOPTAN", "Kadın Elbise"],
              ["MERTER", "Ürün Tedariği"],
              ["E-TİCARET", "Online Satış"],
              ["TÜRKİYE", "Gönderim"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border-b border-r border-black/10 p-7 md:border-b-0"
              >
                <strong className="block text-lg">{title}</strong>
                <span className="mt-1 block text-sm text-black/45">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MODELLER */}
        <section id="modeller" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            TOPTAN ELBİSE MODELLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Kadın Elbise Modelleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Online kadın giyim mağazanız için hedef kitlenize ve sezona göre
            farklı toptan elbise modellerini değerlendirebilirsiniz.
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

        {/* ANA CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MODELİ GÖNDER
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Satmak istediğiniz elbiseyi bize gösterin.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram'da, sosyal medyada veya başka bir e-ticaret
              mağazasında gördüğünüz elbisenin ekran görüntüsünü WhatsApp'tan
              gönderin. Merter'deki ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              ELBİSE GÖRSELİNİ WHATSAPP'TAN GÖNDER →
            </a>
          </div>
        </section>

        {/* SEO METNİ */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-4xl font-black">
            E-Ticaret İçin Toptan Elbise Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            E-ticaret üzerinden kadın giyim satan işletmeler toptan elbise
            ürünlerini üreticilerden, toptancılardan ve tekstil ticaretinin
            yoğun olduğu bölgelerdeki tedarikçilerden temin edebilir.
            İstanbul Merter kadın giyim toptan ticaretinin yoğun olduğu
            bölgelerden biridir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Mağaza İçin Toptan Kadın Elbise
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online mağazanız için elbise seçerken modelin yanı sıra beden,
            renk, stok ve sipariş seçeneklerini de değerlendirebilirsiniz.
            Hedef kitlenize uygun farklı elbise modelleriyle mağazanızın
            koleksiyonunu oluşturabilirsiniz.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptan Kadın Elbise
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter'deki farklı kadın giyim ürünlerini tek tek araştırmak
            yerine aradığınız elbise modelinin fotoğrafını paylaşabilirsiniz.
            Aynı veya benzer ürün seçenekleri üzerinden tedarik araştırması
            yapılabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            İnternetten Satmak İçin Elbise Nasıl Bulunur?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            İnternetten satmak istediğiniz bir elbise modelini gördüğünüzde
            ürünün ekran görüntüsünü alabilirsiniz. Görseli WhatsApp
            üzerinden göndererek Merter'deki aynı veya benzer modeller için
            ürün araştırmasını başlatabilirsiniz.
          </p>

          {/* DÖNÜŞÜM KUTUSU */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Aradığınız elbisenin fotoğrafını gönderin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              E-ticaret mağazanızda satmak istediğiniz elbise modelini
              WhatsApp'tan gönderin. Merter'deki ürün seçeneklerini
              araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              ELBİSE FOTOĞRAFI GÖNDER →
            </a>
          </div>

          {/* İÇ LİNKLER */}
          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM
            </p>

            <div className="mt-7 flex flex-col gap-4">
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
                href="/blog/internetten-kadin-giyim-satmak-icin-urun-nereden-alinir"
                className="border-b border-black/10 pb-4 font-bold"
              >
                İnternetten Kadın Giyim Satmak İçin Ürün Nereden Alınır? →
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

        {/* ALT CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              TOPTAN ELBİSE TEDARİĞİ
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Modeli göster. Biz araştıralım.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Aradığınız kadın elbise modelinin fotoğrafını WhatsApp'tan
              gönderin.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN ELBİSE SOR →
            </a>
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
          ELBİSE FOTOĞRAFINI WHATSAPP'TAN GÖNDER →
        </a>
      </div>
    </main>
  );
}
