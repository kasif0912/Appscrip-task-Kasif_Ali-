import Footer from "@/components/Footer";
import Header from "@/components/Header.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import ProductsSection from "@/components/ProductSection";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Appscrip Task - Kasif</title>
        <meta
          name="description"
          content="MERN Stack Developer task using FakeStore API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <HeroSection />
      <ProductsSection products={products} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    // If API fails or returns HTML, handle it
    if (!res.ok) {
      console.error("API returned non-200 code:", res.status);
      return { props: { products: [] } };
    }

    const text = await res.text();
    let products = [];

    try {
      products = JSON.parse(text); 
    } catch (error) {
      console.error("API did not return JSON:", text);
      return { props: { products: [] } };
    }

    return { props: { products } };
  } catch (error) {
    console.error("Fetch error:", error);
    return { props: { products: [] } };
  }
}

