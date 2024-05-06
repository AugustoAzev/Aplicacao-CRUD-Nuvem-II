document.addEventListener("DOMContentLoaded", function() {
    const imageList = document.querySelector(".image-list");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    let scrollingRight = true;
    let scrollInterval;
  
    function scrollImages() {
      if (scrollingRight) {
        imageList.scrollLeft += 1;
        if (imageList.scrollLeft >= maxScrollLeft) {
          scrollingRight = false;
        }
      } else {
        imageList.scrollLeft -= 1;
        if (imageList.scrollLeft <= 0) {
          scrollingRight = true;
        }
      }
    }
  
    function startAutoScroll() {
      scrollInterval = setInterval(scrollImages, 2);
    }
  
    startAutoScroll();
  });
  