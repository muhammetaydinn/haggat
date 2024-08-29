"use client"; // Bunu ekleyerek bileşeni Client Component yapıyoruz
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [isWide, setIsWide] = useState(false);
    const router = useRouter();

  useEffect(() => {
    // Ekran genişliğini kontrol eden bir fonksiyon
    const handleResize = () => {
      setIsWide(window.innerWidth > 500);
    };

    // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde kontrol et
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup: event listener'ı kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Üst Navigasyon Barı */}
      <header className="flex justify-between items-center p-5 border-b border-gray-300 bg-white">
        
        
        <div className="flex items-center">
          <Image
            src={
              // if screen is small then logo.svg else logo-small.svg
              isWide ? "/logo.svg" : "/logosmall.svg"
            }
            alt="Logo"
            width={isWide ? 100 : 32}
            height={isWide ? 32 : 32}
            style={{ minWidth: isWide ? "80px" : "32px" }}
            className="mr-3"
          />
        </div>
        <div className="flex items-center">
          {/* <a href="#" className="ml-5 text-gray-900 hover:text-indigo-600">
            Link 1
          </a>
          <a href="#" className="ml-5 text-gray-900 hover:text-indigo-600">
            Link 2
          </a>
          <a href="#" className="ml-5 text-gray-900 hover:text-indigo-600">
            Link 3
          </a> */}
          <input
            type="text"
            placeholder="Ara..."
            className="ml-5 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            onClick={
              () => {
               router.push("/login")
              }
            }
            className="ml-5 p-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Giriş Yap
          </button>
        </div>
      </header>

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
