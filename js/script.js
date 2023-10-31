window.onload=function(){
    
    let currentIndex=0;
    const scene= document.querySelectorAll('.scenenum');
    scene.forEach(img=>img.style.opacity="0")
    scene[0].style.opacity='1';

    var nextButton =document.querySelector(".start")
    var sceneNum2 =document.getElementById('secend');
    console.log(nextButton)
    
    nextButton.addEventListener("click",function(){

        console.log('hi')
        scene[0].style.opacity='1'
        scene[1].style.opacity='0'
        scene.forEach(img=>img.style.transition="all 1s");

        const $text = document.querySelector(".typing .text");

        

    })

    const myButton = document.getElementById("myButton");
    console.log(myButton)
    myButton.addEventListener("click", function () {
        // 버튼 클릭 시 실행할 코드를 이곳에 작성
        // alert("버튼이 클릭되었습니다.");
        console.log('hi')
        scene[0].style.opacity='0'
        scene[1].style.opacity='1'
       

    });


    //버튼
  const nextBtn =document.getElementById("nextbtn")
  console.log(nextBtn)
  var count=0;
  nextBtn.addEventListener("click",goTopage)
  function goTopage(){
    currentIndex++;
    if(currentIndex ==1){
      scene[0].style.opacity="0"
      scene[1].style.opacity="1"
      scene.forEach(img=>img.style.transition="all 3s");
      
      const $text = document.querySelector(".typing .text");

      // 글자 모음
      const letters = [
        "저어 구석에서 당신에게 시선을 고정하고 있습니다.무릎을 당겨 팔로 감싸 안은 채네요.\n 영악하기 짝이 없는 눈빛입니다. \n 흉흉한 홍채는 어둠 속에 매몰되어 있음에도 \n 고집스럽게 느껴집니다.,\n 눈을 마주쳤음에도 시선을 피하지 않습니다."
        
      ];           
      
      // 글자 입력 속도
      const speed = 100;  
      let i = 0;
      
      const changeLineBreak = (letter) => {
          return letter.map(text => text === "\n" ? "<br>" : text);
        }
        
      // 타이핑 효과
      const typing = async () => {  
          // 기존코드에서 개행치환코드 추가
          const letter = changeLineBreak(letters[i].split(""));
          
          while (letter.length) {
          await wait(speed);
          $text.innerHTML += letter.shift(); 
          }
          
          // 잠시 대기
          await wait(800);
          
          //지우는 효과
         remove();
      }
      
      //글자 지우는 효과
      const remove = async () => {
        const letter = letters[i].split("");
        
        while (letter.length) {
          await wait(speed);
          
          letter.pop();
          $text.innerHTML = letter.join(""); 
        }
        
        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i+1] ? 0 : i + 1;
        typing();
      }
      
      //딜레이 기능 ( 마이크로초 )
      function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
      }
      
      // 초기 실행
      setTimeout(typing, 1500);

    }else if(currentIndex ==2){
      scene[0].style.opacity="0"
      scene[1].style.opacity="0"
      scene[2].style.opacity="1"
      scene.forEach(img=>img.style.transition="all 3s");
      const $text = document.querySelector(".dialog .talk");
      const letters = [
        "당신, 술탄의 아들이죠."
      ];
      const speed = 100;  
      let i = 0;
      const changeLineBreak = (letter) => {
        return letter.map(text => text === "\n" ? "<br>" : text);
      }
      
     // 타이핑 효과
       const typing = async () => {  
        // 기존코드에서 개행치환코드 추가
        const letter = changeLineBreak(letters[i].split(""));
        
        while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
        }
        
        // 잠시 대기
        await wait(800);
        
        
      }
    
      function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
      }
      
      // 초기 실행
      setTimeout(typing, 1500);
      
    }else if(currentIndex ==3){
      const dialog =document.querySelectorAll(".contentsbox")
      dialog[0].style.opacity="0"
      dialog[1].style.opacity="1"
      dialog.forEach(img=>img.style.transition="all 1s")
      const $text = document.querySelector(".dialog .talk");
      const letters = [
        "당신, 술탄의 아들이죠."
      ];
      const speed = 100;  
      let i = 0;
      const changeLineBreak = (letter) => {
        return letter.map(text => text === "\n" ? "<br>" : text);
      }
      
     // 타이핑 효과
       const typing = async () => {  
        // 기존코드에서 개행치환코드 추가
        const letter = changeLineBreak(letters[i].split(""));
        
        while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
        }
        
        // 잠시 대기
        await wait(800);
        
        
      }
    
      function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
      }
      
      // 초기 실행
      setTimeout(typing, 1500);

    }
  }


  
}

