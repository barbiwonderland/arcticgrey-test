import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
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
import News from '~/components/News';
import Blog from '~/components/Blog';
import SocialMedia from '~/components/SocialMedia';
import {GET_ARTICLES} from '~/graphql/blogs';
import {
  ALL_PRODUCTS_QUERY,
  COLLECTION_BUNDLES_QUERY,
  COLLECTION_PRODUCTS_QUERY,
  FEATURED_COLLECTION_QUERY,
  GET_BUNDLES_QUERY,
  GET_PRODUCTS_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
} from '~/graphql/products-queries/products';
import {GET_HOME_MEDIA} from '~/graphql/files';
import CustomProduct from '~/components/CustomProduct';
import {CartProvider} from '@shopify/hydrogen-react';

export const meta: MetaFunction = () => {
  return [
    {
      title:
        'Barbara Bottazzi Full stack Assessment. Portfolio personal:https://barbarabottazzi.netlify.app/',
    },
    {
      name: 'description',
      content:
        'This a e-commerce in Hydrogen to test my knowloadge in full stack development',
    },
    {rel: 'canonical', href: 'artic-grey-test.netlify.app'},
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);
  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  // const getHomeMedia = await loadHomeVideo(args);

  return defer({...deferredData, ...criticalData});
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */

// async function loadProducts({context}: LoaderFunctionArgs) {

//   const products = await Promise.all([
//     context.storefront.query(COLLECTION_PRODUCTS_QUERY),
//   ]);

//   return {
//     products: products[0].collection.products.nodes
//     //products: response.products.edges,
//   };
// }

// async function loadBundles({context}: LoaderFunctionArgs) {
//   const products = await Promise.all([
//     context.storefront.query(COLLECTION_BUNDLES_QUERY),
//   ]);

//   return {
//     bundles: products[0].collection.products.nodes,
//   };
// }

// async function loadBlogData({context}: LoaderFunctionArgs) {
//   const {result} = await context.storefront
//     .query(GET_ARTICLES)
//     .catch((error) => {
//       console.error(error, 'error en la query');
//       return null;
//     });

//   if (!result) return null;

//   return {articles: result.listArticles};
// }

async function loadCriticalData({context}: LoaderFunctionArgs) {
  const [{collections}, trendingProducts, bundlesProducts] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    //products query
    context.storefront.query(ALL_PRODUCTS_QUERY),
    //Bundles query
    context.storefront.query(COLLECTION_BUNDLES_QUERY),
  ]);

  return {
    featuredCollection: collections.nodes[0],
    trendingProducts: trendingProducts.products.nodes,
    bundles: bundlesProducts.collection.products.nodes,
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
async function loadDeferredData({context}: LoaderFunctionArgs) {
  const articles = context.storefront.query(GET_ARTICLES).catch((error) => {
    // Log query errors, but don't throw them so the page can still render
    console.error(error);
    return null;
  });

  return {
    articles,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  console.log(data, 'data');
  return (
    <div className="home">
      <Home />
      <Banner />
      <GoalsSection />
      <TrendingProducts products={data.trendingProducts} />
      <About />
      <Testimonials />
      <Bundles bundles={data.bundles} />
      <CustomProduct />
      <News />
      {/* <Blog blogs={data.articles} />   */}
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
      <div className="lg:w-[854px] md-w-[454px] md:!h-[264px]  absolute md:bottom-52 gap-10 md:gap-0 bottom-[100px]  left-[30px] md:left-[40px] flex flex-wrap md:content-between flex-row  sm:left-[16px] sm:w-[50%] sm:content-center">
        <h1 className="font-main text-white font-semibold w-full lg:!text-[70px] md:!text-[60px] sm:!text-[50px] !m-0 !leading-none sm:!text-xs">
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
