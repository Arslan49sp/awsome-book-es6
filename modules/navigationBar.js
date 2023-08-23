const navConfiguration = () => {
  const list = document.querySelector("#List");
  const addNew = document.querySelector("#AddNew");
  const contact = document.querySelector("#Contact");
  const listSection = document.querySelector("#listSection");
  const addSection = document.querySelector("#addSection");
  const contactSection = document.querySelector("#contactSection");

  list.addEventListener("click", () => {
    console.log("list");
    listSection.classList.replace("listSectionHide", "listSection");
    addSection.classList.replace("addSection", "addSectionHide");
    contactSection.classList.replace("contactSection", "contactSectionHide");
  });

  addNew.addEventListener("click", () => {
    console.log("addnew");
    listSection.classList.replace("listSection", "listSectionHide");
    addSection.classList.replace("addSectionHide", "addSection");
    contactSection.classList.replace("contactSection", "contactSectionHide");
  });

  contact.addEventListener("click", () => {
    console.log("contact");
    listSection.classList.replace("listSection", "listSectionHide");
    addSection.classList.replace("addSection", "addSectionHide");
    contactSection.classList.replace("contactSectionHide", "contactSection");
  });
};

export { navConfiguration };
