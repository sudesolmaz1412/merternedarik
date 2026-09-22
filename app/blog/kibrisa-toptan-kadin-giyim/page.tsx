import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kıbrıs'a Toptan Kadın Giyim | Merter'den Aynı Gün Kargo",
  description:
    "Kıbrıs'taki butik ve mağazalar için Merter toptan kadın giyim tedariği. Elbise, takım, bluz, gömlek, pantolon ve yeni sezon ürünlerinde aynı gün kargo çıkışı.",
  alternates: {
    canonical:
      "https://www.merterdentedarik.com/blog/kibrisa-toptan-kadin-giyim",
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
            Kıbrıs&apos;a Toptan Kadın Giyim
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
            Kıbrıs&apos;taki butik, mağaza ve online satıcılar için
            İstanbul Merter tekstil piyasasından kadın giyim ürünlerini
            araştırıyor, siparişleri tek noktada topluyor ve uygun
            siparişlerde aynı gün kargoya teslim ediyoruz.
          </p>
        </header>

        <div className="my-12 overflow-hidden rounded-3xl">
          <img
            src="/images/toptankadingiyimmodel.jpeg"
            alt="Kıbrıs toptan kadın giyim Merter tedarik"
            className="h-[420px] w-full object-cover md:h-[560px]"
          />
        </div>

        <div className="prose prose-neutral max-w-none prose-p:leading-8">

          <h2>Merter'den Kıbrıs'a toptan kadın giyim</h2>

          <p>
            Kıbrıs&apos;ta kadın giyim satışı yapan butik ve mağazaların
            İstanbul&apos;daki toptan tekstil piyasasına her ürün ihtiyacında
            gelmesi gerekmeyebilir.
          </p>

          <p>
            Aradığınız ürünleri veya beğendiğiniz modellerin fotoğraflarını
            WhatsApp üzerinden bize göndererek Merter ve İstanbul tekstil
            piyasasında ürün araştırması yaptırabilirsiniz.
          </p>

          <h2>Kıbrıs'a hangi kadın giyim ürünlerini gönderiyoruz?</h2>

          <p>
            Butiğinizin konseptine ve müşteri kitlesine göre farklı kadın
            giyim ürünlerini araştırıp tek sipariş sürecinde
            değerlendirebiliriz.
          </p>

          <ul>
            <li>Toptan kadın elbise</li>
            <li>Toptan kadın takım</li>
            <li>Toptan bluz ve gömlek</li>
            <li>Toptan kadın pantolon</li>
            <li>Toptan kadın ceket</li>
            <li>Toptan kazak ve triko</li>
            <li>Yeni sezon kadın giyim modelleri</li>
          </ul>

          <h2>Kıbrıs'a aynı gün kargo çıkışı</h2>

          <p>
            Sipariş ve ödeme süreci zamanında tamamlanan, ürünleri hazır
            olan siparişleri mümkün olduğunda aynı gün kargoya teslim
            ediyoruz.
          </p>

          <p>
            Böylece Kıbrıs&apos;taki butik ve mağazalar İstanbul&apos;dan ürün
            tedarik sürecini uzaktan yönetebilir. Teslimat süresi seçilen
            taşıyıcıya ve gönderim koşullarına göre değişebilir.
          </p>

          <h2>Kıbrıs'taki butiklere ürün tedariği</h2>

          <p>
            Lefkoşa, Girne, Gazimağusa ve Kıbrıs&apos;ın farklı bölgelerinde
            faaliyet gösteren butik ve mağazalar ürün taleplerini uzaktan
            iletebilir.
          </p>

          <p>
            Ürün grubu, model, beden, renk ve adet bilgilerini paylaşmanız
            yeterlidir. Uygun seçenekleri İstanbul tekstil piyasasında
            araştırarak sipariş sürecini birlikte planlıyoruz.
          </p>

          <h2>Her gün yeni kadın giyim modelleri</h2>

          <p>
            Yeni gelen modelleri düzenli olarak takip etmek isteyen
            müşterilerimiz WhatsApp üzerinden bizimle iletişime geçebilir.
            Güncel ürün taleplerinizi doğrudan iletebilir ve aradığınız
            modeller için ürün araştırması isteyebilirsiniz.
          </p>

          <h2>İstanbul'a gelmeden Merter'den ürün alın</h2>

          <p>
            Rota Tedarik&apos;in amacı, İstanbul dışında ve Kıbrıs&apos;ta bulunan
            işletmeler için ürün araştırma ve tedarik sürecini
            kolaylaştırmaktır.
          </p>

          <p>
            Siz mağazanızın satışına odaklanırken aradığınız ürünlerin
            İstanbul tekstil piyasasında araştırılması ve sipariş
            organizasyonu tek noktadan yürütülebilir.
          </p>

          <h2>Merter toptan kadın giyim</h2>

          <p>
            Merter kadın giyim piyasası ve ürün tedarik süreci hakkında
            daha fazla bilgi için ana rehberimizi inceleyebilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/merter-toptan-kadin-giyim"
              className="font-semibold underline underline-offset-4"
            >
              Merter Toptan Kadın Giyim →
            </Link>
          </p>

          <h2>Toptan kadın giyim ürünlerini inceleyin</h2>

          <p>
            Elbise, takım, ceket, pantolon, bluz ve diğer kadın giyim
            kategorileri için ürün sayfamıza geçebilirsiniz.
          </p>

          <p>
            <Link
              href="/blog/merter-toptan-kadin-giyim-urunleri"
              className="font-semibold underline underline-offset-4"
            >
              Merter Toptan Kadın Giyim Ürünleri →
            </Link>
          </p>

        </div>

        <section className="mt-20 rounded-3xl bg-[#242321] p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            KIBRIS • ROTA TEDARİK
          </p>

          <h2 className="mt-4 text-3xl font-medium md:text-4xl">
            Kıbrıs'taki mağazanız için ürün mü arıyorsunuz?
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/65">
            Aradığınız modeli veya ürün fotoğrafını WhatsApp&apos;tan gönderin.
            İstanbul tekstil piyasasında sizin için araştıralım ve
            siparişinizi Kıbrıs&apos;a gönderelim.
          </p>

          <a
            href="https://wa.me/905324975361?text=Merhaba%2C%20K%C4%B1br%C4%B1s%20i%C3%A7in%20toptan%20kad%C4%B1n%20giyim%20%C3%BCr%C3%BCn%C3%BC%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#242321]"
          >
            Kıbrıs İçin Ürün Sor →
          </a>

          <p className="mt-5 text-sm text-white/50">
            WhatsApp: 0532 497 53 61
          </p>
        </section>

      </article>
    </main>
  );
}
