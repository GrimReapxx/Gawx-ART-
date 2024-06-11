let artViewer = document.getElementById('art-collection-viewer');
let button = document.getElementById('change-image-button');
   
   let imageURLs = ['file:///C:/Users/deric/Desktop/IMP/asset/image0.jpeg', 'file:///C:/Users/deric/Desktop/IMP/asset/image2.jpeg', 'file:///C:/Users/deric/Desktop/IMP/asset/image3.jpeg'];
   let currentIndex = 0;

   button.addEventListener('click', function() {
      currentIndex =(currentIndex + 1) %
      imageURLs.length;
      artViewer.style.backgroundImage=`url( ${imageURLs[currentIndex]})`;
   });