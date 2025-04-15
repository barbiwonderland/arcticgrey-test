export type Article = {
  id: string;
  title: string;
  image: {
    url: string;
  };
  tags: string[];
};

export type Blog = {
  id: string;
  title: string;
  articles: Article[];
};
