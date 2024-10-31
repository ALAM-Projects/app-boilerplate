import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl">Home</h1>
      <Link href="/admin">Go to admin page</Link>
    </>
  );
}
