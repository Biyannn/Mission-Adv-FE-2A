import { Link } from "react-router-dom";
const CourseCategory = () => {
    return (
        <div className="flex items-center justify-start gap-2 pt-3 pb-10 pr-9 w-full">
            <Link to="#" className="text-[#f64920] relative after:contents-[''] after:-my-2 after:pb-2 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-[#f64920] after:rounded-lg">Semua Kelas</Link>
            <Link to="#" className="px-0 cursor-pointer font-medium text-base text-slate-700 decoration-none whitespace-nowrap relative">Pemasaran</Link>
            <Link to="#" className="px-0 cursor-pointer font-medium text-base text-slate-700 decoration-none whitespace-nowrap relative">Desain</Link>
            <Link to="#" className="px-0 cursor-pointer font-medium text-base text-slate-700 decoration-none whitespace-nowrap relative">Pengembangan Diri</Link>
            <Link to="#" className="px-0 cursor-pointer font-medium text-base text-slate-700 decoration-none whitespace-nowrap relative">Bisnis</Link>
        </div>
    )
}

export default CourseCategory;