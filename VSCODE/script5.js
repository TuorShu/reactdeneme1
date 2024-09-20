
//Resolve ve Reject//




/* const check = false;

const promise1 = new Promise((resolve , reject)=>{
if(check){
  resolve("Promise Başarılı")}
  else{
    reject("Promise Başarısız");
  }
})

console.log(promise1);






//durumlarda ne yapılacağı



let check=true;

function createPromise(){
  return new Promise((resolve , reject)=>{
if(check){
  resolve("promise sorunsuz")
}else{
  reject("Sıkıntı var")
}
  })
}

createPromise()
.then((Response)=>{
  console.log(Response);
})
.catch((Error)=>{
  console.log(Error);
})
.finally(()=>console.log("Her zaman çalışır"))




 Promise + XMLHTTPREQUEST

*/ function readStudents(url){

  return new Promise((resolve ,reject)=>{
  const xhr = new XMLHttpRequest();
  try {
    xhr.addEventListener("readystatechange", ()=>{
      if(xhr.readyState===4 && xhr.status===200){
        resolve(JSON.parse(xhr.responseText));
      }
    })
  } catch (error) {
    reject(error);
  }
  xhr.open("GET",url);
  xhr.send();
})
  }
  
  readStudents("students.json")
  .then((data)=>console.log(data))
  .catch((err)=>console.log(err))
  
  



  function getUsers(url){
    return new Promise((resolve,reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", ()=>{
        try {
          if(xhr.readyState===4 && xhr.status===200){
            resolve(JSON.parse(xhr.responseText));
          }
        } catch (s) {
          
        }
      })
      xhr.open("GET",url)
      xhr.send();
    })
  }

  getUsers("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((err)=>console.log(err))
  .finally("her zaman çalışır")