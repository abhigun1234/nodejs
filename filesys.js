var fs=require("fs")
// fs.readFile("hllo.txt","utf8",reciveFileContent)
// function reciveFileContent(error,data)
// {
//     if (error)
//         {
//          console.log(error)
//         }
//         else
//         {
//                 console.log("data is ",data)
//         }
    
// }
var data=fs.readFileSync("hello.txt","utf8"
)
console.log(data)