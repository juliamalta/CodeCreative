import Script from "next/script";

export default function GoogleAdsense() {
  return (
    <Script
      id="google-adsense"
      strategy="beforeInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4619041917355596"
      crossOrigin="anonymous"
    />
  );
}