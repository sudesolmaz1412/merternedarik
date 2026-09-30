import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Kadın Giyim Toptancısı | Rota Tedarik",
  description:
    "E-ticaret için kadın giyim toptancısı arayan butik ve online mağazalara ürün tedariği. Aradığınız kadın giyim modelini WhatsApp'tan gönderin.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-kadin-giyim-toptancisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20kad%C4%B1n%20giyim%20toptanc%C4%B1s%C4%B1%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const products = [
  ["Kadın Elbise", "/blog/e-ticaret-icin-toptan-elbise"],
  ["Kadın Pantolon", "/blog/e-ticaret-icin-toptan-pantolon"],
  ["Kadın Takım", "/blog/e-ticaret-icin-toptan-kadin-takim"],
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
            ÜRÜN SOR →
          </a>
        </div>
      </header>

      <article>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            E-TİCARET • TOPTAN KADIN GİYİM • TEDARİK
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.94] tracking-[-.045em] md:text-7xl">
            E-Ticaret İçin
            <span className="block">Kadın Giyim Toptancısı</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            E-ticaret siteniz veya online butiğiniz için kadın giyim
            toptancısı mı arıyorsunuz? Satmak istediğiniz ürünün fotoğrafını
            bize gönderin. Merter'deki aynı veya benzer ürün seçeneklerini
            araştırarak tedarik sürecinde yardımcı olalım.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
            >
              ÜRÜN FOTOĞRAFI GÖNDER →
            </a>

            <Link
              href="/blog/e-ticaret-icin-kadin-giyim"
              className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
            >
              E-TİCARET KADIN GİYİM →
            </Link>
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["TOPTAN", "Kadın Giyim"],
              ["E-TİCARET", "Ürün Tedariği"],
              ["MERTER", "Ürün Araştırma"],
              ["WHATSAPP", "Model Gönder"],
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

        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ONLINE SATIŞ İÇİN TEDARİK
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Toptan Kadın Giyim Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            İnternetten kadın giyim satan işletmeler ürünlerini üreticiler,
            toptancılar ve tedarikçiler üzerinden temin edebilir. İstanbul
            Merter, hazır giyim ve kadın giyim toptan ticaretinin yoğun olduğu
            bölgelerden biridir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Aradığınız model belliyse ürünün ekran görüntüsünü veya
            fotoğrafını bize gönderebilirsiniz. Böylece ürün araştırmasını
            doğrudan satmak istediğiniz model üzerinden başlatabiliriz.
          </p>

          <Link
            href="/blog/e-ticaret-icin-kadin-giyim"
            className="mt-7 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Kadın Giyim Ana Rehberi →
          </Link>
        </section>

        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              ÜRÜNÜ GÖSTERİN
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Toptancı aramak yerine
              <span className="block">aradığınız modeli gönderin.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram'da, pazaryerinde veya başka bir mağazada gördüğünüz
              kadın giyim ürününü WhatsApp'tan gönderin. Merter'deki aynı
              veya benzer ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN ÜRÜN GÖNDER →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            TOPTAN KADIN GİYİM
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            E-Ticaret İçin Kadın Giyim Ürünleri
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {products.map(([title, href]) => (
              <Link
                key={title}
                href={href}
                className="rounded-3xl border border-black/10 bg-white p-8 transition hover:border-black/30"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  TOPTAN
                </span>

                <h3 className="mt-4 text-2xl font-black">{title}</h3>

                <p className="mt-4 leading-7 text-black/55">
                  Online mağazanız için {title.toLocaleLowerCase("tr-TR")}{" "}
                  modellerini araştırın.
                </p>

                <span className="mt-8 block font-black">İNCELE →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="text-4xl font-black">
            Kadın Giyim Toptancısı Seçerken Nelere Bakılır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            E-ticaret için ürün tedarik ederken model seçeneklerinin yanında
            stok, beden, sezon ve sipariş koşulları da değerlendirilmelidir.
            Özellikle online satışta ürünün tekrar tedarik edilebilirliği
            operasyon planlamasında önem taşıyabilir.
          </p>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Butik İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online butik için elbise, pantolon, takım, triko, ceket ve gömlek
            gibi farklı kategorilerden ürün araştırabilirsiniz. Mağazanızın
            hedef kitlesine uygun ürün gruplarını seçerek koleksiyonunuzu
            oluşturabilirsiniz.
          </p>

          <Link
            href="/blog/online-butik-icin-toptan-kadin-giyim"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Online Butik İçin Toptan Kadın Giyim →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Kadın Giyim E-Ticaret Ürünleri
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret mağazanız için satılacak ürünleri kategori bazında
            araştırabilir veya beğendiğiniz belirli bir model üzerinden ürün
            tedariğine başlayabilirsiniz.
          </p>

          <Link
            href="/blog/kadin-giyim-e-ticaret-urunleri"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Kadın Giyim E-Ticaret Ürünleri →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Kadın Giyim Toptancıları
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter'deki kadın giyim toptan seçeneklerini araştırmak
            istiyorsanız ürün görselinizi bize iletebilirsiniz. Aradığınız
            modele göre ürün seçeneklerini araştırabiliriz.
          </p>

          <Link
            href="/blog/merter-toptancilar"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Merter Toptancılar →
          </Link>

          <div className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM KÜMESİ
            </p>

            <h2 className="mt-4 text-3xl font-black">
              E-ticaret için kadın giyim rehberleri
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-black"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-kadin-giyim-tedarikcisi"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Kadın Giyim Tedarikçisi →
              </Link>

              <Link
                href="/blog/kadin-giyim-e-ticaret-urunleri"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Kadın Giyim E-Ticaret Ürünleri →
              </Link>

              <Link
                href="/blog/online-butik-icin-toptan-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Online Butik İçin Toptan Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-giyim-modelleri"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Toptan Kadın Giyim Modelleri →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-elbise"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Toptan Elbise →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-pantolon"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Toptan Pantolon →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-takim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Toptan Kadın Takım →
              </Link>
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Satacağınız modeli gönderin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              E-ticaret mağazanız için aradığınız kadın giyim ürününün
              fotoğrafını WhatsApp'tan gönderin. Ürün seçeneklerini
              araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              WHATSAPP'TAN ÜRÜN BUL →
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
          KADIN GİYİM ÜRÜNÜ BUL →
        </a>
      </div>
    </main>
  );
}
