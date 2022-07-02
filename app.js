window.addEventListener("load", (callback) => {
  if (document.readyState !== "complete") {
    callback();
  } else {
    console.log("Page loaded");
    return;
  }
});
