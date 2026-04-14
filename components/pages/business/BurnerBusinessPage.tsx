"use client";

import SubpageLayout from "@/components/SubpageLayout";
import { useInView } from "@/hooks/useInView";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useLocale } from "next-intl";

const S3 = "https://NBPKOREAre.s3.ap-northeast-2.amazonaws.com";

const content = {
  en: {
    products: [
      { title: "Duct Burner", subtitle: "Duct Burner", desc: "Low-NOx industrial duct heating burner with metal fiber surface combustion. 0.5FT\u20136FT lineup.", image: `${S3}/images/burner/duct-burner-hero.jpg`, href: "/products/burner/duct-burner", badge: "Core Product" },
      { title: "MPG Burner", subtitle: "MPG Burner", desc: "High-efficiency industrial burner with forced premix for complete combustion.", image: `${S3}/images/burner/fpb/gas-burners-40199-6233087.jpg`, href: "/products/burner/fpb-burner" },
      { title: "Low-NOx Burner", subtitle: "Low-NOx Burner", desc: "Eco-friendly burner minimizing NOx emissions.", image: `${S3}/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg`, href: "/products/burner/low-nox-burner" },
      { title: "Ceramic Burner", subtitle: "Ceramic Burner", desc: "High-efficiency burner maximizing infrared radiant heat with ceramic surface combustion.", image: `${S3}/images/burner/ceramic-burner.jpg`, href: "/products/burner/metal-fiber-burner" },
      { title: "Metal Fiber Burner", subtitle: "Metal Fiber Burner", desc: "Infrared radiant surface combustion. Maximum energy efficiency, dramatically reduced NOx.", image: `${S3}/images/burner/metal-fiber-burner-thumb.png`, href: "/products/burner/metal-fiber-burner" },
      { title: "Furnace Burner", subtitle: "Furnace Burner", desc: "For industrial furnaces, incinerators, and boilers requiring high-temperature combustion.", image: `${S3}/images/burner/furnace-burner-main.jpg`, href: "/products/burner/furnace-burner" },
      { title: "Oven Burner", subtitle: "Oven Burner", desc: "Uniform heating burner optimized for food, painting, and heat treatment ovens.", image: `${S3}/images/burner/oven-burner-main.jpg`, href: "/products/burner/oven-burner" },
    ],
    coreValues: [
      { title: "Low-NOx Combustion Technology", desc: "Achieves low NOx and CO emissions meeting ANSI Z83.4 / Z83.18 standards through two-stage combustion and metal fiber surface combustion technology." },
      { title: "0.5FT\u20136FT Full Lineup", desc: "The NBP series lineup offers customizable options to match on-site duct sizes and heat capacity requirements, from small to large scale." },
      { title: "MIDCO Global Tech Alliance", desc: "Through technical cooperation with MIDCO International (USA), we optimize globally proven combustion systems for domestic industrial sites." },
    ],
    industries: [
      { name: "Paint Drying", desc: "Hot air supply for automotive and shipbuilding paint booths", clients: "BMW, Mercedes-Benz, HD Hyundai Heavy Industries", image: `${S3}/assets/industry2.png`, tag: "Paint" },
      { name: "Industrial Drying", desc: "Drying lines for agricultural products, timber, textiles, and printing", clients: "Numerous industrial sites", image: `/images/industry-shipbuilding.png`, tag: "Drying" },
      { name: "Heat Treatment/Incineration", desc: "Industrial heat treatment furnaces, incinerators, boilers", clients: "POSCO, Dongkuk Steel", image: `${S3}/assets/industry3.png`, tag: "Heat Treatment" },
      { name: "Food Processing", desc: "Food drying, roasting, oven heating", clients: "NH Mokwochon, Ediya Coffee", image: `/images/industry-food.png`, tag: "Food" },
      { name: "Energy/Plant", desc: "Heat sources for power plants and petrochemical plants", clients: "Major energy companies", image: `/images/industry-energy-plant.png`, tag: "Energy" },
      { name: "Semiconductor/Cleanroom", desc: "Cleanroom auxiliary heat sources, process heating", clients: "Major semiconductor manufacturers", image: `/images/industry-semiconductor.png`, tag: "Semiconductor" },
    ],
    techFeatures: [
      "Two-Stage Combustion \u2014 Minimizes NOx and CO emissions",
      "30-Step Precision Turndown Control \u2014 Industry-leading level",
      "Heat-Resistant Metal Fiber Combustion Surface \u2014 Infrared radiant heat transfer",
      "Flame Length Maintained Under 25cm \u2014 Safe in-duct combustion",
      "LNG / LPG Multi-Fuel Compatible \u2014 No nozzle change required",
      "ANSI Z83.4 / Z83.18 International Standards Compliant",
    ],
    partners: [
      { name: "MIDCO International", country: "USA", desc: "Specialized manufacturer of industrial burners and combustion systems. Over 50 years of combustion technology expertise.", since: "2007", logo: `${S3}/images/midco.webp`, href: "https://midcointernational.com/" },
      { name: "ECOSTAR", country: "Turkey", desc: "Industrial environmental systems specialist. Technology partner for European and Middle Eastern markets.", since: "2013", logo: `${S3}/images/ecostar.png`, href: "https://www.ecostar.com.tr" },
    ],
    stats: [
      { number: "17+", label: "Patents", sub: "Proprietary combustion technology patents" },
      { number: "30-Step", label: "Flame Control", sub: "Industry-leading turndown" },
      { number: "6 Types", label: "Burner Lineup", sub: "Duct, Package, Metal, Furnace, Oven, Low-NOx" },
      { number: "2007~", label: "MIDCO Alliance", sub: "US technology partnership" },
    ],
    techStats: [
      { number: "17+", label: "Patents", desc: "Proprietary patents in combustion technology" },
      { number: "2007~", label: "MIDCO Tech Alliance", desc: "Partnership with MIDCO International, USA" },
    ],
    pageTitle: "Industrial Burners Division",
    breadcrumb: [
      { label: "Business", href: "/business" },
      { label: "Industrial Burners", href: "/business/burner" },
    ],
    heroTitle: "The Heart of Combustion Technology: Industrial Burners",
    heroDesc: "Backed by our proprietary metal burner and MIDCO technology alliance, we offer a low-NOx, high-efficiency industrial burner lineup.",
    heroAlt: "NBPKOREA Industrial Burners",
    aboutText: { pre: "NBPKOREA Industrial Burners Division independently develops and manufactures a wide range of industrial burners including ", bold1: "Duct Burners, MPG Burners, Metal Fiber, and Furnace Burners", mid: ". Through a technology alliance with ", bold2: "MIDCO International (USA)", post: ", we apply globally proven ", bold3: "low-NOx, high-efficiency combustion technology", end: " domestically." },
    productSectionTitle: "Product Lineup",
    productSectionDesc: "From compact duct burners to large furnace burners, we provide burner solutions tailored to on-site requirements.",
    industrySectionTitle: "Applications",
    deliveryLink: "View Deliveries",
    techSectionTitle: "Technology Strengths",
    partnerSectionTitle: "Global Technology Partnership",
    ctaTitle: "Want to Learn More About Industrial Burners?",
    ctaDesc: "We propose burner solutions optimized for your site conditions.",
    ctaCatalog: "Request Catalog",
    ctaConsult: "Request Consultation",
  },
  ko: {
    products: [
      { title: "\uB355\uD2B8\uBC84\uB108", subtitle: "Duct Burner", desc: "\uBA54\uD0C8\uD30C\uC774\uBC84 \uD45C\uBA74\uC5F0\uC18C \uBC29\uC2DD\uC758 NOx \uC800\uBC30\uCD9C \uC0B0\uC5C5\uC6A9 \uB355\uD2B8 \uAC00\uC5F4 \uBC84\uB108. 0.5FT~6FT \uB77C\uC778\uC5C5.", image: `${S3}/images/burner/duct-burner-hero.jpg`, href: "/products/burner/duct-burner", badge: "\uC8FC\uB825 \uC81C\uD488" },
      { title: "MPG \uBC84\uB108", subtitle: "MPG Burner", desc: "\uAC15\uC81C \uC608\uD63C\uD569 \uBC29\uC2DD\uC73C\uB85C \uC644\uC804 \uC5F0\uC18C\uB97C \uC2E4\uD604\uD558\uB294 \uACE0\uD6A8\uC728 \uC0B0\uC5C5\uC6A9 \uBC84\uB108.", image: `${S3}/images/burner/fpb/gas-burners-40199-6233087.jpg`, href: "/products/burner/fpb-burner" },
      { title: "\uC800\uB179\uC2A4 \uBC84\uB108", subtitle: "Low-NOx Burner", desc: "NOx \uBC30\uCD9C\uC744 \uADF9\uD55C\uAE4C\uC9C0 \uC800\uAC10\uD558\uB294 \uD658\uACBD \uCE5C\uD654\uD615 \uBC84\uB108.", image: `${S3}/images/burner/fpb/gas-burners-low-nox-40199-6408963.jpg`, href: "/products/burner/low-nox-burner" },
      { title: "\uC138\uB77C\uBBF9 \uBC84\uB108", subtitle: "Ceramic Burner", desc: "\uB0B4\uC5F4 \uC138\uB77C\uBBF9 \uD45C\uBA74\uC5F0\uC18C \uBC29\uC2DD\uC73C\uB85C \uC801\uC678\uC120 \uBCF5\uC0AC\uC5F4\uC744 \uADF9\uB300\uD654\uD558\uB294 \uACE0\uD6A8\uC728 \uBC84\uB108.", image: `${S3}/images/burner/ceramic-burner.jpg`, href: "/products/burner/metal-fiber-burner" },
      { title: "\uBA54\uD0C8\uD30C\uC774\uBC84 \uBC84\uB108", subtitle: "Metal Fiber Burner", desc: "\uC801\uC678\uC120 \uBCF5\uC0AC\uC5F4 \uAE30\uBC18 \uD45C\uBA74\uC5F0\uC18C. \uC5D0\uB108\uC9C0 \uD6A8\uC728 \uADF9\uB300\uD654, NOx \uB300\uD3ED \uC800\uAC10.", image: `${S3}/images/burner/metal-fiber-burner-thumb.png`, href: "/products/burner/metal-fiber-burner" },
      { title: "\uB85C\uC6A9 \uBC84\uB108", subtitle: "Furnace Burner", desc: "\uC0B0\uC5C5\uC6A9 \uC5F4\uCC98\uB9AC\uB85C\xB7\uC18C\uAC01\uB85C\xB7\uBCF4\uC77C\uB7EC \uB4F1 \uACE0\uC628 \uC5F0\uC18C\uAC00 \uC694\uAD6C\uB418\uB294 \uC124\uBE44\uC5D0 \uC801\uC6A9.", image: `${S3}/images/burner/furnace-burner-main.jpg`, href: "/products/burner/furnace-burner" },
      { title: "\uC624\uBE10 \uBC84\uB108", subtitle: "Oven Burner", desc: "\uC2DD\uD488\xB7\uB3C4\uC7A5\xB7\uC5F4\uCC98\uB9AC \uC624\uBE10\uC5D0 \uCD5C\uC801\uD654\uB41C \uADE0\uC77C \uAC00\uC5F4 \uBC84\uB108.", image: `${S3}/images/burner/oven-burner-main.jpg`, href: "/products/burner/oven-burner" },
    ],
    coreValues: [
      { title: "NOx \uC800\uBC30\uCD9C \uC5F0\uC18C \uAE30\uC220", desc: "2\uB2E8 \uC5F0\uC18C \uBC29\uC2DD\uACFC \uBA54\uD0C8\uD30C\uC774\uBC84 \uD45C\uBA74\uC5F0\uC18C \uAE30\uC220\uB85C ANSI Z83.4 / Z83.18 \uAE30\uC900\uC744 \uCDA9\uC871\uD558\uB294 NOx\xB7CO \uC800\uBC30\uCD9C\uC744 \uC2E4\uD604\uD569\uB2C8\uB2E4." },
      { title: "0.5FT~6FT \uD480 \uB77C\uC778\uC5C5", desc: "\uC18C\uD615\uBD80\uD130 \uB300\uD615\uAE4C\uC9C0 \uD604\uC7A5 \uB355\uD2B8 \uD06C\uAE30\uC640 \uC5F4\uB7C9 \uC694\uAD6C\uC5D0 \uB9DE\uCD98 \uB9DE\uCDA4 \uC120\uD0DD\uC774 \uAC00\uB2A5\uD55C NBP \uC2DC\uB9AC\uC988 \uB77C\uC778\uC5C5\uC744 \uAC16\uCD94\uACE0 \uC788\uC2B5\uB2C8\uB2E4." },
      { title: "MIDCO \uAE00\uB85C\uBC8C \uAE30\uC220 \uC81C\uD734", desc: "\uBBF8\uAD6D MIDCO International\uACFC\uC758 \uAE30\uC220 \uD611\uB825\uC73C\uB85C \uAE00\uB85C\uBC8C \uAC80\uC99D\uB41C \uC5F0\uC18C \uC2DC\uC2A4\uD15C\uC744 \uAD6D\uB0B4 \uC0B0\uC5C5 \uD604\uC7A5\uC5D0 \uCD5C\uC801\uD654\uD569\uB2C8\uB2E4." },
    ],
    industries: [
      { name: "\uB3C4\uC7A5 \uAC74\uC870", desc: "\uC790\uB3D9\uCC28\xB7\uC870\uC120 \uB3C4\uC7A5 \uBD80\uC2A4 \uC5F4\uD48D \uACF5\uAE09", clients: "BMW, Mercedes-Benz, \uD604\uB300\uC911\uACF5\uC5C5", image: `${S3}/assets/industry2.png`, tag: "\uB3C4\uC7A5" },
      { name: "\uC0B0\uC5C5\uC6A9 \uAC74\uC870", desc: "\uB18D\uC218\uC0B0\uBB3C, \uBAA9\uC7AC, \uC12C\uC720, \uC778\uC1C4 \uAC74\uC870 \uB77C\uC778", clients: "\uB2E4\uC218 \uC0B0\uC5C5 \uD604\uC7A5", image: `/images/industry-shipbuilding.png`, tag: "\uAC74\uC870" },
      { name: "\uC5F4\uCC98\uB9AC/\uC18C\uAC01", desc: "\uC0B0\uC5C5\uC6A9 \uC5F4\uCC98\uB9AC\uB85C, \uC18C\uAC01\uB85C, \uBCF4\uC77C\uB7EC", clients: "POSCO, \uB3D9\uAD6D\uC81C\uAC15", image: `${S3}/assets/industry3.png`, tag: "\uC5F4\uCC98\uB9AC" },
      { name: "\uC2DD\uD488 \uAC00\uACF5", desc: "\uC2DD\uD488 \uAC74\uC870, \uB85C\uC2A4\uD305, \uC624\uBE10 \uAC00\uC5F4", clients: "\uB18D\uD611\uBAA9\uC6B0\uCD0C, \uC774\uB514\uC57C\uCEE4\uD53C", image: `/images/industry-food.png`, tag: "\uC2DD\uD488" },
      { name: "\uC5D0\uB108\uC9C0/\uD50C\uB79C\uD2B8", desc: "\uBC1C\uC804\uC18C, \uC11D\uC720\uD654\uD559 \uD50C\uB79C\uD2B8 \uC5F4\uC6D0", clients: "\uC5D0\uB108\uC9C0 \uC8FC\uC694 \uAE30\uC5C5", image: `/images/industry-energy-plant.png`, tag: "\uC5D0\uB108\uC9C0" },
      { name: "\uBC18\uB3C4\uCCB4/\uD074\uB9B0\uB8F8", desc: "\uD074\uB9B0\uB8F8 \uBCF4\uC870 \uC5F4\uC6D0, \uACF5\uC815 \uAC00\uC5F4", clients: "\uBC18\uB3C4\uCCB4 \uC8FC\uC694 \uC81C\uC870\uC0AC", image: `/images/industry-semiconductor.png`, tag: "\uBC18\uB3C4\uCCB4" },
    ],
    techFeatures: [
      "2\uB2E8 \uC5F0\uC18C(Two-Stage) \uBC29\uC2DD \u2014 NOx\xB7CO \uBC30\uCD9C \uCD5C\uC18C\uD654",
      "30\uB2E8\uACC4 \uC815\uBC00 \uD134\uB2E4\uC6B4 \uC81C\uC5B4 \u2014 \uC5C5\uACC4 \uCD5C\uACE0 \uC218\uC900",
      "\uB0B4\uC5F4 \uBA54\uD0C8\uD30C\uC774\uBC84 \uC5F0\uC18C\uBA74 \u2014 \uC801\uC678\uC120 \uBCF5\uC0AC \uC5F4\uC804\uB2EC",
      "\uD654\uC5FC \uAE38\uC774 25cm \uC774\uD558 \uC720\uC9C0 \u2014 \uC548\uC804\uD55C \uB355\uD2B8 \uB0B4 \uC5F0\uC18C",
      "LNG / LPG \uB2E4\uC5F0\uB8CC \uB300\uC751 \u2014 \uB178\uC990 \uAD50\uCCB4 \uBD88\uD544\uC694",
      "ANSI Z83.4 / Z83.18 \uAD6D\uC81C \uAE30\uC900 \uC801\uD569",
    ],
    partners: [
      { name: "MIDCO International", country: "\uBBF8\uAD6D", desc: "\uC0B0\uC5C5\uC6A9 \uBC84\uB108\xB7\uC5F0\uC18C \uC2DC\uC2A4\uD15C \uC804\uBB38 \uC81C\uC870\uC0AC. 50\uB144 \uC774\uC0C1\uC758 \uC5F0\uC18C \uAE30\uC220 \uB178\uD558\uC6B0.", since: "2007", logo: `${S3}/images/midco.webp`, href: "https://midcointernational.com/" },
      { name: "ECOSTAR", country: "\uD130\uD0A4", desc: "\uC0B0\uC5C5\uC6A9 \uD658\uACBD\uC2DC\uC2A4\uD15C \uC804\uBB38 \uAE30\uC5C5. \uC720\uB7FD\xB7\uC911\uB3D9 \uC2DC\uC7A5 \uAE30\uC220 \uD30C\uD2B8\uB108.", since: "2013", logo: `${S3}/images/ecostar.png`, href: "https://www.ecostar.com.tr" },
    ],
    stats: [
      { number: "17\uAC74+", label: "\uB4F1\uB85D \uD2B9\uD5C8", sub: "\uC5F0\uC18C \uAE30\uC220 \uB3C5\uC790 \uD2B9\uD5C8" },
      { number: "30\uB2E8\uACC4", label: "\uD654\uC5FC \uC81C\uC5B4", sub: "\uC5C5\uACC4 \uCD5C\uACE0 \uD134\uB2E4\uC6B4" },
      { number: "6\uC885", label: "\uBC84\uB108 \uB77C\uC778\uC5C5", sub: "\uB355\uD2B8\xB7\uD328\uD0A4\uC9C0\xB7\uBA54\uD0C8\xB7\uB85C\uC6A9\xB7\uC624\uBE10\xB7\uC800\uB179\uC2A4" },
      { number: "2007~", label: "MIDCO \uC81C\uD734", sub: "\uBBF8\uAD6D \uAE30\uC220 \uD30C\uD2B8\uB108\uC2ED" },
    ],
    techStats: [
      { number: "17\uAC74+", label: "\uB4F1\uB85D \uD2B9\uD5C8", desc: "\uC5F0\uC18C \uAE30\uC220 \uAD00\uB828 \uB3C5\uC790 \uD2B9\uD5C8 \uBCF4\uC720" },
      { number: "2007~", label: "MIDCO \uAE30\uC220 \uC81C\uD734", desc: "\uBBF8\uAD6D MIDCO International \uD30C\uD2B8\uB108\uC2ED" },
    ],
    pageTitle: "\uC0B0\uC5C5\uC6A9 \uBC84\uB108 \uC0AC\uC5C5\uBD80",
    breadcrumb: [
      { label: "\uC0AC\uC5C5\uBD84\uC57C", href: "/business" },
      { label: "\uC0B0\uC5C5\uC6A9 \uBC84\uB108", href: "/business/burner" },
    ],
    heroTitle: "\uC5F0\uC18C \uAE30\uC220\uC758 \uD575\uC2EC, \uC0B0\uC5C5\uC6A9 \uBC84\uB108",
    heroDesc: "\uB3C5\uC790 \uAC1C\uBC1C \uBA54\uD0C8\uBC84\uB108\uC640 MIDCO \uAE30\uC220 \uC81C\uD734\uB97C \uBC14\uD0D5\uC73C\uB85C, NOx \uC800\uBC30\uCD9C\xB7\uACE0\uD6A8\uC728 \uC0B0\uC5C5\uC6A9 \uBC84\uB108 \uB77C\uC778\uC5C5\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",
    heroAlt: "NBPKOREA \uC0B0\uC5C5\uC6A9 \uBC84\uB108",
    aboutText: { pre: "NBPKOREA \uC0B0\uC5C5\uC6A9 \uBC84\uB108 \uC0AC\uC5C5\uBD80\uB294 ", bold1: "\uB355\uD2B8\uBC84\uB108, MPG \uBC84\uB108, \uBA54\uD0C8\uD30C\uC774\uBC84, \uB85C\uC6A9 \uBC84\uB108", mid: " \uB4F1 \uB2E4\uC591\uD55C \uC0B0\uC5C5\uC6A9 \uBC84\uB108\uB97C \uB3C5\uC790 \uAC1C\uBC1C\xB7\uC0DD\uC0B0\uD569\uB2C8\uB2E4. ", bold2: "\uBBF8\uAD6D MIDCO International", post: "\uACFC\uC758 \uAE30\uC220 \uC81C\uD734\uB85C \uAE00\uB85C\uBC8C \uC218\uC900\uC758 ", bold3: "NOx \uC800\uBC30\uCD9C\xB7\uACE0\uD6A8\uC728 \uC5F0\uC18C \uAE30\uC220", end: "\uC744 \uAD6D\uB0B4\uC5D0 \uC801\uC6A9\uD569\uB2C8\uB2E4." },
    productSectionTitle: "\uC81C\uD488 \uB77C\uC778\uC5C5",
    productSectionDesc: "\uC18C\uD615 \uB355\uD2B8\uBC84\uB108\uBD80\uD130 \uB300\uD615 \uB85C\uC6A9 \uBC84\uB108\uAE4C\uC9C0, \uD604\uC7A5 \uC694\uAD6C\uC5D0 \uB9DE\uB294 \uBC84\uB108 \uC194\uB8E8\uC158\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",
    industrySectionTitle: "\uC801\uC6A9 \uBD84\uC57C",
    deliveryLink: "\uB0A9\uD488 \uC2E4\uC801 \uBCF4\uAE30",
    techSectionTitle: "\uAE30\uC220 \uAC15\uC810",
    partnerSectionTitle: "\uAE00\uB85C\uBC8C \uAE30\uC220 \uD30C\uD2B8\uB108\uC2ED",
    ctaTitle: "\uC0B0\uC5C5\uC6A9 \uBC84\uB108\uC5D0 \uB300\uD574 \uB354 \uC54C\uACE0 \uC2F6\uC73C\uC2E0\uAC00\uC694?",
    ctaDesc: "\uD604\uC7A5 \uC870\uAC74\uC5D0 \uCD5C\uC801\uD654\uB41C \uBC84\uB108 \uC194\uB8E8\uC158\uC744 \uC81C\uC548\uD574\uB4DC\uB9BD\uB2C8\uB2E4.",
    ctaCatalog: "\uCE74\uD0C8\uB85C\uADF8 \uC2E0\uCCAD",
    ctaConsult: "\uAE30\uC220 \uC0C1\uB2F4 \uC2E0\uCCAD",
  },
};

export default function BurnerBusinessPage() {
  const locale = useLocale() as "en" | "ko";
  const c = content[locale] ?? content.ko;

  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, isInView: aboutInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: productRef, isInView: productInView } = useInView({ threshold: 0.1 });
  const { ref: industryRef, isInView: industryInView } = useInView({ threshold: 0.1 });
  const { ref: techRef, isInView: techInView } = useInView({ threshold: 0.1 });
  const { ref: partnerRef, isInView: partnerInView } = useInView({ threshold: 0.1 });

  return (
    <SubpageLayout
      title={c.pageTitle}
      subtitle="Industrial Burners Division"
      breadcrumb={c.breadcrumb}
    >
      {/* 1. 히어로 */}
      <section ref={heroRef} className="relative overflow-hidden">
        <div className="relative aspect-[21/9] md:aspect-[21/7] w-full bg-[#1a1a1a]">
          <Image src={`${S3}/images/burner/duct-burner-hero.jpg`} alt={c.heroAlt} fill className="object-cover opacity-60" priority  unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-transparent" />
          <div className={`absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-4xl transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs tracking-[0.1em] uppercase text-[#C05010] mb-3">Industrial Burners</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-snug">{c.heroTitle}</h2>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">{c.heroDesc}</p>
          </div>
        </div>
      </section>

      {/* 2. 이 사업부가 하는 일 */}
      <section ref={aboutRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`max-w-3xl mb-16 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-lg md:text-xl lg:text-2xl text-[#2d2a28] leading-relaxed font-light">
              {c.aboutText.pre}<strong className="font-bold">{c.aboutText.bold1}</strong>{c.aboutText.mid}<strong className="font-bold">{c.aboutText.bold2}</strong>{c.aboutText.post}<strong className="font-bold">{c.aboutText.bold3}</strong>{c.aboutText.end}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {c.coreValues.map((value, index) => (
              <div key={value.title} className={`border-t-2 border-[#C05010] pt-6 transition-all duration-1000 ${aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${200 + index * 150}ms` }}>
                <h3 className="text-base md:text-lg font-bold text-[#2d2a28] mb-3">{value.title}</h3>
                <p className="text-sm md:text-base text-[#5C6470] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 숫자 실적 */}
      <section ref={statsRef} className="py-16 md:py-20 px-6 md:px-12 bg-[#2d2a28]">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {c.stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C05010] block mb-2">{stat.number}</span>
                <span className="text-base font-semibold text-white block mb-1">{stat.label}</span>
                <span className="text-xs text-[#C8C3BD]">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 제품 라인업 */}
      <section ref={productRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 transition-all duration-1000 ${productInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="section-label block mb-4">Products</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">{c.productSectionTitle}</h2>
            <p className="text-sm md:text-base text-[#5C6470] max-w-2xl leading-relaxed">{c.productSectionDesc}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {c.products.map((product, index) => (
              <Link href={product.href} key={product.title} className={`group block transition-all duration-700 ${productInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAFAFA] border border-[#D4DAE2] group-hover:border-[#C05010]/50 transition-colors duration-300">
                  <Image src={product.image} alt={product.title} fill className="object-contain group-hover:scale-105 transition-transform duration-700"  unoptimized />
                  {product.badge && <span className="absolute top-3 left-3 bg-[#C05010] text-white text-xs px-3 py-1 tracking-[0.04em]">{product.badge}</span>}
                </div>
                <div className="mt-4">
                  <span className="text-xs tracking-[0.06em] uppercase text-[#5C6470]">{product.subtitle}</span>
                  <h3 className="text-base md:text-lg font-bold text-[#2d2a28] group-hover:text-[#C05010] transition-colors mt-1">{product.title}</h3>
                  <p className="text-sm text-[#5C6470] leading-relaxed mt-2">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 적용 분야 */}
      <section ref={industryRef} className="py-20 md:py-24 px-6 md:px-12 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 transition-all duration-1000 ${industryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="section-label block mb-4">Applications</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">{c.industrySectionTitle}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {c.industries.map((item, index) => (
              <Link href={`/performance?tag=${encodeURIComponent(item.tag)}&cat=burner`} key={item.name} className={`group relative block aspect-[4/3] overflow-hidden transition-all duration-700 ${industryInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 80}ms` }}>
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700"  unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5"><h3 className="text-lg font-bold text-white">{item.name}</h3></div>
                <div className="absolute inset-0 bg-[#2d2a28]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-xs text-white/50 mb-4">{item.clients}</p>
                  <span className="inline-flex items-center gap-2 text-xs text-[#C05010]">{c.deliveryLink} <svg width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M0 3H13M13 3L10 1M13 3L10 5" stroke="currentColor" strokeWidth="1" /></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 기술 강점 */}
      <section ref={techRef} className="py-20 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 transition-all duration-1000 ${techInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="section-label block mb-4">Technology</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28]">{c.techSectionTitle}</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className={`md:col-span-2 flex flex-col gap-8 transition-all duration-1000 ${techInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              {c.techStats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#C05010] pl-6">
                  <span className="text-4xl md:text-5xl font-bold text-[#C05010] block mb-1">{stat.number}</span>
                  <span className="text-base font-semibold text-[#2d2a28] block mb-2">{stat.label}</span>
                  <p className="text-sm text-[#5C6470] leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
            <div className={`md:col-span-3 transition-all duration-1000 delay-200 ${techInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="grid gap-4">
                {c.techFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-[#D4DAE2] hover:border-[#C05010]/30 transition-colors duration-300">
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#C05010] flex-shrink-0" />
                    <span className="text-sm md:text-base text-[#3D4450] leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 글로벌 파트너십 */}
      <section ref={partnerRef} className="py-20 md:py-24 px-6 md:px-12 bg-[#F5F7F8]">
        <div className="max-w-7xl mx-auto">
          <div className={`mb-14 transition-all duration-1000 ${partnerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="section-label block mb-4">Partnership</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">{c.partnerSectionTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {c.partners.map((partner, index) => (
              <a key={partner.name} href={partner.href} target="_blank" rel="noopener noreferrer" className={`group border border-[#D4DAE2] bg-white hover:border-[#C05010]/30 transition-all duration-700 ${partnerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="relative h-32 md:h-40 bg-[#F8F9FB] flex items-center justify-center p-8 border-b border-[#D4DAE2]">
                  <Image src={partner.logo} alt={partner.name} width={200} height={80} className="object-contain max-h-16 md:max-h-20 group-hover:scale-105 transition-transform duration-500"  unoptimized />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs tracking-[0.06em] uppercase text-[#C05010] border border-[#C05010]/30 px-2 py-0.5">{partner.country}</span>
                    <span className="text-xs text-[#5C6470]">Since {partner.since}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2d2a28] mb-3 group-hover:text-[#C05010] transition-colors">{partner.name}</h3>
                  <p className="text-sm md:text-base text-[#5C6470] leading-relaxed">{partner.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-white border-t border-[#D4DAE2]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d2a28] mb-4">{c.ctaTitle}</h2>
          <p className="text-sm md:text-base text-[#5C6470] mb-8 max-w-xl mx-auto leading-relaxed">{c.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/support?type=catalog" className="inline-flex items-center gap-3 text-sm tracking-[0.04em] border border-[#D4DAE2] px-8 py-4 text-[#5C6470] hover:border-[#C05010] hover:text-[#C05010] transition-all duration-300">{c.ctaCatalog} <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg></Link>
            <Link href="/support" className="inline-flex items-center gap-3 text-sm tracking-[0.04em] bg-[#C05010] text-white px-8 py-4 hover:bg-[#2d2a28] transition-all duration-300">{c.ctaConsult} <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1" /></svg></Link>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
