import Image from "next/dist/client/image";
import { Carousel } from "react-responsive-carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SectionsBanner = () => {
    return (
        <section className="relative">
            {/* Banner */}
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={true}
                interval={3000}
            >
                {/* <ArrowLeftIcon
                    width={10}
                    className="absolute top-60 left-5 cursor-pointer z-10"
                /> */}
                <div>
                    <Image
                        loading="lazy"
                        layout="responsive"
                        src="https://ff360-media.s3.ap-south-1.amazonaws.com/3f0fcf25eb6d4e29864a922e0673d235.jpg"
                        alt="not found"
                        width={1000}
                        height={300}
                    />
                </div>
                <div className="cursor-pointer">
                    <Image
                        loading="lazy"
                        layout="responsive"
                        src="https://ff360-media.s3.ap-south-1.amazonaws.com/a830e18f28d647b99df90282bae35581.jpg"
                        alt="not found"
                        width={1000}
                        height={300}
                    />
                </div>
                <div className="">
                    <Image
                        loading="lazy"
                        layout="responsive"
                        src="https://ff360-media.s3.ap-south-1.amazonaws.com/6161947f5ce64b1b8acfe7ce4f9e608b.jpg"
                        alt="not found"
                        width={1000}
                        height={300}
                    />
                </div>
            </Carousel>
        </section>
    );
};

export default SectionsBanner;
