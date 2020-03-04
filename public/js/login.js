
let xhr = new XMLHttpRequest;
let login = document.getElementById('login_btn');
let email = document.getElementById('email');
let password = document.getElementById('password');



let apiCall = (method, url, callback, info) => {
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            if (typeof callback === 'function') { callback(response); }
        }
    }
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(info));

};

login.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);

    const info = {
        email: email.value,
        password: password.value
    }


    apiCall('POST', '/login', res => {
        console.log(res)
    }, info);

});
