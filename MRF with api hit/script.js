const apiUrl = "https://room-bookingapp-api.onrender.com/api/hotels"


async function getdata(api,cb) {
    const res = await fetch(api);
    const data = await res.json();
    cb (data);

}
function displayData(data){
console.log(data)
const withoutDes = data.map((val,ind,arr)=>{

    let obj = {...val}
    delete obj["distance"]
    return obj
})
console.log(withoutDes);
const rate100 = withoutDes.filter((val,ind,arr)=> val.cheapestPrice == 100); 
console.log(rate100)
const rate = withoutDes.filter((val,ind,arr)=> ind%2 == 0); 
console.log(rate)
console.log("cheapestPrice, ",rate100.reduce((accum,val,ind)=>{
    return accum+val.cheapestPrice
},0))
}
const data = getdata(apiUrl,displayData);

console.log(data);




const arr =[1,2,3,4,5,6,7,8,9,10]
console.log(arr);
console.log(arr.reduce((a,v)=>{
    if(v%2)
    a.push(v)
    return a

},[]))




