import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold mb-2">WelCome Home</h1>
      <div className="flex items-center justify-center gap-x-2 mb-2">
        <Link href="/sign-in">
          <Button variant="default">Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/sign-up">
          <Button variant="link">Protected Page</Button>
        </Link>
      </div>
    </main>
  );
}
