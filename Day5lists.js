console.log("HI")

const n1={
    data:200
    
}
const n2={
    data:300
}
const n3={
    data:400
}

n1.next=n2;
n2.next=n3;
n3.next=null;
console.log(n1)