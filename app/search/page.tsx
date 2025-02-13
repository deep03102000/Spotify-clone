import getSongsByTitleAndAuthor from "@/actions/getSongsByTitleAndAuthor"
import Header from "@/components/Header"
import SearchInput from "@/components/SearchInput"
import SearchContent from "./components/SearchContent"

interface SearchProps {
    searchParams: {
        title?: string // Make title optional
    }
}

export const revalidate = 0

const Search = async ({ searchParams }: SearchProps) => {
    const title = searchParams.title ?? "" // Ensure a string is passed
    const songs = await getSongsByTitleAndAuthor(title)

    return (
        <div className="text-white bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header>
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className='text-white text-3xl font-semibold'>
                        Search
                    </h1>
                    <SearchInput />
                </div>
            </Header>

            <SearchContent songs={songs} />
        </div>
    )
}

export default Search
