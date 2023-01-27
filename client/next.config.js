/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    /* -------------------------------------------------------
      ▽ config情報 ▽
    ---------------------------------------------------------- */
    SITE_HOST: 'http://micro-cms.empty-service.com', // デプロイのホスト
    SITE_NAME: 'Q & A site - ナゼナゼのララベル -',
    DEFAULT_DES: 'デフォルトディスクリプション',
    DEFAULT_KEY: 'デフォルトキー',
    DEFAULT_THUM: '/ogp.jpg',
    API_HOST: 'http://localhost:8000', // API取得先
    DETAILE_FETCH: 'http://api:80', // API取得先
    NEXT_PUBLIC_GA_ID: 'UA-********-**' // GAのトラッキングID (例:UA-********-**)
  },
  typescript: {
    /* -------------------------------------------------------
      ▽ SSGを正常に完了するための型エラー許可 ▽
    ---------------------------------------------------------- */
    ignoreBuildErrors: true
  },
  /* -------------------------------------------------------
    ▽ その他 ▽
  ---------------------------------------------------------- */
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = nextConfig
