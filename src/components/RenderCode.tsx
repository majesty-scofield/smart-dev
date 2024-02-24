import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export const RenderCode = () => {
    const fullCode = useSelector((state: RootState) => state.compilerSlice.fullCode)

    const combinedCode = `<html lang="en"><style>${fullCode.css}</style><body>${fullCode.html}<script>${fullCode.javascript}</script></body></html>`

    const iFrameCode = `data:text/html;charset=utf-8, ${encodeURIComponent(combinedCode)}`

    return (
        <div className="bg-white border-2 border-emerald-500 h-[calc(100dvh-60px)]">
            <iframe className="w-full h-full" src={iFrameCode} />
        </div>
    )
}
