export default function NewsPage() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">
        Latest Cricket News
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Stay updated with the latest IPL, ICC, international cricket, player
        news, match reports, and breaking stories.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-3">
            IPL 2026 Updates
          </h2>
          <p className="text-gray-600">
            Get all the latest IPL news, match previews, and post-match analysis.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-3">
            International Cricket
          </h2>
          <p className="text-gray-600">
            Follow Test, ODI, and T20 cricket from around the world.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-3">
            Breaking News
          </h2>
          <p className="text-gray-600">
            Fast updates on injuries, squad announcements, transfers, and more.
          </p>
        </div>
      </div>
    </div>
  );
}