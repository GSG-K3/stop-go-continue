let xhr = new XMLHttpRequest();
let apiCall = (method, url, callback) => {
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      if (typeof callback === "function") {
        callback(response);
      }
    }
  };
  xhr.open(method, url);
  xhr.send();
};
const continer = document.getElementById("continer");
const getDatabase = () => {
  apiCall("GET", "/cf", res => {
    if (res.length === 0) {
      console.log("there is no feedback");
      const emptyDB = document.createElement("h1");
      emptyDB.innerHTML = "there is no feedback";
      continer.appendChild(emptyDB);
    }
  });
};

window.addEventListener("load", () => {
  getDatabase();
});
