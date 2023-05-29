'use strict';
let id=1000;
const allemp = [];

function Employees(employeeName,employeeDep,employeeLevel,img){
    this.idUnique=0,
    this.fullName=employeeName,
    this.dep=employeeDep,
    this.level=employeeLevel,
    this.employeeImg=img,


    //////////// calculatingSalary method
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
/////////////generateUniqueID method 
Employees.prototype.generatingEmployeeID  =   function(){ 

    
        this.idUnique=id;
        id=id+1;
        return(this.idUnique);
   }

   //////////


let elem=document.getElementsByTagName("body")[0];
let divAll= document.createElement("div");
elem.appendChild(divAll);
       
        ///////
let divA= document.createElement("div");
divAll.appendChild(divA);
let header4=document.createElement("h2");
        header4.textContent=("Administration");
        divA.appendChild(header4);
        ///////
let divM= document.createElement("div");
divAll.appendChild(divM);
let header1=document.createElement("h2");
        header1.textContent=("Marketing");
        divM.appendChild(header1);
        ///////
let divD= document.createElement("div");
divAll.appendChild(divD);
let header3=document.createElement("h2");
        header3.textContent=("Development");
        divD.appendChild(header3);
        ////////

let divF= document.createElement("div");
divAll.appendChild(divF);
let header2=document.createElement("h2");
        header2.textContent=("Finance");
        divF.appendChild(header2);
///////////prototype render method
Employees.prototype.renderEmp  =   function(){
        let str="Employee name: "+this.fullName +" - "+"ID: "+this.idUnique+" \n "+"Department: "+this.dep+" - "
        +" Employee Level: "+this.level+"\n"+this.calculatingSalary();
        
///dom mani..


let div1=document.createElement("div");


    let imgEmp=document.createElement("img");
    imgEmp.src=this.employeeImg;
    imgEmp.alt=this.fullName;
    imgEmp.style.height="200px";
    div1.appendChild(imgEmp);


    let info=document.createElement("p");
    info.textContent=(str);
    div1.appendChild(info);
    

    if (this.dep==="Administration"){
        divA.appendChild(div1);
    } else if (this.dep==="Finance"){
        divF.appendChild(div1);
    } else if(this.dep==="Development") {
        divD.appendChild(div1);
    }else {
        divM.appendChild(div1);
    };


////////// style part 
elem.style.backgroundColor="#C6EBC5";
divAll.style.display= "flex";
divA.style.display="inline-block";
divM.style.display="inline-block";
divF.style.display="inline-block";
divD.style.display="inline-block";
div1.style.border="none";
div1.style.borderRadius = "25px";
elem.style.color="#FA7070";
div1.style.backgroundColor="#FBF2CF";
div1.style.textAlign = "center"; 
div1.style.boxShadow = "0px 0px 20px #A1C298";
div1.style.boxSizing = "border-box";
div1.style.width="300px";
div1.style.margin="10px";
div1.style.height="300px";
};


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
