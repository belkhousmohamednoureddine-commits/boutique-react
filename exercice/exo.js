const prix =[5,3,12,50];

const prixdoubele=prix.map((n)=> n*2)
console.log(prixdoubele)

const prixfltr=prix.filter((n) => n<20)
console.log(prixfltr)

const prixfind =prix.find((n) => n>25)
console.log(prixfind)

const messi=prix[0]<20 ? "pas cher" : "cher"
console.log(messi)

