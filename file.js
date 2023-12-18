const one = require("fs");
// one.writeFileSync('./test.txt','Hello I am there nobody can fool me');
// one.writeFile('./test.txt','Hello I am there nobody can fool me',(err)=>{});
// const result = one.readFileSync('./contact.txt',"utf-8");
// console.log(result);
// const res = one.readFile('./contact.txt',"utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }else{
//         console.log(result);
//     }

// });
one.appendFileSync("./test.txt",new Date().getDate().toLocaleStrin()); 
// console.log(res);
one.appendFileSync("./test.txt",`${Date.now()}Hey There\n`);
// one.cpSync('./test.txt','./copy.txt');
// one.unlinkSync('./copy.txt');
console.log(one.statSync('./test.txt').isFile());
one.mkdirSync('my_docs/a/b',{recursive:true});