var fs=require("fs")
fs.readFile("hello.txt","utf8",reciveFileContent)
function reciveFileContent(error,data)
{
    if (error)
        {
         console.log(error)
        }
        else
        {
                console.log("data is ",data)
                fs.writeFile("copy.txt",data,"utf8",writecompleted)

                function writecompleted(error2)
                {

                    if(error2)
                        {
                        console.log(error2)
                        }
                        else
                            {
                                console.log("file copied")
                            }
                }

        }
    
}
