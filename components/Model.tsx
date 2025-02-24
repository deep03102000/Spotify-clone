
import { IoMdClose } from "react-icons/io"

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from "./ui/button"




interface ModelProps {
    isOpen: boolean,
    onChange: (open: boolean) => void,
    title: string,
    description: string,
    children: React.ReactNode
}

const Model: React.FC<ModelProps> = ({
    isOpen,
    onChange,
    title,
    description,
    children
}) => {
    return (
        <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay
                className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0"
                />
                <Dialog.Content 
                className="fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none"
                >
                    <Dialog.Title className="text-white text-xl text-center font-bold mb-4">
                        {title}
                    </Dialog.Title>
                    <Dialog.Description className="text-white mb-5 text-sm leading-normal text-center">
                        {description}
                    </Dialog.Description>

                    <div className="text-white">
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <Button variant={'ghost'} className="text-neutral-400 border-none hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none hover:bg-transparent">
                           <IoMdClose/> 
                        </Button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
export default Model 