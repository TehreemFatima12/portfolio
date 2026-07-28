export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        My Services
      </h1>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-indigo-400">Web Design</h2>
          <p className="text-gray-300 mt-2">
            Modern UI/UX designs for your business.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-indigo-400">Web Development</h2>
          <p className="text-gray-300 mt-2">
            Fast and responsive websites using Next.js.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-indigo-400">SEO Optimization</h2>
          <p className="text-gray-300 mt-2">
            Improve your Google ranking and traffic.
          </p>
        </div>

      </section>

    </main>
  );
}