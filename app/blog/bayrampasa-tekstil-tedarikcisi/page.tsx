import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bayrampaşa Tekstil Tedarikçisi | Toptan Ürün Tedariği",
  description:
    "Bayrampaşa tekstil tedarikçisi arayan butik, mağaza ve online satıcılar için toptan kadın giyim ve tekstil ürünleri tedariki. Rota Tedarik ile ürün araştırma ve tedarik sürecinizi kolaylaştırın.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/bayrampasa-tekstil-tedarikcisi",
  },
};

export default function BayrampasaTekstilTedarikcisiPage() {
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
            Bayrampaşa Toptan Tekstil Tedariki
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Bayrampaşa Tekstil Tedarikçisi
            <br />
            Toptan Ürün Tedariği
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-black/65">
            Bayrampaşa tekstil piyasasından toptan ürün almak isteyen
            butik, mağaza ve online satıcılar için ürün araştırma,
            tedarik ve gönderim sürecini kolaylaştırıyoruz.
          </p>

          <a
            href="https://wa.me/905324975361"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex bg-[#242321] px-7 py-4 text-sm font-medium text-white"
          >
            Tedarik Talebi Oluştur
          </a>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl space-y-14">
          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Tekstil Tedarikçisi Arayanlar
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              Bayrampaşa'dan ürün almak isteyen işletmeler için doğru
              ürünü bulmak kadar güvenilir bir tedarik süreci de
              önemlidir. Butik, mağaza ve online satış yapan işletmeler
              ihtiyaç duydukları ürünleri ve ürün gruplarını bize
              ileterek araştırma sürecinden yararlanabilir.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Toptan Kadın Giyim Ürünleri İçin Tedarik
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              Kadın giyim alanında faaliyet gösteren işletmeler için
              sezonluk ürünler, günlük giyim parçaları, triko,
              kombin ürünleri ve farklı hazır giyim seçenekleri
              araştırılabilir. Ürün seçiminde model, kalite, beden
              seçenekleri, adet ve bütçe birlikte değerlendirilir.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa'dan Ürün Tedarik Etmek
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              İstanbul'daki tekstil piyasalarını takip etmek ve farklı
              ürün seçeneklerini araştırmak zaman alabilir. Rota
              Tedarik, işletmelerin ihtiyaçlarına uygun ürünlerin
              araştırılması ve tedarik sürecinin daha pratik şekilde
              ilerlemesi için destek sağlar.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              İstanbul Dışından Bayrampaşa'dan Mal Almak
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              İstanbul dışında bulunan butik ve online satıcılar da
              Bayrampaşa tekstil piyasasından ürün tedarik etmek için
              bizimle iletişime geçebilir. Mağazanız veya online
              satış kanalınız için aradığınız ürün grubunu belirtmeniz
              yeterlidir.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Tekstil Tedarik Süreci
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-semibold">
                  01 — Ürün İhtiyacınızı İletin
                </h3>
                <p className="mt-2 leading-7 text-black/65">
                  Hangi ürünleri aradığınızı, yaklaşık adet ve bütçe
                  beklentinizi WhatsApp üzerinden paylaşabilirsiniz.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  02 — Piyasada Araştıralım
                </h3>
                <p className="mt-2 leading-7 text-black/65">
                  Talebinize uygun ürün ve tedarik seçeneklerini
                  İstanbul tekstil piyasasında araştırıyoruz.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  03 — Tedarik Sürecini İlerletelim
                </h3>
                <p className="mt-2 leading-7 text-black/65">
                  Uygun ürün belirlendikten sonra tedarik ve gönderim
                  sürecinin ilerlemesine yardımcı oluyoruz.
                </p>
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Neden Rota Tedarik?
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65">
              Rota Tedarik'in amacı işletmelerin İstanbul'daki tekstil
              piyasalarından ürün bulma sürecini kolaylaştırmaktır.
              Sadece tek bir bölgeye bağlı kalmadan talebe göre farklı
              ürün ve tedarik seçeneklerini araştırarak işletmelere
              daha pratik bir tedarik süreci sunuyoruz.
            </p>
          </article>

          <article className="border-t border-black/10 pt-12">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Tekstil Tedarikçisi Arıyorsanız
            </h2>

            <p className="mt-5 leading-8 text-black/65">
              Bayrampaşa'dan toptan kadın giyim veya tekstil ürünü
              almak istiyorsanız aradığınız ürünleri bize iletin.
              Ürün grubunuzu, adet ihtiyacınızı ve varsa özel
              beklentilerinizi paylaşarak tedarik sürecini
              başlatabilirsiniz.
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

          <div className="border-t border-black/10 pt-8 space-y-4">
            <Link
              href="/blog/bayrampasa-tekstil"
              className="block text-sm font-medium underline underline-offset-4"
            >
              Bayrampaşa Tekstil →
            </Link>

            <Link
              href="/blog/bayrampasadan-mal-almak-istiyorum"
              className="block text-sm font-medium underline underline-offset-4"
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
