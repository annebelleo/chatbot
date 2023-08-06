const textInElem = document.getElementById("input")
const textBoxElem = document.getElementById("textBox")
const username = "Annebelle"

var quotes = ["Dance like nobody is watching.", "It's not the number of breaths we take, but the number of moments that take our breath away.", "Live, laugh, love.", "You have to look through the rain to see the rainbow."]

function process() {
  if (response(textInElem.value) === undefined) {
    textBoxElem.innerHTML += "<div align='right'>" + "<div class='messageBubble'>" +
    textInElem.value + "</div></div><div id='delivered'>Delivered</div><br>"
  }
  else {
    textBoxElem.innerHTML += "<div align='right'>" + "<div class='messageBubble'>" +
    textInElem.value
    textBoxElem.innerHTML += "<div class='messageBubble'>" + response(textInElem.value) + "</div>"
  }
  textInElem.value = ""
}

function response(stringIn) {
  if (stringIn == "hello") {
    return "heyyyyyyyyyy"
  }
  if (stringIn == "Give me an image.") {
    return "<img src='https://cdn.vox-cdn.com/thumbor/Xr40PY4bE2nNxgbFDoym8La1byw=/0x0:660x495/1200x0/filters:focal(0x0:660x495):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7409625/arms15.jpg'>"
  }
  if (stringIn == "goats pls") {
    return "<img src='https://media.tenor.com/images/0e497000899b5d76fa35c56ef22ac77c/tenor.gif'>"
  }
  if (stringIn == "Give me a quote.") {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }
  if (stringIn == "Play some music!") {
    return "<audio src=''>"
  }
}

textInElem.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    process();
  }
})

/*
comment
 */

//also a comment