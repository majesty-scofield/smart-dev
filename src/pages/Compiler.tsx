import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import {CodeEditor} from "@/components/CodeEditor";
import {HelperHeader} from "@/components/HelperHeader";
import {RenderCode} from "@/components/RenderCode";

export const Compiler = () => {
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[250px]" defaultSize={50}>
                <HelperHeader />
                <CodeEditor />
            </ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[250px]" defaultSize={50}>
                <RenderCode />
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
