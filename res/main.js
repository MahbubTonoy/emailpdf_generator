document.getElementById("submit").addEventListener("click", ()=>{
  var name = document.getElementById("name").value;
  var year = document.getElementById("year").value;
  var session = document.getElementById("session").value;
  var roll = document.getElementById("roll").value;
  var subject = document.getElementById("subject").value;


  var pdf_name, email_subject;
  if(name != null && name !="" && year != null && session != null && roll != null && roll != "" && subject !=null && subject != "none") {
    pdf_name = `${year}_${session}_${roll}_${subject}`;
    document.getElementById("pdf_name").innerHTML=`PDF Name: <input value="${pdf_name}" id="pdfval"/><button onclick="copypdf()">Copy</button>`;
    email_subject = `Name: ${name}. Roll:${roll}. Session: ${session}. Department: Management. Course Code:${subject}`;
    document.getElementById("email_subject").innerHTML=`Email Subject: <input value="${email_subject}" id="emailval"/><button onclick="copyemail()">Copy</button>`;
  } else {
    alert("some information is missing");
  }
});

function copypdf() {
    var copyText = document.getElementById("pdfval");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
function copyemail() {
  var copyText = document.getElementById("emailval");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
