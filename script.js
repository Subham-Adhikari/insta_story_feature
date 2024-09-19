let arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1673792686337-a1f69d212874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGdpcmx8ZW58MHx8MHx8fDA%3D" , story:"https://images.unsplash.com/photo-1722799037558-69a4dc8e08d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"},
    {dp:"https://images.unsplash.com/photo-1660951381925-57ac7e40c40d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGdpcmx8ZW58MHx8MHx8fDA%3D" , story:"https://images.unsplash.com/photo-1719937206220-f7c76cc23d78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"},
    {dp:"https://media.istockphoto.com/id/1024119662/photo/portrait-of-a-beautiful-young-woman-outdoor-stock-image.webp?b=1&s=170667a&w=0&k=20&c=cy0vpDMnUEP8mLsTI1C6LQPTYctoxNOPQSwBR2sM-kU=" , story:"https://media.istockphoto.com/id/1286408574/photo/young-woman-facial-expression-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=bjzCX1Z6MKxKoVZQzk9UhbCOiKyZBsWzwosSdY5wcbw="},
    {dp:"https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" , story:"https://images.unsplash.com/photo-1613005798967-632017e477c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" , story:"https://plus.unsplash.com/premium_photo-1673792686302-7555a74de717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://plus.unsplash.com/premium_photo-1687188208286-adab13d34175?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdpcmx8ZW58MHx8MHx8fDA%3D" , story:"https://images.unsplash.com/photo-1662351997685-57a21379d966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
];

var clutter = "";
arr.forEach(function(elem,indx){
    clutter += `<div class="story">
                <img id="${indx}" src="${elem.dp}" alt="">
            </div>`
    // console.log(elem ,indx)
})
document.querySelector("#stories").innerHTML = clutter;
// console.log(clutter);/

var str = document.querySelector("#card");
str.addEventListener("click",function(data){
    // console.log(arr[data.target.id].story)
    document.querySelector("#flscr").style.display = "block"
    document.querySelector("#flscr").style.backgroundImage = `url(${arr[data.target.id].story})`;


    setTimeout(() => {
    document.querySelector("#flscr").style.display = "none"
   
    }, 1500);
})




