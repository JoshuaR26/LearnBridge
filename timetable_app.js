$(document).ready(function(){
    $("#newtask").click(function(){
        var addcontrols="<tr>"
            addcontrols+="<td class='tc1'><input type='text' placeholder='Task To Get Better...' style='text-align: center;'></td>"
            addcontrols+="<td class='tc2'><input type='text' placeholder='Date..' style='text-align: center;'></td>"
            addcontrols+="<td class='tc3'><input type='text' placeholder='Status Dude..' style='text-align: center;'></td>"                
            addcontrols+="</tr>";
            $("table tbody").append(addcontrols);
     })
  })