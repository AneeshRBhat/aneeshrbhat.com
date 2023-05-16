const path = require("path")
const fs =  require("fs")

const dirPagePath = path.join(__dirname, "../src/pages/content/")

let pagelist = []

const getPages = () => {
    fs.readdir(dirPagePath, (err, files) => {
      if(err){
          console.log("files cannot be found");
      }
      
      else {
          files.forEach((file,i) => {
              let page
              fs.readFile(`${dirPagePath}${file}`, "utf8", (err, contents) =>{
                page = {
                      content: contents
                  }
                  pagelist.push(page)  
                      
                  if (i === files.length - 1) {
                  let data = JSON.stringify(pagelist)
                      fs.writeFileSync("src/pages.json", data)}
              })


          })
      }
   })

   return
}

getPages()
