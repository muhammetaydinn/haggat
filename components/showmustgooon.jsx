import Link from "next/link";
// DEFAULT TEST EXAMPLE
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
