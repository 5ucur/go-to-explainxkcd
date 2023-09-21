
### GreaseMonkey Script

I'd recommend using the GreaseMonkey script instead! Pull it from the files above, or copypaste from the section below:

<details>

 <summary>Script here</summary>

```js
// ==UserScript==
// @name     	GoToExplainXKCD
// @version  	1.1
// @grant    	none
// ==/UserScript==

if (document.URL.includes("xkcd.com") && !document.URL.includes("explainxkcd")) {
  let current = [
      window.location.protocol,
      window.location.hostname,
      window.location.pathname
  ]
  console.log(current);

  if (current[1] !== "xkcd.com") {
    current[1] = current[1].slice(current[1].indexOf('.') + 1);
  }

  if  (isNumeric(current[2]) || !isNumeric(current[2]) && current[2] === "/") {

    let btn = document.createElement("div");

    btn.style.position = "fixed";
    btn.style.right = "20px";
    btn.style.bottom = "20px";
    btn.style.zIndex = "9999999999";

    let img = document.createElement("img");
    img.style.position = "relative";
    img.style.height = "48px";
    img.style.cursor = "pointer";
    img.src = browser.runtime.getURL("https://raw.githubusercontent.com/5ucur/go-to-explainxkcd/main/icons/explain.png");

    btn.appendChild(img);
    document.body.appendChild(btn);
    current.splice(1, 0, "//explain")

    btn.addEventListener("click", () => {
      window.open(current.join(""), '_blank').focus()
    })
    console.log(current.join(""));
  }

  function isNumeric(num){
      return !isNaN(num.slice(1,-1))
  }
}
```

</details>

It still depends upon this repo for the `Explain` image, so it's on you to modify it with a different image URL in case this one disappears.

# go-to-explainxkcd
*GoToExplainXKCD: It's 'cause you're lazy.*

 A simple Firefox extension that adds a button to send you to the unofficial xkcd wiki.

 If you find the button on a page which should not have an ExplainXKCD page, or don't find it on one where you expect it, please contact me! I don't know much about extensions just yet, but hopefully, I'll be able to fix it.
