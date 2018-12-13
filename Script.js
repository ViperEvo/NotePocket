noteTitle = document.getElementById("noteTitle");
note = document.getElementById("note");
let numer = 0;
function addNote(){
    document.getElementById('overlay').style.display='block';
    document.getElementById('inputBox').style.display='block';
}
function closeOverlay(){
    document.getElementById('overlay').style.display='none';
    document.getElementById('inputBox').style.display='none';
}
function addNoteF(){
    let ndata = { "Title" : noteTitle.value,"Note" : note.value, "X" : numer};
    let noteData = JSON.stringify(ndata);
    localStorage.setItem(numer, noteData);
    numer += 1;
    console.log(noteData);
    console.log(numer);
    console.log(localStorage.getItem('Notka') + "To jest storage");
}
function removeNoteF(){
    noteTitle.value = "";
    note.value = "";
    numer -= 1;
    localStorage.removeItem(numer);
}
