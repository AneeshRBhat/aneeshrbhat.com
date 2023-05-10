const path = require("path")
const fs =  require("fs")

const dirPath = path.join(__dirname, "../content/")
const dirPagePath = path.join(__dirname, "../src/pages/content/")

let postlist = []
let pagelist = []

const getPost = () => {
      fs.readdir(dirPath, (err, files) => {
        if(err){
            console.log("files cannot be found");
        }
        
        else {
            files.forEach((file,i) => {
                let obj = {}
                let post
                fs.readFile(`${dirPath}${file}`, "utf8", (err, contents) =>{
                    const getMetadataIndices = (acc, elem, i) => {
                        if(/^---/.test(elem)) {
                           acc.push(i)
                        }
                        return acc
                    }
    
                    const parseMetadata = (lines, metadataIndices) => {
                        if(metadataIndices.length > 0) {
                            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                            metadata.forEach(line => {
                                    obj[line.split(": ")[0]] = line.split(": ")[1]

                            })
                            return(obj)
                        }

                        }
                        
                    const parseContent = (lines, metadataIndices) => {
                        if(metadataIndices.length > 0){
                            let content = lines.slice(metadataIndices[1] + 1, lines.length)
                            return(content.join("\n"))
                        }
                        
    
                    }
                    const lines = contents.split("\n")
                    const metadataIndices = lines.reduce(getMetadataIndices, [])
                    const metadata = parseMetadata(lines, metadataIndices)
                    const content = parseContent(lines, metadataIndices)

                    const date = new Date(metadata.date).getTime()/1000
                    post = {
                        id: date,
                        title: metadata.title? metadata.title : "Title not found",
                        author: metadata.author? metadata.author : "author not found",
                        date: metadata.date? metadata.date : "Date not found",
                        content: content? content : "Content not found",
                        thumbnail: metadata.thumbnail? metadata.thumbnail : null

                    }
                    postlist.push(post)  

                    if (i === files.length - 1) {
                        let sortedList = postlist.sort((a,b) => {
                            return a.id < b.id? 1 : -1
                        })
                        let data = JSON.stringify(sortedList)
                        fs.writeFileSync("src/posts.json", data)
                    }
                })


            })
        }
     })

     return
}

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

getPost()
getPages()
