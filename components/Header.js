import { STORE_LOGO } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="  flex justify-between items-center  border-b-4  p-4">
      <div className="logo">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src={STORE_LOGO}
            alt="Logo"
            className="w-24 rounded-lg"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-8 mr-5">
          <li>
            <Link href="/contacts">
              <div className="hover:underline ">Contacts</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="hover:underline">About</div>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <div className="hover:underline ">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <div className="hover:underline ">Profile</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
