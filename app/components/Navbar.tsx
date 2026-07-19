export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            🏏 CrickRate
          </h1>
        </div>

        <div className="hidden gap-8 font-medium md:flex">
          <a href="/">Home</a>
          <a href="/news">News</a>
          <a href="/reviews">Reviews</a>
          <a href="/store">Store</a>
          <a href="/contact">Contact</a>
        </div>

        <button className="rounded-lg bg-blue-700 px-5 py-2 text-white">
          Login
        </button>
      </div>
    </nav>
  );
}