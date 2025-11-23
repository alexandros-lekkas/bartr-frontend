export function BarterHub() {
  return (
    <section className="px-4 pt-40 pb-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid gap-12 items-stretch md:grid-cols-[1.2fr_1fr]">
          {/* Image Section */}
          <div className="overflow-hidden relative w-full h-full rounded-lg shadow-lg bg-muted">
            <img
              src="/bartrhub.png"
              alt="Barter Hub - World Fashion Center, Amsterdam"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                The Barter Hub
              </h2>
              <p className="text-muted-foreground">Where Luxury Meets Exchange</p>
            </div>

            <div className="flex flex-col gap-4 text-lg leading-relaxed">
              <p>
                Welcome to the Barter Hub, our premier physical location in the
                heart of Amsterdam's World Fashion Center. This is where
                sophisticated exchange takes center stage—an exclusive hub where discerning individuals trade with us, earn premium barter credits, and access an unparalleled collection of curated goods from our global network. Nestled in one of
                Amsterdam's most prestigious neighborhoods, the Barter Hub stands as
                the definitive destination for luxury trading. Here, you can
                explore exceptional items in person, connect with our distinguished community, and experience the
                future of refined exchange.
              </p>
              <p className="text-muted-foreground">
                World Fashion Center, Amsterdam
              </p>
              <p className="pt-2 text-base text-muted-foreground">
                Partnered with{" "}
                <a
                  href="https://www.mrpdevelopment.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline transition-colors text-foreground hover:text-primary"
                >
                  MRP
                </a>{" "}
                <span className="text-muted-foreground">(mrpdevelopement)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
