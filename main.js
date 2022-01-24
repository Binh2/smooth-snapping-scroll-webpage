function loadingDone() {
  loading = document.querySelector(".loading");
  loading.className += " js-loading--done";
  loading.addEventListener("animationend", function() {
    loading.style.display = 'none';
  });
}

window.addEventListener('load', loadingDone);
