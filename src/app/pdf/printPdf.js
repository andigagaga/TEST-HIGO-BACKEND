// utils/printCustomer.js

export function handlePrintCustomer(customer) {
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>Customer Detail</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { color: #2563eb; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          td { padding: 10px; border: 1px solid #ddd; }
        </style>
      </head>
      <body>
        <h2>Customer Detail</h2>
        <table>
          <tr><td><strong>Name</strong></td><td>${customer.Name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${customer.Email}</td></tr>
          <tr><td><strong>Date</strong></td><td>${customer.date}</td></tr>
          <tr><td><strong>Gender</strong></td><td>${customer.gender}</td></tr>
          <tr><td><strong>Age</strong></td><td>${customer.age}</td></tr>
          <tr><td><strong>No Telp</strong></td><td>${customer.No_Telp}</td></tr>
          <tr><td><strong>Device</strong></td><td>${customer.Brand_Device}</td></tr>
          <tr><td><strong>Location</strong></td><td>${customer.Location_Type}</td></tr>
        </table>
        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}
