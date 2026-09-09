import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bayrampaşa Toptan Tekstil | Tekstil Tedarikçisi",
  description:
    "Bayrampaşa toptan tekstil ürünleri arayan butik, mağaza ve online satıcılar için İstanbul tekstil piyasasından ürün araştırma ve tedarik hizmeti.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/bayrampasa-toptan-tekstil",
  },
};

export default function BayrampasaToptanTekstilPage() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <article className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-12 max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-black/55">
            Bayrampaşa Toptan Tekstil
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Bayrampaşa Toptan Tekstil
          </h1>

          <p className="mt-7 text-lg leading-8 text-black/65 md:text-xl">
            Bayrampaşa toptan tekstil ürünleri arayan butik, mağaza ve online
            satış yapan işletmeler için İstanbul tekstil piyasasında ürün
            araştırıyor ve tedarik sürecini yönetiyoruz. Bayrampaşa&apos;dan
            toptan tekstil almak isteyen işletmelerin ürün araştırma, tedarik
            ve gönderim süreçlerini kolaylaştırıyoruz.
          </p>
        </div>

        <div className="space-y-14 border-t border-black/10 pt-12">
          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Toptan Tekstil Piyasası
            </h2>
            <p className="mt-5 leading-8 text-black/70">
              Bayrampaşa, İstanbul&apos;un önemli tekstil ve toptan giyim
              bölgelerinden biridir. Bölgede hazır giyim, kadın giyim, triko
              ve farklı tekstil ürünleri üzerine çalışan işletmeler
              bulunmaktadır.
            </p>
            <p className="mt-4 leading-8 text-black/70">
              Butik, mağaza ve online satış yapan işletmeler için farklı
              ürünleri araştırmak ve uygun tedarik seçeneklerini karşılaştırmak
              önemlidir. Rota Tedarik olarak bu araştırma sürecini
              kolaylaştırıyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa&apos;dan Hangi Toptan Tekstil Ürünleri Alınabilir?
            </h2>
            <p className="mt-5 leading-8 text-black/70">
              İhtiyaca göre farklı tekstil ve hazır giyim ürünleri için
              araştırma yapılabilir. Ürün grubuna, sezona, adet miktarına ve
              hedef bütçeye göre farklı tedarik seçenekleri değerlendirilebilir.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                ["Kadın Giyim", "Elbise, bluz, gömlek, pantolon, etek ve takım ürünleri."],
                ["Triko", "Sezonluk triko, kazak ve hırka ürünleri."],
                ["Hazır Giyim", "Butik ve mağazalara yönelik farklı hazır giyim ürünleri."],
                ["Üst Giyim", "Gömlek, bluz, tunik ve benzeri ürünler."],
                ["Alt Giyim", "Pantolon, etek ve farklı alt giyim seçenekleri."],
                ["Sezonluk Ürünler", "Döneme ve koleksiyona göre değişen tekstil ürünleri."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="border border-black/10 bg-white/40 p-6"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Toptan Tekstil Tedarikçisi Arayanlar
            </h2>
            <p className="mt-5 leading-8 text-black/70">
              Bayrampaşa toptan tekstil tedarikçisi arayan işletmeler için
              doğru ürünü bulmak kadar ürün araştırma ve tedarik sürecinin
              düzenli ilerlemesi de önemlidir.
            </p>
            <p className="mt-4 leading-8 text-black/70">
              Rota Tedarik olarak işletmenizin ihtiyacını dinliyor, aradığınız
              ürün grubuna göre İstanbul tekstil piyasasında araştırma yapıyor
              ve uygun seçeneklerin tedarik sürecini yönetiyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa&apos;dan Butik İçin Toptan Tekstil
            </h2>
            <p className="mt-5 leading-8 text-black/70">
              Butik sahipleri için doğru ürünleri doğru miktarda bulmak
              önemlidir. Fazla stok maliyeti oluşturmadan müşterilerinize
              uygun ürünleri sunabilmek için ürün araştırmasının ihtiyaçlara
              göre yapılması gerekir.
            </p>
            <p className="mt-4 leading-8 text-black/70">
              Bayrampaşa piyasasından butik için ürün almak isteyen
              işletmelerin model, adet, hedef fiyat ve teslimat beklentilerini
              değerlendirerek tedarik sürecini planlıyoruz.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">
              İstanbul Dışından Bayrampaşa Toptan Tekstil Almak
            </h2>
            <p className="mt-5 leading-8 text-black/70">
              İstanbul dışında bulunan mağaza, butik ve online satıcılar için
              Bayrampaşa tekstil piyasasına gidip ürün araştırmak zaman ve
              maliyet oluşturabilir.
            </p>
            <p className="mt-4 leading-8 text-black/70">
              İstanbul&apos;a gelmeden toptan tekstil ürünü araştırmak isteyen
              işletmeler ihtiyaçlarını bize iletebilir. Onaylanan ürünlerin
              Türkiye geneli gönderim süreci de organize edilebilir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Toptan Tekstil Tedarik Süreci
            </h2>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                ["01", "İhtiyacı Belirliyoruz", "Aradığınız ürün, adet ve bütçe bilgilerini öğreniyoruz."],
                ["02", "Piyasayı Araştırıyoruz", "Bayrampaşa ve İstanbul tekstil piyasasında uygun ürünleri araştırıyoruz."],
                ["03", "Tedarik Ediyoruz", "Onaylanan ürünlerin tedarik ve gönderim sürecini yönetiyoruz."],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="border border-black/10 bg-white/40 p-6"
                >
                  <span className="text-sm text-black/40">{number}</span>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Toptan Tekstil İçin Rota Tedarik
            </h2>
            <p className="mt-5 leading-8 text-black/70">
              Rota Tedarik, İstanbul tekstil piyasasından ürün almak isteyen
              butik, mağaza ve online satıcıların tedarik süreçlerini
              kolaylaştırır. Bayrampaşa&apos;dan ürün almak için İstanbul&apos;a
              gelmek zorunda kalmadan talebinizi iletebilir ve aradığınız ürün
              grubu için araştırma yapılmasını sağlayabilirsiniz.
            </p>

            <div className="mt-6 space-y-4 text-black/70">
              <p>• İstanbul tekstil piyasasında ürün araştırması</p>
              <p>• Bayrampaşa toptan tekstil ürünleri için tedarik desteği</p>
              <p>• Butik ve mağazalara yönelik ürün araştırması</p>
              <p>• Online satıcılara yönelik toptan ürün tedariki</p>
              <p>• İstanbul dışından ürün almak isteyenlere uzaktan destek</p>
              <p>• Türkiye geneli gönderim organizasyonu</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bayrampaşa Toptan Tekstil İçin İletişime Geçin
            </h2>
            <p className="mt-5 leading-8 text-black/70">
              Bayrampaşa toptan tekstil ürünleri arıyorsanız aradığınız ürün
              grubunu ve yaklaşık miktarı bize iletebilirsiniz. Ürün
              araştırma, tedarik ve gönderim süreci hakkında bilgi almak için
              doğrudan iletişime geçebilirsiniz.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/905324975361"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#242321] px-7 py-4 text-sm font-medium text-white transition hover:opacity-90"
              >
                WhatsApp&apos;tan Ürün Sor
              </a>

              <a
                href="tel:+905324975361"
                className="inline-flex items-center justify-center border border-black/15 px-7 py-4 text-sm font-medium transition hover:bg-black/5"
              >
                0532 497 53 61
              </a>
            </div>
          </section>

          <section className="border-t border-black/10 pt-12">
            <h2 className="text-2xl font-semibold md:text-3xl">
              İlgili Bayrampaşa Tedarik Sayfaları
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/blog/bayrampasa-tekstil-tedarikcisi"
                className="underline underline-offset-4"
              >
                Bayrampaşa Tekstil Tedarikçisi
              </Link>

              <Link
                href="/blog/bayrampasa-toptan-kadin-giyim"
                className="underline underline-offset-4"
              >
                Bayrampaşa Toptan Kadın Giyim
              </Link>

              <Link
                href="/blog/bayrampasa-tekstil"
                className="underline underline-offset-4"
              >
                Bayrampaşa Tekstil
              </Link>

              <Link
                href="/blog/bayrampasadan-mal-almak-istiyorum"
                className="underline underline-offset-4"
              >
                Bayrampaşa&apos;dan Mal Almak İstiyorum
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
