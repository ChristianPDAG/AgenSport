'use client';

import { useState, useEffect } from "react";
import { MenuLinkOut, MenuLinkIn } from "./MenuLink";
import ReactDOM from 'react-dom';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const UserNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);


    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            { !isLoggedIn ? (
            <>
                <div className="sm:flex hidden ">
                    <Link href="/login" className="principal_btn text-xs ">
                        Iniciar sesión
                    </Link>
                    <Link href="/register" className="secondary_btn text-xs ">
                        Registrarse
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex relative p-0 ">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                    {isMenuOpen &&
                        ReactDOM.createPortal(
                            <div>
                                <MenuLinkOut />
                            </div>,
                            document.body
                        )
                    }
                </div>
            </>
            ) : (
                <>
                <div className="sm:hidden flex relative p-0 ">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                    {isMenuOpen &&
                        ReactDOM.createPortal(
                            <div>
                                <MenuLinkIn />
                            </div>,
                            document.body
                        )
                    }
                </div>
                </>
            )
        }
        </div>
    );
};

export default UserNav;
