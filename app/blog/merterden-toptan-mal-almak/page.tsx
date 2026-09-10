import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merter'den Toptan Mal Almak | Kadın Giyim Tedariki",
  description:
    "Merter'den toptan mal almak isteyen butik, mağaza ve online satıcılar için kadın giyim ve hazır giyim tedariki. İstanbul tekstil piyasasından ürün araştırma ve Türkiye geneli gönderim.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merterden-toptan-mal-almak",
  },
};

const whatsappUrl =
  "https://wa.me/905324975361?text=Merter%27den%20toptan%20mal%20almak%20istiyorum.";

const faqs = [
  {
    question: "Merter'den toptan mal nasıl alınır?",
    answer:
      "İhtiyacınız olan ürün grubunu ve ürün kriterlerini belirleyerek Merter'deki tekstil piyasasında ürün araştırması yapabilirsiniz. Rota Tedarik üzerinden de ihtiyaçlarınızı ileterek ürün tedarik süreciniz için destek alabilirsiniz.",
  },
  {
    question: "Merter'den hangi ürünler toptan alınabilir?",
    answer:
      "Kadın giyim başta olmak üzere elbise, bluz, gömlek, pantolon, etek, ceket, takım, triko ve farklı hazır giyim ürünleri araştırılabilir.",
  },
  {
    question: "Merter'e gitmeden toptan ürün alabilir miyim?",
    answer:
      "Evet. İstanbul dışında bulunan butik ve online satıcılar ürün ihtiyaçlarını ileterek uzaktan ürün araştırma ve tedarik sürecinden yararlanabilir.",
  },
  {
    question: "Merter'den alınan ürünler Türkiye'nin her yerine gönderilir mi?",
    answer:
      "Sipariş sürecinin tamamlanmasının ardından ürünler Türkiye'nin farklı şehirlerine kargo ile gönderilebilir.",
  },
];

const relatedLinks = [
  ["/blog/merter-tekstil", "Merter Tekstil"],
  ["/blog/merter-toptan-tekstil", "Merter Toptan Tekstil"],
  ["/blog/merter-tekstil-tedarikcisi", "Merter Tekstil Tedarikçisi"],
  ["/blog/merter-kadin-giyim-toptan", "Merter Kadın Giyim Toptan"],
  ["/blog/bayrampasa-tekstil", "Bayrampaşa Tekstil"],
];

export default function MerterdenToptanMalAlmakPage() {
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
              Toptan Giyim & Tekstil Tedariki
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Merter'den Toptan Mal Almak
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#625d57]">
              Merter'den toptan mal almak isteyen butik, mağaza ve online
              satış yapan işletmeler için ürün araştırma, tedarik ve gönderim
              sürecini kolaylaştırıyoruz.
            </p>
          </div>
        </header>

        <div className="overflow-hidden rounded-[2rem] bg-[#d8d0c5]">
          <img
            src="/images/mertertoptanmoda.png"
            alt="Merter'den toptan mal almak"
            className="h-[440px] w-full object-cover"
          />
        </div>

        <section className="mt-14 max-w-4xl space-y-6 text-[17px] leading-8 text-[#45413d]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#181716]">
            Merter'den toptan mal almak isteyenler için rehber
          </h2>

          <p>
            İstanbul'dan toptan kadın giyim ve hazır giyim ürünleri almak
            isteyen işletmeler için Merter önemli bir alışveriş ve tedarik
            noktasıdır. Ancak çok sayıda ürün ve satıcı arasından doğru
            seçenekleri bulmak zaman alabilir.
          </p>

          <p>
            Özellikle butik sahipleri, mağazalar ve online satış yapanlar için
            önemli olan yalnızca ürün bulmak değil; işletmenin tarzına,
            müşteri kitlesine ve satış modeline uygun ürünleri seçebilmektir.
          </p>

          <p>
            Rota Tedarik, İstanbul tekstil piyasasında ürün araştırma ve
            tedarik sürecini işletmeler açısından daha pratik hale getirmeyi
            amaçlar.
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            [
              "01",
              "İhtiyacı Belirle",
              "Aradığınız ürün grubunu, model tarzını ve işletmenizin ihtiyaçlarını belirleyin.",
            ],
            [
              "02",
              "Ürün Araştır",
              "İstanbul tekstil piyasasında ihtiyacınıza uygun ürün seçeneklerini araştırın.",
            ],
            [
              "03",
              "Ürünleri Değerlendir",
              "Model, kalite ve ticari beklentilerinize uygun seçenekleri karşılaştırın.",
            ],
            [
              "04",
              "Siparişi Tamamla",
              "Uygun ürünleri belirledikten sonra tedarik ve gönderim sürecini planlayın.",
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
              Kadın Giyim Tedariki
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Merter'den toptan kadın giyim almak
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-[#45413d]">
              <p>
                Merter'den toptan kadın giyim almak isteyen işletmeler için
                ürün çeşidi oldukça önemlidir. Sezonuna ve mağaza konseptine
                göre farklı ürün grupları araştırılabilir.
              </p>

              <p>
                Elbise, bluz, gömlek, pantolon, etek, ceket, takım ve triko
                gibi ürün grupları butik ve online satış yapan işletmelerin
                ürün araştırmalarında öne çıkabilir.
              </p>

              <p>
                Buradaki amaç yalnızca çok ürün bulmak değil, satılabilir ve
                işletmenize uygun ürünleri daha hızlı değerlendirebilmektir.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#d8d0c5]">
            <img
              src="/images/mertermoda.png"
              alt="Merter toptan kadın giyim ve moda"
              className="h-[480px] w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight">
            Merter'e gitmeden toptan mal almak
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-[#45413d]">
            <p>
              İstanbul dışında bulunan butik ve mağaza sahipleri için Merter'e
              her ürün ihtiyacında gitmek zaman ve operasyon maliyeti
              oluşturabilir.
            </p>

            <p>
              Bu nedenle ürün araştırma ve tedarik sürecinin uzaktan
              yürütülebilmesi işletmeler için önemli bir kolaylık sağlayabilir.
            </p>

            <p>
              Aradığınız ürün grubunu ve beklentinizi WhatsApp üzerinden
              ileterek İstanbul tekstil piyasasında araştırma yapılmasını
              sağlayabilirsiniz.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] bg-[#242321] p-8 text-[#f5f2ed] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#bdb5aa]">
            ROTA TEDARİK
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Merter'den almak istediğiniz ürünü birlikte araştıralım.
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#d0cbc4]">
            Butiğiniz, mağazanız veya online satış kanalınız için aradığınız
            ürünleri bize iletin. İstanbul tekstil piyasasında ürün
            araştırma ve tedarik sürecinizi kolaylaştıralım.
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
            Merter'den toptan mal alırken dikkat edilmesi gerekenler
          </h2>

          <div className="mt-7 space-y-5 leading-8 text-[#45413d]">
            <ul className="space-y-3 pl-5">
              <li>• Ürün grubunun mağaza konseptine uygun olması</li>
              <li>• Güncel ve satılabilir modellerin araştırılması</li>
              <li>• Ürün kalitesinin değerlendirilmesi</li>
              <li>• Sipariş şartlarının netleştirilmesi</li>
              <li>• Gönderim sürecinin önceden planlanması</li>
              <li>• Tedarikçi iletişiminin düzenli yürütülmesi</li>
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
            İlgili Merter tekstil içerikleri
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
            Rota Tedarik · İstanbul tekstil piyasasından kadın giyim ve hazır
            giyim tedariki · Türkiye geneli gönderim
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
  headline: "Merter'den Toptan Mal Almak",
  description:
    "Merter'den toptan mal almak isteyen butik, mağaza ve online satıcılar için kadın giyim ve hazır giyim tedariki.",
  author: {
    "@type": "Organization",
    name: "Rota Tedarik",
  },
  publisher: {
    "@type": "Organization",
    name: "Rota Tedarik",
  },
  mainEntityOfPage:
    "https://www.merterdentedarik.com/blog/merterden-toptan-mal-almak",
};
