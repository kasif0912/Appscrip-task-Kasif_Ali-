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
  const res = await fetch("https://appscrip-task-kasif-lpywaoazv-kasifalis-projects.vercel.app/api/products");
  const products = await res.json();
  return { props: { products } };
}

