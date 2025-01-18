'use client';

import { usePathname } from 'next/navigation';
import { Home, Phone, Info } from "lucide-react";

interface SlideNavProps {
  onNavigate?: (path: string, x: number, y: number) => void;
}

const SlideNav: React.FC<SlideNavProps> = ({ onNavigate }) => {
    const pathname = usePathname();
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        if (onNavigate) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            onNavigate(path, x, y);
        }
    };

    return (
        <div className="fixed top-2 sm:top-0 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
            <div className="bg-white max-sm:rounded-full max-sm:border-2 sm:rounded-b-[20px] sm:border-[3px] border-black px-4 sm:px-8 py-1.5 shadow-md backdrop-blur-sm">
                <ul className="flex justify-center items-center gap-4 sm:gap-6 font-work-sans">
                    <li>
                        <a
                            href="/"
                            onClick={(e) => handleClick(e, "/")}
                            className={`flex items-center gap-1.5 transition-all duration-300 text-[14px] font-medium hover:scale-105 ${
                                pathname === "/"
                                ? "text-primary font-semibold"
                                : "text-black-100"
                            }`}
                        >
                            <Home className="size-4" />
                            <span className="hidden sm:inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            onClick={(e) => handleClick(e, "/contact")}
                            className={`flex items-center gap-1.5 transition-all duration-300 text-[14px] font-medium hover:scale-105 ${
                                pathname === "/contact"
                                ? "text-primary font-semibold"
                                : "text-black-100"
                            }`}
                        >
                            <Phone className="size-4" />
                            <span className="hidden sm:inline">Contact</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            onClick={(e) => handleClick(e, "/about")}
                            className={`flex items-center gap-1.5 transition-all duration-300 text-[14px] font-medium hover:scale-105 ${
                                pathname === "/about"
                                ? "text-primary font-semibold"
                                : "text-black-100"
                            }`}
                        >
                            <Info className="size-4" />
                            <span className="hidden sm:inline">About</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SlideNav;