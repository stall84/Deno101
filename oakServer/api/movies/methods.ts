export async function getMovies() {
    return ({
        data: [
            {
                title: "Spidermen",
                release: 2016
            },
            {
                title: "Batmen",
                release: 2018
            },
            {
                title: "The Wet Wonders Of Narnia",
                release: 2021
            }
        ]
    })
}
export async function getMovie(id?: string) {
    if (id) {
        return ({
            data: {
                id: id,
                title: "Spidermen",
                release: 2016
            }      
        })
    }
    return {};
    
}