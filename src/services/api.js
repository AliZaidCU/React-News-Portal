const API_KEY = '9cc5e1d9308449c18a33134b4984e424'; // Replace this with your actual API key
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category, query, page) => {
  const url = new URL(`${BASE_URL}/top-headlines`);
  const params = {
    apiKey: API_KEY,
    page,
    pageSize: 10,
  };

  if (category) {
    params.category = category;
  }

  if (query) {
    params.q = query;
  }

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
};
