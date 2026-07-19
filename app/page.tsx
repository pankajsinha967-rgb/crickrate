export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="border-b shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-700">
            🏏 CrickRate
          </h1>

          <div className="hidden gap-8 md:flex">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">News</a>
            <a href="#" className="hover:text-blue-600">Reviews</a>
            <a href="#" className="hover:text-blue-600">Store</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-6 text-5xl font-bold">
            India's Trusted Cricket Platform
          </h1>

          <p className="mb-8 max-w-2xl text-xl">
            Latest Cricket News, Honest Bat Reviews, Equipment Buying Guides and
            an Online Cricket Store — all in one place.
          </p>

          <div className="flex gap-4">
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700">
              Shop Now
            </button>

            <button className="rounded-lg border border-white px-6 py-3">
              Read Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
        <div className="rounded-xl border p-6 shadow">
          <h2 className="mb-3 text-2xl font-bold">📰 Latest News</h2>
          <p>
            Daily cricket updates from IPL, ICC tournaments and international
            cricket.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="mb-3 text-2xl font-bold">⭐ Equipment Reviews</h2>
          <p>
            Honest reviews of cricket bats, gloves, pads, shoes and accessories.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="mb-3 text-2xl font-bold">🛒 Cricket Store</h2>
          <p>
            Buy cricket bats, balls, jerseys and accessories from trusted
            brands.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-white">
        <h3 className="text-xl font-bold">CrickRate</h3>
        <p className="mt-2">
          © 2026 CrickRate. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
