document.querySelectorAll(".reveal").forEach((element) => {
  let parent = document.createElement("span");
  let child = document.createElement("span");

  parent.classList.add("parent");
  child.classList.add("child");

  child.innerHTML = element.innerHTML;
  parent.appendChild(child);

  element.innerHTML = "";
  element.appendChild(parent);
});
console.log(document.querySelectorAll(".reveal.up"));
