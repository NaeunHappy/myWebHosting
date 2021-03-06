
window.onload = () => {
    let name = document.querySelector("#name")
    let age = document.querySelector("#age")
    let num = document.querySelector("#num")

    let create = document.querySelector("#create")
    let read = document.querySelector("#read")
    let update = document.querySelector("#update")
    let my_delete = document.querySelector("#delete") 
    // delete라는 키워드가 이미 쓰이고 있어서 my_delete로 바꿔줌

    //let o = {a:1,b:2}
    //delete o.b //특정 객체, 객체의 속성 삭제시 쓰임
    //console.log(o)

    let consolelog = document.querySelector("#consolelog")
    let students = []

    // 학생 추가
    create.onclick = function() {
        
        //공백 예외 처리
        if(name.value == '' || num.value =='' || age.value=='')
        {
            alert('공백')
            return
        }
       
        
        // 중복된 학생들 추가하지 않는 2가지 방법
        // 1번째 방법
        // for(let i = 0; i<students.length; i++)
        // {
        //     if(students[i].number == num.value)
        //     {
        //         console.log("중복 학생 존재!")
        //         return
        //     }
        // }

        // 2번째 방법
        // if(students.indexOf())

        // findIndex : 매개변수로 함수를 받는다.
        // 괄호안에 조건에 해당하는 객체가 배열 안에 있으면 그것의 index를 반환, 없으면 -1 반환
        // a : a대신 아무거나 써도 된다. students 배열에 있는 객체들(구성요소들)
        // a.number == num.value 인 것에 해당하는 인덱스를 반환해주는 함수
        // 참고로 indexOf 라는 것도 있다. 어제 했던 로또에선 indexOf만 써도 충분함.

        // 이 2개는 똑같은 코드임
        console.log(students.findIndex( a => a.number == num.value)) // a => a.number == num.value: 콜백함수 라고 부름
        console.log(students.findIndex(function(a) { return a.number==num.value})  )  // a:매개변수. a대신 b나 x 넣어도 상관없음
        
        if(students.findIndex( a => a.number == num.value) != -1)
        {
            console.log("중복학생이 나타났다!!!")
            return
        }
        // else 를 쓰던 return을 쓰던 상관없음

        // if(students.length>0 && students.findIndex( a => a.number == num.value) == -1)
        // {
        //     console.log("중복학생이 나타났다!!!")
        //     return
        // }


            students.push(new Student(name.value,age.value,num.value))

    }
    // 학생 조회
    read.onclick = function() {
        for(let item of students) // for of 구문 : students에 있는 값들에 하나하나 접근하는 것(C#의 foreach구문, java의 for(int item : arr) 과 같음)
        {
            if(item.number == num.value){
                console.log(`${item.number}번 학생은 ${item.name}이며 ${item.age}살 입니다.`)
                break
            }
        } 
    }
    // 학생 수정
    update.onclick = function() {
        //for문을 통해서 하나하나 찾기
        //findIndex로 위치 찾아서 수정하기
        for(let item of students)
        {
            //만약 번호가 1번인 학생을 찾았다면
            if(num.value == item.number)
            {
                //item값을 바꾸면 students의 해당 객체의 값이 바뀜
                item.name = name.value // 그 학생의 이름과 나이를 바꾼다.
                item.age = age.value
            }
        }
    }
    // 학생 삭제
    my_delete.onclick = function() {
        //for문 or findIndex를 쓰면 됨

        let idx = students.findIndex(a=> a.number == num.value)
        if(idx!=-1){
            students.splice(idx,1) // idx번째꺼 하나를 뺀다.
        }
    }
    // 전체 조회
    consolelog.onclick = function() {
        console.log(students)
    }

    document.querySelector("#test").onclick = () => {
        let a = new Student('오은영',30,1) // Student타입의 객체
        let b = Student3('권지용',35,2) // Student타입의 객체
        let c = Student2('데드풀',40,3) // 그냥 객체(console.log 결과 확인해보기)
        a.registerInfo()
        b.registerInfo()
        c.registerInfo()
        console.log(a)
        console.log(b)
        console.log(c)
    }


}