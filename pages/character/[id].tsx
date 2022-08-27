import { Character, getCharacterResults } from "../../utility/types"
import Image from "next/image"
import imageLoader from "../../utility/imageLoader"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

const characterPage = ({ character }: { character: Character }) => {
// const router=useRouter()
    return <>
        <h2>{character.name}</h2>
        {/* <h5>{router.query.id}</h5> */}
        <Image loader={imageLoader} alt={character.name} src={character.image} unoptimized width="200" height="200" />
    </>
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://rickandmortyapi.com/api/character/${context.query.id}`
    )
    const character = await res.json()
    return {
        props: { character }
    }
}

export default characterPage