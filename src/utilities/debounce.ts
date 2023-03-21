export function debounce(callback: Function, delay: number = 500) {
    let timer: number;
    return function (...args: any[]) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}