const fun = async  ()=>{
    var x = document.getElementsByClassName("ytd-thumbnail-overlay-time-status-renderer") 
    var playlist_length = 0
    for (var v = 0; v < x.length/2 ; ++v){
        var t = x[v * 2 + 1].innerHTML.split(":")
        var sec = 0
        var mul = 1
        for(var i = t.length - 1; i >= 0 ; i-=1){
            sec += parseInt(t[i]) * mul
            mul*=60
        }
        playlist_length += sec
    } 
    function getDuration(len) {
        return len>=3600 ?  new Date(len * 1000).toISOString().slice(11, 19) : new Date(len * 1000).toISOString().slice(14, 19)
    }
    const result1x = getDuration(playlist_length),result2x = getDuration(playlist_length/2),resultmid = getDuration(2 * playlist_length/3);

    let code = "";
    code += "<div style=\"font-size:24px;\">\n"
    code += "<center>\n"
    code += "<h2 >\n";
    code += "<u>\n";
    code += "Analytics\n";
    code += "</u>\n";
    code += "</h2>\n";
    code +="</center>" 
    code += "<p>\n";
    code += "  <h3>\n";
    code += `\tTotal Length : ${result1x}\n`;
    code += "  </h3>\n";
    code += "  <h3>\n";
    code += `\tAt 1.5x : ${resultmid}\n`;
    code += "  </h3>\n";
    code += "  <h3>\n";
    code += `\tAt 2x : ${result2x}\n`;
    code += "  </h3>\n";
    code += "\n";
    code += "</p>\n";
    code +="</div>\n"


    x = document.getElementsByTagName("ytd-playlist-sidebar-primary-info-renderer")
    console.log(x[0]);
    x[0].insertAdjacentHTML("beforeend",code) 
    }

    //Onload not working    
setTimeout(()=> {
    fun()
},2000)