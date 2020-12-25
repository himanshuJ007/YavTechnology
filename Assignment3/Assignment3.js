// Post varibles
var submit = document.getElementById("submit");
//Update Variables

var update = document.getElementById("update");
//Delete Variables

var del = document.getElementById("delete");
//Get Variables

var get = document.getElementById("get");
// urls
const url = "https://crudcrud.com/api/86da5251514b4330858dd58ed9cba8a2";



submit.addEventListener("click", function abc() {
  var name_post = document.getElementById("name_post");
  var email_post = document.getElementById("email_post");
  var phone_post = document.getElementById("phone_post");

  var post_data = {
    name: name_post.value,
    email: email_post.value,
    phone: phone_post.value,
  };
  console.log(post_data);
  axios.post(url + "/crud", post_data).then((response)=>{
    console.log("ye",response.data);

  });


});



update.addEventListener("click", () => {
  var id_update = document.getElementById("id_update");
  var name_update = document.getElementById("name_update");
  var email_update = document.getElementById("email_update");
  var phone_update = document.getElementById("phone_update");

  var update_data = {
    name: name_update.value,
    email: email_update.value,
    phone: phone_update.value,
  };
  console.log(update_data);
  update_it(url + "/crud/"+id_update.value, update_data);
});

function update_it(u, data) {
  axios.put(u, data).then(() => {
    console.log("Successfully UPDATED");
  });
}

del.addEventListener("click", () => {
  var id_delete = document.getElementById("id_delete");
  delete_data(url + "/crud/"+id_delete.value);
});

function delete_data(u) {
  axios.delete(u).then(() => {
    console.log("Successfully Delete");
  });
}

get.addEventListener("click", () => {
    axios.get(url+"/crud")
  .then((response) => {
    console.log(response.data);
    var data= response.data;
    var name_get = document.getElementById("name_get");
    var email_get = document.getElementById("email_get");
    var phone_get = document.getElementById("phone_get");

    name_get.value = data[0].name;
    email_get.value = data[0].email;
    phone_get.value = data[0].phone;
  });
  
});




