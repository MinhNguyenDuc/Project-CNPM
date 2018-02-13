var inputSearch = document.getElementById("keyword");
var videoFrame = document.getElementById("video-frame")
$(document).ready(function () {
  var videoId = localStorage.getItem("VideoId");
  showVideo(videoId);
  inputSearch.onkeydown = function (event) {
    if (event.keyCode == 13) {
      localStorage.setItem("Keyword", inputSearch.value);
      window.location.href = "searchresult.html";
    }
  }
  document.getElementById("search-button").onclick = function () {
    localStorage.setItem("Keyword", inputSearch.value);
    window.location.href = "searchresult.html";
  }
});

function showVideo(videoId){
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
}
