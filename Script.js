noteTitle = document.getElementById("noteTitle");
note = document.getElementById("note");
let number = 1;
let num = 1;
function addNote(){
    document.getElementById('overlay').style.display='block';
    document.getElementById('inputBox').style.display='block';
}
function holdRemoveNumber(idnum)
{
    num = idnum
}
function removeNote(){

    document.getElementById('T' + num).innerHTML = "";
    document.getElementById('Nd' + num).innerHTML = "";
    localStorage.removeItem(num);
    sortNotes()
}
function closeOverlay(){
    document.getElementById('overlay').style.display='none';
    document.getElementById('inputBox').style.display='none';
}

window.onload = function loadNoteF(){
    
    for (let i = 1; i <= 12; i++)
    {
        let ndata = JSON.parse(localStorage.getItem(i));
    
        document.getElementById('T' + i).innerHTML = ndata['Title'];
        document.getElementById('Nd' + i).innerHTML = ndata['Note'];
        number = ndata['ID'];
    }
}
function addNoteF(){
    
    let ndata = { "Title" : noteTitle.value,"Note" : note.value, "ID" : number};
    let noteData = JSON.stringify(ndata);
    localStorage.setItem(number, noteData);
    
    document.getElementById('T' + number).innerHTML = noteTitle.value;
    document.getElementById('Nd' + number).innerHTML = note.value;
    
    number += 1;
    if (number > 12) { number = 12};
}
function removeNoteF(){
    
    document.getElementById('T' + number).innerHTML = "";
    document.getElementById('Nd' + number).innerHTML = "";

    localStorage.removeItem(number);
    number -= 1;
    if (number <  1) { number =  1};
}
function sortNotes(){
    
    for (let n = 1; n < 12; n++)
    {
        let ndata = JSON.parse(localStorage.getItem(n));
        
        if (n > num)
        {
            ndata = { "Title" : ndata['Title'],"Note" : ndata['Note'], "ID" : n - 1}
            let noteData = JSON.stringify(ndata);
            localStorage.removeItem(n);
            localStorage.setItem(n -1 , noteData);
        }
    }
}
