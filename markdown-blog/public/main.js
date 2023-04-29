const path = require("path")
const fs =  require("fs")

const dirPath = path.join(__dirname, "../src/content/")

let postlist = []

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

                    post = {
                        id: i + 1,
                        title: metadata.title? metadata.title : "Title not found",
                        author: metadata.author? metadata.author : "author not found",
                        date: metadata.date? metadata.date : "Date not found",
                        content: content? content : "Content not found",

                    }

                    postlist.push(post)  
                    
                    if (i === files.length - 1) {
                        let data = JSON.stringify(postlist)
                        fs.writeFileSync("src/posts.json", data)
                    }
                })


            })
        }
     })

     return
}

getPost()