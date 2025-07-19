
let Submit = document.getElementById("Submit");
let Title = document.getElementById("Todo");
let Desc = document.getElementById("desc");
let Display =document.getElementById("display")
let items= 1;


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
