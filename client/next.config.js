/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    /* -------------------------------------------------------
      ▽ config情報 ▽
    ---------------------------------------------------------- */
    SITE_HOST: 'http://micro-cms.empty-service.com', // デプロイのホスト
    SITE_NAME: 'デフォルトサイトネーム',
    DEFAULT_DES: 'デフォルトディスクリプション',
    DEFAULT_KEY: 'デフォルトキー',
    DEFAULT_THUM: '/ogp.jpg',
    MICROCMS_HOST: 'https://emptyservice.microcms.io', // API取得先
    MICROCMS_API_KEY: '25428d9c98a04363bc1305d0b293978ab774', // 取得先のAPI KEY
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
