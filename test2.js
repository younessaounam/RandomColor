let div = document.getElementById('div')
let background =['red', 'gold', 'white', 'blue', '','aqua', 'green']

for(i=0;i<520;i++){
    const care = document.createElement('div')
    care.classList.add('cadr')
    
    care.addEventListener('mousemove',() =>{
        GetColor(care);
    });
    care.addEventListener('mouseout',() =>{
        RemovColor(care);
    });
    care.addEventListener('click',()=>{
        
        GetColor(care);
    });
    div.appendChild(care)

}
function GetColor(B) {
	const color = getRandomColor();
	B.style.background = color;
}
function RemovColor(B){
    B.style.background="#151427"
}
function getRandomColor() {
	return background[Math.floor(Math.random() * background.length)];
}
