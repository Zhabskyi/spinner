const circle = '\/-\\|/-\\|';
let offset = 0;

for (const char of circle) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}  `);
  }, 100 + offset);
  offset += 200;
}
setTimeout(() => console.log(), offset += 100);