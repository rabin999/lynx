// add doc for readability
export const pluck = (array: string[], key: string, spread: boolean = false): string[] => {
    let values: string[] = []
    if (array.length) {
        array.forEach((value: any) => {
            if ( value[`${key}`].length && values.indexOf(value[`${key}`]) == -1) {
                spread ? values.push(...value[`${key}`]) : values.push(value[`${key}`])
            }
        })
    }

    return values
}