function toggleContainer1() {
    const text = document.getElementById("toggleText1");
    const button = event.target;
  
    if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
      button.textContent = "Hide Info";
    } else {
      text.style.display = "none";
      button.textContent = "Show Info";
    }
  }
  
  function showSum() {
    let jyoya = 5;
    let karki = 6;
    const sum = jyoya + karki;
    const result = document.getElementById("sumResult");
    result.textContent = `The sum of ${jyoya} + ${karki} is ${sum}.`;
  }
  