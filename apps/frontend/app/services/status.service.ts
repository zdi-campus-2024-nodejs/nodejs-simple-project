export const BACKEND_URL = 'http://localhost:3000'

export const getStatus = (): any => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", BACKEND_URL, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
