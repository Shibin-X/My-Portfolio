export default function Project() {
  return (
    <section className="min-h-screen px-10 py-16 bg-white">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-6 rounded shadow">
          <h3 className="font-semibold text-xl mb-2">Portfolio Website</h3>
          <p className="text-gray-600">
            Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
