document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.getElementsByClassName('tab');
        for(let i = 0; i < tabs.length; i++) {
          tabs[i].addEventListener('click', tabSwitch, false);
        }
        function tabSwitch(){
          document.getElementsByClassName('muho')[0].classList.remove('muho');
          this.classList.add('muho');
          document.getElementsByClassName('naranaiyo')[0].classList.remove('naranaiyo');
          document.getElementsByClassName('biyon')[0].classList.remove('biyon');
          document.getElementsByClassName('itt')[0].classList.remove('itt');
          const arrayTabs = Array.prototype.slice.call(tabs);
          const index = arrayTabs.indexOf(this);
          document.getElementsByClassName('panel')[index].classList.add('naranaiyo');
          document.getElementsByClassName('panelFA')[index].classList.add('biyon');
          document.getElementsByClassName('panel_content')[index].classList.add('itt');
        };
var scroll = document.getElementById('scroll');

// get the element position
var position = scroll.getBoundingClientRect();

const minimumDistance = 1
let startX = 0
let startY = 0
let endX = 0
let endY = 0
window.addEventListener('touchstart', (e) =>  {
  startX = e.touches[0].pageX
  startY = e.touches[0].pageY
  console.log('starty: ' + startY)
})
window.addEventListener('touchend', (e) =>  {
  endX = e.changedTouches[0].pageX
  endY = e.changedTouches[0].pageY
  console.log('endy: ' + endY)
})
window.addEventListener('touchend', (e) =>  {
  const distanceX = Math.abs(endX - startX)
  const distanceY = Math.abs(endX - startY)
  if (distanceX > distanceY && distanceX > minimumDistance) {
    console.log('左右スワイプ')
  }
  if ( distanceY > minimumDistance) {
    console.log('上下スワイプ')
    if (endY < startY) {
      console.log(position)
      scrollTo(0, position.top)
    }
  }

})


// 1. 指定した座標まで自動で Scrollする関数
function ScrollWindow(elem) {

  // document.getElementById() => idで要素を取得
  const element = document.getElementById(elem);
  console.log({element});

  // getBoundingClientRect() => 指定要素の座標情報を取得
  const rect = element.getBoundingClientRect();
  console.log({rect});

  // 指定要素の頂点-座標をSetする
  const elemtop = rect.top;
  console.log({elemtop});

  // scrollTo() => 絶対位置を指定して、スクロールする
  scrollTo(0, elemtop);

  // [ Point ]
  // scrollTo()は、第一引数に x座標, 第二引数に y座標のスクロール量(px単位)を指定します。
}
      }, false);