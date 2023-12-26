'use strict';

// 変数
// hero
const hero = document.querySelector('#hero');
const wrapper = document.querySelector('#wrapper');
const hamburger = document.querySelector('.hamburger-btn');
const video1 = document.querySelector('#video01');

// mainleft
const leftBg = document.querySelector('#fixed-area');
const mainImgBox = document.querySelector('.main_imgBox');
const moon = document.querySelector('.moon');
const lambs = document.querySelectorAll('.lamb');


// position: sticky;に対応してないブラウザ用
// $(window).on('load resize', function() {
//     var windowWidth = window.innerWidth;
//     var elements = $('#fixed-area');
//     if (windowWidth >= 768) {
//     Stickyfill.add(elements);
//     }else{
//     Stickyfill.remove(elements);
//     } 
//     });


// ハンバーガーメニュー
$('.hamburger-btn').on('click', function() {
    $('body').toggleClass('open close');
});

// オーバーレイがクリックされた時の処理
$('.overlay').on('click', function() {
  $('body').removeClass('open close');
});




//左固定エリア
const leftBgKeyfrmes = {
    opacity: [0.9, 1],
}
const leftBgOptions = {
    duration: 3000,
    fill: 'forwards',
    easing: 'ease',
}

// コールバック関数
const doWhenIntersect = ((entries) => {
    // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        leftBg.style.backgroundImage =`url(img/${entry.target.id}.png)`;
        leftBg.animate(leftBgKeyfrmes,leftBgOptions);
        if(entry.target.id !== 'skill') {
            mainImgBox.classList.add('rotate');
            moon.src = 'img/moon01.png';
            moon.style.width = '50%'
            lambs.forEach((lamb) => {
                lamb.style.top = '60%'
            });
        }
      }
    });
  });

// 監視対象
const sections = document.querySelectorAll('.sec');

// 監視ロボットを設置
const obsoptions = {
    rootMargin: '0px 0px',
    threshold: 0.5,
  };

const observer = new IntersectionObserver(doWhenIntersect,obsoptions);

// それぞれのsecを監視する
sections.forEach((sec) => {
    observer.observe(sec);
  });




  //アコーディオンをクリックした時の動作
$('.hobby-img').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next('.hobby-box');//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
    $(this).children('.accordion-button').removeClass('close');
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
    $(this).children('.accordion-button').addClass('close');
	}
});


// skillアイコンをクリックしたら画像を変える
const skillImages = document.querySelectorAll('.skill-img img');
const moonLittle =document.querySelector('.moon-little');


for(let i = 0; i < skillImages.length; i++) {
    skillImages[i].addEventListener('mouseover', (e) => {
      if(window.innerWidth > 768){
        mainImgBox.classList.remove('rotate');
        moon.src = `img/${e.target.alt}.png`;
        moon.style.width = '65%';
        lambs.forEach((lamb) => {
            lamb.style.top = '66%'
        });
      } else {
        moonLittle.src =`img/${e.target.alt}.png`;
      }
    })
}


// works moreボタン
function more_btn()
{
  let first = 4;
  let add = 2;
  let none = 'none';
  let target = '.works-box';
  let targets = document.querySelectorAll(target);
  let add_btn = document.querySelector('#works-more');

  if (add_btn) {
    document.addEventListener('DOMContentLoaded', () => {
      let targets_length = targets.length;
      //*** none after the first ***
      if (targets_length > first) {
        for (let i = first; i < targets_length; i++) {
          targets[i].classList.add(none);
        }
      }
      //*** none add btn: if no target
      else {
        add_btn.style.display = 'none';
      }
    });

    //****** click add btn ******
    add_btn.addEventListener('click', () => {
      let nones = document.querySelectorAll(target + "." + none);
      //*** remaining none elm < add ***
      if (nones.length < add) {
        add = nones.length;
      }
      //*** show the none elm  ***
      for (let i = 0; i < add; i++) {
        nones[i].classList.remove(none);
      }
      //*** get remaining none elm ***
      if (document.querySelectorAll(target + "." + none).length === 0) {
        add_btn.style.display = 'none';
      }
    });
  }
}

// 呼び出し
more_btn();

// Pagetopボタン

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
