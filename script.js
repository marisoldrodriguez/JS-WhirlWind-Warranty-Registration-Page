// This is the script file that uses DOM to create the Warranty Page

function createWarrantyPage() {
  const element = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.innerText = "Warranty Information";
  h1.className = "form-group";

  element.appendChild(h1);

  document.body.appendChild(element);

  const form = document.createElement("form");

  form.innerHTML = `
    <form class='form-group'>
    <label>First Name</label>
    <br>
    <input type="text" />
    <br>
    <label>Last Name</label>
    <br>
    <input type="text" />
    <br>
    <label>Company Name</label>
    <br>
    <input type="text" />
    <br>
    <label>Email</label>
    <br>
    <input type="text" />
    <br>
    <label>Phone Number</label>
    <br>
    <input type="text" />
    <br>
    <label>Fax Number</label>
    <br>
    <input type="text" />
    <br>
    <label>Address</label>
    <br>
    <input type="text" />
    <br>
    <label>City</label>
    <br>
    <input type="text" />
    <br>
    <label>State</label>
    <br>
    <input type="text" />
    <br>
    <label>Zip</label>
    <br>
    <input type="text" />
    <br>
    <label>Country</label>
    <br>
    <input type="text" />
    <br>
    <h3>Device Information</h3>
    <br>
    <label>Date of Purchase</label>
    <br>
    <input type="text" />
    <br>
    <label>Model</label>
    <br>
    <input type="text" />
    <br>
    <label>Warranty Serial Number</label>
    <br>
    <input type="text" />
    <br>
    <button>Save</button>
    <button>Close</button>
    </form>`;

  document.body.appendChild(form);
}
