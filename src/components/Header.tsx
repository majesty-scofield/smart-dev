import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";

export const Header = () => {
    return (
        <nav className="w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center">
            <h4 className="font-bold select-none">
                <Link to='/'>SD Compiler</Link>
            </h4>
            <ul className="flex gap-2">
                <li>
                    <Link to="/compiler">
                        <Button variant="secondary">Compiler</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
