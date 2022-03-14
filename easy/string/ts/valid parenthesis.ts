function isValid(s: string): boolean {
  const open = ["[", "(", "{"];
  const closing = ["]", ")", "}"];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      let index = open.indexOf(s[i]);
      stack.push(closing[index]);
    } else {
      let check = stack.pop();
      if (check === s[i]) {
        continue;
      } else return false;
    }
  }

  return !stack.length;
}
