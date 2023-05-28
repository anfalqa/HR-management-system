'use strict';
let id=1000;
const allemp = [];

function Employees(employeeName,employeeDep,employeeLevel,img){
    this.idUnique=0,
    this.fullName=employeeName,
    this.dep=employeeDep,
    this.level=employeeLevel,
    this.employeeImg=img,


    ////////////
    this.calculatingSalary =function(){
        if (this.level==="Senior") {
            let max=2000;
            let nim=1500;
            let sal=  Math.floor(Math.random() * (max - nim + 1) + nim)
            return Math.round(sal-(sal*0.075));
        } else if (this.level==="Mid-Senior") {
            let max=1500;
            let nim=1000;
            let sal=  Math.floor(Math.random() * (max - nim + 1) + nim)
            return Math.round(sal-(sal*0.075));
        } else {
            let max=1000;
            let nim=500;
            let sal=  Math.floor(Math.random() * (max - nim + 1) + nim)
            return Math.round(sal-(sal*0.075));
        }
   },
 
   allemp.push(this);
};  
/////////////
Employees.prototype.generatingEmployeeID  =   function(){ 

    
        this.idUnique=id;
        id=id+1;
        return(this.idUnique);
   }

Employees.prototype.renderEmp  =   function(){
    document.write("<br>"+"Employee name: "+this.fullName +"<br>"+"Department: "+this.dep+"<br>"+" Employee salary: "+this.calculatingSalary()+"<br>");
    }


let employee0=new Employees('Ghazi Samer','Administration','Senior',"./assets/Ghazi.jpg");
let employee1=new Employees('Lana Ali','Finance','Senior',"./assets/Lana.jpg");
let employee2=new Employees('Tamara Ayoub','Marketing','Senior',"./assets/Tamara.jpg");
let employee3=new Employees('Safi Walid','Administration','Mid-Senior',"./assets/Safi.jpg");
let employee4=new Employees('Omar Zaid','Development','Senior',"./assets/Omar.jpg");
let employee5=new Employees('Rana Saleh','Development','Junior',"./assets/Rana.jpg");
let employee6=new Employees('Hadi Ahmad','Finance','Mid-Senior',"./assets/Hadi.jpg");


for (let i = 0; i < allemp.length; i++) {
    allemp[i].generatingEmployeeID();
    allemp[i].renderEmp();
  }

console.log(employee4.idUnique);