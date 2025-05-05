let name = "🐻";
console.log(`constant 'name' UTF-16 unit length: ${name.length}`);
console.log(`constant 'name' character length: ${[...name].length}`);
console.log("=====================================");
console.log(`Hi ${name}, welcome to Textio!`);

//Output
// constant 'name' UTF-16 unit length: 2
// constant 'name' character length: 1
// =====================================
// Hi 🐻, welcome to Textio!