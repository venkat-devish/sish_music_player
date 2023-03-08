export const titleSubstring = (title: string) => {
    return title.length < 12 ? title : title.substring(0, 12) + '...'
}