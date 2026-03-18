// from json object fetch the value as asked 

const a = {
    "Datastructure" : [
        {
            'name':'tree',
            'course':'intro',
            'content':['1','B','C']
        },
        {
            'name':'tree1',
            'course':'intro',
            'content':['1','B','C',"2"]
        },
    ],
    "xyz" : {
            'name':"graphics",
            "Topics":['BFS','CDF']
        }
}

console.log(a.Datastructure[1].name)
console.log(a.Datastructure[0].name)

console.log(a.xyz.name)
console.log(a.xyz.Topics)
console.log(a.xyz.Topics[0])
console.log(a.xyz)