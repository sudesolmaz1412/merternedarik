"use client";

import { useState } from "react";

const categories = [
  {
    number: "01",
    title: "Elbiseler",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Takımlar",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Bluz & Gömlek",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Pantolon",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    {
      number: "01",
      title: "Talebinizi Dinliyoruz",
      text: "Aradığınız ürünleri, modelleri, beden aralıklarını ve ihtiyaç duyduğunuz adetleri öğreniyoruz.",
    },
    {
      number: "02",
      title: "Ürünleri Araştırıyoruz",
      text: "Geniş tedarik ağımız üzerinden ihtiyaçlarınıza ve müşteri kitlenize uygun ürün seçeneklerini değerlendiriyoruz.",
    },
    {
      number: "03",
      title: "Siparişi Planlıyoruz",
      text: "Belirlenen ürünler için sipariş sürecini, adetleri ve tedarik planını oluşturuyoruz.",
    },
    {
      number: "04",
      title: "Süreci Yönetiyoruz",
      text: "Siparişinizin hazırlık ve teslim sürecini takip ederek sürecin düzenli ilerlemesini sağlıyoruz.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f5f2ed] text-[#181716]">

      {/* HEADER */}
      <header className="absolute left-0 top-0 z-20 w-full text-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-7 md:px-12">
          <a href="#" className="text-2xl font-semibold tracking-[0.32em]">
            ROTA TEDARİK
          </a>

          <nav className="hidden gap-9 text-xs uppercase tracking-[0.15em] md:flex">
            <a href="#koleksiyon" className="transition hover:opacity-60">
              Koleksiyonlar
            </a>
            <a href="#hakkimizda" className="transition hover:opacity-60">
              Hakkımızda
            </a>
            <a href="#nasil-calisiyoruz" className="transition hover:opacity-60">
              Nasıl Çalışıyoruz
            </a>
          </nav>

          <a
            href="https://wa.me/905324975361" target="_blank" rel="noopener noreferrer"
            className="border border-white px-5 py-3 text-[10px] uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
          >
            İletişim
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen bg-[#b8afa5]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-end px-6 pb-14 pt-32 md:px-12 md:pb-20">
          <div className="max-w-5xl text-white">
            <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/70 md:text-xs">
              <span>Türkiye</span>
              <span className="text-white/50">→</span>
              <span>TÜRKİYE</span>
              <span className="ml-2 hidden h-px w-10 bg-white/40 md:block" />
              <span className="ml-2">Kadın Giyim Tedarik</span>
            </p>

            <h1 className="text-6xl font-light leading-[0.88] tracking-[-0.06em] md:text-8xl lg:text-[10rem]">
              MODAYA
              <br />
              <span className="italic">DOĞRU</span> TEDARİK.
            </h1>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/30 pt-7 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-sm leading-7 text-white/85 md:text-base">
                Merter başta olmak üzere Türkiye'nin güçlü toptan tedarik
                ağından ihtiyaç duyduğunuz kadın giyim ürünlerini buluyor,
                sipariş sürecinizi yönetiyor ve <span className="font-medium text-white">Türkiye'nin her yerine ulaştırıyoruz.</span>
              </p>

              <a
                href="#koleksiyon"
                className="group flex items-center gap-5 text-xs uppercase tracking-[0.18em]"
              >
                Koleksiyonları Keşfet
                <span className="text-2xl transition duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-[10px] uppercase tracking-[0.3em] text-white/60 md:block">
          Türkiye Geneli
        </div>
      </section>

      {/* INTRO */}
      

      {/* CATEGORIES */}
      {/* NEDEN ROTA TEDARİK */}
      <section className="premium-grid bg-[#242321] px-6 py-20 text-white md:px-12 md:py-24">
        <div className="map-animation" aria-hidden="true">
          <span className="map-node node-1" />
          <span className="map-node node-2" />
          <span className="map-node node-3" />
          <span className="map-node node-4" />
          <span className="map-node node-5" />
          <span className="map-node node-6" />
        </div>
        <div className="mx-auto max-w-[1500px]">

          <div className="border-b border-white/15 pb-10">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
              ROTA TEDARİK / NEDEN BİZ?
            </p>

            <h2 className="mt-5 text-4xl font-light leading-[1] tracking-[-0.04em] md:text-6xl">
              Tedarikte daha
              <span className="italic"> kolay bir süreç.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3">

            <div className="border-b border-white/15 py-10 md:border-b-0 md:border-r md:pr-10">
              <span className="text-xs tracking-[0.25em] text-white/30">
                01
              </span>

              <h3 className="mt-5 text-xl font-light">
                Geniş Tedarik Ağı
              </h3>

              <p className="mt-3 max-w-sm text-sm font-light leading-6 text-white/50">
                Aradığınız ürün ve modeller için farklı tedarik seçeneklerini
                sizin için araştırıyoruz.
              </p>
            </div>

            <div className="border-b border-white/15 py-10 md:border-b-0 md:border-r md:px-10">
              <span className="text-xs tracking-[0.25em] text-white/30">
                02
              </span>

              <h3 className="mt-5 text-xl font-light">
                Tek Noktadan Süreç
              </h3>

              <p className="mt-3 max-w-sm text-sm font-light leading-6 text-white/50">
                Farklı ürün taleplerinizi daha düzenli ve kolay bir süreçte
                birlikte yönetiyoruz.
              </p>
            </div>

            <div className="py-10 md:pl-10">
              <span className="text-xs tracking-[0.25em] text-white/30">
                03
              </span>

              <h3 className="mt-5 text-xl font-light">
                Hızlı İletişim
              </h3>

              <p className="mt-3 max-w-sm text-sm font-light leading-6 text-white/50">
                Ürün görsellerinizi ve ihtiyaçlarınızı WhatsApp üzerinden
                doğrudan bizimle paylaşabilirsiniz.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="bg-[#e9e4dc] px-6 py-24 text-[#242321] md:px-12 md:py-32">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 border-y border-black/15 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-20">

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                ROTA TEDARİK / ÜRÜN TALEBİ
              </p>

              <h2 className="mt-6 max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.05em] md:text-7xl">
                Aradığınız ürünü
                <br />
                <span className="italic">bize gönderin.</span>
              </h2>
            </div>

            <div className="md:border-l md:border-black/15 md:pl-10">
              <p className="max-w-md text-lg font-light leading-8 text-black/60">
                Ürün görselini, modelini veya ihtiyacınızı WhatsApp üzerinden
                bizimle paylaşın. Sizin için araştıralım ve doğru tedarik
                seçeneklerini oluşturalım.
              </p>

              <div className="mt-10 space-y-4 border-t border-black/15 pt-7">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-black/40">01</span>
                  <span className="text-sm">Ürün görselini gönderin</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-black/40">02</span>
                  <span className="text-sm">Sizin için araştıralım</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-black/40">03</span>
                  <span className="text-sm">Siparişinizi birlikte oluşturalım</span>
                </div>
              </div>

              <a
                href="https://wa.me/905324975361"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-5 bg-[#1d1c1a] px-7 py-5 text-[10px] uppercase tracking-[0.25em] text-white transition hover:bg-black"
              >
                WhatsApp'tan Gönderin

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

          </div>

        </div>
      </section>



      <section id="koleksiyon" className="bg-[#1d1c1a] px-6 py-20 text-[#f5f2ed] md:px-12 md:py-28">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                ÜRÜN GRUPLARI
              </p>

              <h2 className="mt-4 text-5xl font-light leading-none tracking-[-0.05em] md:text-7xl">
                Sezonun
                <span className="italic"> seçkileri.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50 lg:ml-auto">
              Butiğinizin ve müşteri kitlenizin ihtiyaçlarına uygun kadın
              giyim ürünlerini geniş tedarik ağımız üzerinden araştırıyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            {categories.map((category) => (
              <a
                key={category.title}
                href="#iletisim"
                className="group relative block aspect-[16/10] overflow-hidden bg-black"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.image})` }}
                />

                <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] text-white/60">
                      {category.number}
                    </span>

                    <h3 className="mt-2 text-3xl font-light md:text-4xl">
                      {category.title}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-xl transition duration-300 group-hover:bg-white group-hover:text-black">
                    ↗
                  </span>
                </div>
              </a>
            ))}

          </div>

        </div>
      </section>

      {/* TÜRKİYE GENELİ TEDARİK */}
      <section className="bg-[#181716] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                ROTA TEDARİK / TÜRKİYE GENELİ
              </p>

              <div className="mt-6 text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl">
                Türkiye'nin
                <br />
                <span className="italic">her yerine.</span>
              </div>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-white/65 md:text-2xl md:leading-10">
                Merter başta olmak üzere Türkiye'nin güçlü toptan tedarik
                ağından ihtiyaç duyduğunuz kadın giyim ürünlerini buluyor,
                sipariş sürecinizi yönetiyor ve Türkiye'nin her yerine
                hızlı şekilde ulaştırıyoruz.
              </p>
            </div>

          </div>

          <div className="mt-16 grid border-t border-white/15 md:grid-cols-3">

            <div className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:pr-10">
              <span className="text-[10px] tracking-[0.25em] text-white/35">
                01
              </span>
              <h3 className="mt-5 text-2xl font-light">
                Doğru Ürünü Buluyoruz
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
                İhtiyacınıza uygun kadın giyim ürünlerini güçlü tedarik
                ağımız üzerinden araştırıyoruz.
              </p>
            </div>

            <div className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-10">
              <span className="text-[10px] tracking-[0.25em] text-white/35">
                02
              </span>
              <h3 className="mt-5 text-2xl font-light">
                Siparişi Yönetiyoruz
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
                Ürün, adet ve sipariş detaylarını takip ederek süreci
                sizin için kolaylaştırıyoruz.
              </p>
            </div>

            <div className="py-8 md:pl-10">
              <span className="text-[10px] tracking-[0.25em] text-white/35">
                03
              </span>
              <h3 className="mt-5 text-2xl font-light">
                Türkiye'ye Ulaştırıyoruz
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
                Hazırlanan siparişlerinizi Türkiye'nin her yerine hızlı ve
                güvenilir şekilde gönderiyoruz.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* BIG IMAGE */}
      <section className="grid min-h-[800px] lg:grid-cols-2">
        <div
          className="min-h-[550px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=90')",
          }}
        />

        <div className="flex items-center bg-[#f5f3f0] px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
              ROTA TEDARİK
            </p>

            <h2 className="mt-7 text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
              Siz satın,
              <br />
              <span className="italic">biz tedarik edelim.</span>
            </h2>

            <p className="mt-10 max-w-md leading-8 text-black/60">
              Siparişlerinizi ve ihtiyaçlarınızı bizimle paylaşın. Ürün
              araştırmasından tedarik sürecine kadar doğru çözümleri sizin için
              oluşturalım.
            </p>

            <a
              href="#iletisim"
              className="mt-12 inline-flex border-b border-black pb-3 text-xs uppercase tracking-[0.2em] transition hover:opacity-50"
            >
              Tedarik Talebi Oluştur →
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="nasil-calisiyoruz" className="bg-[#f5f3f0]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-32">

          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                ROTA TEDARİK / SÜREÇ
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                Tedarik süreci,
                <br />
                <span className="italic">sade ve net.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/50 lg:ml-auto">
              İhtiyacınızı bizimle paylaşın. Size uygun ürünleri ve doğru
              tedarik seçeneklerini birlikte değerlendirelim.
            </p>
          </div>

          <div className="border-t border-black/20">
            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={step.number}
                  className="border-b border-black/20"
                >
                  <button
                    onClick={() =>
                      setActiveStep(isActive ? null : index)
                    }
                    className="grid w-full grid-cols-[55px_1fr_35px] items-center gap-4 py-7 text-left transition md:grid-cols-[100px_1fr_50px] md:py-9"
                  >
                    <span className="text-xs tracking-[0.2em] text-black/40">
                      {step.number}
                    </span>

                    <span className="text-2xl font-light tracking-[-0.02em] md:text-4xl">
                      {step.title}
                    </span>

                    <span
                      className={`text-3xl font-light transition duration-300 ${
                        isActive ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      isActive
                        ? "grid-rows-[1fr] pb-8 md:pb-10"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-[55px_1fr] md:grid-cols-[100px_1fr]">
                        <div />

                        <p className="max-w-xl text-sm leading-7 text-black/55 md:text-base">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-black/35">
            Adımları incelemek için üzerine tıklayın
          </p>

        </div>
      </section>

      {/* CTA */}
      <section id="iletisim" className="bg-[#242321] px-6 py-28 text-white md:px-12 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/55">
            ROTA TEDARİK İletişim
          </p>

          <div className="mt-10 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Bir sonraki
              <br />
              <span className="italic">siparişinizle</span>
              <br />
              başlayalım.
            </h2>

            <div className="max-w-sm">
              <p className="leading-8 text-white/75">
                Kadın giyim tedarik ihtiyaçlarınız için bizimle iletişime
                geçin. Size uygun ürün ve tedarik seçeneklerini birlikte
                değerlendirelim.
              </p>

              <a
                href="https://wa.me/905324975361" target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex bg-white px-8 py-5 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
              >
                Bizimle İletişime Geç →
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-[#1d1c1a] px-6 py-12 text-white md:px-12 md:py-16">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1fr_1fr] md:items-end">

            <div>
              <p className="text-xl font-medium tracking-[0.3em]">
                ROTA TEDARİK
              </p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-white/40">
                Kadın Giyim Tedarik & Sourcing
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Adres
              </p>

              <p className="mt-4 text-base font-light leading-7 text-white/80 md:text-lg">
                Orta Mahalle, Emin Efendi Caddesi No: 12/1<br />
                İstanbul, Türkiye
              </p>
            </div>

          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-[10px] uppercase tracking-[0.2em] text-white/35 md:flex-row">
            <span>İstediğiniz ürünler, aynı kargoda.</span>
            <span>© 2026 ROTA TEDARİK</span>
          </div>

        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/905324975361"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
          aria-hidden="true"
        >
          <path d="M16.04 3C8.84 3 3 8.84 3 16.04c0 2.31.6 4.56 1.74 6.54L3 29l6.6-1.7a13 13 0 0 0 6.44 1.7h.01C23.24 29 29 23.16 29 15.96 29 8.76 23.24 3 16.04 3zm0 23.8c-2.05 0-4.06-.55-5.81-1.59l-.42-.25-3.92 1.01 1.05-3.82-.27-.44a10.78 10.78 0 1 1 9.37 5.09zm5.91-8.08c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.5-.16-.71.16-.21.31-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.58-1.88-1.76-2.19-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.03 1.29 3.24c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.2 2 .12.61-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </a>



    </main>
  );
}
