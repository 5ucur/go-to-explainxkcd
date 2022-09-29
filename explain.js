let btn = document.createElement("div");

btn.style.position = "fixed";
btn.style.right = "20px";
btn.style.bottom = "20px";
btn.style.zIndex = "9999999999";

let img = document.createElement("img");
img.style.position = "relative";
img.style.height = "48px";
img.style.cursor = "pointer";
img.src = browser.runtime.getURL("icons/explain.png");

btn.appendChild(img);
document.body.appendChild(btn);

btn.addEventListener("click", () => {
    let current = [
        window.location.protocol,
        window.location.hostname,
        window.location.pathname
    ]
    /* window.location.href = concat(
        [
            window.location.protocol,
            window.location.hostname,
            window.location.pathname,           
        ]
    )*/

    if  (isNumeric(current[2]) ||
        !isNumeric(current[2]) && current[2] === "/") {
            current.splice(1, 0, "//explain")
            window.open(current.join(""), '_blank').focus()
        }
    else {alert("This is not a valid page according to this extension!")}
    }
)

function isNumeric(num){
  return !isNaN(num.slice(1,-1))
}
