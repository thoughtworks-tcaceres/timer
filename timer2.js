const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

function userInput() {
  stdin.on("data", key => {
    let num = Number(key);
    if (key === "\u0003") {
      process.stdout.write("Thanks for using me, ciao!\n");
      process.exit();
    } else if (key === "b") {
      makeBeep(0);
    } else if (num !== NaN && num >= 1 && num <= 9) {
      makeBeep(num);
    }
  });
}

const makeBeep = function(num) {
  if (num !== 0) {
    process.stdout.write(`setting timer for ${num} seconds...\n`);
  }

  setTimeout(() => {
    process.stdout.write("\x07");
  }, num * 1000);
};

userInput();
