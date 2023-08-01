import Link from "next/link";

const linkElements = [
    {id:1, str:"About", route:"#about"},
    {id:2, str:"Projects", route:"#projects"},
    {id:3, str:"Contact", route:"#contact"},
]

const Header = () => {
  return (
    //Shadow değişebilir
    <nav className="flex justify-between items-center py-6 px-10 bg-white text-xl font-bold shadow-sm">
      <div className="cursor-pointer">Ozan Kersit</div>
      <div>
        <li className="list-none flex gap-3 cursor-pointer">
            {linkElements.map((item) => (
                <Link key={item.id} href={item.route}>
                    <ul className="hover:text-blue transition-colors duration-300">{item.str}</ul>
                </Link>
            ))}
        </li>
      </div>
    </nav>
  );
};

export default Header;
