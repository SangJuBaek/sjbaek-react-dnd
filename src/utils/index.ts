/**
  * 21자리 유니크 값 생성 후 반환
  * @function
  * @returns {string}
  * @example
  * createTempId ()
  * @desc
  */
 export function createTempId (t: number = 21) {
  let e: string = ''
  let r: Uint8Array = crypto.getRandomValues(new Uint8Array(t))
  for(;t--;) {
    let n: number = 63 & r[t]
    e += n < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n < 63 ? "_" : "-"
  }
  return e
}
