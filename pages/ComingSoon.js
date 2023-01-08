import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ComingSoon = () => {

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
            <div className="my-40 text-center text-[50px] font-bold">
                <h1>STORIES COMING SOON ...</h1>
            </div>
            <Footer />
        </>
    )
}

export default ComingSoon;