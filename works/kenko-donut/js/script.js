'use strict';

//hero_slider
$('.hero_slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.hero_slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.hero_slider').slick('slickPlay');
});


// inst_slider
$('.inst_slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 6900,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 4.5,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
        breakpoint: 769,//モニターの横幅が769px以下の見せ方
        settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
        }
    },
    {
        breakpoint: 426,//モニターの横幅が426px以下の見せ方
        settings: {
            slidesToShow: 1.5,//スライドを画面に1.5枚見せる
        }
    }
]
});


//shop_slider

$('.shop_slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 4000,//次のスライドに切り替わる待ち時間
    speed:1500,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.shop_slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.shop_slider').slick('slickPlay');
});




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





/*// 1.監視ロボにやってほしいこと
const showscloll = (entries) => {
    // console.log(entries[0].target);
    const scrollkeyframes = {
        opacity: [0, 1],
        translate: ['0 200px', 0],
    };

    const scrolloptions = {
        duration: 800,
        delay: 300,
        fill: 'forwards',
    }
    // アニメーション設定
    entries[0].target.animate(scrollkeyframes, scrolloptions);
};


// 2.監視ロボットの作成 3.内容を教える
const scrollObserver = new IntersectionObserver(showscloll);

// 4.監視対象を教えて実行
const scrolllists = document.querySelectorAll('.scrollEv');

for(let i = 0; i < scrolllists.length; i++){
    scrollObserver.observe(scrolllists[i]);
};*/

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.scrollEv').each(function(){ //fadeInUpTriggerというクラス名が
    　　var elemPos = $(this).offset().top-10; //要素より、50px上の
    　　var scroll = $(window).scrollTop();
    　　var windowHeight = $(window).height();
    　　if (scroll >= elemPos - windowHeight){
    　　$(this).addClass('fadeUp');
    　　// 画面内に入ったらfadeInというクラス名を追記
    　　}else{
    　　　$(this).removeClass('fadeUp');
    　　// 画面外に出たらfadeInというクラス名を外す
    　　}
    　　});
    }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
    
    // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述
    
    // 画面が読み込まれたらすぐに動かしたい場合の記述
      $(window).on('load', function(){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



// ハンバーガーメニュー
const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
});