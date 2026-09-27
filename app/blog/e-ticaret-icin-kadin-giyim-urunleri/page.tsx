import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Kadın Giyim Ürünleri | Toptan Tedarik",
  description:
    "E-ticaret için kadın giyim ürünleri arıyorsanız Merter'den toptan ürün tedariği. Elbise, takım, bluz, ceket, triko ve yeni sezon kadın giyim modelleri.",
  keywords: [
    "e ticaret için kadın giyim ürünleri",
    "e ticaret kadın giyim",
    "e ticaret için toptan kadın giyim",
    "kadın giyim ürün tedariği",
    "online satış için kadın giyim",
    "merter kadın giyim",
    "toptan kadın giyim",
  ],
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-kadin-giyim-urunleri",
  },
  openGraph: {
    title: "E-Ticaret İçin Kadın Giyim Ürünleri",
    description:
      "Online mağazanızda satmak istediğiniz kadın giyim ürününü gönderin. Merter'deki tedarik seçeneklerini araştıralım.",
    url: "https://www.merterdentedarik.com/blog/e-ticaret-icin-kadin-giyim-urunleri",
    type: "article",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20ma%C4%9Fazam%20i%C3%A7in%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const urunler = [
  {
    no: "01",
    title: "Kadın Elbise",
    text: "Online mağazalar için günlük, şık, sezonluk ve farklı müşteri gruplarına hitap eden kadın elbise modelleri.",
  },
  {
    no: "02",
    title: "Kadın Takım",
    text: "İkili takım, ceket-pantolon ve kombin ürünleri e-ticaret kadın giyim koleksiyonlarında değerlendirilebilir.",
  },
  {
    no: "03",
    title: "Bluz & Gömlek",
    text: "Farklı pantolon ve eteklerle kombinlenebilen kadın bluz ve gömlek modelleri.",
  },
  {
    no: "04",
    title: "Triko",
    text: "Kazak, hırka ve farklı triko modelleri özellikle sonbahar-kış koleksiyonları için değerlendirilebilir.",
  },
  {
    no: "05",
    title: "Kadın Ceket",
    text: "Kombin ve sezon geçişlerinde kullanılabilecek farklı kadın ceket modelleri.",
  },
  {
    no: "06",
    title: "Pantolon & Etek",
    text: "Online kadın giyim mağazalarında temel kategori oluşturabilecek alt giyim ürünleri.",
  },
  {
    no: "07",
    title: "Dış Giyim",
    text: "Mont, kaban ve sezonluk dış giyim modelleriyle ürün koleksiyonu genişletilebilir.",
  },
  {
    no: "08",
    title: "Yeni Sezon Ürünleri",
    text: "E-ticaret mağazanızı güncel tutmak için yeni gelen kadın giyim modellerini takip edebilirsiniz.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#1d2226] pb-20 md:pb-0">

      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-black tracking-[.17em]">
            ROTA TEDARİK
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-3 text-xs font-black text-white"
          >
            WHATSAPP →
          </a>
        </div>
      </header>

      <article>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • KADIN GİYİM • TOPTAN TEDARİK
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.95] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin
            <span className="block">Kadın Giyim Ürünleri</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret mağazanızda satmak için kadın giyim ürünleri
            arıyorsanız elbise, takım, ceket, triko, bluz ve yeni sezon
            modelleri için Merter'deki tedarik seçeneklerini
            araştırabilirsiniz.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
            >
              ÜRÜN FOTOĞRAFINI GÖNDER →
            </a>

            <a
              href="#urunler"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              ÜRÜNLERE BAK
            </a>
          </div>
        </section>

        {/* HIZLI BİLGİ */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["E-TİCARET", "Kadın Giyim"],
              ["MERTER", "Ürün Tedariği"],
              ["TOPTAN", "Kadın Giyim"],
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

        {/* ÜRÜNLER */}
        <section id="urunler" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ÜRÜN KATEGORİLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Hangi Kadın Giyim Ürünleri Alınabilir?
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret kadın giyim mağazanızın hedef kitlesine göre farklı
            ürün gruplarından bir koleksiyon oluşturabilirsiniz.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {urunler.map((urun) => (
              <div
                key={urun.title}
                className="rounded-3xl border border-black/10 bg-white p-7"
              >
                <span className="text-xs font-black text-black/25">
                  {urun.no}
                </span>

                <h3 className="mt-5 text-2xl font-black">
                  {urun.title}
                </h3>

                <p className="mt-4 leading-7 text-black/55">
                  {urun.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHATSAPP DÖNÜŞÜM */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              ÜRÜNÜ SEN SEÇ
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              İnternette gördüğün ürünü bize gönder.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              E-ticaret sitenizde satmak istediğiniz kadın giyim ürününün
              fotoğrafını WhatsApp üzerinden gönderin. Merter'deki aynı veya
              benzer ürün seçeneklerini araştırıp tedarik sürecini
              başlatalım.
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
            E-Ticaret İçin Kadın Giyim Ürünleri Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            E-ticaret için kadın giyim ürünleri üreticilerden,
            toptancılardan ve tekstil ticaretinin yoğun olduğu bölgelerdeki
            tedarikçilerden temin edilebilir. İstanbul Merter, kadın giyim
            toptan ticaretinin yoğun olduğu bölgelerden biridir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Online mağazanız için ürün araştırırken yalnızca fiyat değil;
            model, beden, renk seçenekleri, stok durumu ve gönderim süreci
            gibi kriterleri de değerlendirmek gerekir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Satış İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online satış için toptan kadın giyim ürünleri seçerken
            mağazanızın müşteri profilini dikkate alabilirsiniz. Birbiriyle
            kombinlenebilen ürünlerden oluşan bir koleksiyon oluşturmak,
            mağazanın ürün yapısını daha düzenli hale getirebilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret Kadın Giyim Tedarikçisi Nasıl Bulunur?
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Aradığınız ürün grubunu veya belirli bir modeli önceden
            belirlemek tedarikçi araştırmasını kolaylaştırabilir. Elinizde
            ürün görseli varsa fotoğraf üzerinden aynı veya benzer
            modeller için araştırma yapılabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter'den E-Ticaret İçin Kadın Giyim Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter'deki farklı kadın giyim tedarik seçeneklerini tek tek
            araştırmak yerine aradığınız ürünün görselini veya ürün
            listenizi paylaşabilirsiniz. Böylece ihtiyacınıza uygun
            seçeneklere odaklanılabilir.
          </p>

          {/* CTA */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              E-ticaret sitende satmak istediğin ürünü gönder.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Kadın giyim ürününün ekran görüntüsünü veya fotoğrafını
              WhatsApp'tan gönder. Merter'deki ürün seçeneklerini
              araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              ÜRÜN FOTOĞRAFI GÖNDER →
            </a>
          </div>

          {/* İÇ LİNKLER */}
          <div className="mt-16 border-t border-black/10 pt-10">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM REHBERLERİ
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <Link
                href="/blog/e-ticaret-sitesinde-satilacak-kadin-giyim-urunleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret Sitesinde Satılacak Kadın Giyim Ürünleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Giyim Modelleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri-nereden-alinir"
                className="border-b border-black/10 pb-4 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri Nereden Alınır? →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-giyim-tedarikcisi"
                className="font-bold"
              >
                E-Ticaret İçin Toptan Giyim Tedarikçisi →
              </Link>
            </div>
          </div>
        </section>

        {/* SON CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              E-TİCARET KADIN GİYİM
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Ürünü bul. Mağazana ekle.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Aradığınız kadın giyim ürününün fotoğrafını gönderin,
              Merter'deki tedarik seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN ÜRÜN SOR →
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
                href="/blog/e-ticaret-icin-toptan-pantolon"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold transition hover:border-black/30"
              >
                E-Ticaret İçin Toptan Pantolon →
              </Link>
              <Link
                href="/blog/internetten-satmak-icin-kadin-giyim-urunleri"
                className="rounded-2xl border border-black/10 bg-white p-5 font-bold transition hover:border-black/30"
              >
                İnternetten Satmak İçin Kadın Giyim Ürünleri →
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
          ÜRÜN FOTOĞRAFINI WHATSAPP'TAN GÖNDER →
        </a>
      </div>
    </main>
  );
}
