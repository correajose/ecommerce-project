export const getData = ( data ) => {
    
    return new Promise ( ( resolve , reject ) => {
        setTimeout(() => {
            resolve( data );
        }, 1500);
    });
}        