import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import Marquee from '~/components/Hero/Marquee';
import BrandBanner from '~/components/BrandsBanner/BrandsBanner';
import GoalsSection from '~/components/GoalSection/GoalsSection';
import TrendingProducts from '~/components/TrendingProducts/TrendingProducts';
import Collection from './collections.$handle';
import About from '~/components/About/About';
import Testimonials from '~/components/Testimonials/Testimonials';
import Bundles from '~/components/Bundles/Bundles';
import News from '~/components/News/News';
import Blog from '~/components/Blog/Blog';
import SocialMedia from '~/components/SocialMedia/SocialMedia';
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
import {CartProvider} from '@shopify/hydrogen-react';
import Hero from '~/components/Hero/Index';
import CustomProducts from '~/components/CustomProducts/CustomProducts';

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
      <Hero />
      <BrandBanner />
      <GoalsSection />
      <TrendingProducts products={data.trendingProducts} />
      <About />
      <Testimonials />
      <Bundles bundles={data.trendingProducts} />
      <CustomProducts />
      <News />
      {/* <Blog blogs={data.articles} />   */}
      <SocialMedia />
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
