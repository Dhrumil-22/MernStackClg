var ps= require("fs");

// ps.mkdirSync("node")

// ps.writeFileSync("node/write.txt","Hello JS!")

// ps.appendFileSync("node/write.txt","Hello JS!")

data = ps.readFileSync("node/write.txt")
console.log(data)
