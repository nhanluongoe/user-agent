import "./style.css";

function getUserAgent() {
  const userAgent = navigator.userAgent;
  console.log(userAgent);
  return userAgent;
}

document.querySelector("#user-agent").innerHTML = navigator.userAgent;

getUserAgent();
