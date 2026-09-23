import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kıbrıs Butik Ürün Tedariği | İstanbul'dan Kadın Giyim",
  description:
    "Kıbrıs'taki butik ve mağazalara İstanbul tekstil piyasasından kadın giyim ürün tedariği. Yeni sezon modeller, toptan ürün seçenekleri ve uygun siparişlerde aynı gün kargo çıkışı.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/kibris-butik-urun-tedarigi",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#181716]">
      <article className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">

        <header className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            ROTA TEDARİK • KIBRIS
          </p>

          <h1 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Kıbrıs Butik Ürün Tedariği
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
            Kıbrıs&apos;ta butik, mağaza veya online satış yapan işletmeler
            için İstanbul tekstil piyasasından kadın giyim ürünlerini
            araştırıyor ve tedarik sürecini tek noktadan yönetiyoruz.
          </p>
        </header>

        <div className="my-12 overflow-hidden rounded-3xl">
          <img
            src="/images/merterkoleksiyon.jpeg"
            alt="Kıbrıs butik kadın giyim ürün tedariği"
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </div>

        <div className="prose prose-neutral max-w-none prose-p:leading-8">

          <h2>Kıbrıs'taki butiklere İstanbul'dan ürün tedariği</h2>

          <p>
            Butiğiniz için yeni ürün bulmak amacıyla sürekli İstanbul&apos;a
            gelmeniz gerekmeyebilir. Aradığınız ürünleri, modelleri veya
            örnek fotoğrafları bize göndererek İstanbul tekstil piyasasında
            sizin için ürün araştırması yaptırabilirsiniz.
          </p>

          <p>
            Rota Tedarik; farklı ürün gruplarını araştırarak butiklerin
            tedarik sürecini daha kolay yönetmesine yardımcı olur.
          </p>

          <h2>Butiğiniz için hangi ürünleri bulabiliriz?</h2>

          <ul>
            <li>Yeni sezon kadın elbiseleri</li>
            <li>Kadın takım modelleri</li>
            <li>Bluz ve gömlek modelleri</li>
            <li>Pantolon ve etek modelleri</li>
            <li>Kadın ceket modelleri</li>
            <li>Kazak ve triko ürünleri</li>
            <li>Güncel butik kadın giyim modelleri</li>
          </ul>

          <h2>Beğendiğiniz modeli bize gönderin</h2>

          <p>
            Sosyal medyada veya farklı bir yerde gördüğünüz kadın giyim
            modelinin fotoğrafını WhatsApp üzerinden gönderebilirsiniz.
            Talebinize uygun ürünleri İstanbul&apos;daki tekstil piyasasında
            araştırabiliriz.
          </p>

          <p>
            Böylece tek tek toptancı araştırmak yerine ürün talebinizi
            doğrudan bize iletebilirsiniz.
          </p>

          <h2>Kıbrıs'a aynı gün kargo çıkışı</h2>

          <p>
            Ürünleri hazır olan ve sipariş işlemleri zamanında tamamlanan
            uygun siparişleri mümkün olduğunda aynı gün kargoya teslim
            ediyoruz.
          </p>

          <p>
            Kıbrıs&apos;a ulaşım süresi taşıyıcı firmaya ve gönderim
            koşullarına göre değişebilir. Aynı gün kargo ifadesi,
            uygun siparişlerin aynı gün taşıyıcıya teslim edilmesini ifade eder.
          </p>

          <h2>Lefkoşa, Girne ve Gazimağusa butiklerine tedarik</h2>

          <p>
            Lefkoşa, Girne, Gazimağusa ve Kıbrıs&apos;ın diğer bölgelerinde
            kadın giyim satışı yapan işletmeler ürün taleplerini uzaktan
            iletebilir.
          </p>

          <p>
            Model, renk, beden, adet ve hedeflediğiniz ürün grubunu
            paylaşmanız ürün araştırmasını hızlandırır.
          </p>

          <h2>Yeni modelleri düzenli takip edin</h2>

          <p>
            İstanbul tekstil piyasasında ürünler ve modeller sürekli
            değişmektedir. Güncel ürünleri takip etmek isteyen butik ve
            mağazalar WhatsApp üzerinden bizimle iletişime geçebilir.
          </p>

          <h2>Merter'den Kıbrıs'a toptan kadın giyim</h2>

          <p>
            Kıbrıs&apos;a toptan kadın giyim gönderimi hakkında hazırladığımız
            ana sayfayı da inceleyebilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/kibrisa-toptan-kadin-giyim"
              className="font-semibold underline underline-offset-4"
            >
              Kıbrıs&apos;a Toptan Kadın Giyim →
            </Link>
          </p>

          <h2>Merter kadın giyim piyasası</h2>

          <p>
            İstanbul Merter&apos;deki kadın giyim ürünleri ve toptan tedarik
            seçenekleri için Merter rehberimize göz atabilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/merter-toptan-kadin-giyim"
              className="font-semibold underline underline-offset-4"
            >
              Merter Toptan Kadın Giyim →
            </Link>
          </p>

        </div>

        <section className="mt-20 rounded-3xl bg-[#242321] p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            KIBRIS BUTİK TEDARİK
          </p>

          <h2 className="mt-4 text-3xl font-medium md:text-4xl">
            Butiğiniz için ürün aramaya başlayalım.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/65">
            Aradığınız kadın giyim ürününün fotoğrafını gönderin.
            İstanbul tekstil piyasasında sizin için araştıralım.
          </p>

          <a
            href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%27taki%20buti%C4%9Fim%20i%C3%A7in%20%C3%BCr%C3%BCn%20tedari%C4%9Fi%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#242321]"
          >
            WhatsApp'tan Ürün Gönder →
          </a>

          <p className="mt-5 text-sm text-white/50">
            0532 497 53 61
          </p>
        </section>

      </article>
    </main>
  );
}
