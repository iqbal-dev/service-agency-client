import jsPDF from "jspdf";
import "jspdf-autotable";

const doc = new jsPDF();

var columns = [
  { title: "Name", dataKey: "name" },
  { title: "Email", dataKey: "email" },
  { title: "Course", dataKey: "title" },
  { title: "Status", dataKey: "status" },
];

export default function createPdf(rows, total, status) {
  var doc = new jsPDF("p", "pt");
  doc.setFontSize(20);
  doc.setTextColor(40);
  //   doc.setFontStyle("normal");
  doc.text(`${status} Student List`, 10, 20);
  doc.text(`Total pending student is :${total}`, 10, 50);

  doc.autoTable(columns, rows, {
    startY: doc.autoTableEndPosY() + 70,
    margin: { horizontal: 10 },
    styles: { overflow: "linebreak" },
    bodyStyles: { valign: "top" },
    columnStyles: { email: { columnWidth: "wrap" } },
    theme: "striped",
  });
  doc.save("document.pdf");
}
