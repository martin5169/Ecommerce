export const array = [
    
    {
    
    id : "1",
    title : "Camara Samsung",
    price : 10.000,
    img: "https://th.bing.com/th/id/R.d405afd6f197bb25790c0b3a0703b0bc?rik=TT0sS9WiGZdhAA&riu=http%3a%2f%2fphotorumors.com%2fwp-content%2fuploads%2f2014%2f09%2fSamsung-NX1-mirrorless-camera-2-170x170.jpg&ehk=cztfj2aG0PolF3nOyW2dGD%2fI8IPH%2bSNDexzI9by4BfQ%3d&risl=&pid=ImgRaw&r=0",
    data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

},{
id : "2",
    title : "Anteojos RayBan",
    price : 15.000,
    img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters:format(jpg)/https:%2F%2Fimages.forbes.com%2Fmedia%2F2009%2F06%2F19%2F0619_sunglasses_170x170.jpg",
    data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
},{
id : "3",
    title : "Reloj Hublot",
    price : 20.000,
    img: "https://th.bing.com/th/id/OIP.nwhtKgq1lXNdqTGSsUj9eQAAAA?pid=ImgDet&rs=1",
    data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
},{
id : "4",
    title : "Reloj D&G",
    price : 25000,
    img: "https://th.bing.com/th/id/R.2667c1ee54f490be847fc97aabc0e65e?rik=QTAU7xyDFYGxSg&riu=http%3a%2f%2fwww.allthewatches.co.uk%2fimages%2f39%2fdandg_gloria_ladies_watch.jpg&ehk=2WzJSBcbdRSSfus8XGQOj%2ft5DkPtHnc2rHe%2bv4V6jaA%3d&risl=&pid=ImgRaw&r=0",
    data : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
},
]

export function getProductData(id){
    let productData = array.find(p => p.id === id );
    if(productData==undefined){
        return undefined;
    }
    return productData;
}