export const updateObjectInArray = (item,itemId,objPropName,newObgProps) => {
    item.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, newObgProps}
        }
        return u
    })
}
