import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Toptan Kadın Giyim Fiyatları | 2026",
  description:
    "Merter toptan kadın giyim fiyatları; ürün grubu, kumaş, model, sezon ve adet gibi faktörlere göre değişir. İstanbul'dan kadın giyim tedariki hakkında bilgi.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-toptan-kadin-giyim-fiyatlari",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merter%20toptan%20kad%C4%B1n%20giyim%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const faqs = [
  {
    q: "Merter toptan kadın giyim fiyatları ne kadar?",
    a: "Merter toptan kadın giyim fiyatları ürünün modeline, kumaşına, üretim kalitesine, sezonuna, adet miktarına ve tedarikçiye göre değişebilir. Bu nedenle tek bir sabit fiyat yerine ürün bazında değerlendirme yapılması gerekir.",
  },
  {
    q: "Merter'de toptan kadın giyim fiyatlarını ne belirler?",
    a: "Ürün grubu, kumaş kalitesi, işçilik, model, sezon, beden ve renk seçenekleri, sipariş adedi ve tedarik koşulları fiyat üzerinde etkili olabilir.",
  },
  {
    q: "Merter'den uygun fiyatlı toptan kadın giyim alınır mı?",
    a: "Evet. Farklı ürün ve tedarik seçenekleri karşılaştırılarak işletmenin bütçesine ve hedef satış fiyatına uygun ürünler araştırılabilir.",
  },
  {
    q: "İstanbul'a gelmeden Merter'den kadın giyim alınabilir mi?",
    a: "Evet. İhtiyaç duyulan ürün grubu veya referans görseller paylaşılır. Uygun ürünler İstanbul tekstil piyasasında araştırılarak tedarik süreci uzaktan yönetilebilir.",
  },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Merter Toptan Kadın Giyim Fiyatları",
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
      "https://www.merterdentedarik.com/blog/merter-toptan-kadin-giyim-fiyatlari",
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
              Toptan Kadın Giyim
            </p>

            <h1 className="mt-5 text-5xl font-medium leading-[0.98] tracking-[-0.04em] md:text-7xl">
              Merter Toptan
              <br />
              Kadın Giyim Fiyatları
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-black/65">
              Merter toptan kadın giyim fiyatlarını araştırırken yalnızca
              ürünün fiyatına değil; model, kumaş, kalite, sezon ve sipariş
              koşullarına birlikte bakmak gerekir.
            </p>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#242321] px-7 py-3 text-sm font-medium text-white"
            >
              Fiyat ve Ürün Sor
            </a>
          </div>

          <div className="overflow-hidden bg-[#d8d0c5]">
            <img
              src="/images/mertermodatoptan.png"
              alt="Merter toptan kadın giyim fiyatları"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-black/45">
            Fiyatlandırma
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            Merter toptan kadın giyim fiyatları neden değişir?
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-black/65">
            <p>
              Merter'deki toptan kadın giyim ürünlerinde tek bir fiyat
              standardı bulunmaz. Aynı ürün grubunda bile kumaş, işçilik,
              model, kalite ve üretim detaylarına göre farklı fiyatlar
              görülebilir.
            </p>

            <p>
              Ayrıca sezon değişimleri ve yeni koleksiyonların piyasaya
              girmesiyle ürün fiyatları değişebilir. Bu nedenle butik ve
              mağazaların ürün araştırırken güncel seçenekleri karşılaştırması
              önemlidir.
            </p>

            <p>
              Toptan alım miktarı da satın alma maliyetini etkileyebilen
              faktörlerden biridir. Düzenli ürün tedarik eden işletmeler için
              ürün fiyatıyla birlikte tedarik sürekliliği de değerlendirilmelidir.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden bg-[#d8d0c5]">
            <img
              src="/images/mertermodasezon.png"
              alt="Merter sezonluk toptan kadın giyim"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-black/45">
              Ürün Grupları
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] md:text-5xl">
              Hangi kadın giyim ürünlerinde fiyat araştırılır?
            </h2>

            <p className="mt-7 leading-8 text-black/65">
              Merter'deki toptan kadın giyim piyasasında farklı ürün grupları
              için seçenekler araştırılabilir. İşletmenin hedef müşterisine ve
              sezonuna göre ürün karması oluşturulabilir.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              <div className="border border-black/10 p-4">Elbise</div>
              <div className="border border-black/10 p-4">Bluz</div>
              <div className="border border-black/10 p-4">Gömlek</div>
              <div className="border border-black/10 p-4">Pantolon</div>
              <div className="border border-black/10 p-4">Etek</div>
              <div className="border border-black/10 p-4">Takım</div>
              <div className="border border-black/10 p-4">Triko</div>
              <div className="border border-black/10 p-4">Ceket</div>
              <div className="border border-black/10 p-4">Dış Giyim</div>
              <div className="border border-black/10 p-4">Sezonluk Ürün</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#242321] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            Rota Tedarik
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            Merter'deki kadın giyim ürünlerini senin için araştıralım.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
            İstanbul'a gelmeden ürün araştırması yaptırabilir, istediğin
            ürünün modelini veya referans görselini paylaşabilirsin.
            İhtiyacına uygun toptan kadın giyim seçeneklerini araştırıp
            tedarik sürecini yönetiyoruz.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="border border-white/15 p-6">
              <span className="text-sm text-white/40">01</span>
              <h3 className="mt-5 text-xl">Ürünü Belirliyoruz</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                İstediğin ürün grubunu, modelini ve bütçe beklentini
                belirliyoruz.
              </p>
            </div>

            <div className="border border-white/15 p-6">
              <span className="text-sm text-white/40">02</span>
              <h3 className="mt-5 text-xl">Fiyat Araştırıyoruz</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                İstanbul tekstil piyasasında uygun ürün ve tedarik seçenekleri
                araştırıyoruz.
              </p>
            </div>

            <div className="border border-white/15 p-6">
              <span className="text-sm text-white/40">03</span>
              <h3 className="mt-5 text-xl">Tedarik Ediyoruz</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Onaylanan ürünlerin tedarik ve Türkiye geneli kargo sürecini
                yönetiyoruz.
              </p>
            </div>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-[#242321]"
          >
            WhatsApp'tan Fiyat Sor
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl">
          Toptan kadın giyim alırken sadece fiyata bakma
        </h2>

        <div className="mt-8 space-y-6 leading-8 text-black/65">
          <p>
            En düşük fiyat her zaman işletme için en avantajlı seçenek
            olmayabilir. Ürünün kalitesi, satış fiyatı, müşteri beklentisi ve
            ürünün ne kadar hızlı satılabileceği birlikte değerlendirilmelidir.
          </p>

          <p>
            Özellikle butik ve online satış yapan işletmeler için ürünün
            fotoğraftaki görünümü kadar kumaş, kalıp, beden dağılımı ve sezon
            uygunluğu da önemlidir.
          </p>

          <p>
            Rota Tedarik olarak işletmenin ihtiyacını alıyor, İstanbul tekstil
            piyasasında ürün araştırıyor ve uygun seçeneklerin tedarik
            sürecini yönetiyoruz.
          </p>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="mx-auto max-w-4xl px-6 py-16">
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
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="border border-black/10 p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-black/45">
            İlgili içerikler
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <Link
              href="/blog/merter-toptan-kadin-giyim"
              className="border border-black/10 p-5"
            >
              Merter Toptan Kadın Giyim
            </Link>

            <Link
              href="/blog/merter-kadin-giyim-toptancilari"
              className="border border-black/10 p-5"
            >
              Merter Kadın Giyim Toptancıları
            </Link>

            <Link
              href="/blog/merter-kadin-giyim-tedarikcisi"
              className="border border-black/10 p-5"
            >
              Merter Kadın Giyim Tedarikçisi
            </Link>

            <Link
              href="/blog/merter-toptan-giyim-tedarikcisi"
              className="border border-black/10 p-5"
            >
              Merter Toptan Giyim Tedarikçisi
            </Link>

            <Link
              href="/blog/merter-toptan-giyim-magazalari"
              className="border border-black/10 p-5"
            >
              Merter Toptan Giyim Mağazaları
            </Link>

            <Link
              href="/blog/merter-hazir-giyim"
              className="border border-black/10 p-5"
            >
              Merter Hazır Giyim
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
          <path d="M19.11 17.36c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.58-.65 1.8-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M16.02 3C8.84 3 3 8.84 3 16.02c0 2.3.6 4.47 1.74 6.39L3 29l6.77-1.77a12.96 12.96 0 0 0 6.25 1.6h.01C23.2 28.83 29 23 29 15.98 29 8.84 23.2 3 16.02 3zm0 23.45h-.01c-2.03 0-4.02-.55-5.75-1.58l-.41-.24-4.02 1.05 1.07-3.91-.27-.4a10.75 10.75 0 1 1 9.39 5.08z" />
        </svg>
      </a>
    </main>
  );
}
