const partialKeys = obj => helper(obj);

const helper = obj => {
  return new Proxy(obj, {
    get: (obj, prop) => {
      const key = Object.keys(obj)
        .sort()
        .find(x => x.startsWith(prop));
      return key ? obj[key] : undefined;
    }
  });
};

let subject = partialKeys({
  aaa: 1,
  abc: 2,
  dfg: 3,
  def: 4,
  dfgh: 5
});

console.log(subject.a); // .to.be.equal(1)
console.log(subject.aa); //.to.be.equal(1)
console.log(subject.ab); // .to.be.equal(2)
console.log(subject.df); // .to.be.equal(3)

console.log(subject.d); // .to.be.equal(4)
console.log(subject.de); // .to.be.equal(4)

console.log(subject.dfg); // .to.be.equal(3)
console.log(subject.dfgh); // .to.be.equal(5)

console.log(subject.b); // .to.be.equal(undefined)
console.log(subject.c); // .to.be.equal(undefined)
console.log(subject.ef); // '.to.be.equal(undefined)
