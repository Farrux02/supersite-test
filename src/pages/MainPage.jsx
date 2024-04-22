import Header from "@/widgets/Header/Header";
import Navbar from "@/widgets/Navbar/Navbar";
import BannerWidget from "../widgets/BannerWidget/BannerWidget";
import WhatIsWidget from "../widgets/WhatIsWidget/WhatIsWidget";
import WhyMsdWidget from "../widgets/WhyMsdWidget/WhyMsdWidget";
import WhoInstalWidget from "../widgets/WhoInstalWidget/WhoInstalWidget";
import Footer from "../widgets/Footer/Footer";

export default function MainPage() {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                <BannerWidget />
                <WhatIsWidget />
                <WhyMsdWidget />
                <WhoInstalWidget />
            </main>
            <Footer />
        </>
    )
}
