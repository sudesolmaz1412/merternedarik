import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QU Style Toptan Ceket | Merter Kadın Giyim",
  description:
    "QU Style toptan ceket modelleri arayan butik ve e-ticaret mağazaları için Merter kadın giyim ürün araştırma ve tedarik hizmeti. Model fotoğrafını gönderin.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/qu-style-toptan-ceket",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merhaba%2C%20QU%20Style%20toptan%20ceket%20ar%C4%B1yorum.%20%C3%9Cr%C3%BCn%20foto%C4%9Fraf%C4%B1%20g%C3%B6ndermek%20istiyorum.";

const links = [
  ["QU Style Merter", "/blog/qu-style-merter"],
  ["QU Style Toptan Pantolon", "/blog/qu-style-toptan-pantolon"],
  ["QU Style Toptan Elbise", "/blog/qustyle-toptan-elbise"],
  ["QU Style Toptan Kadın Giyim", "/blog/qustyle-toptan-kadin-giyim"],
  ["Merter Toptan Kadın Ceket", "/blog/merter-toptan-kadin-ceket"],
  ["Merter Toptan Kadın Takım", "/blog/merter-toptan-kadin-takim"],
  ["Merter Kadın Giyim Toptancıları", "/blog/merter-kadin-giyim-toptancilari"],
  ["Merter Toptan Kadın Giyim", "/blog/merter-toptan-kadin-giyim"],
  ["E-Ticaret İçin Toptan Kadın Ceket", "/blog/e-ticaret-icin-toptan-kadin-ceket"],
  ["E-Ticaret İçin Kadın Giyim", "/blog/e-ticaret-icin-kadin-giyim"],
];

export default function QuStyleToptanCeketPage() {
  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#171717] pb-20 md:pb-0">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#fff7ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="font-black tracking-[.16em]">
            ROTA TEDARİK
          </Link>

          <Link
            href="/blog/qu-style-merter"
            className="hidden text-sm font-black md:block"
          >
            QU STYLE MERTER
          </Link>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#ff5c35] px-5 py-3 text-xs font-black text-white"
          >
            CEKET SOR →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 py-5 md:px-8 md:py-8">
        <div className="relative min-h-[680px] overflow-hidden rounded-[32px] bg-black md:min-h-[760px] md:rounded-[44px]">
          <img
            src="/images/banner.jpg"
            alt="QU Style toptan ceket Merter kadın giyim"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[680px] max-w-4xl flex-col justify-center px-7 py-20 text-white md:min-h-[760px] md:px-16">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#ff5c35] px-4 py-2 text-xs font-black">
                QU STYLE
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-black backdrop-blur">
                MERTER
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-black backdrop-blur">
                TOPTAN CEKET
              </span>
            </div>

            <h1 className="mt-7 text-6xl font-black leading-[.86] tracking-[-.06em] md:text-[100px]">
              QU Style
              <span className="block text-[#ffb627]">
                Toptan Ceket
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Beğendiğiniz QU Style kadın ceket modelinin fotoğrafını
              gönderin. Merter'deki ürün ve benzer model seçeneklerini
              araştırarak tedarik sürecinizi kolaylaştırın.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#ff5c35] px-8 py-4 font-black text-white transition hover:scale-105"
              >
                CEKET FOTOĞRAFI GÖNDER →
              </a>

              <Link
                href="/blog/qu-style-merter"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-black backdrop-blur"
              >
                QU STYLE MERTER →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COLOR BAR */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid overflow-hidden rounded-[28px] md:grid-cols-3">
          <div className="bg-[#ff5c35] p-8 text-white">
            <span className="text-xs font-black tracking-[.2em] opacity-60">
              01
            </span>
            <strong className="mt-3 block text-2xl">
              Modeli Gönder
            </strong>
          </div>

          <div className="bg-[#ffb627] p-8">
            <span className="text-xs font-black tracking-[.2em] opacity-50">
              02
            </span>
            <strong className="mt-3 block text-2xl">
              Ürün Araştırılsın
            </strong>
          </div>

          <div className="bg-[#d9ff57] p-8">
            <span className="text-xs font-black tracking-[.2em] opacity-50">
              03
            </span>
            <strong className="mt-3 block text-2xl">
              Tedariki Değerlendir
            </strong>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[.7fr_1.3fr] md:px-8">
        <div>
          <p className="text-xs font-black tracking-[.25em] text-[#ff5c35]">
            QU STYLE CEKET
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-black leading-[.95] tracking-[-.045em] md:text-7xl">
            QU Style Toptan
            <span className="block">Ceket Modelleri</span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
            QU Style toptan ceket arayan butik, mağaza ve e-ticaret
            işletmeleri ilgilendikleri ürünün görselini iletebilir.
            Aradığınız modele göre Merter kadın giyim piyasasında ürün
            araştırması yapılabilir.
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-black/60">
            Oversize ceket, klasik kadın ceket, blazer ve takım
            kombinlerinde kullanabileceğiniz modeller için ürün
            fotoğrafını WhatsApp üzerinden gönderebilirsiniz.
          </p>
        </div>
      </section>

      {/* MERTER BLOCK */}
      <section className="bg-[#231f20] py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black tracking-[.25em] text-[#ffb627]">
              QU STYLE MERTER
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[.93] tracking-[-.045em] md:text-7xl">
              Merter'de kadın ceket araştırın.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              İnternette gördüğünüz bir QU Style ceket modelini arıyorsanız
              ekran görüntüsünü bize iletin. Ürün veya ihtiyacınıza uygun
              benzer seçenekler araştırılabilir.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#ff5c35] px-8 py-4 font-black"
              >
                MODELİ GÖNDER →
              </a>

              <Link
                href="/blog/merter-toptan-kadin-ceket"
                className="rounded-full border border-white/20 px-8 py-4 font-black"
              >
                MERTER CEKET →
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[36px]">
            <img
              src="/images/kadinceket.jpeg"
              alt="Merter toptan kadın ceket modelleri"
              className="h-[580px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ECOMMERCE */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[36px] bg-[#ffb627] p-9 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/50">
              ONLINE BUTİK
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Butiğiniz için kadın ceket ürünü bulun.
            </h2>

            <p className="mt-6 leading-7 text-black/65">
              Online satışta kullanmak istediğiniz modeli görsel olarak
              göndererek ürün araştırma talebi oluşturabilirsiniz.
            </p>

            <Link
              href="/blog/online-butik-icin-toptan-kadin-giyim"
              className="mt-8 inline-block border-b-2 border-black pb-2 font-black"
            >
              ONLINE BUTİK TEDARİĞİ →
            </Link>
          </div>

          <div className="rounded-[36px] bg-[#d9ff57] p-9 md:p-12">
            <p className="text-xs font-black tracking-[.2em] text-black/50">
              E-TİCARET
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              E-ticaret için toptan kadın ceket.
            </h2>

            <p className="mt-6 leading-7 text-black/65">
              Kadın giyim e-ticaret mağazanız için farklı ceket
              seçeneklerini ve ilgili tedarik sayfalarını inceleyin.
            </p>

            <Link
              href="/blog/e-ticaret-icin-toptan-kadin-ceket"
              className="mt-8 inline-block border-b-2 border-black pb-2 font-black"
            >
              E-TİCARET CEKET TEDARİĞİ →
            </Link>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="border-y border-black/10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-black tracking-[.25em] text-[#ff5c35]">
            İÇ LİNK AĞI
          </p>

          <h2 className="mt-4 max-w-4xl text-5xl font-black tracking-[-.045em] md:text-7xl">
            QU Style ve Merter kadın giyim rehberi
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {links.map(([title, href], index) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-[110px] items-center justify-between rounded-[22px] border border-black/10 bg-[#fff7ed] p-6 transition hover:-translate-y-1 hover:bg-[#ffb627]"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-black text-black/30">
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
      <section className="bg-[#ff5c35] text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center md:px-8 md:py-32">
          <p className="text-xs font-black tracking-[.26em] text-white/60">
            ROTA TEDARİK
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[.9] tracking-[-.055em] md:text-8xl">
            Ceketi gördün.
            <span className="block text-black/30">
              Fotoğrafını gönder.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Aradığınız QU Style kadın ceket modelini gönderin. Ürün ve
            benzer seçenekler için araştırma sürecini başlatalım.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-black px-9 py-5 font-black text-white transition hover:scale-105"
          >
            CEKET FOTOĞRAFI GÖNDER →
          </a>

          <p className="mx-auto mt-12 max-w-2xl text-xs leading-5 text-white/50">
            Rota Tedarik bağımsız bir ürün araştırma ve tedarik hizmetidir.
            QU Style markasının resmi sitesi veya yetkili temsilcisi değildir.
          </p>
        </div>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#231f20] p-3 md:hidden">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full bg-[#ffb627] px-5 py-4 text-center text-sm font-black text-black"
        >
          QU STYLE CEKET SOR →
        </a>
      </div>
    </main>
  );
}
