function Input_Check(){
  var flag = true;
  message = "";
  if (input_form.name.value == ""){ message = message + "『名前』"; };
  if (input_form.age.value == "" ){ message = message + "『年齢』"; };
  if (input_form.sex.value == "" ){ message = message + "『性別』"; };
  if (message.length > 0){
    alert(message + "を入力してください");
    flag = false;
  }
  return flag;
}