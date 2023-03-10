export const formatModifier = (text: string, modifier: string) => {
    switch (modifier) {
        case 'CARD_TITLE':
            return text.length < 12 ? text : `${text.substring(0, 12)}...`
        case 'CARD_DESCRIPTION':
            return text.length < 42 ? text : `${text.substring(0, 40)}...`
        case 'TOP_SONG_TITLE':
            return text.length < 30 ? text : `${text.substring(0, 27)}...`
        default:
            return text
    }
}