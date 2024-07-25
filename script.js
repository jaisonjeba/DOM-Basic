function lab(elementname, attrname, attrvalue, content){
var label = document.createElement(elementname);
label.setAttribute(attrname, attrvalue);
label.innerHTML = content;
return label;
}

function frontbrake(){
    var br = document.createElement("br");
    return br;
}

function inp(elementname, attrname, attrvalue, idname, idvalue){
    var input = document.createElement(elementname);
    input.setAttribute(attrname, attrvalue);
    input.setAttribute(idname, idvalue);
    return input;
}

var label1 = lab("label", "for", "firstname", "Firstname");
var break_1 = frontbrake();
var input1 = inp("input", "type", "text", "id", "firstname");
var break_2 = frontbrake();
var label2 = lab("label", "for", "middlename", "Middlename");
var break_3 = frontbrake();
var input2 = inp("input", "type", "text", "id", "middlename");
var break_4 = frontbrake();
var label3 = lab("label", "for", "lastname", "Lastname");
var break_5 = frontbrake();
var input3 = inp("input", "type", "text", "id", "lastname");
var break_6 = frontbrake();
var label4 = lab("label", "for", "email", "Email");
var break_7 = frontbrake();
var input4 = inp("input", "type", "email", "id", "email");
var break_8 = frontbrake();
var label5 = lab("label", "for", "password", "Password");
var break_9 = frontbrake();
var input5 = inp("input", "type", "password", "id", "password");
var break_10 = frontbrake();

document.body.append(label1, break_1, input1, break_2, label2, break_3, input2, break_4, label3, break_5, input3, break_6, label4, break_7, input4, break_8, label5, break_9, input5, break_10);