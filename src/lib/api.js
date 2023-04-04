import dotenv from 'dotenv';
dotenv.config();
const API_URL = process.env.WP_URL;


async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllPagesWithSlugs() {
  const data = await fetchAPI(`
  {
    pages(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
  `);
  return data?.pages;
}

export async function getPageBySlug(slug) {
  const data = await fetchAPI(`
  {
    page(id: "${slug}", idType: URI) {
      title
    	blocks {
        name
        ... on AcfHeroBlock {
          attributes {
            ... on AcfHeroBlockAttributes {
              data
            }
          }
        }
        ... on AcfCopyFullWidthBlock {
          attributes {
            ... on AcfCopyFullWidthBlockAttributes {
              data
            }
          }
        }
        ... on AcfCopyMediaBlock {
          attributes {
            ... on AcfCopyMediaBlockAttributes {
              data
            }
          }
        }
        ... on AcfImagesBlock {
          attributes {
            ... on AcfImagesBlockAttributes {
              data
            }
          }
        }
      }
    }
  }
  `);
  return data?.page;
}