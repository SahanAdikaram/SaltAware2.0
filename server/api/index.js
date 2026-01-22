module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  res.status(200).json({
    message: 'SaltAware API is running!',
    version: '1.0.0',
    endpoints: {
      'GET /api/recipes': 'Get recipe recommendations',
      'POST /api/recommend': 'Get personalized recipe recommendations',
      'GET /': 'API information (this endpoint)'
    },
    usage: {
      'Get recipes': 'GET /api/recipes?q=chicken&pageSize=10',
      'Recommend recipes': 'POST /api/recommend with body: { "ingredients": ["chicken", "rice"], "healthProfile": { "dailySodiumMax": 1500, "hasDiabetes": false } }'
    }
  });
};
