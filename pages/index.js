import Head from "next/head";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import SectionsBanner from "../components/section/SectionsBanner";
import ProductsSection from "../components/productSection/ProductsSection";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import Articles from "../components/articles/Articles";
import Base_URL, { Base_URL_NEWS } from "../utils/requests";

export default function Home({ products, news }) {
    return (
        <div>
            <Head>
                <title>Fit Fuel</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar Icon={ArrowCircleUpIcon} />

            {/* Page Banner */}
            <SectionsBanner />

            {/* Section For Products */}
            <ProductsSection products={products} />

            {/* Articles Section */}
            <Articles news={news} />
        </div>
    );
}

// export async function getServerSideProps(context) {
//     const { products } = await axios.get(Base_URL);

//     return {
//         props: { products },
//     };
// }

export async function getServerSideProps(context) {
    const products = await fetch(Base_URL).then((res) => res.json());
    const news = await fetch(Base_URL_NEWS).then((res) => res.json());
    return {
        props: {
            products: products,
            news: news.articles,
        },
    };
}
