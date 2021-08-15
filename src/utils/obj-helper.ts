import {UserType} from "../redux/UsersReducer";

export const updateObfInArr = (items: UserType[],
                               itemId: number,
                               objPropName: 'id',
                               newObjPropsName: any) => items.map(u => {
    if (u[objPropName] === itemId) {
        return {...u, ...newObjPropsName}
    }
    return u
})
