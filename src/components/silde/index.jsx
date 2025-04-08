"use client"

import { animate, motion, useMotionValue, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
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
import Filpkart from "@/assets/img/company/filpkart.jpg";
import Amazon from "@/assets/img/amazon.png";
import Image from "next/image";


// const allCards = [
//   {
//     id: 1,
//     name: "Jeevan",
//     img: Pho1,
//     company: Filpkart,
//     des: "Didnt expect to learn so much in such a short time! The live projects were the best part coz you actually get to apply what you learn. Trainers are chill and explain stuff in simple terms. Defrecommend if you are serious about digital marketing.",
//   },
//   {
//     id: 2,
//     name: "Keerthi Vasan",
//     img: Pho2,
//     company: EY,
//     des: "I was looking for a digital marketing course that could make me hands on, not just too much in theory. Bluetick Academy was exactly doing that. The assignments were useful and I am able managing marketing campaigns on my own.",
//   },
//   {
//     id: 3,
//     name: "Harini Pandiaraj",
//     img: Pho3,
//     company: Amazon,
//     des: "Blue tick helped me understand how actually works. I learned SEO, Google Ads, and social media marketing from scratch. The live projects were most important of all. Thanks to the trainers.",
//   },
//   {
//     id: 4,
//     name: "Lekha",
//     img: Pho4,
//     company: Ecom,
//     des: "First of all, thanks to the trainers. They actually teach you how to run ads, optimize campaigns, and track results.This course gave me everything I needed to implement digital marketing in my business.",
//   },
//   {
//     id: 5,
//     name: "Bright Prabahar",
//     img: Pho5,
//     company: Ola,
//     des: "The trainers are patient and explain everything clearly. I compared 3-4 institutes before choosing Bluetick academy and I’m happy about my decision. I am handling huge budget in my company now with the knowledge gained.",
//   },
//   {
//     id: 6,
//     name: "Priyal Bather",
//     img: Pho6,
//     company: Decode,
//     des: "Digital marketing was completely new for me, but the way they teach makes it very easy to understand. I landed in a job and could crack my 2 nd interview itself.",
//   }
// ];

export default function ScrollLinked({allCards}) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollXProgress);

  const [expandedCards, setExpandedCards] = useState({});


  const toggleExpand = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto relative overflow-hidden sm:hidden block my-[40px]">
      <motion.ul
        ref={ref}
        // style={{ maskImage }}
        className="flex list-none overflow-x-scroll gap-5 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 h-full"
      >
        {allCards.map((card, index) => (
          <div key={index} className="flex-none w-48 my-2">
            <div
              className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 h-full"
            >
              <div className="w-full h-45 flex justify-center items-center bg-gray-100">
                <Image
                  className="w-auto h-full object-contain"
                  src={card.img}
                  alt="no-course"
                />
              </div>

              <div className="max-[768px]:pl-3">
                <span className="py-3 px-1 flex justify-between border-[#E2E2E2] border-b items-center my-auto">
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

              <div className="p-2">
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
          </div>
        ))}
      </motion.ul>
    </div>
  );
}

const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `rgba(0,0,0,0)`;
const opaque = `rgba(0,0,0,1)`;

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}
