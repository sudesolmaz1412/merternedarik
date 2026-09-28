import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Butik İçin Toptan Kadın Giyim | Ürün Tedariği",
  description:
    "Online butik için toptan kadın giyim ürünleri. Elbise, pantolon, kadın takım ve yeni sezon ürünleri için aradığınız modelin fotoğrafını gönderin.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/online-butik-icin-toptan-kadin-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20online%20buti%C4%9Fim%20i%C3%A7in%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCnleri%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const categories = [
  {
    title: "Toptan Elbise",
    href: "/blog/e-ticaret-icin-toptan-elbise",
    text: "Online butiğiniz için farklı kadın elbise modellerini araştırın.",
  },
  {
    title: "Toptan Pantolon",
    href: "/blog/e-ticaret-icin-toptan-pantolon",
    text: "Kadın pantolon modelleriyle online mağaza koleksiyonunuzu genişletin.",
  },
  {
    title: "Toptan Kadın Takım",
    href: "/blog/e-ticaret-icin-toptan-kadin-takim",
    text: "İkili takım ve farklı kadın takım modellerini değerlendirin.",
  },
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
            ÜRÜN BUL →
          </a>
        </div>
      </header>

      <article>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-xs font-black tracking-[.24em] text-black/40">
            ONLINE BUTİK • KADIN GİYİM • TOPTAN TEDARİK
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[.94] tracking-[-.045em] md:text-7xl">
            Online Butik İçin
            <span className="block">Toptan Kadın Giyim</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            Online butik açtıysanız veya mevcut mağazanız için yeni kadın
            giyim ürünleri arıyorsanız, satmak istediğiniz modelin fotoğrafını
            bize gönderin. Merter'deki aynı veya benzer ürün seçeneklerini
            araştıralım.
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
              E-TİCARET İÇİN KADIN GİYİM →
            </Link>
          </div>
        </section>

        {/* INFO */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["ONLINE BUTİK", "Kadın Giyim"],
              ["TOPTAN", "Ürün Tedariği"],
              ["MERTER", "Ürün Araştırma"],
              ["WHATSAPP", "Model Gönder"],
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

        {/* INTRO */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ONLINE SATIŞ İÇİN ÜRÜN TEDARİĞİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Online Butik İçin Kadın Giyim Ürünleri Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online butik için kadın giyim ürünü seçerken mağazanızın hedef
            kitlesi, ürün kategorileri, sezon ve stok ihtiyaçları birlikte
            değerlendirilebilir. Toptan ürün tedariği için üreticiler,
            toptancılar ve tekstil bölgelerindeki tedarik seçenekleri
            araştırılabilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            İstanbul Merter, kadın giyim toptan ticaretinin yoğun olduğu
            bölgelerden biridir. Satmak istediğiniz modeli belirlediyseniz
            ürünün fotoğrafını bize göndererek aynı veya benzer ürünler için
            araştırma başlatabilirsiniz.
          </p>

          <Link
            href="/blog/e-ticaret-icin-kadin-giyim"
            className="mt-7 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Kadın Giyim →
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              BUTİĞİNİZ İÇİN ÜRÜN BULUN
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Satmak istediğiniz modeli
              <span className="block">WhatsApp'tan gönderin.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram, sosyal medya, pazaryeri veya başka bir online
              mağazada gördüğünüz kadın giyim ürününün ekran görüntüsünü
              gönderin. Merter'deki ürün seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              ÜRÜN GÖRSELİNİ GÖNDER →
            </a>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            ONLINE BUTİK ÜRÜNLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Online Butikte Satılabilecek Kadın Giyim Ürünleri
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="rounded-3xl border border-black/10 bg-white p-8 transition hover:border-black/30"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  ONLINE BUTİK
                </span>

                <h3 className="mt-4 text-2xl font-black">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-black/55">
                  {category.text}
                </p>

                <span className="mt-8 block font-black">
                  İNCELE →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Triko", "Ceket", "Gömlek"].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-black/10 bg-[#ebe7dd] p-8"
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  TOPTAN KADIN GİYİM
                </span>

                <h3 className="mt-4 text-2xl font-black">
                  {item}
                </h3>

                <p className="mt-4 leading-7 text-black/55">
                  Online butiğiniz için aradığınız {item.toLocaleLowerCase("tr-TR")}{" "}
                  modelinin görselini bize gönderebilirsiniz.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO BODY */}
        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="text-4xl font-black">
            Online Butik İçin Toptan Ürün Nereden Alınır?
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online butik sahipleri ürünlerini üreticilerden, toptancılardan
            veya tedarikçilerden temin edebilir. Kadın giyim sektöründe ürün
            araştırırken satılacak kategori, hedef müşteri kitlesi ve stok
            ihtiyacı dikkate alınabilir.
          </p>

          <Link
            href="/blog/internetten-kadin-giyim-satmak-icin-urun-nereden-alinir"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Kadın Giyim Satmak İçin Ürün Nereden Alınır? →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret mağazasında kadın giyim satarken farklı ürün gruplarıyla
            koleksiyon oluşturabilirsiniz. Elbise, pantolon, takım, triko,
            ceket ve gömlek gibi kategoriler mağazanızın konseptine göre
            değerlendirilebilir.
          </p>

          <Link
            href="/blog/e-ticaret-icin-kadin-giyim"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Kadın Giyim Rehberi →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Butik İçin Kadın Giyim Tedarikçisi
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online mağazanız için düzenli ürün araştırması yaparken kadın
            giyim tedarik seçeneklerini değerlendirebilirsiniz. Aradığınız
            modelin görselini göndererek ürün bazlı araştırma
            başlatabilirsiniz.
          </p>

          <Link
            href="/blog/e-ticaret-kadin-giyim-tedarikcisi"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret Kadın Giyim Tedarikçisi →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter'den Online Butik İçin Ürün Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter'deki kadın giyim seçeneklerini araştırmak için İstanbul'a
            gelmeden de ürün görselinizi paylaşabilirsiniz. Aradığınız
            modele göre ürün seçenekleri araştırılabilir.
          </p>

          <Link
            href="/blog/merter-toptancilar"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Merter Toptancılar →
          </Link>

          {/* CLUSTER */}
          <div className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Online satış için kadın giyim rehberleri
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
                href="/blog/e-ticaret-icin-kadin-giyim-urunleri"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Kadın Giyim Ürünleri →
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

              <Link
                href="/blog/internetten-satmak-icin-kadin-giyim-urunleri"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                İnternetten Satılacak Kadın Giyim →
              </Link>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Butiğinizde ne satmak istiyorsunuz?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Beğendiğiniz kadın giyim ürününün fotoğrafını gönderin.
              Merter'deki aynı veya benzer ürün seçeneklerini araştıralım.
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
        </section>
      </article>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          BUTİĞİM İÇİN ÜRÜN BUL →
        </a>
      </div>
    </main>
  );
}
