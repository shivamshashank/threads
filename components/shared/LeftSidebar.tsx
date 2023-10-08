import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar() {
    return (
        <section className="leftsidebar">
            <div className="px-3">
                {
                    sidebarLinks.map(
                        (link) =>
                        (
                            <Link href={link.route} key={link.label} className="leftsidebar_link">
                                <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                                <p className="text-light-1 max-lg:hidden">{link.label}</p>
                            </Link>
                        )
                    )
                }
            </div>

            <div className="px-3">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex cursor-pointer p-4 gap-4">
                            <Image src={"/assets/logout.svg"} alt="logout" width={24} height={24} />
                            <p className="text-light-1 max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    );
}