const cleanImageString = (imageStr: string): string => {
  // Başındaki '[\"' ve sonundaki '\"' veya '"]' karakterlerini temizle
  let cleanedStr = imageStr.replace(/^\[\\"/, ""); // Başlangıçtaki '[\"' karakterlerini siler
  cleanedStr = cleanedStr.replace(/\\"$/, ""); // Sonundaki '\"' veya '"]' karakterlerini siler
  cleanedStr = cleanedStr.replace(/\\"/g, ""); // İçerideki '\"' karakterlerini siler
  return cleanedStr;
};

export const fixImagesFormat = (images: any[]): string[] => {
  // Her bir image stringini temizle ve birleştir
  const cleanedImages = images.map((imageStr: string) =>
    cleanImageString(imageStr)
  );

  // Birleştirilen temizlenmiş stringi JSON dizisine dönüştür
  const combinedString = `[${cleanedImages.join(",")}]`;

  try {
    // JSON.parse ile stringi JSON dizisine dönüştür
    const parsedImages = JSON.parse(combinedString);
    // Eğer `parsedImages` bir dizi içeriyorsa ve tek bir dizi ise, içeriğini döndür
    if (
      Array.isArray(parsedImages) &&
      parsedImages.length === 1 &&
      Array.isArray(parsedImages[0])
    ) {
      return parsedImages[0];
    }

    return parsedImages;
  } catch (error) {
    console.error("JSON parse hatası:", error);
    return [];
  }
};

// Örnek kullanım
const imagesList = [
  '["https://i.imgur.com/QkIa5tT.jpeg"',
  '"https://i.imgur.com/jb5Yu0h.jpeg"',
  '"https://i.imgur.com/UlxxXyG.jpeg"]',
];

const cleanedImages = fixImagesFormat(imagesList);

console.log(cleanedImages); // ["https://i.imgur.com/QkIa5tT.jpeg", "https://i.imgur.com/jb5Yu0h.jpeg", "https://i.imgur.com/UlxxXyG.jpeg"]
