import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold">Password-manager</h1>
    </Link>
  );
}
