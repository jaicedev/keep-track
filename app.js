n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
full = m + "." + d + "." + y;
document.getElementById("date").innerHTML = m + "." + d + "." + y;

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
    
    document.body.removeChild(element);
  }
  
document.getElementById("save").addEventListener("click", function(){
    var text = document.getElementById("text-area").value;
    var filename = document.getElementById("file-title").value + " " + full + ".txt";
    
    download(filename, text);
}, false);

document.getElementById('clear').addEventListener('click', function(){
    this.innerHTML = 'Are you sure?'
    this.addEventListener('click', function(){
        document.getElementById("file-title").value = '';
        document.getElementById("text-area").value = '';
    })
}, false);