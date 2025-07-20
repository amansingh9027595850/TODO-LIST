
let Submit = document.getElementById("Submit");
let Title = document.getElementById("Todo");
let Desc = document.getElementById("desc");
let Display =document.getElementById("display")
let items= 1;

for(let i =1;i<20;i++){
 if(localStorage.getItem(`TODO-${i}`)){
  let data = localStorage.getItem(`TODO-${i}`);
  let info = JSON.parse(data)
  let title = info[0];
  let desc = info[1];
  console.log(title,desc);
    Display.innerHTML+=`
    <div class="card mx-4 my-4" style="width: 20rem;" id="${i}">
          <div class="card-body">
            <h5 class="card-title" >TODO-${i}</h5>
            <h5 class="card-title" >${title}</h5>
            <p class="card-text id ">${desc}</p>
           <div id="Delete${i}" class="btn btn-danger ">Delete</div>
          </div>
        </div>
    `
  }
}




Submit.addEventListener("click",(e)=>{
  e.preventDefault();
  let title =Title.value;
  let desc = Desc.value;
  localStorage.setItem(`TODO-${items}`,JSON.stringify([title,desc]));
  Display.innerHTML+=`
  <div class="card mx-4 my-4" style="width: 20rem;" id="${items}">
        <div class="card-body">
          <h5 class="card-title" >TODO-${items}</h5>
          <h5 class="card-title" >${title}</h5>
          <p class="card-text id ">${desc}</p>
         <div id="Delete${items}" class="btn btn-danger ">Delete</div>
        </div>
      </div>
  `
  items++
})


Display.addEventListener("click",(e)=>{
//    e.preventDefault();
    console.log(e.target)
    let title =e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    localStorage.removeItem(title);
    e.target.parentElement.parentElement.remove();

    
})
