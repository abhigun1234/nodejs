var fs=require("fs")

fs.rename("mynew.txt","rename.txt",renameFile)

function renameFile(error)
{  

   if(error)
    {
        console.log(error)
    }
    else
        {
            console.log("rename completed")
        }

}