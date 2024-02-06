export const isNum = (value) =>{
    if (!isNaN(value) || value === 'C' || value === '.'){
        return true
    }

    return false
} 

export const isEquals = (value) =>{
    if (value  === '='){
        return true
    }

    return false
}