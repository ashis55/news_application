const axios = require('axios');

exports.handler = async (event) => {
  const { query } = event.queryStringParameters;
  const apiKey = process.env.NEWS_API_KEY; // Ensure your API key is set in environment variables
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching news" }),
    };
  }
};
