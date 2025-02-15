"use client"

import useAuthModel from "@/hooks/useAuthModel"
import useUploadModel from "@/hooks/useUploadModel"
import { useUser } from "@/hooks/useUser"
import { Song } from "@/types"
import { AiOutlinePlus } from "react-icons/ai"
import { TbPlaylist } from "react-icons/tb"
import MediaItem from "./MediaItem"
import ListItem from "./ListItem"
import useOnPlay from "@/hooks/useOnPlay"


interface LibraryProps {
    songs: Song[]
}
const Library: React.FC<LibraryProps> = ({
    songs
}) => {

    const onPlay = useOnPlay(songs)
    const authModel = useAuthModel()
    const uploadModel = useUploadModel()
    const { user } = useUser()
    const onClick = () => {
        if (!user) {
            return authModel.onOpen()
        }
        //check for subscription
        return uploadModel.onOpen()
    }
    return (
        <div className="flex flex-col">
            <div className="px-2 w-full  mt-4">
            <ListItem image={'/images/liked.png'} name="Liked Songs" href="liked" />
          </div>
            <div className="flex justify-between px-5 py-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 font-medium text-lg">Your Library</p>
                </div>

                <AiOutlinePlus onClick={onClick} size={26} className="text-neutral-400 cursor-pointer hover:text-white transition" />

            </div>
            <div className="flex flex-col gap-y-2 px-3 mt-4">
                {songs.map((item) => (
                   <MediaItem onClick={(id: string)=> onPlay(id) } key={item.id} data={item}/>
                ))}
            </div>
        </div>
    )
}

export default Library