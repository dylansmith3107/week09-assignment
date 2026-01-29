import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <main>
        <h2>
          Sign Up to to view other people&apos;s posts, and make your own!
        </h2>
        <SignUp />
      </main>
    </>
  );
}
