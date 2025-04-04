import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/mrp.svg" alt="mrp-icon" width={83} height={32} />
    </Link>
  );
};
