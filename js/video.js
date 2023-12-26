'use strict';

// 変数
const videos = document.querySelectorAll(".video");

// pcとspの動画切り替え
document.addEventListener("DOMContentLoaded", function () {
  
    function updateVideoSources(video, baseSrc) {
      const isMobile = window.innerWidth <= 1024;
      const suffix = isMobile ? "_sp" : "_pc";
      const sourceMP4 = createSourceElement(baseSrc + suffix + ".mp4", "video/mp4");
      const sourceWebM = createSourceElement(baseSrc + suffix + ".webm", "video/webm");
  
      video.innerHTML = "";
      video.appendChild(sourceMP4);
      video.appendChild(sourceWebM);
    }
  
    function createSourceElement(src, type) {
      const source = document.createElement("source");
      source.setAttribute("src", src);
      source.setAttribute("type", type);
      return source;
    }
  
    videos.forEach((video) => {
      const baseSrc = video.getAttribute("data-src");
      updateVideoSources(video, baseSrc);
    });
  
    // // ウィンドウの横幅が変更されたときにのみビデオソースを更新
    // window.addEventListener("resize", function () {
    //   // const newSize = window.innerWidth;
    //   // if (currentSize !== newSize) {
    //   //   currentSize = newSize;
    //     videos.forEach((video) => {
    //       const baseSrc = video.getAttribute("data-src");
    //       updateVideoSources(video, baseSrc);
    //     });
    //   // }
    // });
  });

  // 動画の読み込みが完了したら
const viewHeight = document.documentElement.clientHeight;

videos.forEach((video) => {
    video.addEventListener('progress', () =>{
        if(window.scrollY < viewHeight) {
            hero.classList.remove('none');
            document.body.classList.add('hidden');
            hamburger.classList.add('n-visible');
        }
    });
});
  
  // 動画終了後ににheroを消す
  
  video1.addEventListener('ended', () =>{
      hero.animate({
          opacity: [1, 0],
      },{
          duration: 1000,
          easing: 'ease',
          fill: 'forwards',
      });
      wrapper.animate({
          opacity: [0, 1],
          },{
          duration: 1500,
          delay: 1000,
          fill: 'forwards',
          });
      setTimeout(() => {
          hero.classList.add('none');
          hamburger.classList.remove('n-visible');
          document.body.classList.remove('hidden');
      }, 1000);
  });
  

    window.onload = function(){
      let perfEntries = performance.getEntriesByType("navigation");
      perfEntries.forEach(function(pe){
        switch( pe.type ){
          case 'navigate':
            console.log('通常のアクセス');
            break;
          case 'reload':
            hero.classList.add('none');
            document.body.classList.remove('hidden');
            hamburger.classList.remove('n-visible');
            console.log('更新によるアクセス');
            break;
          case 'back_forward':
            hero.classList.add('none');
            document.body.classList.remove('hidden');
            hamburger.classList.remove('n-visible');
            console.log('戻るによるアクセス');
            break;
          case 'prerender':
            console.log('レンダリング前');
            break;
        }
      });
    };

const change = document.querySelector('.change');

window.addEventListener('DOMContentLoaded', () => {
  if(window.innerWidth <= 768) {
    change.textContent = 'タップ';
  }
});