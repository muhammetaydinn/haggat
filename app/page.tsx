"use client"; // Bunu ekleyerek bileşeni Client Component yapıyoruz

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Ana İçerik */}
      <main className="p-5">
        <div className="p-10 bg-indigo-600 text-white text-center text-xl mb-5 rounded">
          Banner burada yer alacak
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="p-5 bg-white border border-gray-300 rounded text-center shadow hover:shadow-lg transition-shadow">
            Kategori 1
          </div>
          <div className="p-5 bg-white border border-gray-300 rounded text-center shadow hover:shadow-lg transition-shadow">
            Kategori 2
          </div>
          <div className="p-5 bg-white border border-gray-300 rounded text-center shadow hover:shadow-lg transition-shadow">
            Kategori 3
          </div>
        </div>
      </main>
    </div>
  );
}
