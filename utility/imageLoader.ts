// const imageLoader = ({ src,width,quality }:{src:string,width:number,quality:number}) => {
//     return (
//       `${src}?w=${width}&q=${quality || 75}`
//     )
// }
const imageLoader = ({ src }:{src:string}) => {
  return (
    src
  )
}


  export default imageLoader