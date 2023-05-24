'use strict';
let id=1000;

function Employees(employeeName,employeeDep,employeeLevel){
    this.idUnique=0,
    this.fullName=employeeName,
    this.dep=employeeDep,
    this.level=employeeLevel,
//salary function 
    this.employeeImg=" https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
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
   

   this.generatingEmployeeID = function(){
    
        this.idUnique=id;
        id=id+1;
        return(this.idUnique);
   }
}

Employees.prototype.render  =   function(){
        let str="Employee name: "+this.fullName +"<br>"+"Department: "+this.dep+"<br>"+" Employee salary: "+this.calculatingSalary();
        return str;
}

let employee0=new Employees('Ghazi Samer','Administration','Senior');
let employee1=new Employees('Lana Ali','Finance','Senior');
let employee2=new Employees('Tamara Ayoub','Marketing','Senior');
let employee3=new Employees('Safi Walid','Administration','Mid-Senior');
let employee4=new Employees('Omar Zaid','Development','Senior');
let employee5=new Employees('Rana Saleh','Development','Junior');
let employee6=new Employees('Hadi Ahmad','Finance','Mid-Senior');

employee0.generatingEmployeeID();
employee1.generatingEmployeeID();
employee2.generatingEmployeeID();
employee3.generatingEmployeeID();
employee4.generatingEmployeeID();
employee5.generatingEmployeeID();
employee6.generatingEmployeeID();


document.getElementById("demo").innerHTML = employee0.render();
document.getElementById("demo1").innerHTML = employee1.render();
document.getElementById("demo2").innerHTML = employee2.render();
document.getElementById("demo3").innerHTML = employee3.render();
document.getElementById("demo4").innerHTML = employee4.render();
document.getElementById("demo5").innerHTML = employee5.render();
document.getElementById("demo6").innerHTML = employee6.render();
