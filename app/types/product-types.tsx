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