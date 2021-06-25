
/* 
page: una cantidad de pág actual
size: tamaño de cantidad de pág que quiero
*/
export const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return { limit,offset }
}