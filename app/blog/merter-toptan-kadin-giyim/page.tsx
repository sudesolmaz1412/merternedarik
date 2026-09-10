import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merter Toptan Kadın Giyim | Toptan Giyim Tedariki",
  description:
    "Merter toptan kadın giyim ürünleri arayan butik, mağaza ve online satıcılar için kadın giyim tedariki. İstanbul tekstil piyasasından ürün araştırma ve Türkiye geneli gönderim.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-toptan-kadin-giyim",
  },
};

const whatsappUrl =
  "https://wa.me/905324975361?text=Merter%20toptan%20kadın%20giyim%20ürünleri%20hakkında%20bilgi%20almak%20istiyorum.";

const faqs = [
  {
    question: "Merter toptan kadın giyim nedir?",
    answer:
      "Merter toptan kadın giyim, İstanbul tekstil piyasasından butik, mağaza ve online satış yapan işletmeler için kadın giyim ürünlerinin toptan olarak tedarik edilmesidir.",
  },
  {
    question: "Merter'den hangi kadın giyim ürünleri alınabilir?",
    answer:
      "Elbise, bluz, gömlek, pantolon, etek, ceket, takım, triko ve farklı sezonluk kadın giyim ürünleri için araştırma yapılabilir.",
  },
  {
    question: "Merter toptan kadın giyim ürünlerini şehir dışından alabilir miyim?",
    answer:
      "Evet. İstanbul dışında bulunan butik ve mağazalar ürün ihtiyaçlarını ileterek uzaktan ürün araştırma ve tedarik sürecinden yararlanabilir.",
  },
  {
    question: "Türkiye'nin her yerine gönderim yapılır mı?",
    answer:
      "Sipariş süreci tamamlandıktan sonra ürünler Türkiye'nin farklı şehirlerine kargo ile gönderilebilir.",
  },
];

const relatedLinks = [
  ["/blog/merter-tekstil", "Merter Tekstil"],
  ["/blog/merter-toptan-tekstil", "Merter Toptan Tekstil"],
  ["/blog/merter-tekstil-tedarikcisi", "Merter Tekstil Tedarikçisi"],
  ["/blog/merterden-toptan-mal-almak", "Merter'den Toptan Mal Almak"],
  ["/blog/merter-toptan-giyim", "Merter Toptan Giyim"],
  ["/blog/merter-kadin-giyim-toptan", "Merter Kadın Giyim Toptan"],
];

export default function MerterToptanKadinGiyimPage() {
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
              Merter Toptan Giyim
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Merter Toptan Kadın Giyim
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#625d57]">
              Merter toptan kadın giyim ürünleri arayan butik, mağaza ve online
              satıcılar için İstanbul tekstil piyasasından ürün araştırma,
              tedarik ve Türkiye geneli gönderim desteği.
            </p>
          </div>
        </header>

        <div className="overflow-hidden rounded-[2rem] bg-[#d8d0c5]">
          <img
            src="/images/mertertoptanmoda.png"
            alt="Merter toptan kadın giyim"
            className="h-[440px] w-full object-cover"
          />
        </div>

        <section className="mt-14 max-w-4xl space-y-6 text-[17px] leading-8 text-[#45413d]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#181716]">
            Merter toptan kadın giyim ürünleri
          </h2>

          <p>
            İstanbul'dan kadın giyim ürünleri tedarik etmek isteyen butik,
            mağaza ve online satıcılar için Merter önemli bir tekstil
            merkezidir. Bölgede farklı tarz ve sezonlara yönelik çok sayıda
            hazır giyim ürünü araştırılabilir.
          </p>

          <p>
            Toptan kadın giyim tedarikinde önemli olan yalnızca ürün
            çeşitliliği değildir. Mağazanın konseptine, hedef müşterisine ve
            satış kanalına uygun ürünleri bulmak da önemlidir.
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
              "İhtiyacınızı Belirleyin",
              "Mağazanız veya online satış kanalınız için hangi kadın giyim ürünlerine ihtiyaç duyduğunuzu belirleyin.",
            ],
            [
              "02",
              "Ürünleri Araştıralım",
              "İstanbul tekstil piyasasında istediğiniz ürün gruplarına uygun seçenekleri araştıralım.",
            ],
            [
              "03",
              "Seçenekleri Değerlendirin",
              "Model, kalite ve işletmenizin hedef kitlesine uygun ürünleri değerlendirin.",
            ],
            [
              "04",
              "Tedariki Planlayalım",
              "Uygun ürünleri belirledikten sonra sipariş ve gönderim sürecini planlayalım.",
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
              Toptan Kadın Giyim
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Merter'den butik ve online mağazalar için kadın giyim
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-[#45413d]">
              <p>
                Kadın giyim mağazalarının ürünlerini düzenli olarak
                yenilemesi, farklı model ve ürün gruplarını araştırmasını
                gerektirebilir.
              </p>

              <p>
                Elbise, bluz, gömlek, pantolon, etek, ceket, takım ve triko
                gibi ürün grupları için Merter tekstil piyasasında araştırma
                yapılabilir.
              </p>

              <p>
                Özellikle İstanbul dışında bulunan işletmeler için ürün
                araştırma ve tedarik sürecinin uzaktan yönetilebilmesi önemli
                bir kolaylık sağlayabilir.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#d8d0c5]">
            <img
              src="/images/mertermoda.png"
              alt="Merter toptan kadın giyim ürünleri"
              className="h-[480px] w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Merter toptan kadın giyim ürünlerinde neler bulunabilir?
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              "Toptan kadın elbise",
              "Toptan kadın bluz",
              "Toptan gömlek",
              "Toptan pantolon",
              "Toptan etek",
              "Toptan ceket",
              "Toptan kadın takım",
              "Toptan triko",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#d9d2c9] bg-white/50 p-5 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Merter'e gitmeden toptan kadın giyim tedariki
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-[#45413d]">
            <p>
              İstanbul dışında bulunan butik ve mağaza sahipleri için
              Merter'e her ürün ihtiyacında gitmek zaman alabilir. Bu nedenle
              uzaktan ürün araştırma ve tedarik hizmetleri işletmeler için
              pratik bir alternatif oluşturabilir.
            </p>

            <p>
              Aradığınız kadın giyim ürünlerini, model tarzını ve
              beklentilerinizi WhatsApp üzerinden ileterek İstanbul tekstil
              piyasasında araştırma yapılmasını sağlayabilirsiniz.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-[#242321] p-8 text-[#f5f2ed] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bdb5aa]">
            ROTA TEDARİK
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Merter toptan kadın giyim ürünlerini sizin için araştıralım.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#d0cbc4]">
            Butiğiniz, mağazanız veya online satış kanalınız için aradığınız
            kadın giyim ürünlerini bize iletin. İstanbul tekstil piyasasında
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
            Toptan kadın giyim alırken dikkat edilmesi gerekenler
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
            Merter toptan giyim içerikleri
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
            Rota Tedarik · Merter toptan kadın giyim ve İstanbul tekstil
            piyasasından ürün tedariki · Türkiye geneli gönderim
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
  headline: "Merter Toptan Kadın Giyim",
  description:
    "Merter toptan kadın giyim ürünleri arayan butik, mağaza ve online satıcılar için kadın giyim tedariki.",
  author: {
    "@type": "Organization",
    name: "Rota Tedarik",
  },
  publisher: {
    "@type": "Organization",
    name: "Rota Tedarik",
  },
  mainEntityOfPage:
    "https://www.merterdentedarik.com/blog/merter-toptan-kadin-giyim",
};
