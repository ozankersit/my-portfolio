import Link from "next/link";
import MobileHeader from "./mobile-header.component";

const linkElements = [
    {id:1, str:"About", route:"#about"},
    {id:2, str:"Projects", route:"#projects"},
    {id:3, str:"Contact", route:"#contact"},
]

const Header = () => {
  return (
    //Shadow değişebilir
    <nav className="flex justify-between items-center py-6 px-10 bg-white text-xl font-bold shadow-sm">
      <div className="cursor-pointer">
        <Link href={"/"}>Ozan Kersit</Link>
        </div>
      <div>
        <li className="list-none gap-3 cursor-pointer hidden xl:flex">
            {linkElements.map((item) => (
                <Link key={item.id} href={item.route}>
                    <ul className="hover:text-blue transition-colors duration-300">{item.str}</ul>
                </Link>
            ))}
        </li>
        <MobileHeader/>
      </div>
    </nav>
  );
};

export default Header;
