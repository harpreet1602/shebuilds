import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

const About = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
    }, [])

    const router = useRouter();

    return (
        <>
            <div className="flex flex-row justify-around items-center w-full bg-[#1551b8] text-white text-[8px] md:text-[16px]">
                <img src="/logo.jpg" alt="logo" width={100} height={100} onClick={() => router.push("/")}
                    className="cursor-pointer" />
                <div className="navlink">
                    <a href="/about-us" className="nav-links">
                        About
                    </a>
                    <a href="/moodtracker" className="nav-links">
                        Self Assement Tool
                    </a>
                    <a href="/education" className="nav-links">
                        Education
                    </a>
                    <a href="/vent-it-out" className="nav-links">
                        Vent It Out
                    </a>
                    <a
                        href="http://healthcollective.in/contact/helplines/"
                        className="nav-links"
                        target={"_blank"}
                    >
                        Helpline
                    </a>
                </div>
                {loggedIn && (
                    <>
                        <button
                            className="login"
                            onClick={() => {
                                localStorage.removeItem("loggedIn");
                                router.reload();
                            }}
                        >
                            Log Out
                        </button>
                    </>
                )}
                {!loggedIn && (
                    <div className="button">
                        <button className="login" onClick={() => router.push("/login")}>
                            Log In
                        </button>
                        <button className="signup" onClick={() => router.push("/signup")}>
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
            <div>
                <h1 className="text-center text-[40px] font-bold mt-10">OUR VISION</h1>
                <p className="text-center w-[80%] mx-auto">
                    Our vision is to create a comprehensive and accessible resource for people seeking information and support for mental health issues. Our website will provide reliable and up-to-date information about different mental health conditions, including symptoms, causes, and treatment options.
                    <br />
                    <br />
                    We will also offer a self assessment bot that allows people to assess their own mental health and determine if they may benefit from seeking professional help. The bot will provide personalized recommendations based on the user's responses, including information about local resources and how to access them.
                    <br />
                    <br />
                    In addition to the self assessment bot, our website will also offer support groups for people who are looking for a safe and supportive community to connect with others who understand what they're going through. These groups will be moderated by trained professionals and will provide a space for people to share their experiences, offer support to one another, and seek guidance from mental health professionals.
                    <br />
                    <br />
                    Overall, our vision is to create a website that is a trusted and reliable resource for anyone seeking information and support for mental health issues. We hope to empower people to take charge of their own mental health and find the support and resources they need to live their best lives.
                </p>
            </div>
            <h1 className="text-center text-[40px] font-bold mt-10">OUR TEAM</h1>
            <div className="grid grid-cols-2 items-center w-[70%] my-20 mx-auto">
                <div className="border mx-5 flex flex-col items-center w-[350px] h-[400px] mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <Image src="/ayush.jpg" alt="ayush" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">AYUSH TYAGI</h1>
                    <p className="font-bold">FrontEnd Developer</p>
                </div>
                <div className="border mx-5 flex flex-col items-center w-[350px] h-[400px] mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/khushi.jpg" alt="ayush" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">KHUSHI MITTAL</h1>
                    <p className="font-bold">FrontEnd Developer</p>
                </div>
                <div className="border mx-5 flex flex-col items-center w-[350px] h-[400px] mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/taranjot.jpg" alt="ayush" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">TARANJOT SINGH</h1>
                    <p className="font-bold">Backend Developer</p>
                </div>
                <div className="border mx-5 flex flex-col items-center w-[350px] h-[400px] mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/navya.jpg" alt="ayush" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">NAVYA GUPTA</h1>
                    <p className="font-bold">AI/ML Developer</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
