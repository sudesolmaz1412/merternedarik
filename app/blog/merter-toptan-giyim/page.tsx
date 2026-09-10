import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merter Toptan Giyim | Kadın Giyim ve Tekstil Tedariki",
  description:
    "Merter toptan giyim ürünleri arayan butik, mağaza ve online satıcılar için kadın giyim ve hazır giyim tedariki. İstanbul tekstil piyasasından ürün araştırma ve Türkiye geneli gönderim.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-toptan-giyim",
  },
};

const whatsappUrl =
  "https://wa.me/905324975361?text=Merter%20toptan%20giyim%20ürünleri%20hakkında%20bilgi%20almak%20istiyorum.";

const faqs = [
  {
    question: "Merter toptan giyim nedir?",
    answer:
      "Merter toptan giyim, İstanbul Merter tekstil piyasasından butik, mağaza ve online satıcılar için toplu kadın giyim ve hazır giyim ürünlerinin tedarik edilmesini ifade eder.",
  },
  {
    question: "Merter'den hangi toptan giyim ürünleri alınabilir?",
    answer:
      "Elbise, bluz, gömlek, pantolon, etek, ceket, takım, triko ve sezonluk kadın giyim ürünleri için ürün araştırması yapılabilir.",
  },
  {
    question: "Merter toptan giyim ürünlerini şehir dışından alabilir miyim?",
    answer:
      "Evet. İstanbul dışında bulunan işletmeler ürün ihtiyaçlarını ileterek uzaktan ürün araştırma ve tedarik sürecinden yararlanabilir.",
  },
  {
    question: "Merter toptan giyim ürünleri Türkiye geneline gönderilir mi?",
    answer:
      "Sipariş süreci tamamlandıktan sonra ürünler Türkiye'nin farklı şehirlerine kargo ile gönderilebilir.",
  },
];

const relatedLinks = [
  ["/blog/merter-tekstil", "Merter Tekstil"],
  ["/blog/merter-toptan-tekstil", "Merter Toptan Tekstil"],
  ["/blog/merter-tekstil-tedarikcisi", "Merter Tekstil Tedarikçisi"],
  ["/blog/merterden-toptan-mal-almak", "Merter'den Toptan Mal Almak"],
  ["/blog/merter-kadin-giyim-toptan", "Merter Kadın Giyim Toptan"],
  ["/blog/bayrampasa-toptan-giyim", "Bayrampaşa Toptan Giyim"],
];

export default function MerterToptanGiyimPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <article className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:px-12">
        <header className="mb-12">
          <a
            href="/"
            className="text-sm font-semibold tracking-[0.2em] text-[#6d665f]"
          >
            ROTA TEDARİK
          </a>

          <div className="mt-10 max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a8178]">
              Toptan Kadın Giyim
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Merter Toptan Giyim
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#625d57]">
              Merter toptan giyim ürünleri arayan butik, mağaza ve online
              satıcılar için İstanbul tekstil piyasasından ürün araştırma,
              tedarik ve Türkiye geneli gönderim desteği.
            </p>
          </div>
        </header>

        <div className="overflow-hidden rounded-[2rem] bg-[#d8d0c5]">
          <img
            src="/images/mertertoptanmoda.png"
            alt="Merter toptan giyim"
            className="h-[440px] w-full object-cover"
          />
        </div>

        <section className="mt-14 max-w-4xl space-y-6 text-[17px] leading-8 text-[#45413d]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#181716]">
            Merter toptan giyim ürünleri nereden alınır?
          </h2>

          <p>
            Merter, İstanbul'un önemli tekstil ve hazır giyim bölgelerinden
            biridir. Butikler, mağazalar ve online satış yapan işletmeler
            farklı kadın giyim ürünlerini toptan olarak araştırmak için
            bölgedeki ürün ve tedarik ağından yararlanabilir.
          </p>

          <p>
            Toptan giyim alışverişinde önemli olan yalnızca ürün çeşitliliği
            değildir. Mağazanın konseptine, müşteri kitlesine ve satış
            kanalına uygun ürünleri bulmak da önemlidir.
          </p>

          <p>
            Rota Tedarik, İstanbul tekstil piyasasında ürün araştırma ve
            tedarik sürecini işletmeler için daha pratik hale getirmeyi
            amaçlar.
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            [
              "01",
              "Ürün Grubunu Belirle",
              "Butiğiniz veya mağazanız için ihtiyaç duyduğunuz kadın giyim ürünlerini belirleyin.",
            ],
            [
              "02",
              "Ürünleri Araştıralım",
              "İstanbul tekstil piyasasında istediğiniz model ve ürün grubuna uygun seçenekleri araştıralım.",
            ],
            [
              "03",
              "Seçenekleri Değerlendir",
              "Model, kalite ve işletmenizin satış beklentilerine göre uygun ürünleri değerlendirin.",
            ],
            [
              "04",
              "Tedarik Sürecini Yönet",
              "Uygun ürünlerin sipariş ve Türkiye geneli gönderim sürecini planlayalım.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-[#d9d2c9] bg-white/50 p-7"
            >
              <span className="text-sm font-bold tracking-[0.2em] text-[#8a8178]">
                {number}
              </span>

              <h3 className="mt-4 text-2xl font-semibold">{title}</h3>

              <p className="mt-3 leading-7 text-[#625d57]">{text}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a8178]">
              Merter Kadın Giyim
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Merter'den toptan kadın giyim tedariki
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-[#45413d]">
              <p>
                Kadın giyim sektöründe ürün çeşidi ve güncel modeller satış
                performansı açısından önemlidir. Bu nedenle ürün araştırması
                yapılırken işletmenin hedef kitlesi dikkate alınmalıdır.
              </p>

              <p>
                Elbise, bluz, gömlek, pantolon, etek, ceket, takım ve triko
                gibi farklı ürün grupları için Merter tekstil piyasasında
                araştırma yapılabilir.
              </p>

              <p>
                Rota Tedarik, işletmelerin ihtiyaçlarına göre İstanbul'daki
                tekstil piyasasında ürün araştırarak tedarik sürecini
                kolaylaştırır.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#d8d0c5]">
            <img
              src="/images/mertermoda.png"
              alt="Merter toptan kadın giyim"
              className="h-[480px] w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Merter toptan giyim için İstanbul'a gelmek şart mı?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-[#45413d]">
            <p>
              İstanbul dışında bulunan butik ve mağazaların her ürün
              ihtiyacında Merter'e gitmesi zaman alabilir. Özellikle düzenli
              ürün araştırması yapan işletmeler için uzaktan tedarik önemli
              bir kolaylık sağlayabilir.
            </p>

            <p>
              İhtiyacınız olan ürün grubunu, model tarzını ve beklentilerinizi
              ileterek İstanbul tekstil piyasasında ürün araştırması
              yaptırabilirsiniz.
            </p>

            <p>
              Böylece Merter'deki ürün seçeneklerini değerlendirmek için
              İstanbul'a sürekli seyahat etmeden tedarik sürecinizi
              planlayabilirsiniz.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-[#242321] p-8 text-[#f5f2ed] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bdb5aa]">
            ROTA TEDARİK
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Merter toptan giyim ürünlerini sizin için araştıralım.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#d0cbc4]">
            Butiğiniz, mağazanız veya online satış kanalınız için aradığınız
            ürünleri WhatsApp üzerinden iletin. İstanbul tekstil piyasasında
            ürün araştırma ve tedarik sürecinizi kolaylaştıralım.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#f5f2ed] px-7 py-4 text-sm font-bold text-[#242321] transition hover:opacity-80"
          >
            WhatsApp'tan Tedarik Talebi Oluştur
          </a>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Merter toptan giyim alırken nelere dikkat edilmeli?
          </h2>

          <div className="mt-7 space-y-5 leading-8 text-[#45413d]">
            <ul className="space-y-3 pl-5">
              <li>• Ürünlerin hedef müşteri kitlesine uygun olması</li>
              <li>• Güncel ve satılabilir modellerin araştırılması</li>
              <li>• Kumaş ve ürün kalitesinin değerlendirilmesi</li>
              <li>• Toptan satış şartlarının netleştirilmesi</li>
              <li>• Sipariş adetlerinin önceden belirlenmesi</li>
              <li>• Kargo ve teslimat sürecinin planlanması</li>
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Merter toptan giyim kimler için uygun?
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-[#45413d]">
            <p>
              Merter toptan giyim ürünleri özellikle butik sahipleri, kadın
              giyim mağazaları, online butik işletmeleri ve ürünlerini
              yenilemek isteyen perakende satıcıları için değerlendirilebilir.
            </p>

            <p>
              Yeni bir mağaza açan işletmelerden düzenli ürün tedarik eden
              online satıcılara kadar farklı işletmeler ürün ihtiyaçlarına
              göre İstanbul tekstil piyasasını kullanabilir.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-7 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-[#d9d2c9] bg-white/50 p-6"
              >
                <summary className="cursor-pointer font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-[#625d57]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[#d9d2c9] pt-10">
          <h2 className="text-2xl font-semibold">
            Merter toptan giyim ile ilgili diğer içerikler
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {relatedLinks.map(([href, title]) => (
              <a
                key={href}
                href={href}
                className="rounded-2xl border border-[#d9d2c9] bg-white/40 p-5 font-medium transition hover:bg-white"
              >
                {title} →
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-[#d9d2c9] pt-8 text-sm text-[#777068]">
          <p>
            Rota Tedarik · Merter toptan giyim ve İstanbul tekstil
            piyasasından kadın giyim tedariki · Türkiye geneli gönderim
          </p>

          <p className="mt-2">WhatsApp: 0532 497 53 61</p>
        </footer>
      </article>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16 3.2A12.8 12.8 0 0 0 4.9 22.4L3.2 28.8l6.6-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.5 10.5 0 1 1 16 26.4Zm5.8-7.8c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.7.1-.2 0-.4-.1-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.5-.1 1.7-.7 2-1.3.2-.7.2-1.2.1-1.3-.1-.2-.3-.3-.6-.5Z" />
        </svg>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Merter Toptan Giyim",
  description:
    "Merter toptan giyim ürünleri arayan butik, mağaza ve online satıcılar için kadın giyim ve hazır giyim tedariki.",
  author: {
    "@type": "Organization",
    name: "Rota Tedarik",
  },
  publisher: {
    "@type": "Organization",
    name: "Rota Tedarik",
  },
  mainEntityOfPage:
    "https://www.merterdentedarik.com/blog/merter-toptan-giyim",
};
