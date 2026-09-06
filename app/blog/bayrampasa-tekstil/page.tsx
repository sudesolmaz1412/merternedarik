import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bayrampaşa Tekstil | Toptan Kadın Giyim ve Ürün Tedariki",
  description:
    "Bayrampaşa tekstil piyasasından toptan kadın giyim ve tekstil ürünleri tedarik etmek isteyen butik, mağaza ve online satıcılar için ürün araştırma ve tedarik hizmeti.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/bayrampasa-tekstil",
  },
};

export default function BayrampasaTekstilPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <header className="border-b border-black/10 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.22em]"
          >
            ROTA TEDARİK
          </Link>

          <a
            href="https://wa.me/905324975361"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
            Toptan Tekstil & Kadın Giyim Tedariki
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Bayrampaşa Tekstil
            <br />
            Toptan Kadın Giyim ve Ürün Tedariki
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
            Bayrampaşa tekstil piyasasından ürün almak isteyen butik,
            mağaza ve online satış yapan işletmeler için ürün araştırma,
            tedarik ve gönderim sürecini kolaylaştırıyoruz.
          </p>

          <a
            href="https://wa.me/905324975361"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex bg-[#242321] px-7 py-4 text-sm font-medium text-white"
          >
            Bayrampaşa'dan Ürün Tedarik Et
          </a>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl space-y-14">
          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Tekstil Piyasası
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              Bayrampaşa, İstanbul'da toptan tekstil ve hazır giyim
              alışverişinin yoğun olduğu bölgelerden biridir. Bölgede
              kadın giyim, triko, konfeksiyon ve farklı tekstil ürünleri
              sunan çok sayıda işletme bulunur.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa'dan Hangi Ürünler Alınabilir?
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              Butik ve mağazaların ihtiyaçlarına göre kadın giyim
              ürünleri, günlük kombin parçaları, sezon ürünleri,
              triko ve farklı hazır giyim seçenekleri araştırılabilir.
              Ürün seçerken model, kalite, beden seçenekleri ve
              fiyat-performans dengesi birlikte değerlendirilir.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa'dan Butik İçin Toptan Mal Almak
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              Yeni ürün arayan butik sahipleri için piyasayı tek tek
              dolaşmak zaman alabilir. Rota Tedarik olarak talep
              edilen ürün gruplarını araştırıyor, uygun seçenekleri
              belirliyor ve tedarik sürecinin daha pratik ilerlemesine
              yardımcı oluyoruz.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa'ya Gitmeden Ürün Tedarik Edilir mi?
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              Evet. İstanbul dışındaki butik ve online satıcılar,
              Bayrampaşa piyasasından ürün araştırılması ve tedarik
              edilmesi için bizimle iletişime geçebilir. İhtiyacınızı
              ve ürün grubunuzu ilettiğinizde araştırma sürecini
              sizin adınıza yönetebiliriz.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Tekstil Tedarik Süreci Nasıl İşler?
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-semibold">01 — İhtiyacınızı Belirtin</h3>
                <p className="mt-2 leading-7 text-black/65">
                  Aradığınız ürün grubunu, adet bilgisini ve varsa
                  özel model veya fiyat beklentinizi bize iletin.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">02 — Ürünleri Araştıralım</h3>
                <p className="mt-2 leading-7 text-black/65">
                  İstanbul tekstil piyasasında talebinize uygun
                  ürün ve tedarik seçeneklerini araştırıyoruz.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">03 — Tedarik Sürecini Yönetelim</h3>
                <p className="mt-2 leading-7 text-black/65">
                  Uygun ürün üzerinde karar verildikten sonra
                  tedarik ve gönderim sürecinin ilerlemesine
                  yardımcı oluyoruz.
                </p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa'dan Türkiye'nin Her Yerine Toptan Giyim
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              İstanbul'da bulunan işletmelerin yanı sıra Türkiye'nin
              farklı şehirlerindeki butik, mağaza ve online satıcılar
              da ürün tedariki için Rota Tedarik ile iletişime
              geçebilir. Amacımız, İstanbul tekstil piyasasındaki
              ürünlere ulaşma sürecinizi kolaylaştırmaktır.
            </p>
          </article>

          <article className="border-t border-black/10 pt-12">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa'dan Ürün Almak İstiyorsanız
            </h2>
            <p className="mt-5 leading-8 text-black/65">
              Bayrampaşa'dan toptan kadın giyim veya tekstil ürünü
              almak istiyorsanız aradığınız ürünleri ve ihtiyacınızı
              WhatsApp üzerinden bize iletebilirsiniz.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="https://wa.me/905324975361"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#242321] px-6 py-3 text-sm font-medium text-white"
              >
                WhatsApp'tan Yaz
              </a>

              <a
                href="tel:+905324975361"
                className="border border-black/20 px-6 py-3 text-sm font-medium"
              >
                0532 497 53 61
              </a>
            </div>
          </article>

          <div className="border-t border-black/10 pt-8">
            <Link
              href="/blog/bayrampasadan-mal-almak-istiyorum"
              className="text-sm font-medium underline underline-offset-4"
            >
              Bayrampaşa'dan Mal Almak İstiyorum →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-10 md:px-10">
        <div className="mx-auto max-w-4xl text-sm text-black/50">
          Rota Tedarik — İstanbul tekstil piyasalarından Türkiye geneli
          ürün tedariki.
        </div>
      </footer>
    </main>
  );
}
