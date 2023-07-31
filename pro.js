const course0 = document.getElementById("course")
const unit0 = document.getElementById("unit0")
btn = document.getElementById("AddCourse")
const grd0 = document.getElementById("grd0")
btn.onclick = addcourse
const divs = document.querySelector(".section")
const divs2 = document.getElementById("testing")
const btn2 = document.getElementById("Gpa")
tag = 1

let course = "course"
let grd = "grd"
let unit = "unit"
let div = "Course"
let row = "row"
btn2.onclick= gpa

function gpa(){
    ctots = 0
    cunits = 0
    for (i=0;i<=tag; i=i+1){
        cgrd = document.getElementById("grd"+String(i)).value
        cgrd *=1
        cunit =  document.getElementById("unit"+String(i)).value
        cunit *=1
        cunits += cunit
        ctot = cgrd*cunit
        ctots += ctot
        console.log(cunit)
        console.log(ctot)
        
    }
    gpavalue = ctots/cunits
    gpavalue = gpavalue.toFixed(2)
    console.log(gpavalue)
    divs2.innerHTML=gpavalue
    localStorage.setItem("gpa",gpavalue)
}

function addcourse(){
    tag += 1

    console.log(tag)
    div1 =document.createElement("div")
    div1.setAttribute("class",div)
    row1 = document.createElement("tr")
    row1.setAttribute("id",row+String(tag))
    divs.appendChild(row1)
    
    courseel = document.createElement("td")
    input1 =document.createElement("input")
    input1.setAttribute("type","text")
    input1.setAttribute("id",course+String(tag)) 
    input1.setAttribute("class","ccod")                 
    input1.setAttribute("placeholder","E.g. ACC121")
    row1.appendChild(courseel)
    courseel.appendChild(input1)

    unitel = document.createElement("td")
    input2 =document.createElement("input")
    input2.setAttribute("type","number")
    input2.setAttribute("id",unit+String(tag))     
    input2.setAttribute("class","cun")       
    input2.setAttribute("placeholder","1 - 3")
    row1.appendChild(unitel)
    unitel.appendChild(input2)


    grdel = document.createElement("td")
    input3 =document.createElement("select")
    input3.setAttribute("id",grd+String(tag))            
    input3.setAttribute("placeholder","grade")
    input3.setAttribute("class","grade")       
    a = document.createElement("option")
    a.setAttribute("value","5")
    a.innerHTML = "A"
    b = document.createElement("option")
    b.setAttribute("value","4")
    b.innerHTML = "B"
    c = document.createElement("option")
    c.setAttribute("value","3")
    c.innerHTML = "C"
    d = document.createElement("option")
    d.setAttribute("value","2")
    d.innerHTML = "D"
    e = document.createElement("option")
    e.setAttribute("value","1")
    e.innerHTML = "E"
    f = document.createElement("option")
    f.setAttribute("value","0")
    f.innerHTML = "F"
    row1.appendChild(grdel)
    grdel.appendChild(input3)
    input3.appendChild(a)
    input3.appendChild(b)
    input3.appendChild(c)
    input3.appendChild(d)
    input3.appendChild(e)
    input3.appendChild(f)
    
    buttonel =  document.createElement("td")
    button = document.createElement("button")
    button.setAttribute("id","btn"+String(tag))
    button.setAttribute("class","btn1")
    row1.appendChild(buttonel)
    buttonel.appendChild(button)
   
    button.setAttribute("onclick","divs.removeChild(this.parentNode.parentNode)")
    button.innerHTML = "x"
    
    }
