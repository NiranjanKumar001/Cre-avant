import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedBackground from "./AnimatedBackground";
import SlideNav from "./SlideNav";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="relative px-2 sm:px-5 py-3 bg-white/80 shadow-sm font-work-sans backdrop-blur-sm">
      <AnimatedBackground />
      <nav className="flex justify-between items-center relative z-10">
        <Link href="/" className="-ml-1 sm:ml-0">
          <div className="relative w-[120px] h-[25px] sm:w-[144px] sm:h-[30px]">
            <Image 
              src="/logo.png" 
              alt="logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="flex items-center gap-3 sm:gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-primary" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-8 sm:size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
      <SlideNav/>
    </header>
  );
};

export default Navbar;