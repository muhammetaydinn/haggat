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

pages içinde getServerSideProps is a Next.js function that can be used to fetch data and render the contents of a page at request time.

app routerda getServerSideProps ihtiyacı async server componentlerde kullanılır


getserversideprops veri çekildiğindde sayfa da render edilip gönderilir ve seo için kullanılır
reactta bu mesela useEffect ile yapılır öğreyi incele kısmında ancak içerik gözükmez

dinamik veriler için getserversideprops statik için getstaticprops kullanılır

getstaticprops return ettiği propu da o filedaki component props:{users} dönerisn böyle  ({users}) şeklinde alır

link seçili sayfaya yönlendirme yapar
seçili ekranı gösteren header için 
seRouter next/router import edilir
component içinde userouteri const atanır ve öğeyi incelede hangi pathte oldugun pathname gözükecek daha fazlası için özellikleri gözükür (tüm özellikleri için console.log(router) yapabilirsin)
gg
router.push ile yönlendirme yapılır
 stil verirken cursorı bile ayarlayabiliyomussun

user/2 seklinde dinamik route nasıl yapılır?
user klasörü aç içeriyede index ya da page adında dosya oluştur

kullnanacagpğın yede router.push('/user/2') yaparsın
2 değişlken bactik kullnman gerekebilri
klasör içine "[id].js" dosyası  

client side çözüm [id].js"
compoenet içinde usestate ile id
````js

const [user, setUser] = useState();
const router = useRouter();
const { id } = router.query;
useEffect(() => {
 const getData=async()=>{
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    setUser(data);
  } catch (error) {
    console.log(error);
  }
 };
  getData();
}, [id]);
return (
  <div>
    <h1>{user?.name}</h1>
    <p>{user?.email}</p>
  </div>
);
...
````
veriyi anlamazsan consolle tüm özelliklerini görürüsün
== kıyaslama yaparken değer kontrol eder "2" 2 true
=== tipi de kontrol eder "2" 2 false

yüklenmeyi yavaş yavaş görmek için öğreyi denetleden ince netweok 3g yap ileyebiliyorsun
bunun yüklenmesi adım adım oluyor ve hoş olmuyor bbundan dolayı
getServersideProps kullanılır

### Serversideprops vs app router server component karşılaştırma  yap
ya da serverside ile alırsın
componentin de altına 
```jsx
export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const user = await res.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
```
compoentiçine de ({user}) şeklinde alırsın usestate kullanmadan devam edersibn


routing islemlerinde
orn user/ [slug].js şeklinde dosya oluşturup 
comp içinde router değişkenini consolladiignda orn 
url olarak slug gozukmez ama rorn lenovo-1234 gibi bir url oluşturursan 
gider ve queryde slug değişkeni olarak gözükür
bir / daha eklersen sonuna devam edersen /black-1234 gibi
404 verir hata vermemesi için nested routing slug başına ... koymalısın yani [...slug].js şeklinde olmalı
bu sekilde
slug: array(2) ["lenovo-1234", "black-1234"]

PEKİ
SİTEMİZ
STATİK AMA İD DİNAMİK İSTERSEK NE YAPARIZ


serverstide kodu direkt rename edip getstaticprops yapabilirsen '/user[id]' ssg getstaticpaths required hatası alırsın  

getstaticpathsi getserversideprops ile KULLANAMAZSIN


ssg website build almak i.in packageç.json içinde build scripti oluşturulur
"build": "next build && next export" npm run build dersin ve out klasörü oluşur burada html dosyaları oluşur

next image
<Image/>
public içindeki resimleri src olarak verirken /images/.. şeklinde verirsin o direkt public içine bakar  h ve w ya da layout:"fill"vermen gerekiyor verince absolute olarak geliyo tam ekran olr
divle sıralmala 
position relative yapman gerekiyor
onun içine de height eklersen dive ayarlanır

direkt image içinde de objectfit tipiyle ayarlayabilirsin
url ile kullanacaksan mkullanıdğındomainleri next.config.js içinde belirtmen gerekiyor
next.config.js içinde

```js
module.exports = {
  images: {
    domains: ['example.com'],
  },
}
```

yenile sonra


 api klasörü içinde kendi api oluşturaibliriz ornek data varsa import edersin 
 ```js
// export default function handler(req, res) {
export default function handler({query:{id}}, res) {
  res.status(200).json({ name: 'John Doe' })


}
```


kullanımı bunu kendi localimizi kullanarak yapabiliriz istersek statikte istersek baska yerde 
```js
const getData=async()=>{
    const res = await fetch(`http://localhost:3000/api/hello`);
    const data = await res.json();
    setUser(data);
  };
```

meta customization
title her page e ayrı ayrı eklenmeli <Head> içine
her sayfaya teker teker yapmak yorucu olacağından bunun yerine component oluşturup her sayfada çağırabilirsin

```js
import React from 'react';
import Head from 'next/head';

const Meta = ({description,title,keywords}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <meta name='keywords' content={keywords}/>
            <meta name='description' content={description}/>
            <title>{title}</title>
        </Head>
    );
};

```
orn kullanım rasgele bir sayfada
```js
<Meta title='WebDev Newz' keywords='web development, programming' description='Get the latest news in web dev'/>
ya da 

  <>
      <Meta
        title="Bize Ulaşın - İletişim ve Adres Bilgilerimiz"
        description="Getmobil'in iletişim, mail ve adres bilgilerine hemen ulaşabilir, bizimle irtibata geçebilirsiniz."
        ogTitle="Bize Ulaşın - İletişim ve Adres Bilgilerimiz"
        ogDescription="Getmobil'in iletişim, mail ve adres bilgilerine hemen ulaşabilir, bizimle irtibata geçebilirsiniz."
      ></Meta>
      </>

```
gibisinden kulanımları var
layouta eklemek için ise meta componentin altında

Meta.defaultProps={
    title:'WebDev Newz',
    keywords:'web development, programming',
    description:'Get the latest news in web dev'
}
gibi default değerler  ekleyebilirsin bu sayede örneğin her ekran için ayrı ayrı title yazmak zorunda kalmazsın localhost değilde varsayılan gözükür

peki sadece bazısını değiştirmek istersen sadece ona atama yaparsın componenti kullanırken

site titlenin elimdizdeki veriye göre belirlemek için örn [id].js dosyasında
```js
<Meta title={user.name} description={user.email} keywords={user.website}/>
```

yaparsak gözükür orn 2 ali var 2 ye tıklayınca site adı ali gözükeecek
