// 헤더 공지사항 부분
const notice = document.getElementById('noticeTitle');
const noticeDate = document.getElementById('noticeDate');
const noticeUp = document.getElementById('noticeUpButton');
const noticeDown = document.getElementById('noticeDownButton');

noticeUp.addEventListener('click', ()=>{
  notice.innerText = '디지털 실감 영상관 2관 임시 휴관 안내(21.12.1~12)';
  noticeDate.innerText = '2021. 11. 17';
});
noticeDown.addEventListener('click', ()=>{
  notice.innerText = '국립박물관 전시 안내 애플리케이션 이용자 설문조사';
  noticeDate.innerText = '2021. 11. 08';
});


// 메인 비주얼 부분

  // init
  const itemOne = document.querySelector('#visualItem-1');
  const itemTwo = document.querySelector('#visualItem-2');
  const itemThree = document.querySelector('#visualItem-3');

  console.log(itemOne);

  itemOne.animate(
    [
    { 
      opacity : '1'
    },
    {
      opacity : '0',
      transform : 'scale(0.95)'
    },
    { 
      opacity : '1'
    }
  
    ],
    { 
      duration: 10000,
      iterations : Infinity
    });


  itemThree.animate(
        [
        { 
          opacity : '0',
        transform : 'scale(0.95)'
        },
        {
          opacity : '1',
      transform : 'scale(1)'

        },
        {
          opacity : '0',
          transform : 'scale(0.95)'
        }
        
        ],
        {
          delay: 10000,
          duration: 10000,
          iterations : Infinity
        });
    
// 현재 전시 부분 슬라이드

const time = 2000;
const itemsLength = 3;

setTimeout(runSlide, time)


const slider = document.querySelector('#bannerSliderWraper');
const debug = document.querySelector('#debug')

let moveX = 0;

function runSlide() {
  moveX += slider.offsetWidth;
  let maxMoveX = slider.offsetWidth * itemsLength;
  
  if (maxMoveX === moveX) {
    moveX = 0;
  }
  
  slider.scrollTo(moveX, 0)
  
  setTimeout(runSlide, time)

// 대표 전시품 슬라이드


// 교육 부분.. 넘기기
const eduPicOne = document.querySelector('#eduPicture');
const eduTitleOne = document.querySelector('#eduTitle-1');
const eduDateOne = document.querySelector('#eduDate-1');
const eduBoTextOne = document.querySelector('#eduBottomText-1');
const eduNextButton = document.getElementById("eduNextButton");

const edusliderCon = document.querySelector('#eduSlider');

    eduNextButton.addEventListener('click', function(event) {
      if(eduBoTextOne.nextElementSibling.style.display === 'none'){
        
        eduPicOne.style.display = 'none';
        eduPicOne.nextElementSibling.style.display = 'block';

        eduTitleOne.style.display = 'none';
        eduTitleOne.nextElementSibling.style.display = 'block';

        eduDateOne.style.display = 'none';
        eduDateOne.nextElementSibling.style.display = 'block';

        eduBoTextOne.style.display = 'none';
        eduBoTextOne.nextElementSibling.style.display = 'block';

       

      }else{
        eduPicOne.style.display = 'block';
        eduPicOne.nextElementSibling.style.display = 'none';
        eduTitleOne.style.display = 'block';
        eduTitleOne.nextElementSibling.style.display = 'none';
        eduDateOne.style.display = 'block';
        eduDateOne.nextElementSibling.style.display = 'none';
        eduBoTextOne.style.display = 'block';
        eduBoTextOne.nextElementSibling.style.display = 'none';
      }
      
    });


// 박물관 콘텐츠 부분

const plusConOne = document.querySelector('#plusCon-1');
const plusConTwo = document.querySelector('#plusCon-2');
const plusConThree = document.querySelector('#plusCon-3');
const plusConOneBg = document.querySelector('#plusConBg-1');
const plusConTwoBg = document.querySelector('#plusConBg-2');
const plusConThreeBg = document.querySelector('#plusConBg-3');

plusConOne.addEventListener('mouseover', ()=>{
  plusConOneBg.style.opacity = '0.7';
});
plusConOne.addEventListener('mouseout', ()=>{
  plusConOneBg.style.opacity = '0';
});

plusConTwo.addEventListener('mouseover', ()=>{
  plusConTwoBg.style.opacity = '0.7';
});
plusConTwo.addEventListener('mouseout', ()=>{
  plusConTwoBg.style.opacity = '0';
});

plusConThree.addEventListener('mouseover', ()=>{
  plusConThreeBg.style.opacity = '0.7';
});
plusConThree.addEventListener('mouseout', ()=>{
  plusConThreeBg.style.opacity = '0';
});