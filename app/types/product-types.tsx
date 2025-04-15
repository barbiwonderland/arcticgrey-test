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