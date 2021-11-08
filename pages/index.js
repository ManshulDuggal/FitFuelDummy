import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionsBanner from "../components/SectionsBanner";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import ProductsSection from "../components/productSection/ProductsSection";
import Base_URL from "../utils/requests";
import axios from "axios";
export default function Home({ products }) {
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
    return {
        props: {
            products: products,
        },
    };
}
