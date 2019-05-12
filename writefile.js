var fs=require("fs")
var content="hi all how are you"
fs.writeFile("writfile.txt",content,"utf8",writeFileContent)

function writeFileContent(error)
{  

   if(error)
    {
        console.log(error)
    }
    else
        {
            console.log("completed")
        }

}