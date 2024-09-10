# notlar

`_`ile baslayan dosyalar sistem dosyaları oldugu için okunmaz url pathinde açılmaz yani
public klasör içine statik dosyaları içine eklersin görsel iconlar svg ..

HEAD index içinde tarayıcı bilgi veren kısımdır keyword meta responsive ... eklenir title sekmenin adını gösterir url yerine seo etiketi title
componentleri pages içinde koymamalısın pathhte çünkü gösterir
global.css içinde sanırım sadece css olmadan da yazabilirmişsin
.module.css global stillerin import edilmese dahi diğer componentler üzerinde override edilen stillerin çözümü olarak varıdr
kısacası componente özgü stiller için kullanılır class nameleri sonuna unique id ekler

stylejsx ile component içinde stillendirme yapabilirsin
```jsx
<style jsx>{`
  .title {
    display: none;
  }
`}</style>
```


seo için head içinde meta etiketleri eklenir tüm sayfalarda 
nextjs document custom document 
tüm sayfalarda ortak olan bu seoları _document.js içinde ekleyebilirsin

documentjs ile metada arasında pek fark yok ancak metadata daha genel amaca hitap ederken documentjs daha spesifik sayfalar için kullanılır
Metadata: Daha geniş kapsamlı, başlık, sosyal medya bilgileri gibi birçok meta etiketi içerir.

### There are two ways you can add metadata to your application:
**Config-based Metadata**: Export a static metadata object or a dynamic generateMetadata function in a layout.js or page.js file.

**File-based Metadata**: Add static or dynamically generated special files to route segments.

With both these options, Next.js will automatically generate the relevant`<head>` elements for your pages. You can also create dynamic OG images using the ImageResponse constructor.


Static Metadata
To define static metadata, export a Metadata object from a layout.js or static page.js file.

```jsx
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '...',
  description: '...',
}
 
export default function Page() {}
```
Dynamic Metadata
You can use generateMetadata function to fetch metadata that requires dynamic values.
  
```jsx 

  import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}
 
export default function Page({ params, searchParams }: Props) {}
```

For all the available params, see the API Reference.

Good to know:

Both static and dynamic metadata through generateMetadata are only supported in Server Components.
fetch requests are automatically memoized for the same data across generateMetadata, generateStaticParams, Layouts, Pages, and Server Components. React cache can be used if fetch is unavailable.
Next.js will wait for data fetching inside generateMetadata to complete before streaming UI to the client. This guarantees the first part of a streamed response includes <head> tags.

tüm layouta cdn vermek için _document.js içinde head içinde ekleyeiblirisin
documents içinse stylejsx ve title yazma her ekranın kendi adı vs var gibi