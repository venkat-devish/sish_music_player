export const titleSubstring = (title: string) => {
    return title.length < 12 ? title : `${title.substring(0, 12)}...`
}

export const descriptionSubString = (description: string) => {
    return description.length < 42 ? description : `${description.substring(0, 40)}...`
}