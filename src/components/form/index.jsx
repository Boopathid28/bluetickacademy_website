'use client';

import { useState } from 'react';
import Image from 'next/image';
import Captcha from "@/assets/img/captcha.png";
import FormBack from "@/assets/img/formback.svg";
import { toast, ToastContainer } from 'react-toastify';
import emailjs from "emailjs-com";

const SERVICE_ID = "service_kuuj0j4";
const TEMPLATE_ID = "template_havnc1k";
const PUBLIC_KEY = "JSRKkPUaz3wAHVyYo";

export default function LearningAdvisorForm({ formType, setFormType }) {
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
            (formType === "default") &&
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
        if ((formType === "default") && !formData.captchaChecked)
            tempErrors.captchaChecked = "Please verify the captcha";

        setErrors(tempErrors);
        console.log("dta",tempErrors);
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
        console.log("Form Data:", formData);
    
        if (validate()) {
            const services = [
                { id: "service_yv6nnaj", email: "shyam.ceg1990@gmail.com" },
                { id: "service_vm6qobl", email: "sandyanithy@gmail.com" },
            ];
    
    
            try {
                // Send emails using Promise.all
                const emailPromises = services.map(async (service) => {
                    const formDataWithEmail = { ...formData, to_email: service.email };
                    console.log("Sending email to:", service.email);
    
                    return await emailjs.send(
                        service.id,
                        TEMPLATE_ID,
                        formDataWithEmail,
                        PUBLIC_KEY
                    );
                });
    
                await Promise.all(emailPromises);
    
                // Show success message once
                toast.success("Your registration is successful. Our learning advisor will reach out to you shortly", {
                    position: "top-right",
                    autoClose: 3000,
                });
    
            } catch (error) {
                console.error("Error sending emails:", error);
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
        <div className="px-2 md:px-8 relative my-auto">
            <Image
                src={FormBack}
                alt="Shoe"
                className="absolute right-0 bottom-0 z-[-10] h-full"
            />
            <p className="text-center text-[20px] md:text-[24px] font-[500] sm:bg-[#F7F8F9] py-4 sm:border border-[#f5f7f8] mx-[10px] sm:mx-[20px]">
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
                className="mx-[10px] sm:mx-[20px] py-4 sm:py-8 px-3 md:px-8 border-[#EEEEEE] border max-[640px]:rounded-[5px] bg-white"
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
                        <div className="captcha-box border border-gray-300 rounded-lg p-2 flex items-center justify-between my-3 max-w-[300px]">
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
                                    className="text-[#556376] max-[768px]:text-[12px]"
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

        </div>
    );
}
