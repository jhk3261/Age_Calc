//변수 설정
let birthday = document.getElementById("birthday");
let birthResult = document.getElementById("result");
let birthSubmit = document.getElementById("submit");

//오늘시간
const today = new Date();
console.log(today);

//계산함수설정
function calculateAge() {
    let birthDate = new Date(birthday.value);

    let age;

    if (today.getMonth() > birthDate.getMonth() || 
        (today.getMonth()== birthDate.getMonth() && 
            today.getDate() >= birthDate.getDate()
        )
    ) {
        age = today.getFullYear() - birthDate.getFullYear(); 
    } else {
        age = today.getFullYear() - birthDate.getFullYear() -1;
    }
    //만나이 나타내기
    birthResult.innerText = `귀하의 만 나이는 ${age}세 입니다.`

    //js에서 csxs 꾸미기
    birthResult.style.marginTop='0.25rem';
    birthResult.style.padding='0.5rem 0.875rem';

    return age;
}

//이벤트리스너 적용
birthSubmit.addEventListener('click', calculateAge);


//버튼js
//버튼변수설정
const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', (e)=> {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let circles = document.createElement('span');

    circles.style.left = x + 'px';
    circles.style.top = y + 'px';
    btn.appendChild(circles);
    
    setTimeout(()=> {
        circles.remove()
    },1200)
    //수정
})