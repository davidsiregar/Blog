const emailReceive = "budi@gmail.com";

function submitForm() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let number = document.getElementById("input-number").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  console.log(name);
  console.log(email);
  console.log(number);
  console.log(subject);
  console.log(message);

  if (name == "") {
    alert("name must be filled");
  }

  if (email == "") {
    alert("email must be filled");
  }

  if (number == "") {
    alert("number must be filled");
  }

  if (subject == "") {
    alert("subject must be filled");
  }

  if (message == "") {
    alert("message must be filled");
  }

  let a = document.createElement("a");
  a.href = `mailto:${emailReceive}?subject=${subject}&body=Hello my Name is ${name} and my message is ${message}`;
  a.click();

  // let dataObject = { name: "boys".email, number, subject, message };
  // console.log(dataObject);
}

// submitForm();
