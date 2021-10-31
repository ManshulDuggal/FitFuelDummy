import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";
export default function Home() {
    return (
        <div>
            <Head>
                <title>Fit Fuel</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar Icon={ArrowCircleUpIcon} />
        </div>
    );
}
