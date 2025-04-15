import {type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import Marquee from '~/components/Marquee';
import Banner from '~/components/Banner';
import GoalsSection from '~/components/GoalsSection';
import TrendingProducts from '~/components/TrendingProducts';
import Collection from './collections.$handle';
import About from '~/components/About';
import Testimonials from '~/components/Testimonials';
import Bundles from '~/components/Bundles';
import ProductDetails from '~/components/ProductDetails';
import News from '~/components/News';
import Blog from '~/components/Blog';
import SocialMedia from '~/components/SocialMedia';
import {GET_ARTICLES} from '~/graphql/blogs';
import {
  FEATURED_COLLECTION_QUERY,
  GET_PRODUCTS_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
} from '~/graphql/products-queries/products';
import { GET_HOME_MEDIA } from '~/graphql/files';

export const meta: MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  const getProducts = await loadProducts(args);

  const getBlogs = await loadBlogData(args);

  // const getHomeMedia = await loadHomeVideo(args);

  return {...deferredData, ...criticalData, ...getProducts, ...getBlogs};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */

async function loadProducts({context}: LoaderFunctionArgs) {
  const [{products}] = await Promise.all([
    context.storefront.query(GET_PRODUCTS_QUERY),
  ]);

  return {
    products: products.nodes,
  };
}

async function loadBlogData({context}: LoaderFunctionArgs) {
  const {result} = await context.storefront.query(GET_ARTICLES).catch((error) => {
    console.error(error, 'error en la query');
    return null;
  });

  console.log(JSON.stringify(result), 'resiltado real');
  if (!result) return null;

  return {articles: result.listArticles};
}

async function loadCriticalData({context}: LoaderFunctionArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

async function loadHomeVideo({context}: LoaderFunctionArgs) {
  const result = await Promise.all([
    context.storefront.query(GET_HOME_MEDIA),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    result,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}




export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  console.log(data, 'data');
  console.log(data.products, 'prudctos');
  return (
    <div className="home">
      <Home  />
      <Banner />
      <GoalsSection />
      <TrendingProducts products={data.products} />
      <About />
      <Testimonials />
      {/* <RecommendedProducts products={data.recommendedProducts} /> */}
      <Bundles products={data.products} />
      <ProductDetails />
      <News />
      <Blog blogs={data.articles} />
      <SocialMedia />
    </div>
  );
}

function Home() {

  return (
    <div className="w-full">
      {/* {image && ( */}
      <div className="relative !h-screen w-screen ">
        {/* <Image data={image} sizes="100vw" /> */}
        <video
          width="100%"
          autoPlay
          muted
          loop
          className="!h-screen object-cover"
          src="https://cdn.shopify.com/videos/c/o/v/00895dae9f1948d08c6d42b6cf20e338.mp4"
          typeof="video/mp4"
        ></video>
      </div>
      {/* )} */}
      <div className="md:w-[854px] md:!h-[264px]  absolute md:top-[550px] gap-10 md:gap-0 top-[650px] left-[30px] md:left-[40px] flex flex-wrap md:content-between flex-row sm:top-[322px] sm:left-[16px] sm:w-[95%] sm:content-around">
        <h1 className="font-main text-white font-semibold w-full md:!text-[70px] !text-[18px] !m-0 !leading-none sm:!text-xs">
          Great things never came from comfort zones.
        </h1>
        <div className="bg-white h-[50px] w-[160px] rounded-lg flex justify-center items-center ">
          Shop Now
        </div>
      </div>
      <Marquee />
    </div>
  );
}

// function RecommendedProducts({
//   products,
// }: {
//   products: Promise<RecommendedProductsQuery | null>;
// }) {
//   return (
//     <div className="recommended-products">
//       <h2>Recommended Products</h2>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Await resolve={products}>
//           {(response) => (
//             <div className="recommended-products-grid">
//               {response
//                 ? response.products.nodes.map((product) => (
//                     <Link
//                       key={product.id}
//                       className="recommended-product"
//                       to={`/products/${product.handle}`}
//                     >
//                       <Image
//                         data={product.images.nodes[0]}
//                         aspectRatio="1/1"
//                         sizes="(min-width: 45em) 20vw, 50vw"
//                       />
//                       <h4>{product.title}</h4>
//                       <small>
//                         <Money data={product.priceRange.minVariantPrice} />
//                       </small>
//                     </Link>
//                   ))
//                 : null}
//             </div>
//           )}
//         </Await>
//       </Suspense>
//       <br />
//     </div>
//   );
// }
