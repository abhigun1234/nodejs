var fs=require("fs")
// fs.readFile("myfle.txt","utf8",reciveFileContent)

// function reciveFileContent(error,data)
// {
//  if(error)
//     {

//         console.log("error",error)
//     }
//     else
//         {
//             console.log(data)
//         }

// }
var data=fs.readFileSync("myfile.txt","utf8")
console.log(data)