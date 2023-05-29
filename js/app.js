'use strict';

let idUnique=1000;

let employee0= {
    EmployeeId:0,
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
    },
    generateUniqueID:function(){
        this.EmployeeId=idUnique;
   idUnique=idUnique+1
    return(this.EmployeeId);
    }
}

employee0.generateUniqueID()

let employee1= {
    EmployeeId:0,
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
        },
        generateUniqueID:function(){
            this.EmployeeId=idUnique;
       idUnique=idUnique+1
        return(this.EmployeeId);
        }
}
employee1.generateUniqueID();
let employee2= {
    EmployeeId:0,
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
    },
    generateUniqueID:function(){
        this.EmployeeId=idUnique;
   idUnique=idUnique+1
    return(this.EmployeeId);
    }
}
employee2.generateUniqueID();
let employee3= {
    EmployeeId:0,
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
        },
        generateUniqueID:function(){
            this.EmployeeId=idUnique;
       idUnique=idUnique+1
        return(this.EmployeeId);
        }
}
employee3.generateUniqueID();
let employee4= {
    EmployeeId:0,
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
    },
    generateUniqueID:function(){
        this.EmployeeId=idUnique;
   idUnique=idUnique+1
    return(this.EmployeeId);
    }
}
employee4.generateUniqueID();
let employee5= {
    EmployeeId:0,
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
    },
    generateUniqueID:function(){
        this.EmployeeId=idUnique;
   idUnique=idUnique+1
    return(this.EmployeeId);
    }
}
employee5.generateUniqueID();

let employee6= {
    EmployeeId:0,
    fullName:"Hadi Ahmad",
    department:"Finance",
    level:"Mid-Senior",
    imgURL: " https://cdn-icons-png.flaticon.com/512/2815/2815428.png ",
    salary:function(){
        let sal=  Math.floor(Math.random() * (1500 - 1000 + 1) + 1000)
        return (sal-(sal*0.075))},
        render:function(){
            let str="Employee name: "+this.fullName +"<br>"+" Employee salary: "+this.salary();
            return str;  },
            generateUniqueID:function(){
                this.EmployeeId=idUnique;
           idUnique=idUnique+1
            return(this.EmployeeId);
            },
            
}
employee6.generateUniqueID();

document.getElementById("demo").innerHTML = employee0.render();
document.getElementById("demo1").innerHTML = employee1.render();
document.getElementById("demo2").innerHTML = employee2.render();
document.getElementById("demo3").innerHTML = employee3.render();
document.getElementById("demo4").innerHTML = employee4.render();
document.getElementById("demo5").innerHTML = employee5.render();
document.getElementById("demo6").innerHTML = employee6.render();


console.log(employee5.EmployeeId);
