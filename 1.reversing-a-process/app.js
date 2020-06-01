function decode(r) {
  let num = parseInt(r);
  let arr = r.match(/[a-z]/g).map(char => char.charCodeAt(0) - 97);
  let str = "";
  for (let number of arr) {
    let source = "";
    for (let i = 0; i < 26; i++) {
      if ((i * num) % 26 === number) {
        if (source !== "") return "Impossible to decode";
        source = i;
        str += String.fromCharCode(97 + i);
      }
    }
  }
  return str;
}

console.log(decode("1273409kuqhkoynvvknsdwljantzkpnmfgf")); // "uogbucwnddunktsjfanzlurnyxmx")
console.log(decode("1544749cdcizljymhdmvvypyjamowl")); // "mfmwhbpoudfujjozopaugcb")
console.log(decode("105860ymmgegeeiwaigsqkcaeguicc")); //, "Impossible to decode")
console.log(decode("1122305vvkhrrcsyfkvejxjfvafzwpsdqgp")); //, "rrsxppowmjsrclfljrajtybwviqb")
