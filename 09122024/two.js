const score = prompt("Enter your score: ");

if (score >= 90) {
  console.log("Eccellente");
} else if (score >= 70) {
  console.log("Buono");
} else if (score >= 50) {
  console.log("Sufficiente");
} else {
  console.log("Insufficiente");
}
