//! npm открытие папки json
//!npm-y автоматическое отерытие папки json


console.log("hello world");
const fs =require("fs")
const textIn=fs.readFileSync("./practictxt/input.txt",'utf-8')
console.log(textIn);
const textOut=`this is Elon Musk:${textIn}\nCreated on${new Date()}`
fs.writeFileSync("./practictxt/o.txt",textOut)



// console.log("File Written");
// fs.readFile("./txt/start.txt", "utf-8",(err,data1)=>{
//     if (err) return console.log("error $%$#%!@#!@%");
//     console.log(data1)
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8',(errr, data2)=>{
//         console.log(data2)
//         fs.writeFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
//             console.log(data3)
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err=>{
//                 console.log('Your file has been written');



    fs.readFile("./txt/start.txt",'utf-8',(err, data1)=>{
    if(err) return console.log("Error");
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2)
        fs.readFile('./txt/append.txt',"utf-8",(err,data3)=>{
            console.log(data3)
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
                console.log('your file has been written bitch');
            })
            })
        })
    })
    console.log("will read file");
    