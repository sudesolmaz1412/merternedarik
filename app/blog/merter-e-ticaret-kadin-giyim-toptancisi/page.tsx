import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter E-Ticaret Kadın Giyim Toptancısı | Rota Tedarik",
  description:
    "Merter e-ticaret kadın giyim toptancısı ve ürün tedarik seçenekleri. Online butik için elbise, pantolon, takım, ceket ve triko ürünlerini araştırın.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-e-ticaret-kadin-giyim-toptancisi",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20Merter%27den%20e-ticaret%20i%C3%A7in%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20g%C3%B6rseli%20g%C3%B6ndermek%20istiyorum.";

const models = [
  {
    title: "Toptan Elbise",
    href: "/blog/e-ticaret-icin-toptan-elbise",
    text: "E-ticaret mağazanız için Merter kadın elbise ürünlerini araştırın.",
  },
  {
    title: "Toptan Pantolon",
    href: "/blog/e-ticaret-icin-toptan-pantolon",
    text: "Online satış için kadın pantolon modellerini araştırın.",
  },
  {
    title: "Toptan Kadın Takım",
    href: "/blog/e-ticaret-icin-toptan-kadin-takim",
    text: "Kadın ikili takım ve farklı takım modellerini değerlendirin.",
  },
  {
    title: "Toptan Kadın Ceket",
    href: "/blog/e-ticaret-icin-toptan-kadin-ceket",
    text: "E-ticaret için kadın ceket modellerini araştırın.",
  },
  {
    title: "Toptan Triko",
    href: "/blog/e-ticaret-icin-toptan-triko",
    text: "Kazak, hırka ve kadın triko seçeneklerini araştırın.",
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
            MERTER'DEN ÜRÜN BUL →
          </a>
        </div>
      </header>

      <article>

        {/* HERO */}
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_.9fr] md:items-center md:py-24">
          <div>
            <p className="text-xs font-black tracking-[.24em] text-black/40">
              MERTER • E-TİCARET • TOPTAN KADIN GİYİM
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[.93] tracking-[-.05em] md:text-7xl">
              Merter E-Ticaret
              <span className="block">Kadın Giyim Toptancısı</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
              E-ticaret siteniz, pazaryeri mağazanız veya online butiğiniz
              için Merter'den toptan kadın giyim ürünü mü arıyorsunuz?
              Satmak istediğiniz modelin fotoğrafını gönderin. Merter'deki
              aynı veya benzer ürün seçeneklerini araştıralım.
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
          </div>

          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/merterdentedarik.jpeg"
              alt="Merter e-ticaret kadın giyim toptancısı"
              className="h-[410px] w-full rounded-[2rem] object-cover"
            />

            <div className="flex flex-col gap-3 pt-12">
              <img
                src="/images/kadinceket.jpeg"
                alt="Merter e-ticaret toptan kadın ceket"
                className="h-[190px] w-full rounded-[2rem] object-cover"
              />

              <img
                src="/images/kadinkazak.jpeg"
                alt="Merter e-ticaret toptan kadın triko"
                className="h-[190px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </section>

        {/* INFO */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["MERTER", "Toptan Kadın Giyim"],
              ["E-TİCARET", "Ürün Tedariği"],
              ["ONLINE BUTİK", "Model Araştırma"],
              ["WHATSAPP", "Ürün Gönder"],
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

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            MERTER'DEN E-TİCARETE ÜRÜN TEDARİĞİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Merter E-Ticaret Toptancısı Arayanlar İçin Kadın Giyim Tedariği
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online kadın giyim satışı yapan işletmeler için ürün tedariği,
            e-ticaret operasyonunun önemli parçalarından biridir. Merter'de
            kadın giyim alanında farklı ürün grupları ve toptan seçenekleri
            araştırılabilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Rota Tedarik ile aradığınız ürünü uzun uzun tarif etmek yerine
            ürünün fotoğrafını veya ekran görüntüsünü gönderebilirsiniz.
            Böylece araştırma doğrudan satmak istediğiniz model üzerinden
            yapılabilir.
          </p>

          <div className="mt-10 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-10">
            <p className="text-sm font-black tracking-[.15em]">
              ANA E-TİCARET REHBERİ
            </p>

            <h3 className="mt-3 text-3xl font-black">
              E-Ticaret İçin Kadın Giyim
            </h3>

            <p className="mt-4 leading-7 text-black/60">
              Online satış için kadın giyim ürünleri, ürün tedariği ve
              kategori seçenekleri hakkında ana rehberimizi inceleyin.
            </p>

            <Link
              href="/blog/e-ticaret-icin-kadin-giyim"
              className="mt-6 inline-block font-black underline underline-offset-4"
            >
              E-Ticaret İçin Kadın Giyim →
            </Link>
          </div>
        </section>

        {/* DARK CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MERTER E-TİCARET TEDARİK
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              E-ticarette satacağınız
              <span className="block">modeli bize gönderin.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Instagram, Trendyol, pazaryeri veya başka bir online mağazada
              gördüğünüz kadın giyim ürününün ekran görüntüsünü gönderin.
              Merter'deki aynı veya benzer seçenekleri araştıralım.
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

        {/* MODEL CLUSTER */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            MERTER E-TİCARET ÜRÜNLERİ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            E-Ticaret İçin Toptan Kadın Giyim Modelleri
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            Online mağazanız için ürün grubuna göre tedarik seçeneklerini
            inceleyebilirsiniz.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {models.map((model, index) => (
              <Link
                key={model.title}
                href={model.href}
                className={`rounded-[2rem] border border-black/10 bg-white p-8 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <span className="text-xs font-black tracking-[.16em] text-black/30">
                  MERTER • E-TİCARET • TOPTAN
                </span>

                <h3 className="mt-4 text-2xl font-black md:text-3xl">
                  {model.title}
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-black/55">
                  {model.text}
                </p>

                <span className="mt-7 block font-black">
                  ÜRÜNLERİ İNCELE →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SEO TEXT */}
        <section className="mx-auto max-w-4xl px-6 pb-20">
          <h2 className="text-4xl font-black">
            Merter'den E-Ticaret İçin Toptan Kadın Giyim
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            E-ticaret mağazasında kadın giyim satan işletmeler elbise,
            pantolon, takım, ceket ve triko gibi farklı ürün kategorilerinde
            tedarik araştırması yapabilir. Ürün seçimi mağazanın konsepti,
            müşteri kitlesi ve sezonuna göre değişebilir.
          </p>

          <Link
            href="/blog/e-ticaret-icin-kadin-giyim-toptancisi"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Kadın Giyim Toptancısı →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter E-Ticaret Ürün Tedarikçisi
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            E-ticaret için ürün arayan butik ve işletmeler, aradıkları modeli
            önceden belirleyerek ürün araştırmasını daha hedefli şekilde
            yapabilir. Satmak istediğiniz kadın giyim ürününün görselini
            göndererek araştırma talebi oluşturabilirsiniz.
          </p>

          <Link
            href="/blog/e-ticaret-kadin-giyim-tedarikcisi"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret Kadın Giyim Tedarikçisi →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Online Butik İçin Merter Toptancıları
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Online butik için Merter'den ürün araştırırken kadın giyim
            kategorilerine göre ilerleyebilirsiniz. Belirli bir ürün
            arıyorsanız model fotoğrafı üzerinden araştırma yapılabilir.
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
              MERTER E-TİCARET KÜMESİ
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Merter'den e-ticaret için ürün tedariği
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-black"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim-toptancisi"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret Kadın Giyim Toptancısı →
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
                E-Ticaret İçin Kadın Takım →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-kadin-ceket"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Kadın Ceket →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-triko"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Toptan Triko →
              </Link>

              <Link
                href="/blog/online-butik-icin-toptan-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Online Butik İçin Kadın Giyim →
              </Link>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Merter'den e-ticaret ürününüzü bulalım.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Satmak istediğiniz kadın giyim ürününün fotoğrafını
              WhatsApp'tan gönderin. Merter'deki aynı veya benzer ürün
              seçeneklerini araştıralım.
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

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1d2226] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-white px-5 py-4 text-center text-sm font-black text-black"
        >
          MERTER'DEN ÜRÜN BUL →
        </a>
      </div>

    </main>
  );
}
