import Link from "next/link";
export default function Navbar(){
    return(
    <ul  className="flex justify-center  justify-items-center gap-4 bg-green-200 text-neutral-950 font-extrabold h-10" >
    <li className="hover:bg-lime-100 mt-2"><Link href="/">Home</Link></li>
    <li className="hover:bg-lime-100 mt-2 text-"><Link href="/country">CountryList</Link></li>
    </ul>)
}