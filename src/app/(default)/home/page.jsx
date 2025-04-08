"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Google from "@/assets/img/google.svg";
import GoogleMobile from "@/assets/img/google.svg";
import Training from "@/assets/img/training.svg";
import Job from "@/assets/img/job.svg";
import Carrers from "@/assets/img/carrers.svg";
import Future from "@/assets/img/future.svg";
import Top from "@/assets/img/top.svg";
import Star from "@/assets/img/star.svg";
import Background from "@/assets/img/banner.jpg";
import Mobilebackground from "@/assets/img/mobilebanner.jpg";
import Ok from "@/assets/img/ok.svg";
import Company_1 from "@/assets/img/company_1.png";
import Company_2 from "@/assets/img/company_2.png";
import Company_3 from "@/assets/img/company_3.png";
import Accenture from "@/assets/img/company/accenture.png";
import Adobe from "@/assets/img/company/adobe.png";
import Amazon1 from "@/assets/img/company/amazons.png";
import Congnizent from "@/assets/img/company/cognizent.png";
import Curekit from "@/assets/img/company/curekit.png";
import Dream11 from "@/assets/img/company/dream11.png";
import Filpkart from "@/assets/img/company/filpkart.jpg";
import Freshwork from "@/assets/img/company/freshwork.png";
import Google1 from "@/assets/img/company/google.png";
import Meesho from "@/assets/img/company/meesho.avif";
import Netfilx from "@/assets/img/company/netflix.png";
import Nykaa from "@/assets/img/company/nykaa.png";
import Paytm from "@/assets/img/company/paytm.png";
import Phope from "@/assets/img/company/phope.png";
import Razorpay from "@/assets/img/company/razorpay.png";
import Salesforce from "@/assets/img/company/salesforce.png";
import Swiggy from "@/assets/img/company/swiggy.jpg";
import Tcs from "@/assets/img/company/tcs.png";
import Uber from "@/assets/img/company/uber.png";
import Unacadamy from "@/assets/img/company/unacadamy.png";
import Zomato from "@/assets/img/company/zomato.png";
import Calender from "@/assets/img/calendar.svg";
import Attachment from "@/assets/img/attachment.jpeg";
import Projects from "@/assets/img/project.svg";
import Bulp from "@/assets/img/bulb.svg";
import DataBase from "@/assets/img/data.svg";
import Lence from "@/assets/img/lence.svg";
import Student from "@/assets/img/student.svg";
import Trainer from "@/assets/img/trainer.svg";
import Record from "@/assets/img/record.svg";
import Course from "@/assets/img/course.svg";
import Course1 from "@/assets/img/course_2.svg";
import Shoe from "@/assets/img/shoe.svg";
import Shoe1 from "@/assets/img/shoe_1.svg";
import Amazon from "@/assets/img/amazon.png";
import Logo1 from "@/assets/img/logo_1.png";
import Logo2 from "@/assets/img/logo_2.png";
import Logo3 from "@/assets/img/logo_3.png";
import Logo4 from "@/assets/img/logo_4.png";
import Base from "@/assets/img/base.svg";
import smallLogo from "@/assets/img/smalllogo.svg";
import FormBack from "@/assets/img/formback.svg";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import TestimonialSlider from "@/components/testimonail";
import MapWithPoints from "@/components/map";
import Accordion from "@/components/accardian";
import Captcha from "@/assets/img/captcha.png";
import emailjs from "emailjs-com";

import Pho1 from "@/assets/img/photo/1.jpg";
import Pho2 from "@/assets/img/photo/2.jpg";
import Pho3 from "@/assets/img/photo/3.jpg";
import Pho4 from "@/assets/img/photo/4.jpg";
import Pho5 from "@/assets/img/photo/5.jpg";
import Pho6 from "@/assets/img/photo/6.jpg";
import Pho7 from "@/assets/img/photo/7.jpg";
import Pho8 from "@/assets/img/photo/8.jpg";
import Pho9 from "@/assets/img/photo/9.jpg";
import Pho10 from "@/assets/img/photo/10.jpg";
import Pho11 from "@/assets/img/photo/11.jpg";
import Pho12 from "@/assets/img/photo/12.jpg";

import EY from "@/assets/img/student/ey.png";
import Ola from "@/assets/img/student/ola.svg";
import Decode from "@/assets/img/student/decode.png";
import Hcg from "@/assets/img/student/hcg.png";
import Adverb from "@/assets/img/student/adverb.jpeg";
import Edumerge from "@/assets/img/student/edumerge.jpeg";
import Stock from "@/assets/img/student/stock.png";
import College from "@/assets/img/student/college.png";
import Foxbro from "@/assets/img/student/foxbro.png";
import Ecom from "@/assets/img/student/ecom.png";
import Header from "@/components/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/footer";
import ScrollLinked from "@/components/silde";
import LearningAdvisorForm from "@/components/form";
import OrbitAnimation from "@/components/orbitanimation";
import Modal from "@/components/model";
import { accardiancontent, accardiancontentfaq, Student0, Student1, Student2, Student3, Student4, Student5 } from "@/constant";

const SERVICE_ID = "service_kuuj0j4";
const TEMPLATE_ID = "template_havnc1k";
const PUBLIC_KEY = "Ud5ewrBIdTbH3ywgS";

const allCards = [
  {
    id: 1,
    name: "Jeevan",
    img: Pho1,
    company: Filpkart,
    des: "Didnt expect to learn so much in such a short time! The live projects were the best part coz you actually get to apply what you learn. Trainers are chill and explain stuff in simple terms. Defrecommend if you are serious about digital marketing.",
  },
  {
    id: 2,
    name: "Keerthi Vasan",
    img: Pho2,
    company: EY,
    des: "I was looking for a digital marketing course that could make me hands on, not just too much in theory. Bluetick Academy was exactly doing that. The assignments were useful and I am able managing marketing campaigns on my own.",
  },
  {
    id: 3,
    name: "Harini Pandiaraj",
    img: Pho3,
    company: Amazon,
    des: "Blue tick helped me understand how actually works. I learned SEO, Google Ads, and social media marketing from scratch. The live projects were most important of all. Thanks to the trainers.",
  },
  {
    id: 4,
    name: "Lekha",
    img: Pho4,
    company: Ecom,
    des: "First of all, thanks to the trainers. They actually teach you how to run ads, optimize campaigns, and track results.This course gave me everything I needed to implement digital marketing in my business.",
  },
  {
    id: 5,
    name: "Bright Prabahar",
    img: Pho5,
    company: Ola,
    des: "The trainers are patient and explain everything clearly. I compared 3-4 institutes before choosing Bluetick academy and I’m happy about my decision. I am handling huge budget in my company now with the knowledge gained.",
  },
  {
    id: 6,
    name: "Priyal Bather",
    img: Pho6,
    company: Decode,
    des: "Digital marketing was completely new for me, but the way they teach makes it very easy to understand. I landed in a job and could crack my 2 nd interview itself.",
  },
  {
    id: 7,
    name: "Atul",
    img: Pho7,
    company: Hcg,
    des: "One of the best things of Bluetick academy is the practical approach. You actually create the campaign ads sitting in the class itself. The trainers are too good, and they make sure everyone understands before moving to the next topic.",
  },
  {
    id: 8,
    name: "Akash",
    img: Pho8,
    company: Adverb,
    des: "The course was well-structured and easy to follow. The placement assistance helped me land my first job in digital marketing. I feel so much more confident in handling digital campaigns now.",
  },
  {
    id: 9,
    name: "Girish",
    img: Pho9,
    company: Edumerge,
    des: "I joined to upskill and switch from sales to digital marketing. The curriculum covers everything in DM. Definitely learned a lot and it feels great to start my career through bluetick.",
  },
  {
    id: 10,
    name: "Aswini",
    img: Pho10,
    company: Stock,
    des: "SEO and Google Ads were the toughest topics for me, but the way they taught it made a huge difference. I’ve already started handling projects on my own for my business. I love that they teach you everything step by step.",
  },
  {
    id: 11,
    name: "Shyam",
    img: Pho11,
    company: College,
    des: "I had tried learning digital marketing on my own but kept getting confused. This course cleared all my doubts. They even helped me complete my first freelance project. Would recommend even for beginners.",
  },
  {
    id: 12,
    name: "Edwin",
    img: Pho12,
    company: Foxbro,
    des: "Honestly, I was a bit nervous before joining coz I had zero background in marketing. But the trainers made it really easy to understand. Practicing on all the projects in the class gave me confidence. I’m now handling end to end Digital marketing in my company and it’s going great.",
  },
];

const projects = [
  {
    id: 1,
    title: "Real Industry Projects",
    des: "(Work on Live Business)",
    img: Projects,
  },
  {
    id: 2,
    title: "100% Hands on Learning",
    des: "(No Boring Lectures)",
    img: Bulp,
  },
  {
    id: 3,
    title: "Earn while you Learn",
    des: "(Freelancing & Entrepreneurship)",
    img: Base,
  },
  {
    id: 4,
    title: "500+ Hiring Partners",
    des: "(Classroom to Boardroom)",
    img: Lence,
  },
];

const coureses = [
  {
    id: 1,
    title:
      "Professional Certification Program in Digital Marketing & Analytics",
    duration: "3 Months   |   Weekdays & Weekends",
    img: Course,
    list_1: "7 Courses in 1 program",
    list_2: "20+ Tools with AI and 15+ live Projects",
    list_3: "12+ Certifications",
  },
  {
    id: 2,
    title: "Post Graduate Program in Digital Marketing & Analytics",
    duration: "4.5 Months   |   Weekdays & Weekends",
    img: Course1,
    list_1: "15 Courses in 1 program",
    list_2: "60+ Tools with AI and 25+ live Projects",
    list_3: "Guaranteed Job",
    list_4: "2 Specialisations",
  },
];

const cardData = [
  { id: 1, img: Training, text: "7+ years in training" },
  { id: 2, img: Carrers, text: "10k+ Careers" },
  { id: 3, img: Job, text: "Get Job Ready" },
  { id: 4, img: Future, text: "Future Proof" },
];

function Home() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [formType, setFormType] = useState("default");
  const [expandedCards, setExpandedCards] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);


  // Background Image Start

  const [bgImage, setBgImage] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
      ? Mobilebackground.src
      : Background.src
  );

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth < 768 ? Mobilebackground.src : Background.src);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Background Image End


  const toggleExpand = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const handleLoadMore = () => {
    setVisibleCards(allCards.length);
  };

  const handleLoadLess = () => {
    setVisibleCards(3);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    center: "",
    company: "",
    location: "",
    learningMode: "",
    captchaChecked: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Invalid email";
    if (!formData.mobile.match(/^\d{10}$/))
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    if (
      (formType === "franchisee" || formType === "default") &&
      !formData.center
    )
      tempErrors.center = "Select a center";
    if (formType === "hire" && !formData.company.trim())
      tempErrors.company = "Company name is required";
    if (formType === "franchisee" && !formData.location.trim())
      tempErrors.location = "Location name is required";
    if (
      !(formType === "hire" || formType === "franchisee") &&
      !formData.learningMode
    )
      tempErrors.learningMode = "Select a learning mode";
    if (!formData.captchaChecked)
      tempErrors.captchaChecked = "Please verify the captcha";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    setFormData({
      ...formData,
      [name || id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const services = [
        { id: "service_ik53pgl", email: "shyam.ceg1990@gmail.com" },
        { id: "service_qdkj8mf", email: "sandyanithy@gmail.com" },
      ];

      try {
        // Send emails using Promise.all
        await Promise.all(
          services.map((service) => {
            const formDataWithEmail = { ...formData, to_email: service.email };
            return emailjs.send(service.id, TEMPLATE_ID, formDataWithEmail, PUBLIC_KEY);
          })
        );

        // Show only one success message
        toast.success("Emails sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

      } catch (error) {
        console.log("Error sending emails:", error.text);
        toast.error("Failed to send emails!", {
          position: "top-right",
          autoClose: 3000,
        });
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        center: "",
        company: "",
        location: "",
        learningMode: "",
        captchaChecked: false,
      });

      setErrors({});
      e.target.reset();
    }
  };



  return (
    <>
    <div className="hidden">
      <h1>Digital Marketing Courses in Bangalore – All You Need to Know before you Join!</h1>
      <h2>Why Enroll in a Digital Marketing Course?</h2>
      <h3>Leading Digital Marketing Training Institute in Bangalore</h3>
      <h4>How to Find the Best Digital Marketing Training Institute in Bangalore?</h4>
      <h5>Best Digital Marketing Course in Bangalore – What Sets It Apart?</h5>
      <h6>Still Searching for the “Best Digital Marketing Course Near Me”?</h6>
    </div>
      <Header setFormType={setFormType} formType={formType} />
      <div className="scroll-smooth">
        {/* Banner section start */}

        <section
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="md:py-[40px] max-[768px]:pb-[20px] max-[768px]:pt-[130px] max-[768px]:mt-[-80px]"
        >
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 px-3">
              <div>
                <h2 className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent text-[30px] md:text-[50px] font-[400] md:font-semibold uppercase text-center xl:text-start">
                  MASTER
                </h2>
                <p className="text-[33px] md:text-[68px] leading-[40px] md:leading-[70px] font-[700] md:font-bold text-[#98C7F9] text-center xl:text-start">
                  DIGITAL <br className="xl:block hidden" /> MARKETING
                </p>
                <p className="text-[#FE4855] text-[30px] md:text-[50px] font-[400] md:font-semibold uppercase text-center xl:text-start">
                  WITH AI
                </p>
                <p className="text-[#ffffff] text-[18px] mb-4 text-center xl:text-start">
                  <strong className="font-[700] md:text-[24px] underline">2025</strong> will be
                  about AI-Powered <br className="sm:hidden block" /> Digital Marketing
                </p>

                <div className="md:block hidden mt-8">
                  <span className="flex justify-center xl:justify-start">
                    <Link href="#form">
                      <button
                        type="button"
                        className="overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-semibold rounded-lg text-[16px] min-w-[200px] px-4 py-2.5 text-center me-2 mb-2 uppercase"
                      >
                        ENQUIRE NOW
                      </button>
                    </Link>
                    <Link href="#courses">
                      <button
                        type="button"
                        className="overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-[var(--Primary-color)] font-semibold rounded-lg text-[16px] min-w-[200px] px-4 py-2.5 text-center me-2 mb-2 uppercase"
                      >
                        Explore Courses
                      </button>
                    </Link>
                  </span>
                </div>
                <div className="mt-5 bg-[var(--Background-Card)] md:px-3 py-2 md:py-3 max-w-sm md:max-w-[400px] max-[1280px]:mx-auto grid grid-cols-2 gap-2 md:gap-4 rounded-lg border border-[#343683]">
                  {cardData.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex flex-col items-center justify-center text-center p-1 ${index < 2 ? "border-b border-[#343683]" : ""
                        } ${index % 2 === 0 ? "border-r border-[#343683]" : ""}`}
                    >
                      <Image className="w-[18px] h-[18px]" src={item.img} alt={item.text} />
                      <p className="text-white text-[16px] md:text-base mt-2">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mt-[40px] lg:mt-1 relative xl:col-span-2">
                <div className="w-[46%] self-center xl:self-end md:block hidden xl:mt-[-35px]">
                  {/* <Image
                    src={Google}
                    alt="no-technologyimg"
                    className="w-full h-auto"
                  /> */}
                  <OrbitAnimation />
                </div>
                <div className="flex gap-2 justify-center xl:justify-end">
                  <div className="max-[640px]:w-full sm:min-w-[440px] md:p-6 md:bg-[rgba(44,58,100,0.6)] rounded-3xl md:shadow-sm flex items-center justify-between sm:gap-1">
                    <div className='max-[768px]:w-[152px] max-[768px]:h-[125px] max-[640px]:ml-2 flex justify-center items-center'>
                      <Image src={Top} alt="no-top" layout="responsive" />
                    </div>
                    <span className="rounded-xl px-2 sm:px-3 py-4 bg-gradient-to-b from-[rgba(96,211,247,0.4)] to-[rgba(139,140,249,0.4)] text-center sm:w-[196px] max-[640px]:w-[152px] max-[640px]:h-[125px]">
                      <p className="text-white uppercase text-[11px] md:text-[12px] font-bold md:mt-0.5 mt-1">
                        Rated based on best trained faculty and latest
                        curriculum
                      </p>
                      <Image className="mx-auto max-[768px]:mt-2.5" src={Star} alt="Digital marketing course near me." />
                    </span>
                  </div>
                  <div className="md:block hidden">
                    <div className="px-11 bg-[#272727] rounded-3xl shadow-sm flex items-center h-full">
                      <div>
                        <Image className="mx-auto mb-2" src={Ok} alt="no-ok" />
                        <span className="rounded-md text-center">
                          <p className="text-white uppercase font-bold text-[20px]">
                            <strong className="text-[#FE4855]">100%</strong> JOB
                          </p>
                          <p className="uppercase text-white">ASSURED PROGRAMS</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="block md:hidden mt-5">
                  <span className="sm:flex gap-2 justify-center block">
                    <Link href="#from">
                      <button
                        type="button"
                        className="uppercase overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-bold rounded-lg w-full text-md py-2 text-center me-2 mb-2 px-4"
                      >
                        ENQUIRE NOW
                      </button>
                    </Link>
                    <Link href="#courses">
                      <button
                        type="button"
                        className="uppercase overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-[var(--Primary-color)] font-bold rounded-lg text-md py-2 w-full text-center me-2 mb-2 px-4 max-[640px]:mt-3"
                      >
                        Explore Courses
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container min-[1440px]:max-w-[1440px] mx-auto  px-6 pt-6 block md:hidden">
          <div className="py-1 px-3 bg-[#272727] rounded-lg shadow-xl flex">
            <Image src={Ok} alt="no-ok" />
            <span className="rounded-md px-3 py-3">
              <p className="text-white uppercase text-[26px] font-bold">
                <strong className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent">100%</strong> JOB
              </p>
              <p className="uppercase text-white text-[18px]">
                ASSURED PROGRAMS
              </p>
            </span>
          </div>
          <div className="w-[100%] self-center ml-1">
            <Image
              src={GoogleMobile}
              alt="no-technologyimg"
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* Banner section end */}

        {/* Marquee Start */}

        <section className="bg-[#F6F6F6]">
          <Marquee loop={0} className="py-[20px] md:py-[40px] mb-[21px] sm:mb-[50px]">
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Accenture} alt="no-productsimg1" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Zomato} alt="no-productsimg2" />
            <Image className="mx-6 w-[110px] h-[50px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Unacadamy} alt="no-productsimg3" />
            <Image className="mx-6 w-[110px] h-[50px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Tcs} alt="no-productsimg4" />
            <Image className="mx-6 w-[110px] h-[50px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Razorpay} alt="no-productsimg5" />
            <Image className="mx-6 w-[120px] h-[60px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Phope} alt="no-productsimg6" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Paytm} alt="no-productsimg7" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Nykaa} alt="no-productsimg8" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Netfilx} alt="no-productsimg9" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Meesho} alt="no-productsimg10" />
            <Image className="mx-6 w-[110px] h-[50px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Freshwork} alt="no-productsimg11" />
            <Image className="mx-6 w-[110px] h-[50px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Dream11} alt="no-productsimg12" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Curekit} alt="no-productsimg13" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Congnizent} alt="no-productsimg14" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Amazon} alt="no-productsimg15" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Adobe} alt="no-productsimg16" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Uber} alt="no-productsimg17" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Swiggy} alt="no-productsimg18" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Salesforce} alt="no-productsimg19" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Google1} alt="no-productsimg20" />
            <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Filpkart} alt="no-productsimg21" />
          </Marquee>

        </section>

        {/* Marquee End */}

        {/* Form Start */}
        <section className="my-[30px] md:my-[50px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:gap-10">
              <div className="flex flex-col justify-center items-center mt-[20px] sm:mt-[40px] lg:mt-1 bg-[#F9F7FF] md:order-1 order-2 pt-5 sm:pt-8">
                <div className="bg-white rounded-xl p-5 shadow-lg max-[640px]:w-[90%] text-center">
                  <div className="flex gap-2 justify-center">
                    <div className="px-2 flex items-center justify-center bg-black rounded-[100%]">
                      <Image
                        className="w-[20px]"
                        src={Calender}
                        alt="no-calender"
                      />
                    </div>
                    <span className="text-[20px] md:text-[24px]">
                      In{" "}
                      <strong className="text-[red] text-[24px] md:text-[28px]">
                        90 days
                      </strong>{" "}
                      Get
                    </span>
                  </div>
                  <p className="text-[20px] md:text-[26px] font-[700]">
                    Trained | Hired | Ahead
                  </p>
                </div>
                {/* <div className="flex justify-center xl:w-[80%]"> */}
                <Image
                  src={Attachment}
                  alt="Digital Marketing Courses in Bangalore"
                  className="max-[1024px]:w-[60%] max-[1300px]:w-[80%]"
                />
                {/* </div> */}
              </div>

              <div className="md:order-2 order-1 my-auto">
                <LearningAdvisorForm setFormType={setFormType} formType={"default"} />
              </div>

              {/* <div className="px-2 md:px-8 relative md:order-2 order-1 my-auto">
                <Image
                  src={FormBack}
                  alt="Shoe"
                  className="absolute right-0 bottom-0 z-[-10] h-full"
                />
                <p className="text-center text-[16px] md:text-[24px] font-[500] bg-[#F7F8F9] py-4 border border-[#f5f7f8] mx-[10px] sm:mx-[20px]">
                  Speak with Our{" "}
                  {
                    formType === "franchisee" || formType === "hire" ?

                      <span className="font-bold border-b-[4px] border-[#FE7C55]">
                        Team
                      </span> :
                      <span className="font-bold border-b-[4px] border-[#FE7C55]">
                        Learning Advisor
                      </span>
                  }
                </p>


                <form
                  id="form"
                  onSubmit={handleSubmit}
                  className="mx-[10px] sm:mx-[20px] py-8 px-3 md:px-8 border-[#EEEEEE] border bg-white"
                >
                  <div className="mb-5">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div className="mb-5">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div className="mb-5">
                    <input
                      type="number"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile"
                      className="bg-white outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-sm">{errors.mobile}</p>
                    )}
                  </div>
                  {(formType === "default") && (
                    <div className="mb-5">
                      <select
                        id="center"
                        value={formData.center}
                        onChange={handleChange}
                        className="outline-none bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      >
                        <option value="">Select Center</option>
                        <option>Bannerghatta Road</option>
                        <option>Indiranagar (Besides Metro Station)</option>
                        <option>
                          Ramamurthy Nagar Junction on Outer Ring Road
                        </option>
                      </select>
                      {errors.center && (
                        <p className="text-red-500 text-sm">{errors.center}</p>
                      )}
                    </div>
                  )}
                  {formType === "franchisee" && (
                    <div className="mb-5">
                      <input
                        type="text"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Location"
                        className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      />
                      {errors.location && (
                        <p className="text-red-500 text-sm">{errors.location}</p>
                      )}
                    </div>
                  )}
                  {formType === "hire" && (
                    <div className="mb-5">
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company"
                        className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm">{errors.company}</p>
                      )}
                    </div>
                  )}
                  {!(formType === "hire" || formType === "franchisee") && (
                    <div className="mb-5">
                      <div>
                        <p className="text-[#556376] py-2 font-semibold">
                          Learning Mode
                        </p>
                        <div className="flex gap-2">
                          <span className="flex items-center h-5">
                            <input
                              type="radio"
                              name="learningMode"
                              value="Online"
                              checked={formData.learningMode === "Online"}
                              onChange={handleChange}
                              className="w-4 h-4 text-blue-600 bg-white border-gray-300"
                            />
                            <p className="text-[#556376] pl-2">Online</p>
                          </span>
                          <span className="flex items-center h-5">
                            <input
                              type="radio"
                              name="learningMode"
                              value="Offline"
                              checked={formData.learningMode === "Offline"}
                              onChange={handleChange}
                              className="w-4 h-4 text-blue-600 bg-white border-gray-300"
                            />
                            <p className="text-[#556376] pl-2">Offline</p>
                          </span>
                        </div>
                        {errors.learningMode && (
                          <p className="text-red-500 text-sm">
                            {errors.learningMode}
                          </p>
                        )}
                      </div>
                      <div className="captcha-box border border-gray-300 rounded-lg p-2 flex items-center justify-between my-5 max-w-[300px]">
                        <span className="flex items-center">
                          <input
                            type="checkbox"
                            id="captchaChecked"
                            name="captchaChecked"
                            checked={formData.captchaChecked}
                            onChange={handleChange}
                            className="mr-2 w-6 h-6"
                          />
                          <label
                            htmlFor="captchaChecked"
                            className="text-[#556376]"
                          >
                            I am not a robot
                          </label>
                        </span>
                        <Image src={Captcha} alt="captcha" />
                      </div>
                      {errors.captchaChecked && (
                        <p className="text-red-500 text-sm">
                          {errors.captchaChecked}
                        </p>
                      )}
                    </div>
                  )}
                  <button
                    type="submit"
                    className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-medium rounded-lg text-lg px-8 w-full py-1 md:py-2 text-center me-2 mb-2 my-3 uppercase"
                  >
                    {formType === "franchisee" || formType === "hire"
                      ? "Submit"
                      : "Register"}
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </section>
        {/* Form End */}

        {/* Projects Start */}

        <section id="from1" className="my-[40px] md:my-[60px] px-4 md:px-6">
          <p className="sm:text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">
            The BlueTick Advantage
          </p>
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-1 sm:px-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:mt-4">
              {projects.map((item, index) => (
                <div
                  key={index}
                  className=" mt-[40px] sm:px-2 md:px-[30px] lg:px-[60px]"
                >
                  <div className="max-[640px]:flex gap-5">
                    <div className="flex justify-center max-[540px]:w-[40px] sm:h-10">
                      <Image src={item.img} alt="no icons" />
                    </div>
                    <span className="sm:text-center xl:text-start">
                      <p className="text-neutral-900 text-[18px] md:text-[18px] font-semibold sm:mt-3">
                        {item.title}
                      </p>
                      <p className=" text-neutral-700 text-[16px] md:text-[15px] font-normal leading-7">
                        {item.des}
                      </p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects End */}

        {/* Courses Start */}
        <section id="courses" className="my-[40px] md:my-[60px]">
          <div className="container bg-[#F6F6F6] rounded-[25px] min-[1440px]:max-w-[1440px] mx-auto px-4 md:px-8 py-10">
            <p className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent pl-[13px] sm:pl-0 md:text-center text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">
              Explore Digital Marketing
              <br />
              Courses with AI
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-4 gap-5 px-3 md:px-8">
              {coureses.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm mx-auto max-w-[550px] max-[768px]:w-[100%]"
                >
                  <div className="bg-[#B2E1FE] flex justify-center w-full">
                    <Image
                      className="rounded-t-lg h-[150px] md:h-[200px]"
                      src={item.img}
                      alt="no-course"
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-[18px] md:text-2xl font-bold tracking-tight text-gray-900">
                      {item.title}
                    </h5>

                    <div className="flex gap-2 items-center">
                      <div className="px-1 md:px-2 py-1 md:py-2 flex items-center justify-center bg-black rounded-[100%]">
                        <Image
                          className="w-[15px] md:w-[20px]"
                          src={Calender}
                          alt="no-calender"
                        />
                      </div>
                      <span className="text-[14px] md:text-[18px]">
                        {item.duration}
                      </span>
                    </div>
                    <ul className="list-disc pl-6 md:pl-8 mt-2">
                      <li className="marker:text-xl md:marker:text-2xl text-[14px] md:text-[18px] pl-1.5 md:pl-[12px]">
                        {item.list_1}
                      </li>
                      <li className="marker:text-xl md:marker:text-2xl text-[14px] md:text-[18px] pl-1.5 md:pl-[12px]">
                        {item.list_2}
                      </li>
                      <li className="marker:text-xl md:marker:text-2xl text-[14px] md:text-[18px] pl-1.5 md:pl-[12px]">
                        {item.list_3}
                      </li>
                      {item.list_4 ? (
                        <li className="marker:text-xl md:marker:text-2xl text-[14px] md:text-[18px] pl-1.5 md:pl-[12px]">
                          {item.list_4}
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>

                    <div className="md:text-end max-[640px]:mx-2">
                      {/* <Link> */}
                      <button
                        onClick={() => { setModalOpen(true); setFormType("default") }}
                        type="button"
                        className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer max-[768px]:w-full mt-5 text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] rounded-lg text-[16px] md:text-lg px-8 py-1 md:py-2.5 uppercase text-center me-2 mb-2 font-bold"
                      >
                        Apply NOW
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Courses End */}

        {/* Your Dream Job Start */}

        <section className="my-[40px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              {/* Left Content */}
              <div>
                <p className="font-bold text-[26px] md:text-[32px]">
                  Your Dream Job, Our Mission
                  <br />
                  <span className="bg-[#FBE7C1] font-bold">
                    One Career at a Time!
                  </span>
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px]">
                    <div className="flex justify-start">
                      <Image
                        src={Student}
                        alt="no icons"
                        className="w-[100px] h-[90px] md:w-[100px] md:h-[100px] object-contain"
                      />
                    </div>
                    <p className="text-neutral-900 text-[24px] font-bold mt-3">
                      10,000<span className="text-[red]">+</span>
                    </p>
                    <p className="text-neutral-700 text-[16px]">
                      Students Trained
                    </p>
                  </div>
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px]">
                    <div className="flex justify-start">
                      <Image
                        src={Trainer}
                        alt="no icons"
                        className="w-[100px] h-[90px] md:w-[100px] md:h-[100px] object-contain"
                      />
                    </div>
                    <p className="text-neutral-900 text-[24px] font-bold mt-3">
                      1:15
                    </p>
                    <p className="text-neutral-700 text-[16px]">
                      Trainers: Student ratio
                    </p>
                  </div>
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px]">
                    <div className="flex justify-start">
                      <Image
                        src={Record}
                        alt="no icons"
                        className="w-[100px] h-[90px] md:w-[100px] md:h-[100px] object-contain"
                      />
                    </div>
                    <p className="text-neutral-900 text-[24px] font-bold mt-3">
                      97%
                    </p>
                    <p className="text-neutral-700 text-[16px]">
                      Placement Success record
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative w-full flex items-end max-w-[80%] ml-auto">
                <Image
                  src={Shoe}
                  alt="Shoe"
                  className="absolute right-0 top-0 h-full w-[50%] hidden lg:block"
                />

                <div className="max-[550px]:left-[-55px] relative block lg:hidden mt-8">
                  <Image
                    src={Shoe1}
                    alt="Shoe"
                    className="w-full h-auto mx-auto"
                  />
                </div>

                <div className="absolute bottom-[-15px] max-[400px]:right-0 min-[400px]:left-25 text-black">
                  <p className=" text-[18px] md:text-[28px] font-bold">
                    <strong className="text-[#FD8A55] font-bold text-[24px] md:text-[28px]">
                      Take a Step Now
                    </strong>
                    <br />
                    Let’s build it Together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Dream Job End */}

        {/* Amazon section Start */}
        <section className="my-[40px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
            <p className="text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px] sm:flex gap-2">
              Hear from our
              <span className="text-[#007BFC] flex gap-2 items-center">
                {" "}
                BlueTickers <Image src={smallLogo} alt="no-smalllogo" />
              </span>
            </p>

            <div className="sm:block hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
                {allCards.slice(0, visibleCards).map((card) => (
                  <div
                    key={card.id}
                    className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
                  >
                    <div className="w-full h-40 flex justify-center items-center bg-gray-100">
                      <Image
                        className="w-auto h-full object-contain"
                        src={card.img}
                        alt="no-course"
                      />
                    </div>

                    <div className="max-[768px]:pl-3">
                      <span className="py-3 px-2 flex justify-between border-[#E2E2E2] border-b items-center my-auto">
                        <p className="font-semibold">{card.name}</p>
                        <Image
                          src={card.company}
                          alt="no-company"
                          width={80}
                          height={30}
                          className="w-[100px] h-[30px] object-contain md:w-[100px] md:h-[40px]"
                        />
                      </span>
                    </div>

                    <div className="p-5">
                      <p
                        className={`text-[16px] text-[#282E38] ${!expandedCards[card.id] ? "line-clamp-2" : ""
                          }`}
                      >
                        {card.des}
                      </p>

                      <button
                        onClick={() => toggleExpand(card.id)}
                        className="mt-2 text-blue-600 transition cursor-pointer"
                      >
                        {expandedCards[card.id] ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ScrollLinked allCards={Student0} />
            <ScrollLinked allCards={Student1} />
            <ScrollLinked allCards={Student2} />
            <ScrollLinked allCards={Student3} />
            <ScrollLinked allCards={Student4} />
            <ScrollLinked allCards={Student5} />
          </div>

          <div className="sm:flex justify-center mt-6 space-x-4 mx-3 hidden">
            {visibleCards < allCards.length && (
              <button
                onClick={handleLoadMore}
                className="overflow-hidden transition-transform duration-300 hover:scale-105 bg-[#EBF4FF] cursor-pointer max-[640px]:w-full text-[blue] border border-[blue] px-16 py-3 rounded-lg transition"
              >
                View More
              </button>
            )}
            {visibleCards > 3 && (
              <button
                onClick={handleLoadLess}
                className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-600 max-[640px]:w-full text-white px-6 py-3 rounded-lg hover:bg-red-700"
              >
                View Less
              </button>
            )}
          </div>
        </section>
        {/* Amazon section End */}

        {/* testimonial Start */}
        <section className="my-[40px] md:my-[60px]">
          <div className="container bg-[#F6F6F6] rounded-[25px] min-[1440px]:max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
            <p className="sm:text-center text-neutral-800 text-[26px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px] pl-[13px] sm:pl-0">
              Why Choose
              <br />
              <span className="text-[#007BFC]">BlueTick</span> Academy?
            </p>
            <TestimonialSlider />
          </div>
        </section>
        {/* testimonial End */}

        {/* Map start */}
        <section className="mb-[20px] max-[768px]:mt-[-15px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
            <p className="text-center font-bold text-[16px] md:text-[18px] text-[#FE7C55]">
              GLOBAL PRESENCE
            </p>
            <p className="font-semibold text-[26px] md:text-[32px] text-center text-[#242424] mb-10">
              Learners from 30
              <span className="border-b-[4px] border-[#FE7C55]">+ Countr</span>
              ies
            </p>
            <MapWithPoints />

          </div>
        </section>
        {/* Map End */}

        {/* Accordian Start */}
        <section className="my-[40px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-8 md:px-4">
            <p className="font-bold text-[26px] md:text-[32px] max-[640px]:pr-2">
              Digital Marketing Courses
              <br />
              in Bangalore -{" "}
              <span className="text-[#007BFC] text-[26px] font-[400]">
                Everything you should know!
              </span>
            </p>

            <Accordion items={accardiancontent} />
          </div>
        </section>
        <section className="my-[40px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-8 md:px-4">
            <p className="font-bold text-[26px] md:text-[32px] max-[640px]:pr-2">
              Frequently Asked Questions (FAQs)
            </p>

            <Accordion items={accardiancontentfaq} />
          </div>
        </section>
        <section className="my-[40px] md:my-[60px]">
          <p className="sm:pl-0 pl-8 text-start sm:text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">Media & Awards</p>
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4 hidden md:block">
            <div className="grid min-[600px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-4">
              <div className="flex justify-center items-center">
                <Image src={Logo1} alt="no-logos" className="w-full h-auto max-w-[150px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src={Logo2} alt="no-logos" className="w-full h-auto max-w-[150px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src={Logo3} alt="no-logos" className="w-full h-auto max-w-[150px]" />
              </div>
              <div className="flex justify-center items-center">
                <Image src={Logo4} alt="no-logos" className="w-full h-auto max-w-[150px]" />
              </div>
            </div>

          </div>
          <div className="block md:hidden">
            <Marquee loop={0} className="mt-3">
              <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Logo1} alt="no-productsimg1" />
              <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Logo2} alt="no-productsimg2" />
              <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Logo3} alt="no-productsimg3" />
              <Image className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain" src={Logo4} alt="no-productsimg4" />
            </Marquee>
          </div>
        </section>
        {/* Accordian End */}
        <ToastContainer />
      </div>

      <Footer setFormType={setFormType} formType={formType} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="max-h-[95vh] w-full">
          <LearningAdvisorForm setFormType={setFormType} formType={formType} />
        </div>
      </Modal>
    </>
  );
}

export default Home;
