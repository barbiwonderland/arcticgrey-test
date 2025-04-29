export type SimpleProduct_ROMPE = {
  node: {
    description: string;
    handle: string;
    id: string;
    images: {
      edges: {
        node: {
          altText: string | null;
          url: string;
        };
      }[];
    };
    options: {
      name: string;
      values: string[];
    }[];
    title: string;
    variants: {
      edges: {
        node: {
          id?: string;
          selectedOptions?: {
            name: string;
            value: string;
          }[];
          title?: string;
          price?: {
            amount: string;
          };
        };
      }[];
    };
  };
};

export type SimpleProduct = {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: {
    nodes: {
      id: string;
      url: string;
      altText: string | null;
      width: number;
      height: number;
    }[];
  };
  variants: {
    nodes: {
      price: {
        amount: string;
      };
    }[];
  };
};

export type ProductDetails = {
  id?: string | null;
  title?: string | null;
  vendor?: string | null;
  handle?: string | null;
  descriptionHtml?: string | null;
  description?: string | null;
  encodedVariantExistence?: string | null;
  encodedVariantAvailability?: string | null;
  options?: {
    name?: string | null;
    optionValues?: {
      name?: string | null;
      firstSelectableVariant?: {
        availableForSale?: boolean | null;
        compareAtPrice?: any;
        id?: string | null;
        image?: {
          __typename?: string | null;
          id?: string | null;
          url?: string | null;
          altText?: string | null;
          width?: number | null;
          height?: number | null;
        };
        price?: {
          amount?: string | null;
          currencyCode?: string | null;
        };
        product?: {
          title?: string | null;
          handle?: string | null;
        };
        selectedOptions?: {
          name?: string | null;
          value?: string | null;
        }[];
        sku?: string | null;
        title?: string | null;
        unitPrice?: any;
      };
      swatch?: any;
    }[];
  }[];
  images?: {
    nodes?: {
      id?: string | null;
      url?: string | null;
      altText?: string | null;
      width?: number | null;
      height?: number | null;
    }[];
  };
  seo?: {
    description?: string | null;
    title?: string | null;
  };
};
