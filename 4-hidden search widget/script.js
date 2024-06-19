const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.getElementById("input");

btn.addEventListener("click", () => {
  if(search.classList.contains("active")){
    search.classList.remove("active");
  }else{
    search.classList.toggle("active");
    input.focus();
  }
});

input.onblur=()=>{
  if(search.classList.contains("active")){
    search.classList.remove("active");
  }
}
