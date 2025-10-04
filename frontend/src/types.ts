

export type Pet = {
  [x: string]: unknown
  _id?: { "$oid": string },
  name: string,
  breed: string,
  age: string,
  url?: string
}