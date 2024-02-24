import {Link} from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="w-full h-[calc(100dvh-60px)] bg-gray-800 flex justify-center items-center text-white text-2xl font-bold">
            404 - Page Not Found
            <Link to={'/'} className="ml-3 text-rose-500">Go Back</Link>
        </div>
    )
}
