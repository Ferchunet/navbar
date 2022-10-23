const delay = (ret)=>{
    for(let i = 0; i < ret * 3e6; i++ );

};
function hacertarea (num , cd) {
    
    console.log("haciendo tarea "+ num );
    setTimeout(cd,100);
}
console.log("inicio de tareas");
hacertarea(1, () =>{
    hacertarea(2, () =>{

    })     
})