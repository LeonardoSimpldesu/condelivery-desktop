const env = {
  TOKEN_NAME: process.env.NEXT_PUBLIC_TOKEN_NAME || 'token',
  BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://condelivery-api.onrender.com',
}

export default env
