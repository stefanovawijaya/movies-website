export interface MoviesList {
    id: number,
    name: string,
    description: string,
    imgPath: string,
    duration: number,
    genre: string[],
    language: string,
    mpaaRating: object,
    userRating: string
}
