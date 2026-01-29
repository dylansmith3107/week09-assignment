import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <h1>Social Media Website</h1>
        <nav>
          <Link href={"/"}>Home</Link>
          <Link href={"/timeline"}>Timeline</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
        </nav>
      </header>
    </>
  );
}
