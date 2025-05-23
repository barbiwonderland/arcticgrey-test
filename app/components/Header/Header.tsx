import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from '@remix-run/react';
import {
  type CartViewPayload,
  useAnalytics,
  useOptimisticCart,
} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Common/Aside';
import {HiMiniMagnifyingGlass} from 'react-icons/hi2';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {BsPerson} from 'react-icons/bs';
import {Link} from '@remix-run/react';
import {useCart} from '@shopify/hydrogen-react';

import EmployeeIcon from '../../assets/icons/employee.svg';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header({
  header,
  isLoggedIn,
  cart,
  publicStoreDomain,
}: HeaderProps) {
  const {shop, menu} = header;
  return (
    <header className="header">
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        {/* change name of the company  */}
        <strong className="text-xl font-main ">uncmfrt.com</strong>
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {/* added search link there */}
      <SearchToggle />
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        // console.log(item.title);
        return (
          <NavLink
            className="header-menu-item hover:font-medium  underline-offset-10 gap-x-20 "
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            // style={activeLinkStyle}
            to="#"
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function HeaderCtas({cart}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">
      <div className="font-main text-[14px] hidden mr-1 bg-main-gray w-24 h-11 rounded-lg lg:flex flex-nowrap justify-center items-center font-medium gap-2.5 ">
        Men <img src={EmployeeIcon} alt="employeeIcon" />
      </div>
      <div className=" hidden lg:flex font-main text-[14px] w-[140px] h-[45px] bg-main-blue text-white text-center  flex-nowrap justify-center items-center rounded-lg font-medium ">
        Take the quiz
      </div>
      <div className="flex items-center justify-center gap-2 w-auto ">
        <div>
          <BsPerson size={16} />
        </div>

        <div className="gap-x-3 flex items-center">
          <CartToggle cart={cart} />
        </div>
      </div>
      <HeaderMenuMobileToggle />

      {/* i comment from here because i wanted in the group of links on the middle of nav */}
      {/* <SearchToggle /> */}
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset">
      <HiMiniMagnifyingGlass />
    </button>
  );
}

function CartBadge({count}: {count: number | null}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();
  const {totalQuantity} = useCart();

  return (
    <div
      className="cart-container relative   w-10 h-10  inline-flex items-center justify-center "
      onClick={() => open('cart')}
    >
      <span className="">
        <HiOutlineShoppingBag size={16} />
      </span>
      <div className="cart-badge flex  bg-[#0d0e10] px-1.5  rounded-xl text-white justify-center content-center flex-wrap absolute top-0 right-0 text-xs ">
        {totalQuantity ?? 0}
      </div>
    </div>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue() as CartApiQueryFragment | null;
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'black' : 'black',
  };
}
