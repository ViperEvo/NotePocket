noteTitle = document.getElementById("noteTitle");
note = document.getElementById("note");

function addNote(){
    document.getElementById('overlay').style.display='block';
    document.getElementById('inputBox').style.display='block';
}
function closeOverlay(){
    document.getElementById('overlay').style.display='none';
    document.getElementById('inputBox').style.display='none';
}
function addNoteF(){
    let ndata = { "Title" : noteTitle.value,"Note" : note.value};
    let noteData = JSON.stringify(ndata);
    console.log(noteData);
}
function removeNoteF(){
    noteTitle.value = "";
    note.value = "";
}
