import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Ticaret İçin Toptan Kadın Ceket | Merter Tedarik",
  description:
    "E-ticaret için toptan kadın ceket modelleri. Online butik ve mağazanız için aradığınız ceket görselini gönderin, Merter'den ürün araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/e-ticaret-icin-toptan-kadin-ceket",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20e-ticaret%20i%C3%A7in%20toptan%20kad%C4%B1n%20ceket%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20foto%C4%9Fraf%C4%B1%20g%C3%B6ndermek%20istiyorum.";

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
            CEKET BUL →
          </a>
        </div>
      </header>

      <article>

        {/* HERO */}
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="text-xs font-black tracking-[.24em] text-black/40">
              E-TİCARET • TOPTAN CEKET • MERTER
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[.94] tracking-[-.045em] md:text-7xl">
              E-Ticaret İçin
              <span className="block">Toptan Kadın Ceket</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-black/60">
              Online mağazanız veya butiğiniz için toptan kadın ceket
              modelleri mi arıyorsunuz? Satmak istediğiniz ceket modelinin
              fotoğrafını gönderin. Merter'deki aynı veya benzer ürün
              seçeneklerini araştıralım.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black px-7 py-4 text-sm font-black text-white"
              >
                CEKET FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="rounded-full border border-black/15 bg-white px-7 py-4 text-sm font-black"
              >
                E-TİCARET KADIN GİYİM →
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-sm">
            <img
              src="/images/kadinceket.jpeg"
              alt="E-ticaret için toptan kadın ceket modelleri"
              className="h-[500px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </section>

        {/* INFO */}
        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {[
              ["CEKET", "Kadın Giyim"],
              ["TOPTAN", "Ürün Tedariği"],
              ["E-TİCARET", "Online Satış"],
              ["MERTER", "Ürün Araştırma"],
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

        {/* CONTENT */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-black tracking-[.22em] text-black/40">
            TOPTAN KADIN CEKET
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            E-Ticaret İçin Kadın Ceket Modelleri
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Kadın ceket modelleri online butik ve kadın giyim mağazalarının
            koleksiyonlarında değerlendirilebilecek ürün gruplarından biridir.
            Klasik, günlük, oversize ve farklı kesimlerdeki ceket modelleri
            mağazanın hedef kitlesine göre seçilebilir.
          </p>

          <p className="mt-5 text-lg leading-8 text-black/65">
            Beğendiğiniz kadın ceket modelini sosyal medyada, pazaryerinde
            veya başka bir mağazada gördüyseniz ekran görüntüsünü
            WhatsApp'tan gönderebilirsiniz. Ürün araştırmasını doğrudan
            görsel üzerinden yapabiliriz.
          </p>

          <Link
            href="/blog/e-ticaret-icin-kadin-giyim"
            className="mt-7 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret İçin Kadın Giyim →
          </Link>
        </section>

        {/* DARK CTA */}
        <section className="bg-[#1d2226] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-xs font-black tracking-[.22em] text-white/40">
              MODELİ GÖNDER
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Satmak istediğiniz ceketi
              <span className="block">bize gösterin.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
              Ürün ismi veya kodu bilmenize gerek yok. Beğendiğiniz kadın
              ceket modelinin ekran görüntüsünü gönderin. Merter'deki aynı
              veya benzer seçenekleri araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-black text-black"
            >
              WHATSAPP'TAN CEKET GÖNDER →
            </a>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-4xl font-black">
            Online Butik İçin Toptan Kadın Ceket
          </h2>

          <p className="mt-7 text-lg leading-8 text-black/65">
            Online butik için kadın ceket tedarik ederken mağazanın müşteri
            kitlesi, sezon, beden seçenekleri ve stok ihtiyacı
            değerlendirilebilir. Ceket kategorisi farklı üst giyim ve alt
            giyim ürünleriyle birlikte koleksiyona dahil edilebilir.
          </p>

          <Link
            href="/blog/online-butik-icin-toptan-kadin-giyim"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Online Butik İçin Toptan Kadın Giyim →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            Merter Toptan Kadın Ceket
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Merter'de farklı kadın giyim ürün gruplarıyla birlikte kadın
            ceket seçenekleri de araştırılabilir. Belirli bir model
            arıyorsanız fotoğrafını göndererek ürün araştırmasını
            hızlandırabilirsiniz.
          </p>

          <Link
            href="/blog/merter-toptan-kadin-ceket"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            Merter Toptan Kadın Ceket →
          </Link>

          <h2 className="mt-14 text-3xl font-black md:text-4xl">
            E-Ticaret İçin Kadın Giyim Ürün Tedariği
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Kadın ceketin yanında elbise, pantolon, takım ve triko gibi
            kategorilerde de ürün araştırabilirsiniz. Böylece online
            mağazanız için farklı kadın giyim kategorilerinden koleksiyon
            oluşturabilirsiniz.
          </p>

          <Link
            href="/blog/e-ticaret-kadin-giyim-tedarikcisi"
            className="mt-6 inline-block font-black underline underline-offset-4"
          >
            E-Ticaret Kadın Giyim Tedarikçisi →
          </Link>

          {/* RELATED */}
          <div className="mt-16 rounded-[2rem] border border-black/10 bg-white p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/35">
              E-TİCARET KADIN GİYİM
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Diğer ürün kategorileri
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <Link
                href="/blog/e-ticaret-icin-kadin-giyim"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-black"
              >
                E-Ticaret İçin Kadın Giyim →
              </Link>

              <Link
                href="/blog/e-ticaret-icin-toptan-triko"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                E-Ticaret İçin Toptan Triko →
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
                href="/blog/e-ticaret-icin-kadin-giyim-toptancisi"
                className="rounded-2xl bg-[#f5f2eb] p-5 font-bold"
              >
                Kadın Giyim Toptancısı →
              </Link>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="mt-14 rounded-[2rem] bg-[#e9e4d9] p-8 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/40">
              ROTA TEDARİK
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Aradığınız ceketi bulalım.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
              Satmak istediğiniz kadın ceket modelinin fotoğrafını
              WhatsApp'tan gönderin. Merter'deki aynı veya benzer ürün
              seçeneklerini araştıralım.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-black text-white"
            >
              CEKET FOTOĞRAFI GÖNDER →
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
          TOPTAN KADIN CEKET BUL →
        </a>
      </div>
    </main>
  );
}
