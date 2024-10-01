import Link from "next/link";

export default function Countrylist(){
    return(
    <div>
        
        <h1 className="text-center text-2xl mt-5 bg-slate-800">Country List</h1>
        <ul className="text-lg mt-5 ml-3 cursor-pointer" >
            <li className=" hover:text-pink-300"><Link href="/country/Pakistan">Pakistan</Link></li>
            <li className=" hover:text-pink-300"><Link href="/country/Qatar">Qatar</Link></li>
            <li className=" hover:text-pink-300"><Link href="/country/India">India</Link></li>
            <li className=" hover:text-pink-300"><Link href="/country/Bangladesh">Bangladesh</Link></li>
            <li className=" hover:text-pink-300"><Link href="/country/Afghanistan">Afghanistan</Link></li>
        </ul>
    </div>)
}