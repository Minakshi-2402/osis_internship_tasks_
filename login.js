let isLogin = true; // to track if we are on login or register mode

function toggleForm() {
    isLogin = !isLogin;
    document.getElementById("form-title").innerText = isLogin ? "Login" : "Register";
    document.querySelector("button").innerText = isLogin ? "Login" : "Register";
    document.getElementById("toggle-text").innerHTML = isLogin 
        ? `Don't have an account? <a href="#" onclick="toggleForm()">Register</a>`
        : `Already have an account? <a href="#" onclick="toggleForm()">Login</a>`;
}

function handleAuth() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (isLogin) {
        // LOGIN MODE
        let storedUser = localStorage.getItem(username);
        if (storedUser && storedUser === password) {
            showSecurePage(username);
        } else {
            alert("Invalid username or password!");
        }
    } else {
        // REGISTER MODE
        if (localStorage.getItem(username)) {
            alert("Username already exists!");
            return;
        }
        localStorage.setItem(username, password);
        alert("Registration successful! Please login.");
        toggleForm();
    }
}

function showSecurePage(username) {
    document.getElementById("auth-container").classList.add("hidden");
    document.getElementById("secure-page").classList.remove("hidden");
    document.getElementById("user-name").innerText = username;
}

function logout() {
    document.getElementById("secure-page").classList.add("hidden");
    document.getElementById("auth-container").classList.remove("hidden");
}
