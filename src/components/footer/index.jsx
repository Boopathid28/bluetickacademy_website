"use client";
import React, { useState } from 'react'
import Logo from "@/assets/img/logo.svg"
import Image from 'next/image'
import { Icon } from "@iconify/react";
import Link from 'next/link';
import LearningAdvisorForm from '../form';
import Modal from '../model';
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const TEMPLATE_ID = "template_havnc1k";
const PUBLIC_KEY = "JSRKkPUaz3wAHVyYo";

function Footer({ formType, setFormType }) {

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      tempErrors.email = "Invalid email address";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const services = [
        { id: "service_yv6nnaj", email: "shyam.ceg1990@gmail.com" },
        { id: "service_vm6qobl", email: "sandyanithy@gmail.com" },
      ];

      try {
        // Sending emails asynchronously
        const emailPromises = services.map(async (service) => {
          const formDataWithEmail = { ...formData, to_email: service.email };
          console.log("Sending email to:", service.email);

          return emailjs.send(
            service.id,
            TEMPLATE_ID,
            formDataWithEmail,
            PUBLIC_KEY
          );
        });

        await Promise.all(emailPromises);
        toast.success("Emails sent successfully!", { position: "top-right", autoClose: 3000 });

        // Reset form
        setFormData({ email: "" });
        setErrors({});
      } catch (error) {
        console.error("Error sending emails:", error);
        toast.error("Failed to send emails!", { position: "top-right", autoClose: 3000 });
      }
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (validate()) {
  //     const services = [
  //       { id: "service_yv6nnaj", email: "shyam.ceg1990@gmail.com" },
  //       { id: "service_vm6qobl", email: "sandyanithy@gmail.com" },
  //     ];

  //     try {
  //       const emailPromises = services.map(async (service) => {
  //         const formDataWithEmail = { ...formData, to_email: service.email };
  //         console.log("Sending email to:", service.email);

  //         return emailjs.send(
  //           service.id,
  //           TEMPLATE_ID,
  //           formDataWithEmail,
  //           PUBLIC_KEY
  //         );
  //       });

  //       await Promise.all(emailPromises);
  //       toast.success("Emails sent successfully!", { position: "top-right", autoClose: 3000 });

  //       setFormData({ email: "" });
  //       setErrors({});
  //     } catch (error) {
  //       console.error("Error sending emails:", error);
  //       toast.error("Failed to send emails!", { position: "top-right", autoClose: 3000 });
  //     }
  //   }
  // };

  return (
    <>
      <section className="bg-[#272727] pb-5 mt-[50px] md:mt-[80px]">
        <div className="">
          <div className='grid grid-cols-12'>
            <div className='py-5 px-5 border border-[#4F4F4F] md:block hidden col-span-2'>
              <Image src={Logo} alt="no-logo" />
            </div>
            <div className='py-5 px-2 md:border border-[#4F4F4F] flex justify-center items-center max-[768px]:col-span-2'>
              <Icon icon="ic:baseline-facebook" width="24" height="24" className="text-white" />
            </div>
            <div className='py-5 px-2 md:border border-[#4F4F4F] flex justify-center items-center max-[768px]:col-span-2'>
              <Icon icon="mdi:twitter" width="24" height="24" className="text-white" />
            </div>
            <div className='py-5 px-2 md:border border-[#4F4F4F] flex justify-center items-center max-[768px]:col-span-2'>
              <Icon icon="mdi:youtube" width="24" height="24" className="text-white" />
            </div>
            <div className='py-5 px-2 md:border border-[#4F4F4F] flex justify-center items-center max-[768px]:col-span-2'>
              <Icon icon="mdi:linkedin" width="24" height="24" className="text-white" />
            </div>
            <div className='py-5 px-2 md:border border-[#4F4F4F] flex justify-center items-center max-[768px]:col-span-2'>
              <Icon icon="mdi:instagram" width="24" height="24" className="text-white" />
            </div>
            <div className='col-span-12 md:col-span-3 lg:col-span-3'>
              <Link href="mailto:info@bluetickacademy.com">
                <div className='py-2 md:py-8.5 px-4 md:px-2 md:border border-[#4F4F4F] flex gap-1 items-center col-span-12 md:col-span-5 lg:col-span-3'>
                  <Icon icon="ic:baseline-email" width="24" height="24" className="text-white" />
                  <p className='text-white'>
                    info@bluetickacademy.com
                  </p>
                </div>
              </Link>
            </div>
            <div className='col-span-12 md:col-span-2'>
              <Link href="tel:+919606995525">
                <div className='py-3 md:py-8.5 px-4 md:px-3 border-b md:border border-[#4F4F4F] flex gap-1 items-center'>
                  <Icon icon="gg:phone" width="24" height="24" className="text-white" />
                  <p className='text-white'>
                    +91-9606 9955 25
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='grid md:grid-cols-3 px-8 py-8'>
            <div className='md:col-span-2 '>
              <p className='text-white py-2'>Quick Link</p>
              <div className='md:flex gap-5'>
                <Link href="#courses">
                  <span className='flex gap-2 text-white py-1'>
                    <Icon icon="weui:arrow-outlined" width="12" height="24" className='text-[#FE4855]' />
                    Our Courses
                  </span>
                </Link>
                {/* <Link href=""> */}
                  <span onClick={() => { setFormType("hire"); setModalOpen(true) }} className='cursor-pointer flex gap-2 text-white py-1'>
                    <Icon icon="weui:arrow-outlined" width="12" height="24" className='text-[#FE4855]' />
                    Hire From Us
                  </span>
                {/* </Link> */}
                {/* <Link href=""> */}
                  <span onClick={() => { setFormType("franchisee");; setModalOpen(true) }} className='cursor-pointer flex gap-2 text-white py-1'>
                    <Icon icon="weui:arrow-outlined" width="12" height="24" className='text-[#FE4855]' />
                    Franchisee Enquiry
                  </span>
                {/* </Link> */}
              </div>
            </div>
            <div>
              <p className='text-white font-semibold text-[18px] md:text-[20px] py-2'>Sign up to our news letter</p>
              <p className='text-white text-[14px] md:text-[18px] my-2'>Keep yourself up to date with the latest hiring news and course updates.</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 my-3"
                    placeholder="Email address*"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <button
                  type="submit"
                  className="cursor-pointer text-white bg-gradient-to-b from-orange-500 to-red-500 font-medium rounded-lg text-sm md:text-lg px-8 w-full py-2 text-center"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
        <span className='text-white text-center'>
          <p className='text-[12px] md:text-[18px] font-[400] py-3'>
            @Copyright 2025 BlueTick  Academy, All Rights Reserved
          </p>
          <span className='flex gap-5 justify-center text-sm md:text-lg font-[600]'>
            <Link href="/privacypolicy"><p className='cursor-pointer'>Privacy Policy</p></Link>
            <Link href="/termsandcondition"><p className='cursor-pointer'>Terms & Conditions</p></Link>
            <Link href="/contact_us"><p className='cursor-pointer'>Contact Us</p></Link>
          </span>
        </span>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {/* <h2 className="text-xl font-semibold">Hello, World!</h2>
        <p className="text-gray-600 mt-2">This is a modal popup in Next.js.</p> */}
        <LearningAdvisorForm formType={formType} setFormType={setFormType} />
      </Modal>
    </>
  )
}

export default Footer