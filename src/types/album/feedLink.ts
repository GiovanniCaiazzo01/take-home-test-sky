type FeedLinksAttributes = {
  rel?: string;
  type?: string;
  href: string;
};

export type FeedLink = {
  attributes: FeedLinksAttributes;
};
