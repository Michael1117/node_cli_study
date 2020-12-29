const program = require('commander')

const helpOptions = () => {
  
  // 增加自己的options
  program.option("-m --mic", "a mic cli");
  program.option(
    "-d --dest <dest>",
    "a destination folder, 例如： -d /src/components"
  );
  program.option("-d --framework <framework>", "your framework");

  program.on("--help", function () {
    console.log("");
    console.log("Other:");
    console.log("other options~");
  });
};

module.exports =  helpOptions