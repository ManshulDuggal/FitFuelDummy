import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionsBanner from "../components/SectionsBanner";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
import ProductsSection from "../components/ProductsSection";
import Base_URL from "../utils/requests";
import axios from "axios";
export default function Home({ items }) {
    console.log("items", items);
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
            <ProductsSection items={items} />
        </div>
    );
}

export async function getServerSideProps(context) {
    const { data } = await axios.get(Base_URL);

    return {
        props: { items: data.items ?? null },
    };
}
