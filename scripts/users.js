//FAKE DATA
const fakeUsers = [
  {
    uuid: "ea49af0-7030-11ec-90d6-0242ac120003",
    name: "Aaron Moreno",
    phone: "5512345678",
    email: "amoreno@mail.com",
    lastLogin: "05 Oct 2021",
    status: "activo",
  },
  {
    uuid: "23225cd4-7030-11ec-90d6-0242ac120003",
    name: "Julia Martinez",
    phone: "5578945612",
    email: "jmartinez@mail.com",
    lastLogin: "10 Dic 2021",
    status: "activo",
  },
  {
    uuid: "26c78e9a-7030-11ec-90d6-0242ac120003",
    name: "Valeria Ramos",
    phone: "5544669988",
    email: "vramos@mail.com",
    lastLogin: "20 Dic 2021",
    status: "inactivo",
  },
];

//CONSTANTS
const btnNewUser = document.getElementById("btnNewUser");
const newUserForm = document.getElementById("newUserForm");
const formHeaderTitle = document.getElementById("formHeaderTitle");
const newUserName = document.getElementById("newUserName");
const newUserPhone = document.getElementById("newUserPhone");
const newUserEmail = document.getElementById("newUserEmail");
const newUserStatus = document.getElementById("newUserStatus");
const btnNewUserCancel = document.getElementById("btnNewUserCancel");
const btnNewUserSave = document.getElementById("btnNewUserSave");
const btnDeleteRow = document.getElementById("btnDeleteRow");
const formSidebarOverlay = document.getElementById("formSidebarOverlay");
const btnCloseFormSidebarOverlay = document.getElementById(
  "btnCloseFormSidebarOverlay"
);
const loadingSpinner = document.getElementById("loadingSpinner");

//VARIABLES
let operationType = "new";
let editingUuid = undefined;

//LISTENERS
btnNewUser.addEventListener("click", () => {
  formHeaderTitle.innerText = "Nuevo usuario";
  operationType = "new";
  resetUserForm();

  //Open modal sidebar
  if (formSidebarOverlay) {
    formSidebarOverlay.classList.add("active");
  }
});
btnCloseFormSidebarOverlay.addEventListener("click", () => {
  if (formSidebarOverlay) {
    formSidebarOverlay.classList.remove("active");
  }
});
btnNewUserCancel.addEventListener("click", () => {
  if (formSidebarOverlay) {
    formSidebarOverlay.classList.remove("active");
  }
});
btnNewUserSave.addEventListener("click", () => {
  const nameFormValue = newUserName.value;
  const phoneFormValue = newUserPhone.value;
  const emailFormValue = newUserEmail.value;
  const statusFormValue = "";
  console.log(
    "values",
    nameFormValue,
    phoneFormValue,
    emailFormValue,
    statusFormValue
  );

  if (operationType === "new") {
    if (
      nameFormValue !== "" &&
      phoneFormValue !== "" &&
      emailFormValue !== ""
    ) {
      console.log("Push new");

      fakeUsers.push({
        uuid: "26c78e9a-7030-11ec-90d6-54354454",
        name: nameFormValue,
        phone: phoneFormValue,
        email: emailFormValue,
        lastLogin: "",
        status: statusFormValue,
      });
      $("#newUserSuccessToast").toast("show");

      resetUserForm();
      refreshUsers();
    }
  } else if (operationType === "edit") {
    if (
      nameFormValue !== "" &&
      phoneFormValue !== "" &&
      emailFormValue !== ""
    ) {
      console.log("Editing");
      const foundIndex = fakeUsers.findIndex(
        (item) => item.uuid === editingUuid
      );
      console.log("foundIndex", foundIndex);
      if (foundIndex > -1) {
        fakeUsers[foundIndex] = {
          ...fakeUsers[foundIndex],
          name: nameFormValue,
          phone: phoneFormValue,
          email: emailFormValue,
          status: statusFormValue,
        };
      }
      $("#editUserSuccessToast").toast("show");

      resetUserForm();
      refreshUsers();
    }
  }
  if (formSidebarOverlay) {
    formSidebarOverlay.classList.remove("active");
  }

  //Simulate waiting server with spinner
  loadingSpinner.classList.add("active");
  setTimeout(() => {
    loadingSpinner.classList.remove("active");
  }, 3000);
});
btnDeleteRow.addEventListener("click", () => {
  const foundIndex = fakeUsers.findIndex((item) => item.uuid === editingUuid);
  console.log("foundIndex", foundIndex);
  if (foundIndex > -1) {
    fakeUsers.splice(foundIndex, 1);
  }
  $("#deleteUserSuccessToast").toast("show");

  resetUserForm();
  refreshUsers();

  //Simulate waiting server with spinner
  loadingSpinner.classList.add("active");
  setTimeout(() => {
    loadingSpinner.classList.remove("active");
  }, 3000);
});

//HANDLERS

const resetUserForm = () => {
  editingUuid = undefined;
  newUserName.value = "";
  newUserPhone.value = "";
  newUserEmail.value = "";
  //   $("#newUserStatus").val("activo");
  //   $("#newUserStatus").trigger("change");
};
const editRow = (uuid) => {
  //console.log("Edit row with UUID", uuid);
  formHeaderTitle.innerText = "Editar usuario";
  operationType = "edit";
  editingUuid = uuid;

  const found = fakeUsers.find((item) => item.uuid === uuid);

  if (found) {
    newUserName.value = found.name;
    newUserPhone.value = found.phone;
    newUserEmail.value = found.email;
    $("#newUserStatus").val(found.status);
    $("#newUserStatus").trigger("change");
    if (formSidebarOverlay) {
      formSidebarOverlay.classList.add("active");
    }
  }
};
const deleteRow = (uuid) => {
  editingUuid = uuid;
};

//RENDERS
const refreshUsers = () => {
  console.log("refreshUsers", fakeUsers);
  let usersHtml = [];
  fakeUsers.forEach((item, index) => {
    usersHtml.push(`
    <tr>
        <td>${index + 1}.</td>
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.lastLogin}</td>
        <td>
            <div class="datatable__actions">
                <i onclick="editRow('${
                  item.uuid
                }')"  class="fa fa-pencil-alt action__item__edit"></i>
                <i data-toggle="modal" data-target="#modalAlert2" onclick="deleteRow('${
                  item.uuid
                }')" class="fa fa-trash action__item__delete"></i>
            </div>
        </td>
    </tr>
`);
  });
  const usersTableBody = document.getElementById("usersTableBody");
  if (usersTableBody) {
    usersTableBody.innerHTML = usersHtml.join("");
  }
};

const refreshUsersTableContent = () => {
  console.log("refreshUsers", fakeUsers);
  let usersHtml = [];
  fakeUsers.forEach((item, index) => {
    usersHtml.push(`
      <tr>
        <td>${index + 1}.</td>
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.lastLogin}</td>
        <td>
            <div class="datatable__actions">
                <i onclick="editRow('${
                  item.uuid
                }')"  class="fa fa-pencil-alt action__item__edit"></i>
                <i data-toggle="modal" data-target="#modalAlert2" onclick="deleteRow('${
                  item.uuid
                }')" class="fa fa-trash action__item__delete"></i>
            </div>
        </td>
      </tr>
    `);
  });
  const usersTableContent = document.getElementById("usersTableContent");
  if (usersTableContent) {
    usersTableContent.innerHTML = usersHtml.join("");
  }
};

//EXECUTE
refreshUsers();
refreshUsersTableContent();
