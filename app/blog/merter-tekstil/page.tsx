import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merter Tekstil | Toptan Kadın Giyim ve Tekstil Tedariki",
  description:
    "Merter tekstil piyasasından toptan kadın giyim ve tekstil ürünleri tedarik etmek isteyen butik, mağaza ve online satıcılar için ürün araştırma ve tedarik hizmeti.",
  alternates: {
    canonical: "https://www.merterdentedarik.com/blog/merter-tekstil",
  },
  openGraph: {
    title: "Merter Tekstil | Toptan Kadın Giyim ve Tekstil Tedariki",
    description:
      "Merter tekstil piyasasından toptan kadın giyim ve tekstil ürünleri tedarik edin. Rota Tedarik ile ürün araştırma ve Türkiye geneli gönderim.",
    url: "https://www.merterdentedarik.com/blog/merter-tekstil",
    type: "article",
  },
};

const faqs = [
  {
    question: "Merter tekstil nedir?",
    answer:
      "Merter tekstil, İstanbul'un önemli tekstil ve hazır giyim ticaret bölgelerinden biri olan Merter'deki toptan giyim ve tekstil ürünleri piyasasını ifade eder. Butik, mağaza ve online satıcılar farklı ürün grupları için bu piyasadan tedarik sağlayabilir.",
  },
  {
    question: "Merter tekstil ürünleri nelerdir?",
    answer:
      "Merter tekstil piyasasında kadın giyim başta olmak üzere elbise, bluz, gömlek, pantolon, etek, takım, ceket, triko, mont ve farklı hazır giyim ürünleri bulunabilir.",
  },
  {
    question: "Merter'den toptan kadın giyim nasıl alınır?",
    answer:
      "Ürün ihtiyacınızı belirleyerek Merter piyasasındaki uygun ürünleri araştırabilir, model ve fiyat seçeneklerini karşılaştırabilir ve sipariş sürecini planlayabilirsiniz. Rota Tedarik, İstanbul piyasasından ürün araştırma ve tedarik sürecinde destek sağlar.",
  },
  {
    question: "Merter'e gitmeden tekstil ürünü alınabilir mi?",
    answer:
      "Evet. Ürün araştırması, model seçimi, tedarik ve kargo süreçleri uzaktan yürütülebilir. Rota Tedarik, Türkiye'nin farklı şehirlerindeki butik ve online satıcıların İstanbul tekstil piyasasından ürün tedarik etmesine yardımcı olur.",
  },
];

export default function MerterTekstilPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Merter Tekstil | Toptan Kadın Giyim ve Tekstil Tedariki",
    description:
      "Merter tekstil piyasasından toptan kadın giyim ve tekstil ürünleri tedarik rehberi.",
    url: "https://www.merterdentedarik.com/blog/merter-tekstil",
    publisher: {
      "@type": "Organization",
      name: "Rota Tedarik",
      url: "https://www.merterdentedarik.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <a
        href="https://wa.me/905324975361?text=Merter%20tekstil%20%C3%BCr%C3%BCnleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-200 hover:scale-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-9 w-9"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.19c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.94 4.65 4.12.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.66 1.82-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32z"/>
          <path d="M16.02 3.2a12.8 12.8 0 0 0-10.9 19.5L3.2 28.8l6.3-1.86a12.8 12.8 0 1 0 6.52-23.74zm0 23.3c-2.05 0-4.05-.55-5.8-1.59l-.42-.25-3.74 1.1 1.12-3.64-.27-.44A10.64 10.64 0 1 1 16.02 26.5z"/>
        </svg>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-black/55">
            İstanbul Tekstil Piyasası
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Merter Tekstil
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/65 md:text-xl">
            Merter tekstil piyasasından toptan kadın giyim ve hazır giyim
            ürünleri bulmak isteyen butik, mağaza ve online satıcılar için
            ürün araştırma ve tedarik desteği.
          </p>
        </div>

        <div className="my-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[#ddd7cf]">
            <img
              src="/images/mertertekstil.png"
              alt="Merter tekstil toptan kadın giyim"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#ddd7cf]">
            <img
              src="/images/mertertekstiltedarik.png"
              alt="Merter tekstil tedarikçisi ve toptan giyim"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:tracking-tight">
          <h2>Merter Tekstil Piyasası</h2>

          <p>
            Merter tekstil, İstanbul'un hazır giyim ve toptan tekstil
            ticaretinde öne çıkan bölgelerinden biridir. Özellikle kadın
            giyim, toptan hazır giyim ve farklı tekstil ürünleri arayan
            işletmeler için geniş bir ürün ve tedarik ağı bulunur.
          </p>

          <p>
            Merter'de ürün arayan butik sahipleri, mağazalar ve online satış
            yapan işletmeler için en önemli konu yalnızca ürün bulmak değil;
            doğru modeli, doğru fiyatı ve güvenilir tedarik sürecini
            oluşturabilmektir.
          </p>

          <h2>Merter Tekstil'den Hangi Ürünler Alınabilir?</h2>

          <p>
            Merter tekstil piyasasında sezon ve mağaza ihtiyacına göre birçok
            farklı kadın giyim ürünü araştırılabilir. Ürün grupları arasında
            elbise, bluz, gömlek, pantolon, etek, takım, ceket, triko, mont ve
            farklı hazır giyim modelleri yer alabilir.
          </p>

          <p>
            Butik için ürün alırken tek bir ürüne odaklanmak yerine mağazanın
            genel koleksiyonunu oluşturacak farklı ürün gruplarını birlikte
            değerlendirmek daha sağlıklı bir tedarik planı oluşturur.
          </p>

          <h2>Merter Toptan Kadın Giyim</h2>

          <p>
            Merter tekstil denildiğinde en güçlü ticari aramalardan biri
            toptan kadın giyim ürünleridir. Butik ve online mağaza sahipleri
            yeni sezon koleksiyonlarını oluştururken Merter piyasasındaki
            farklı ürünleri araştırabilir.
          </p>

          <p>
            Ürün seçerken model kadar kumaş, beden aralığı, renk seçenekleri,
            satış fiyatı ve tedarik devamlılığı da dikkate alınmalıdır.
            Böylece yalnızca güzel görünen değil, mağazada satılabilecek bir
            ürün grubu oluşturmak mümkün olur.
          </p>

          <h2>Merter Tekstil Tedarikçisi Arayanlar</h2>

          <p>
            Merter tekstil tedarikçisi arayan işletmeler için en büyük
            avantaj, İstanbul'daki farklı ürün ve üretici ağlarını araştırma
            imkanına sahip olmaktır. Ancak Merter piyasasında çok sayıda
            seçenek bulunduğu için doğru ürünü kısa sürede bulmak her zaman
            kolay olmayabilir.
          </p>

          <p>
            Rota Tedarik, butik, mağaza ve online satıcıların ihtiyaçlarına
            göre İstanbul tekstil piyasasında ürün araştırır ve uygun
            tedarik sürecinin oluşturulmasına yardımcı olur.
          </p>

          <h2>Merter'e Gitmeden Toptan Tekstil Alınır mı?</h2>

          <p>
            İstanbul dışında bulunan bir işletmenin Merter'e her ürün için
            gitmesi zaman ve operasyon maliyeti oluşturabilir. Bu nedenle
            ürün araştırması ve tedarik sürecinin uzaktan yürütülmesi
            işletmeler için önemli bir kolaylık sağlar.
          </p>

          <p>
            İhtiyacınızı ileterek ürün grubu, model, renk, beden ve adet
            beklentinizi belirleyebilir; ardından uygun ürünlerin
            araştırılması ve tedarik sürecinin planlanmasını sağlayabilirsiniz.
          </p>

          <h2>Merter Tekstil'den Butik İçin Mal Almak</h2>

          <p>
            Butik sahipleri için Merter tekstil piyasasından ürün seçerken
            koleksiyonun tamamını tek bir modele göre oluşturmak yerine
            farklı ürün gruplarını dengeli şekilde değerlendirmek önemlidir.
          </p>

          <p>
            Elbise, üst giyim, alt giyim, takım ve sezonluk ürünlerin
            birlikte değerlendirilmesi mağazanın ürün çeşitliliğini artırır.
            Rota Tedarik, ihtiyaç duyulan ürünleri İstanbul piyasasından
            araştırarak tedarik sürecini daha pratik hale getirmeyi amaçlar.
          </p>

          <h2>Türkiye'nin Her Yerine Merter Tekstil Tedariki</h2>

          <p>
            Merter'den ürün almak isteyen işletmenin İstanbul'da bulunması
            gerekmez. Türkiye'nin farklı şehirlerindeki butik, mağaza ve
            online satıcılar için ürün araştırma ve kargo süreçleri
            planlanabilir.
          </p>

          <p>
            Rota Tedarik ile amaç yalnızca ürün göndermek değil; doğru ürünü
            bulma, tedarik sürecini yönetme ve siparişin işletmeye ulaşmasına
            kadar olan süreci kolaylaştırmaktır.
          </p>

          <h2>Merter Tekstil Tedarik Süreci Nasıl İşler?</h2>

          <ol>
            <li>
              <strong>İhtiyacı belirliyoruz:</strong> Ürün grubu, model,
              adet ve bütçe beklentinizi öğreniyoruz.
            </li>
            <li>
              <strong>Ürün araştırıyoruz:</strong> İstanbul tekstil
              piyasasında ihtiyacınıza uygun ürünleri araştırıyoruz.
            </li>
            <li>
              <strong>Seçenekleri değerlendiriyoruz:</strong> Model, fiyat
              ve tedarik şartlarını birlikte değerlendiriyoruz.
            </li>
            <li>
              <strong>Siparişi planlıyoruz:</strong> Uygun ürünler
              netleştirildikten sonra sipariş sürecini organize ediyoruz.
            </li>
            <li>
              <strong>Kargoyu yönetiyoruz:</strong> Ürünlerin Türkiye'nin
              farklı şehirlerine gönderim sürecini takip ediyoruz.
            </li>
          </ol>

          <h2>Neden Rota Tedarik?</h2>

          <p>
            Merter tekstil piyasasında ürün ararken çok sayıda seçenekle
            karşılaşabilirsiniz. Rota Tedarik'in amacı, işletmelerin İstanbul
            piyasasında ürün arama sürecini kolaylaştırmak ve ihtiyaçlarına
            uygun tedarik seçeneklerini araştırmaktır.
          </p>

          <p>
            Özellikle İstanbul dışında bulunan butik ve online satıcılar için
            ürün araştırması, sipariş planlaması ve Türkiye geneli gönderim
            süreçlerini tek noktadan yönetmek zaman kazandırabilir.
          </p>

          <div className="my-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-[#ddd7cf]">
              <img
                src="/images/mertertekstiltedarikciler.png"
                alt="Merter tekstil tedarikçileri ve kadın giyim"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl bg-[#ddd7cf]">
              <img
                src="/images/mertertoptantekstil.png"
                alt="Merter toptan tekstil ürünleri"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <h2>Merter Tekstil İçin İletişime Geçin</h2>

          <p>
            Merter tekstil piyasasından toptan kadın giyim veya hazır giyim
            ürünü almak istiyorsanız ihtiyacınızı bize iletebilirsiniz.
            Ürün araştırma ve tedarik sürecini işletmenizin ihtiyacına göre
            planlayalım.
          </p>

          <div className="not-prose my-10 rounded-3xl bg-[#242321] p-8 text-white md:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-white/55">
              Rota Tedarik
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              Merter tekstil ürünlerini sizin için araştıralım.
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Butik, mağaza veya online satış için aradığınız ürünleri ve
              ihtiyacınızı WhatsApp üzerinden iletin.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905324975361"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 font-semibold text-[#242321] transition hover:opacity-90"
              >
                WhatsApp'tan Ulaş
              </a>

              <a
                href="tel:+905324975361"
                className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                0532 497 53 61
              </a>
            </div>
          </div>

          <h2>Merter Tekstil Hakkında Sık Sorulan Sorular</h2>

          {faqs.map((faq) => (
            <div key={faq.question} className="mb-7">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}

          <h2>İlgili Sayfalar</h2>

          <ul>
            <li>
              <a href="/blog/merter-kadin-giyim-toptan">
                Merter Kadın Giyim Toptan
              </a>
            </li>
            <li>
              <a href="/blog/merter-toptan-kadin-giyim">
                Merter Toptan Kadın Giyim
              </a>
            </li>
            <li>
              <a href="/blog/merter-kadin-giyim-tedarikcisi">
                Merter Kadın Giyim Tedarikçisi
              </a>
            </li>
            <li>
              <a href="/blog/merterden-mal-istiyorum">
                Merter'den Mal Almak İstiyorum
              </a>
            </li>
            <li>
              <a href="/blog/bayrampasa-tekstil">
                Bayrampaşa Tekstil
              </a>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}
