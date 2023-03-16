import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Link from 'next/link';

const Profile = () => {
    const [loggedIn, setLoggedIn] = useState('')
    const [ngoDetail, setNgoDetail] = useState({})
    const [ngoId, setNgoId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [address, setAddress] = useState('')
    const [area, setArea] = useState('')
    const [ratings, setRatings] = useState('')
    const [authToken, setAuthToken] = useState('')

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
                setAddress(data.ngoAddress)
                setArea(data.ngoArea)
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
                        <Link href="/profile" style={{marginRight:
                        "10px"}}>
                        Profile
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
            <div className="grid grid-rows-2 border items-center w-[50%] h-[350px] mx-auto shadow-2xl">
                <div className="border-b pb-2">
                    <h1 className="font-epilogue text-[40px] font-bold text-[#303735] text-center mb-5"> {name}
                    </h1>
                </div>
                <div className="pb-5">
                    <h1 className="my-3 flex flex-row justify-between mx-5">Email:
                        
                        <span>
                        {email===''?
                        <input
                            type="email"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        :
                            {email}
                        }
                        </span>
                        
                    </h1>
                    <h1 className="my-3 flex flex-row justify-between mx-5">Contact Number:
                        <span>
                        {mobileNumber===''?
                        <input
                            type="number"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your mobile number"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                        :
                            {mobileNumber}
                        }
                        </span>

                    </h1>
                    <p className="my-3 flex flex-row justify-between mx-5">Address:
                        <span>
                        {address===''?
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        :
                            {address}
                        }
                        </span>
                    </p>
                    <p className="my-3 flex flex-row justify-between mx-5">Area:
                        <span>
                        {area===''?
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your area"
                            name="area"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            required
                        />
                        :
                            {area}
                        }
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Profile