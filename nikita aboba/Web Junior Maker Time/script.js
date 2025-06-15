let notes = []
$(".pd").on("click", () => {
  let text = $(".Mtext").val()
  let title = $(".title").val()

  if(text == '' || title == ''){
    alertify.error("Ці поле обов'язкове")
  }else{
  notes.push({
    title,
    text,
    date: new Date()
  })
  drawNotes()
}
})

function drawNotes() {
  $(".title").val('')
  $(".Mtext").val('')
  $(".notes").empty();
  notes.forEach(note => {
    $(".notes").append(`
      <div class="noteDiv">
        <div class="textDiv">
    ${note.title}
        </div>

        <div class="MTDiv">
    ${note.text}
        </div>

        <div class="dataDiv">
    ${note.date.toLocaleDateString()} ${note.date.toLocaleTimeString()}   

        </div>
      </div>`)

  })

}


new Date()