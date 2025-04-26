import {
  type LoaderFunctionArgs,
} from '@shopify/remix-oxygen';
import { useLoaderData, type MetaFunction} from '@remix-run/react';
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
import {
  ALL_PRODUCTS_QUERY,
  COLLECTION_HANDLE_QUERY,
} from '~/graphql/products-queries/products';
import Hero from '~/components/Hero/Index';
import CustomProducts from '~/components/CustomProducts/CustomProducts';
import {
  GET_LIST_IMAGES,
  GET_METAOBJECTS_BY_TYPE,
} from '~/queries/metaobjects';
// import { GET_HOME_MEDIA } from '~/queries/files';
import {GET_ARTICLES} from '~/queries/blogs';

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

  return {...deferredData, ...criticalData};
}

//Critical data, first content

async function loadCriticalData({context}: LoaderFunctionArgs) {
  const [trendingProducts, goals, cleanSuplements, brandIcons] =
    await Promise.all([
      //products query
      context.storefront.query(ALL_PRODUCTS_QUERY),

      //Goals query
      context.storefront.query(GET_METAOBJECTS_BY_TYPE, {
        variables: {
          type: 'goals',
        },
      }),
      //Clean suplements query
      context.storefront.query(GET_METAOBJECTS_BY_TYPE, {
        variables: {
          type: 'clean_sumplements',
        },
      }),

      //get Brand List
      context.storefront.query(GET_LIST_IMAGES, {
        variables: {
          handle: 'brands-icons',
        },
      }),
    ]);

  return {
    trendingProducts: trendingProducts.products.nodes,
    goals: goals,
    cleanSuplements,
    brandIcons,
  };
}


/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */

function loadDeferredData({context}: LoaderFunctionArgs) {
  const articles = context.storefront.query(GET_ARTICLES).catch((error) => {
    // Log query errors, but don't throw them so the page can still render
    console.error(error);
    return null;
  });

  //Bundles query
  const bundlesProducts = context.storefront
    .query(COLLECTION_HANDLE_QUERY)
    .then((res) => res.collection.products.nodes)
    .catch((error) => {
      console.error(error);
      return [];
    });

  //Social media query
  const socialMedia = context.storefront
    .query(GET_LIST_IMAGES, {
      variables: {
        handle: 'instagram-media',
      },
    })
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    articles,
    bundlesProducts: bundlesProducts,
    socialMedia,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  console.log(data, 'data');
  return (
    <div className="home">
      <Hero />
      <BrandBanner brandIcons={data.brandIcons} />
      <GoalsSection goals={data.goals} />
      <TrendingProducts products={data.trendingProducts} />
      <About cleanSuplements={data.cleanSuplements} />
      <Testimonials />
      <Bundles bundles={data.bundlesProducts} />
      <CustomProducts />
      <News />
      <Blog blogs={data.articles} />
      <SocialMedia media={data.socialMedia} />
    </div>
  );
}

// async function loadHomeVideo({context}: LoaderFunctionArgs) {
//   const result = await Promise.all([
//     context.storefront.query(GET_HOME_MEDIA),
//     // Add other queries here, so that they are loaded in parallel
//   ]);

//   return {
//     result,
//   };
// }
