'use strict';
let idUnique =1000;


let employee0= {
    EmployeeId:idUnique,
    fullName:"Ghazi Samer",
    department:"Administration",
    level:"Senior",
    imgURL: " https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
    salary:function(){
       let sal=  Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)
       return (sal-(sal*0.075));
    },
    render:function(){
        let str="Employee name: "+this.fullName +"<br>"+ "Employee salary: "+this.salary();
        return str;
    }
}


let employee1= {
    EmployeeId:idUnique+1,
    fullName:"Lana Ali",
    department:"Finance",
    level:"Senior",
    imgURL: " https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
    salary:function(){
        let sal=  Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)
        return (sal-(sal*0.075));},
        render:function(){
            let str="Employee name: "+this.fullName +"<br>"+ "Employee salary: "+this.salary();
            return str;
        }
}

let employee2= {
    EmployeeId:idUnique+2,
    fullName:"Tamara Ayoub",
    department:"Marketing",
    level:"Senior",
    imgURL: " https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
    salary:function(){
        let sal=  Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)
       return (sal-(sal*0.075));
    },
    render:function(){
        let str="Employee name: "+this.fullName +"<br>"+" Employee salary: "+this.salary();
        return str;
    }
}

let employee3= {
    EmployeeId:idUnique+3,
    fullName:"Safi Walid",
    department:"Administration",
    level:"Mid-Senior",
    imgURL: " https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
    salary:function(){
        let sal=  Math.floor(Math.random() * (1500 - 1000 + 1) + 1000)
        return (sal-(sal*0.075))},
        render:function(){
            let str="Employee name: "+this.fullName +"<br>"+" Employee salary: "+this.salary();
            return str;
        }
}

let employee4= {
    EmployeeId:idUnique+3,
    fullName:"Omar Zaid",
    department:"Development",
    level:"Senior",
    imgURL: " https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
    salary:function(){
        let sal=  Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)
       return (sal-(sal*0.075));
    },
    render:function(){
        let str="Employee name: "+this.fullName +"<br>"+" Employee salary: "+this.salary();
        return str;
    }
}

let employee5= {
    EmployeeId:idUnique+5,
    fullName:"Rana Saleh",
    department:"Development",
    level:"Junior",
    imgURL: " https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
    salary:function(){
        let sal=  Math.floor(Math.random() * (1000 - 500 + 1) + 500)
       return (sal-(sal*0.075));
    },
    render:function(){
        let str="Employee name: "+this.fullName +"<br>"+" Employee salary: "+this.salary();
        return str;
    }
}

let employee6= {
    EmployeeId:idUnique+6,
    fullName:"Hadi Ahmad",
    department:"Finance",
    level:"Mid-Senior",
    imgURL: " https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
    salary:function(){
        let sal=  Math.floor(Math.random() * (1500 - 1000 + 1) + 1000)
        return (sal-(sal*0.075))},
        render:function(){
            let str="Employee name: "+this.fullName +"<br>"+" Employee salary: "+this.salary();
            return str;  }
}
console.log(employee5.EmployeeId);
document.getElementById("demo").innerHTML = employee0.render();
document.getElementById("demo1").innerHTML = employee1.render();
document.getElementById("demo2").innerHTML = employee2.render();
document.getElementById("demo3").innerHTML = employee3.render();
document.getElementById("demo4").innerHTML = employee4.render();
document.getElementById("demo5").innerHTML = employee5.render();
document.getElementById("demo6").innerHTML = employee6.render();
