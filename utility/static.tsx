// import { Character, getCharacterResults } from "./types"
// import Image from "next/image"
// import imageLoader from "./imageLoader"


// const characterPage=({character}:{character:Character})=>{
   
//     return<>
//         <h2>{character.name}</h2>
//         <Image loader={imageLoader} alt={character.name} src={character.image} unoptimized  width="200" height="200"/>
//     </>
// }

// export async function getStaticPaths() {

//     const res= await fetch("https://rickandmortyapi.com/api/character")
//     const {results}:getCharacterResults=await res.json()
//     return {
//         paths:results.map((character)=>{
//             return{
//                 params:{id: String(character.id)}
//             }
//         }),
//         fallback : false,
//     }
// }

// export async function getStaticProps({params}:{params:{id:string}}){
//     const res =await fetch(
//         `https://rickandmortyapi.com/api/character/${params.id}`
//     )
//     const character = await res.json()
//     return {
//         props:{character}
//     }
// }

// export default characterPage

import React from 'react'

export default function test() {
  return (
    <div>static</div>
  )
}
