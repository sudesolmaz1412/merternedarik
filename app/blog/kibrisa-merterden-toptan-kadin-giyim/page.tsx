import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kıbrıs'a Merter'den Toptan Kadın Giyim | Rota Tedarik",
  description:
    "Kıbrıs'a Merter'den toptan kadın giyim tedariği. Butik ve mağazanız için aradığınız modeli WhatsApp'tan gönderin, Merter'de sizin için araştıralım.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/kibrisa-merterden-toptan-kadin-giyim",
  },
  openGraph: {
    title: "Kıbrıs'a Merter'den Toptan Kadın Giyim",
    description:
      "Kıbrıs'taki butik ve mağazalar için Merter'den kadın giyim ürün tedariği.",
    url:
      "https://www.merterdentedarik.com/blog/kibrisa-merterden-toptan-kadin-giyim",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <article className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-24">

        <header className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            ROTA TEDARİK • MERTER → KIBRIS
          </p>

          <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Kıbrıs'a Merter'den Toptan Kadın Giyim
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
            Kıbrıs&apos;ta butik, mağaza veya online satış yapıyorsanız
            Merter&apos;e gelmeden kadın giyim ürünlerini tedarik edin.
            Aradığınız ürünün fotoğrafını bize gönderin, Merter tekstil
            piyasasında sizin için araştıralım.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27taki%20ma%C4%9Fazam%20i%C3%A7in%20Merter%27den%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20aramak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#242321] px-7 py-4 text-sm font-semibold text-white"
            >
              WhatsApp'tan Ürün Sor →
            </a>

            <a
              href="https://wa.me/905324975361?text=Merhaba%2C%20be%C4%9Fendi%C4%9Fim%20bir%20%C3%BCr%C3%BCn%C3%BCn%20foto%C4%9Fraf%C4%B1n%C4%B1%20g%C3%B6ndermek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#242321] px-7 py-4 text-sm font-semibold"
            >
              Model Fotoğrafı Gönder
            </a>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            WhatsApp: 0532 497 53 61
          </p>
        </header>

        <div className="my-12 overflow-hidden rounded-3xl">
          <img
            src="/images/kibrismerter.jpeg"
            alt="Kıbrıs'a Merter'den toptan kadın giyim tedariği"
            className="h-[430px] w-full object-cover md:h-[600px]"
          />
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6">
            <span className="text-xs text-neutral-400">01</span>
            <h2 className="mt-3 text-xl font-semibold">
              Ürünü Gönder
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Aradığınız kadın giyim ürününün fotoğrafını veya ürün
              bilgisini WhatsApp&apos;tan gönderin.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <span className="text-xs text-neutral-400">02</span>
            <h2 className="mt-3 text-xl font-semibold">
              Merter'de Araştıralım
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Talebinize uygun ürün seçeneklerini Merter ve İstanbul
              tekstil piyasasında araştıralım.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <span className="text-xs text-neutral-400">03</span>
            <h2 className="mt-3 text-xl font-semibold">
              Kıbrıs'a Gönderelim
            </h2>
            <p className="mt-3 leading-7 text-neutral-600">
              Siparişinizi hazırlayıp uygun siparişlerde aynı gün kargo
              çıkışı için gönderim sürecini başlatalım.
            </p>
          </div>
        </section>

        <div className="prose prose-neutral mt-16 max-w-none prose-headings:tracking-tight prose-p:leading-8">

          <h2>Kıbrıs'a Merter'den Toptan Giyim</h2>

          <p>
            Merter&apos;deki kadın giyim ürünlerine ulaşmak için her
            siparişte İstanbul&apos;a gelmeniz gerekmeyebilir. Rota Tedarik,
            Kıbrıs&apos;taki butik ve mağazaların ürün taleplerini alarak
            Merter tekstil piyasasında ürün araştırması yapar.
          </p>

          <p>
            Özellikle aradığınız belirli bir model varsa ürünün
            fotoğrafını WhatsApp üzerinden gönderebilirsiniz. Ürün,
            model ve sipariş detaylarınıza göre uygun seçenekleri
            araştırabiliriz.
          </p>

          <h2>Merter'den Kıbrıs'a Hangi Ürünler Gönderilir?</h2>

          <ul>
            <li>Toptan kadın elbise</li>
            <li>Toptan kadın takım</li>
            <li>Toptan kadın ceket</li>
            <li>Toptan kadın pantolon</li>
            <li>Toptan kadın gömlek</li>
            <li>Toptan kadın bluz</li>
            <li>Toptan kadın etek</li>
            <li>Kazak ve triko</li>
            <li>Yeni sezon butik ürünleri</li>
          </ul>

          <h2>Kıbrıs'taki Butikler Merter'den Nasıl Ürün Alabilir?</h2>

          <p>
            İlk olarak aradığınız ürün grubunu veya beğendiğiniz modelin
            fotoğrafını bize gönderirsiniz. Talebiniz doğrultusunda
            Merter&apos;de ürün araştırması yapılır. Uygun seçenekler
            belirlendikten sonra sipariş ve gönderim süreci planlanır.
          </p>

          <h2>Beğendiğiniz Modeli WhatsApp'tan Gönderin</h2>

          <p>
            Sosyal medyada gördüğünüz veya mağazanızda satmak istediğiniz
            bir ürün varsa fotoğrafını bize gönderebilirsiniz. Bu yöntem,
            özellikle belirli bir model arayan butiklerin ürün araştırma
            sürecini kolaylaştırır.
          </p>

          <div className="not-prose my-10 rounded-3xl bg-white p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              ÜRÜN MÜ ARIYORSUNUZ?
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Fotoğrafı gönderin, Merter'de araştıralım.
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
              Aradığınız ürünün ekran görüntüsü bile yeterli.
              WhatsApp üzerinden bize gönderin.
            </p>

            <a
              href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%20i%C3%A7in%20Merter%27de%20bu%20%C3%BCr%C3%BCn%C3%BC%20ara%C5%9Ft%C4%B1rman%C4%B1z%C4%B1%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#242321] px-7 py-4 text-sm font-semibold text-white"
            >
              Fotoğraf Gönder →
            </a>
          </div>

          <h2>Kıbrıs'a Aynı Gün Kargo Çıkışı</h2>

          <p>
            Ürünleri hazır olan ve işlemleri zamanında tamamlanan uygun
            siparişleri mümkün olduğunda aynı gün taşıyıcı firmaya teslim
            ediyoruz. Teslimat süresi taşıyıcı firma ve gönderim
            koşullarına göre değişebilir.
          </p>

          <h2>Lefkoşa, Girne ve Gazimağusa'ya Ürün Tedariği</h2>

          <p>
            Lefkoşa, Girne, Gazimağusa ve Kıbrıs&apos;ın diğer bölgelerinde
            faaliyet gösteren butik, mağaza ve online satıcılar Merter
            ürün taleplerini WhatsApp üzerinden bize iletebilir.
          </p>

          <h2>Kıbrıs Toptan Giyim</h2>

          <p>
            Kıbrıs&apos;a yönelik genel toptan giyim ve ürün tedariği
            seçeneklerini ana rehberimizden inceleyebilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/kibris-toptan-giyim"
              className="font-semibold underline underline-offset-4"
            >
              Kıbrıs Toptan Giyim →
            </Link>
          </p>

          <h2>Kıbrıs Toptan Giyim Modelleri</h2>

          <p>
            Yeni sezon ürünleri ve kadın giyim kategorileri için model
            rehberimizi inceleyebilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/kibris-toptan-giyim-modelleri"
              className="font-semibold underline underline-offset-4"
            >
              Kıbrıs Toptan Giyim Modelleri →
            </Link>
          </p>

          <h2>Kıbrıs Butik Ürün Tedariği</h2>

          <p>
            Butik ve mağazalara yönelik ürün araştırma hizmetimizin
            detaylarına buradan ulaşabilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/kibris-butik-urun-tedarigi"
              className="font-semibold underline underline-offset-4"
            >
              Kıbrıs Butik Ürün Tedariği →
            </Link>
          </p>

        </div>

        <section className="mt-20 rounded-3xl bg-[#242321] p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            MERTER → KIBRIS
          </p>

          <h2 className="mt-4 text-3xl font-medium md:text-5xl">
            Aradığınız ürünü bize gönderin.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Siz Kıbrıs&apos;taki satışınıza odaklanın. Aradığınız kadın
            giyim ürünlerini Merter&apos;de biz araştıralım.
          </p>

          <a
            href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27taki%20ma%C4%9Fazam%20i%C3%A7in%20Merter%27den%20%C3%BCr%C3%BCn%20tedarik%20etmek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#242321]"
          >
            WhatsApp'tan Hemen Yaz →
          </a>

          <p className="mt-5 text-sm text-white/50">
            0532 497 53 61
          </p>
        </section>

      </article>
    </main>
  );
}
