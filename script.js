document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const invoiceNumber = document.getElementById("invoice-number").value.trim();
  const apiUrl = "https://api-payment.ivacbd.com/invoice/print_multi/";

  if (invoiceNumber) {
    const fullUrl = apiUrl + invoiceNumber;

    window.open(fullUrl, "_blank");
  } 
  
  else {
    alert("Please enter a valid invoice number");
  }
});
