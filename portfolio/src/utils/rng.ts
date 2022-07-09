/**
 * Takes and array with two values and provides a random integer between them
 * @param range Array[min, max]
 * @returns Integer between range provided
 */
const rng = (range: [number, number] | [number]) => {

  let rng = Math.random()

  if(range.length !== 1){
    let diff = range[1] - range[0]
    rng = Math.floor(rng * diff)
    rng = rng + range[0]
  }else {
    rng = Math.floor(rng * range[0])
  }
  return rng
}

export default rng