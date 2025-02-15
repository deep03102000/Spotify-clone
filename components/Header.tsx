"use client";

import { useRouter } from "next/navigation"; // Correct import for App Router
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button"
import useAuthModel from "@/hooks/useAuthModel";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";



interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const AuthModel = useAuthModel()
    const router = useRouter(); // Works in client components

    const supabaseClient = useSupabaseClient()
    const { user } = useUser()
    const handleLogout = async () => {

        const { error } = await supabaseClient.auth.signOut()

        // TODO: Reset any playing songs
        router.refresh()

        if (error) {
            toast.error(error.message)

        }
        else{
            toast.success("Logged out")
        }
    };

    return (
        <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button
                        onClick={() => router.back()}
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                    >
                        <RxCaretLeft size={36} className="text-white" />
                    </button>

                    <button
                        onClick={() => router.forward()}
                        className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
                    >
                        <RxCaretRight size={36} className="text-white" />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <HiHome onClick={()=> router.push('/')} className="text-black" size={20} />
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch onClick={()=> router.push('/search')} className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    {user ?

                        (
                            <div className="flex gap-x-4 items-center">
                                <Button onClick={handleLogout} className="bg-white hover:bg-slate-400 px-6 py-2 text-black font-bold rounded-full transition">Logout</Button>
                                <Button onClick={() => router.push('/account')} className="rounded-3xl bg-white hover:bg-slate-300 transition">
                                    <FaUserAlt className="text-black" />
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <Button onClick={AuthModel.onOpen} className="w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50  hover:opacity-75 transition font-medium bg-transparent text-neutral-300">Sign up</Button>
                                </div>
                                <div>

                                    <Button onClick={AuthModel.onOpen} className=" w-full rounded-full bg-white text-neutral-900 border border-transparent px-3 py-3 disabled:cursor-not-allowed hover:bg-slate-400 transition font-bold">Login</Button>


                                </div>
                            </>
                        )}


                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;
