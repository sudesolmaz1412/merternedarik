import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merter Kadın Giyim Toptan Satış | Rota Tedarik",
  description:
    "Merter kadın giyim toptan satış ürünlerini İstanbul tekstil piyasasından bulup Türkiye geneline tedarik ediyoruz. Butik ve mağazalar için kadın giyim tedarik desteği.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/merter-kadin-giyim-toptan-satis",
  },
};

const whatsapp =
  "https://wa.me/905324975361?text=Merter%20kad%C4%B1n%20giyim%20toptan%20sat%C4%B1%C5%9F%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <article className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">

        <Link
          href="/"
          className="text-sm font-medium tracking-[0.18em] text-black/55"
        >
          ROTA TEDARİK
        </Link>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
            İstanbul Kadın Giyim Tedariki
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Merter Kadın Giyim Toptan Satış
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
            Butik, mağaza ve online satış yapan işletmeler için Merter kadın
            giyim toptan satış ürünlerini araştırıyor, İstanbul tekstil
            piyasasından ihtiyaç duyulan modelleri bulup Türkiye geneline
            tedarik ediyoruz.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#d8d0c5]">
          <img
            src="/images/mertermodatoptan.png"
            alt="Merter kadın giyim toptan satış"
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_280px]">
          <div className="space-y-8 text-[17px] leading-8 text-black/75">

            <section>
              <h2 className="text-2xl font-semibold text-black">
                Merter kadın giyim toptan satış
              </h2>

              <p className="mt-4">
                Merter, İstanbul'un önemli tekstil ve hazır giyim ticaret
                bölgelerinden biridir. Kadın giyim alanında farklı ürün
                gruplarını ve sezonluk koleksiyonları aynı bölgede araştırmak,
                işletmeler için ürün tedarik sürecini kolaylaştırabilir.
              </p>

              <p className="mt-4">
                Rota Tedarik olarak amacımız yalnızca tek bir mağazaya veya
                ürüne yönlendirmek değil; işletmenin ihtiyacına uygun ürünleri
                İstanbul tekstil piyasasında araştırarak tedarik sürecini
                kolaylaştırmaktır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                Toptan kadın giyim satışında hangi ürünler bulunur?
              </h2>

              <p className="mt-4">
                İhtiyaca göre elbise, bluz, gömlek, etek, pantolon, takım,
                triko, hırka, ceket ve farklı üst giyim ürünleri
                araştırılabilir. Ürün çeşidi sezon, stok ve tedarikçiye göre
                değişebilir.
              </p>

              <p className="mt-4">
                Özellikle butiklerin koleksiyonlarını sık yenilediği
                dönemlerde güncel modelleri ve farklı ürün gruplarını birlikte
                değerlendirmek, satın alma sürecinin daha kontrollü
                ilerlemesine yardımcı olabilir.
              </p>
            </section>

            <div className="overflow-hidden rounded-[1.5rem] bg-[#d8d0c5]">
              <img
                src="/images/mertermodasezon.png"
                alt="Merter kadın giyim sezonluk toptan ürünler"
                className="h-[360px] w-full object-cover"
              />
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                Butik ve mağazalar için toptan alım
              </h2>

              <p className="mt-4">
                Toptan kadın giyim alırken ürünün yalnızca fiyatına bakmak
                yerine modelin müşteri kitlesine uygunluğu, beden ve renk
                seçenekleri, sezonu ve satış kanalındaki potansiyeli de
                değerlendirilmelidir.
              </p>

              <p className="mt-4">
                Küçük ve orta ölçekli işletmeler için doğru ürünleri
                araştırmak kadar stok riskini kontrol etmek de önemlidir.
                İhtiyaca göre hareket etmek, gereksiz ürün alımının önüne
                geçebilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                Merter'den kadın giyim tedarik süreci nasıl ilerler?
              </h2>

              <p className="mt-4">
                Öncelikle işletmenin aradığı ürün grubu, model, adet ve
                mümkünse bütçe bilgisi belirlenir. Daha sonra İstanbul tekstil
                piyasasında uygun ürünler araştırılır ve mevcut seçenekler
                değerlendirilir.
              </p>

              <p className="mt-4">
                Ürün ve sipariş detayları netleştirildikten sonra tedarik ve
                gönderim süreci planlanır. Böylece İstanbul'a gelmeden de
                ihtiyaç duyulan kadın giyim ürünleri için araştırma ve tedarik
                desteği alınabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                Türkiye geneline kadın giyim tedariki
              </h2>

              <p className="mt-4">
                İstanbul dışında bulunan butik ve mağazalar için Merter
                piyasasını yerinde araştırmak her zaman kolay olmayabilir.
                Rota Tedarik, İstanbul'daki ürün araştırma ve tedarik
                sürecinde işletmelere destek olarak Türkiye genelindeki
                siparişlerin yönetilmesine yardımcı olur.
              </p>

              <p className="mt-4">
                Aradığınız ürünün fotoğrafını veya model bilgisini
                göndererek araştırma sürecini başlatabilirsiniz.
              </p>

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#242321] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                WhatsApp'tan Toptan Ürün Sor
              </a>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                Merter kadın giyim toptan satış için neden Rota Tedarik?
              </h2>

              <ul className="mt-5 space-y-3">
                <li>• İstanbul tekstil piyasasında ürün araştırması</li>
                <li>• Kadın giyim odaklı tedarik desteği</li>
                <li>• Butik ve mağazalara uygun ürün araştırması</li>
                <li>• Model ve sezon odaklı ürün seçimi</li>
                <li>• Türkiye geneline sipariş ve gönderim süreci</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black">
                Sık Sorulan Sorular
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold">
                    Merter'den toptan kadın giyim alınabilir mi?
                  </h3>
                  <p className="mt-2">
                    Evet. Merter ve çevresindeki tekstil piyasasında farklı
                    kadın giyim ürünleri ve tedarik seçenekleri bulunabilir.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Merter kadın giyim toptan satış ürünleri nelerdir?
                  </h3>
                  <p className="mt-2">
                    Elbise, bluz, gömlek, etek, pantolon, takım, triko,
                    hırka ve ceket gibi farklı ürün grupları araştırılabilir.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Merter'den Türkiye'nin diğer şehirlerine ürün gönderilir mi?
                  </h3>
                  <p className="mt-2">
                    Sipariş detaylarına göre Türkiye geneline kargo ve
                    sevkiyat süreci planlanabilir.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold">
                    Ürün fotoğrafı göndererek model araştırabilir miyim?
                  </h3>
                  <p className="mt-2">
                    Evet. Aradığınız ürünün fotoğrafını veya model bilgisini
                    WhatsApp üzerinden ileterek araştırma talebi
                    oluşturabilirsiniz.
                  </p>
                </div>
              </div>
            </section>

          </div>

          <aside className="h-fit rounded-[1.5rem] bg-[#242321] p-7 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              İlgili içerikler
            </p>

            <div className="mt-6 space-y-4 text-sm leading-6">
              <Link
                href="/blog/merter-kadin-giyim-toptan"
                className="block border-b border-white/15 pb-4 hover:text-white/70"
              >
                Merter Kadın Giyim Toptan
              </Link>

              <Link
                href="/blog/merter-toptan-kadin-giyim"
                className="block border-b border-white/15 pb-4 hover:text-white/70"
              >
                Merter Toptan Kadın Giyim
              </Link>

              <Link
                href="/blog/merter-toptan-kadin-giyim-modelleri"
                className="block border-b border-white/15 pb-4 hover:text-white/70"
              >
                Merter Toptan Kadın Giyim Modelleri
              </Link>

              <Link
                href="/blog/merter-toptan-kadin-giyim-fiyatlari"
                className="block border-b border-white/15 pb-4 hover:text-white/70"
              >
                Merter Toptan Kadın Giyim Fiyatları
              </Link>

              <Link
                href="/blog/merter-kadin-giyim-tedarikcisi"
                className="block hover:text-white/70"
              >
                Merter Kadın Giyim Tedarikçisi
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-black/10 pt-8 text-sm text-black/50">
          Rota Tedarik · İstanbul tekstil piyasalarından kadın giyim tedariki
        </div>
      </article>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.28-.14-1.65-.81-1.91-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.62-1.54-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.36s1.01 2.74 1.15 2.93c.14.19 1.98 3.02 4.8 4.24.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.12-.26-.19-.54-.33z" />
          <path d="M16 3.2A12.8 12.8 0 0 0 5.04 22.63L3.2 28.8l6.34-1.66A12.8 12.8 0 1 0 16 3.2zm0 23.27c-2.05 0-4.05-.55-5.8-1.59l-.42-.25-3.76.98 1.01-3.66-.27-.43A10.47 10.47 0 1 1 16 26.47z" />
        </svg>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Merter Kadın Giyim Toptan Satış",
            description:
              "Merter kadın giyim toptan satış ve İstanbul'dan kadın giyim tedariki hakkında bilgiler.",
            author: {
              "@type": "Organization",
              name: "Rota Tedarik",
            },
            publisher: {
              "@type": "Organization",
              name: "Rota Tedarik",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.merterdentedarik.com/blog/merter-kadin-giyim-toptan-satis",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Merter'den toptan kadın giyim alınabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Merter ve çevresindeki tekstil piyasasında farklı kadın giyim ürünleri ve tedarik seçenekleri bulunabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Merter kadın giyim toptan satış ürünleri nelerdir?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Elbise, bluz, gömlek, etek, pantolon, takım, triko, hırka ve ceket gibi farklı ürün grupları araştırılabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Merter'den Türkiye'nin diğer şehirlerine ürün gönderilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sipariş detaylarına göre Türkiye geneline kargo ve sevkiyat süreci planlanabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Ürün fotoğrafı göndererek model araştırabilir miyim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Evet. Aradığınız ürünün fotoğrafını veya model bilgisini WhatsApp üzerinden ileterek araştırma talebi oluşturabilirsiniz.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
