const seat_number = new Array(45);
for(i=0;i<45;i++){
    seat_number[i]=String(i+1);
}
// div_idは席のブロック、para_idはボタン
function enter(div_id, para_id){
    const dn = document.getElementById(div_id);
    const pn = document.getElementById(para_id);
    user = window.prompt('名前を入力してください','');
    if(user.length>0){
        pn.innerHTML = user;
        //alert(p.innerHTML);
        dn.style = "background-color: red;";
    }
}

function cleanup(){
    user = window.prompt('席番号（半角数字）','')
    if (seat_number.includes(user)){
        const dn = document.getElementById("div"+user);
        const pn = document.getElementById("p"+user);
        if(cleaned = window.confirm(`座席番号${user}の消毒はお済ですか？`)){
            pn.innerHTML = `<p id='p${user}'><input type="button" value="名前入力" onclick="enter('div${user}','p${user}')"></p>`;
            dn.style = "background-color: white;";
        }
    }

}
