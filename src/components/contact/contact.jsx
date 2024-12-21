import React from "react";
import "./contactStyle.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);

    const navigate = useNavigate();

    const submitForm = () => {
        navigate(
            "mailto:itmitraindustrii@gmail.com&subject=&body=" +
                document.getElementById("message").textContent
        );
    };

    // Detect when the contact section is in view
    const handleScroll = () => {
        const contactSection = contactRef.current;
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setIsVisible(true); // Trigger the animation when in view
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <section
            id="contact"
            ref={contactRef}
            className={`contact-section h-screen flex items-center ${isVisible ? "fade-up" : ""}`}
        >
            <div
                id="contactContainer"
                className="text-white"
            >
                <div id="title" className="text-center observe">
                    <h1 className="text-pink-600 font-semibold uppercase text-xl">Contact Us</h1>
                    <p className="text-md">Need Help? Contact Us!</p>
                </div>
                <div
                    id="formContainer"
                    className="p-4 border border-white/30 rounded-xl bg-white/5 shadow-inner shadow-pink-600 mt-4 w-full flex flex-col sm:flex-row"
                >
                    <img
                        src="contactPict.png"
                        alt="Contact Illustration"
                        className="w-full sm:w-1/3"
                    />
                    <form
                        action={submitForm}
                        className="flex flex-col p-4 gap-3 w-full"
                        autoComplete="off"
                        noValidate
                    >
                        {/* Name Input */}
                        <label htmlFor="name" className="text-white">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Input Name..."
                            required
                            className="inputField"
                        />

                        {/* Email Input */}
                        <label htmlFor="email" className="text-white">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Input Email..."
                            required
                            className="inputField"
                        />

                        {/* Message Textarea */}
                        <label htmlFor="message" className="text-white">
                            Message
                        </label>
                        <input
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Input Message..."
                            required
                            className="inputField"
                        />

                        {/* Submit Button */}
                        <button
                            value="submit"
                            name="submit"
                            type="submit"
                            className="submitBtn bg-white/5 px-3 py-3 rounded-xl w-full mt-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
