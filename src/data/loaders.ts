import qs from 'qs';
import { flattenAttributes, getStrapiURL } from '@/lib/utils';
import { cache } from 'react';

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, headers);
    const data = await response.json();
    return flattenAttributes(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL('/api/home-page', baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          logo: {
            fields: ['url', 'alternativeText'],
          },
          links: {
            populate: true,
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPageData() {
  const url = new URL('/api/global', baseUrl);

  url.search = qs.stringify({
    populate: {
      header: {
        populate: {
          socials: {
            populate: {
              image: {
                fields: ['url', 'alternativeText'],
              },
            },
          },
        },
      },
      footer: {
        populate: {
          logo: { fields: ['url', 'alternativeText'] },
          links: { populate: true },
        },
      },
    },
  });

  return await fetchData(url.href);
}
