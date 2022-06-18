"use strict;";
const nam = document.querySelector(".input1");
const password = document.querySelector(".input2");
const form = document.querySelectorAll("#form");
const btn = document.querySelectorAll("#submit");
const usernam = document.querySelector(".username");
const passwod = document.querySelector(".passwd");

btn.addEventListener("click", (e) => {
    if (nam.value === "") {
        e.preventDefault();
        usernam.classList.remove("Username");
    }

    if (password.value.length <= 4 && password.value.length > 10) {
        e.preventDefault();
        passwod.classList.remove("passwd");
    }
});