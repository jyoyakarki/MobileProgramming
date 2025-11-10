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
  
  $(document).ready(function() {
    let addVisible = false;
    let subVisible = false;
    let mulVisible = false;
    let divVisible = false;
    let msgVisible = false;
  
    $("#addBtn").click(function() {
      if (!addVisible) {
        $("#addOutput").text("23 + 2 = " + (23 + 2)).show();
        addVisible = true;
      } else {
        $("#addOutput").hide();
        addVisible = false;
      }
    });
  
    $("#subBtn").click(function() {
      if (!subVisible) {
        $("#subOutput").text("23 - 2 = " + (23 - 2)).show();
        subVisible = true;
      } else {
        $("#subOutput").hide();
        subVisible = false;
      }
    });
  
    $("#mulBtn").click(function() {
      if (!mulVisible) {
        $("#mulOutput").text("7 × 3 = " + (7 * 3)).show();
        mulVisible = true;
      } else {
        $("#mulOutput").hide();
        mulVisible = false;
      }
    });
  
    $("#divBtn").click(function() {
      if (!divVisible) {
        $("#divOutput").text("20 ÷ 4 = " + (20 / 4)).show();
        divVisible = true;
      } else {
        $("#divOutput").hide();
        divVisible = false;
      }
    });
  
    $("#msgBtn").click(function() {
      if (!msgVisible) {
        $("#msgOutput").text("Jyoya loves to travel and learn.").show();
        msgVisible = true;
      } else {
        $("#msgOutput").hide();
        msgVisible = false;
      }
    });
  });
  