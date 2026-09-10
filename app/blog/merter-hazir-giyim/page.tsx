import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Hazır Giyim | Toptan Kadın Giyim ve Tedarik",
  description:
    "Merter hazır giyim ürünleri arayan butik, mağaza ve online satıcılar için kadın giyim tedariki. İstanbul tekstil piyasasından ürün araştırma, tedarik ve Türkiye geneli gönderim.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/merter-hazir-giyim",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merter%20haz%C4%B1r%20giyim%20%C3%BCr%C3%BCnleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const faqs = [
  {
    q: "Merter hazır giyim nedir?",
    a: "Merter hazır giyim, İstanbul'daki tekstil piyasasında bulunan hazır kadın giyim ve farklı giyim ürünlerinin toptan tedarik sürecini ifade eder.",
  },
  {
    q: "Merter'den hazır giyim nasıl alınır?",
    a: "İhtiyaç duyulan ürün grubu, model, beden, renk ve adet belirlenerek uygun ürünler araştırılır ve tedarik süreci yönetilir.",
  },
  {
    q: "Merter hazır giyim ürünleri kimlere uygundur?",
    a: "Butikler, kadın giyim mağazaları, online satış yapan işletmeler ve sosyal medya üzerinden satış yapan mağazalar için uygundur.",
  },
  {
    q: "Merter'den Türkiye'nin diğer şehirlerine ürün gönderilir mi?",
    a: "Evet. İstanbul'dan tedarik edilen ürünler Türkiye'nin farklı şehirlerine kargo ile gönderilebilir.",
  },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Merter Hazır Giyim",
    description: metadata.description,
    author: {
      "@type": "Organization",
      name: "Rota Tedarik",
    },
    publisher: {
      "@type": "Organization",
      name: "Rota Tedarik",
    },
    mainEntityOfPage:
      "https://www.merterdentedarik.com/blog/merter-hazir-giyim",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.22em]"
          >
            ROTA TEDARİK
          </Link>

          <Link
            href="/"
            className="text-sm underline underline-offset-4"
          >
            Ana Sayfa
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-black/45">
              İstanbul Tekstil Piyasası
            </p>

            <h1 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.04em] md:text-7xl">
              Merter
              <br />
              Hazır Giyim
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/65">
              Merter hazır giyim ürünleri arayan butik, mağaza ve online
              satıcılar için İstanbul tekstil piyasasından ürün araştırıyor,
              tedarik sürecini yönetiyor ve Türkiye geneline gönderim
              sağlıyoruz.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#242321] px-7 py-3 text-sm font-medium text-white"
            >
              Hazır Giyim Ürünü Sor
            </a>
          </div>

          <div className="overflow-hidden bg-[#d8d0c5]">
            <img
              src="/images/mertertoptanmoda.png"
              alt="Merter hazır giyim"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-black/45">
            Merter hazır giyim piyasası
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            Hazır giyim tedariğinde Merter neden önemli?
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-black/65">
            <p>
              İstanbul Merter, hazır giyim ve toptan tekstil ticaretinin önemli
              merkezlerinden biridir. Özellikle kadın giyim alanında farklı
              ürün ve tedarik seçenekleri bulunabilir.
            </p>

            <p>
              Butik ve mağazalar için önemli olan yalnızca ürün bulmak değil;
              doğru model, fiyat, beden, renk ve sezon seçeneklerini birlikte
              değerlendirebilmektir.
            </p>

            <p>
              Bu nedenle Merter hazır giyim piyasasından ürün tedarik ederken
              düzenli ürün araştırması ve güvenilir iletişim süreci satın alma
              sürecini kolaylaştırır.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden bg-[#d8d0c5]">
            <img
              src="/images/mertermoda.png"
              alt="Merter toptan kadın giyim"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-black/45">
              Ürün araştırma
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Merter hazır giyim ürünleri
            </h2>

            <p className="mt-7 leading-8 text-black/65">
              Sezon ve müşteri profiline göre farklı hazır giyim ürünleri
              araştırılabilir. Kadın giyim odaklı işletmeler için ürün
              çeşitliliği satın alma planının önemli bir parçasıdır.
            </p>

            <ul className="mt-7 space-y-3 text-black/70">
              <li>— Elbise</li>
              <li>— Bluz ve gömlek</li>
              <li>— Pantolon ve etek</li>
              <li>— Takım ve kombin ürünleri</li>
              <li>— Triko</li>
              <li>— Ceket ve dış giyim</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#242321] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            İstanbul'a gelmeden tedarik
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            Merter'den ürün bulmak için İstanbul'a gelmek zorunda değilsin.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
            Rota Tedarik olarak İstanbul tekstil piyasasındaki ürünleri
            araştırıyor, ihtiyacına uygun seçenekleri değerlendiriyor ve
            sipariş sürecini yönetiyoruz.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="border border-white/15 p-6">
              <span className="text-sm text-white/40">01</span>
              <h3 className="mt-5 text-xl">İhtiyacı Belirliyoruz</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Ürün, adet ve fiyat aralığını netleştiriyoruz.
              </p>
            </div>

            <div className="border border-white/15 p-6">
              <span className="text-sm text-white/40">02</span>
              <h3 className="mt-5 text-xl">Ürün Araştırıyoruz</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                İstanbul tekstil piyasasındaki uygun ürünleri araştırıyoruz.
              </p>
            </div>

            <div className="border border-white/15 p-6">
              <span className="text-sm text-white/40">03</span>
              <h3 className="mt-5 text-xl">Gönderiyoruz</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Onaylanan ürünleri Türkiye geneline gönderiyoruz.
              </p>
            </div>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-[#242321]"
          >
            Merter'den Ürün Bul
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl">
          Sıkça Sorulan Sorular
        </h2>

        <div className="mt-10 space-y-8">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border-b border-black/10 pb-7"
            >
              <h3 className="text-lg font-medium">{faq.q}</h3>
              <p className="mt-3 leading-7 text-black/60">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="border border-black/10 p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-black/45">
            İlgili içerikler
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/merter-tekstil"
              className="border border-black/10 p-5"
            >
              Merter Tekstil
            </Link>

            <Link
              href="/blog/merter-toptan-tekstil"
              className="border border-black/10 p-5"
            >
              Merter Toptan Tekstil
            </Link>

            <Link
              href="/blog/merter-toptan-giyim"
              className="border border-black/10 p-5"
            >
              Merter Toptan Giyim
            </Link>

            <Link
              href="/blog/merter-toptan-kadin-giyim"
              className="border border-black/10 p-5"
            >
              Merter Toptan Kadın Giyim
            </Link>

            <Link
              href="/blog/merter-tekstil-tedarikcisi"
              className="border border-black/10 p-5"
            >
              Merter Tekstil Tedarikçisi
            </Link>

            <Link
              href="/blog/bayrampasa-tekstil"
              className="border border-black/10 p-5"
            >
              Bayrampaşa Tekstil
            </Link>
          </div>
        </div>
      </section>

      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition hover:scale-105"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.36c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.58-.65 1.8-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M16.02 3C8.84 3 3 8.84 3 16.02c0 2.3.6 4.47 1.74 6.39L3 29l6.77-1.77a12.96 12.96 0 0 0 6.25 1.6h.01C23.2 28.83 29 23 29 15.98 29 8.84 23.2 3 16.02 3zm0 23.45h-.01c-2.03 0-4.02-.55-5.75-1.58l-.41-.24-4.02 1.05 1.07-3.91-.27-.4a10.75 10.75 0 1 1 9.39 5.08z" />
        </svg>
      </a>
    </main>
  );
}
