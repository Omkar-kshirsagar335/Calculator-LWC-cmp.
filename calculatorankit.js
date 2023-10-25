import { LightningElement } from 'lwc';
export default class Calculatorankit extends LightningElement {
no1;
no2;
output;
handler(event){
//let name=event.targrt.name;
//let value=event.targrt.value;
let {name,value}=event.target;
if(name==="no1"){
    this.no1=value;
}else{
    this.no2=value;
}
}

handleClick(event){
   let lab=event.target.label;
   if(lab==="Add"){
       this.output=parseInt(this.no1)+parseInt(this.no2);
}else if(lab==="Sub"){
       this.output=parseInt(this.no1)-parseInt(this.no2);
}else if(lab==="Mul"){
       this.output=parseInt(this.no1)*parseInt(this.no2);
}else if(lab==="Div"){
       this.output=parseInt(this.no1)/parseInt(this.no2);
}
}
}