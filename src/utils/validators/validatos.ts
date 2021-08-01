export const requiresField = (value: string) => {
    if (value) return undefined
    return 'field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength}`
    return undefined
}

