const seoFragment = /* GraphQL */ `
  fragment seo on SEO {
    description
    title
  }
`;

export const pageFragment = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${seoFragment}
`;
