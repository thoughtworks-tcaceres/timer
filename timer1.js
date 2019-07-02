const args = process.argv.slice(2);

function makeBeep(args, callback){
  if(args.length === 0){
    return;
  }

  for(const arg of args){
    if(typeof arg === "number" || arg > 0){
    setTimeout(() => {
      callback();
    }, arg * 1000);
  }
}
  
};

makeBeep(args, () => {
  process.stdout.write('\x07');
  console.log("BEEP");
});