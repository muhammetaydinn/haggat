import { ICategory } from '@/models/category.model';
import { IProduct } from '@/models/product.model';
import React from 'react'
interface ICardsCarouselProps {
  initialData: IProduct[];
}
const HomeCarousel = ({ initialData }: ICardsCarouselProps) => {
    return (initialData?.length > 0) ?
        initialData.map((product) => (
            <div key={product.id} className="p-5 bg-white border border-gray-300 rounded text-center shadow hover:shadow-lg transition-shadow text-black">
                <img src={product.images[0]} alt={product.title} className="w-20 h-20 object-cover" />
                <p>{product.category.name}</p>
                <p>{product.price}</p>
            </div>
        )):(<div className='text-black'>Yükleniyor...</div>)
      
 
};

export default HomeCarousel