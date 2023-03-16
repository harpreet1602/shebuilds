import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UserProfile = () => {
    const [loggedIn, setLoggedIn] = useState('')
    const [ngoDetail, setNgoDetail] = useState({})
    const [ngoId, setNgoId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [ratings, setRatings] = useState('')
    const [authToken, setAuthToken] = useState('')
    const url = "http://localhost:5000/api/profile/updateProfile";
    const router = useRouter()

    const ngoDetails = async () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://khanakhazana-backend.onrender.com/api/ngo/ngoDetails/${loggedIn}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                setNgoDetail(localStorage.setItem("ngoDetail", data))
                setAuthToken(localStorage.setItem("authToken", data.authToken))
                setNgoId(localStorage.setItem("ngoId", data.ngoId))
                setName(data.ngoName)
                setEmail(data.ngoEmail)
                setMobileNumber(data.ngoMobileNumber)
                setage(data.ngoage)
                setGender(data.ngogender)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'))
    }, [])

    // useEffect(() => {
    //     if (loggedIn.length > 0) {
    //         ngoDetails()
    //     }
    // }, [loggedIn])
    
    return (
        <>  
            <div className="flex flex-row justify-around items-center w-full bg-[#1551b8] text-white text-[8px] md:text-[16px]">
                <img src="/logo.jpg" alt="logo" width={100} height={100} onClick={() => router.push("/")}
                    className="cursor-pointer" />
                <div className="navlink">
                    <Link href="/about-us" className="nav-links">
                        About
                    </Link>
                    <Link href="/moodtracker" className="nav-links">
                        Self Assessment Tool
                    </Link>
                    <Link href="/education" className="nav-links">
                        Education
                    </Link>
                    <Link href="/vent-it-out" className="nav-links">
                        Vent It Out
                    </Link>
                    <Link
                        href="http://healthcollective.in/contact/helplines/"
                        className="nav-links"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        Helpline
                    </Link>
                </div>
                {loggedIn && (
                    <>
                    <div className="button">
                        <Link href="/createprofile" style={{marginRight:
                        "10px"}}>
                        Create Profile
                        </Link>
                        <Link href="/profile" style={{marginRight:
                        "10px"}}>
                        View Profile
                        </Link>    
                        <button
                            className="login"
                            onClick={() => {
                                localStorage.removeItem("loggedIn");
                                router.reload();
                            }}
                        >
                            Log Out
                        </button>
                    </div>
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
            <div className="grid grid-rows-2 mt-3 border items-center w-[50%] mx-auto shadow-2xl">
                <div className="border-b pb-2">
                    <h1 className="font-epilogue text-[40px] font-bold text-[#303735] text-center mb-5">{name}
                    </h1>
                </div>
                <div className="pb-5">
                    <h1 className="my-3 flex flex-row justify-between mx-5">
                        
                        <>
                            <span>Email:</span>
                            <span>
                            {email}
                            </span>
                        </>
                        
                        
                    </h1>
                    <h1 className="my-3 flex flex-row justify-between mx-5">
                        
                        
                        <>
                            <span>Contact Number:</span>
                            {mobileNumber}
                        </>
                        

                    </h1>
                    <p className="my-3 flex flex-row justify-between mx-5">
                        
                        
                        <>
                            <span>Age:</span>
                            {age}
                        </>
                        
                    </p>
                    <p className="my-3 flex flex-row justify-between mx-5">
                        
                        
                        <>
                            <span>gender:</span>
                            {gender}
                        </>
                        
                        
                    </p>
                </div>
            </div>
        </>
    )
}

export default UserProfile