import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <main>
        <h2>Sign In to your account if you already have one!</h2>
        <SignIn />
      </main>
    </>
  );
}
