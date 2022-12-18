const sendAsnwer = document.querySelector('button')

const question = 

document.getElementById('question')

const tips = document.getElementById('tips')

const btns = document.querySelectorAll('.btns button')

const checkRepons = document.querySelector('.input_container span')

  let score = 0

  let minutes = 15

  let secondes = 59

  let index = 0

  

  let timer = document.getElementById('timer')

  let score_  = document.getElementById('score')

  

  

const gameBoard = [

  {

    question : 'witch country hosted the 1982 world cup of soccer ?', 

    reponse : 'spain'

  },{

    question : "Russia :- what does Bolshio mean ? ", 

    reponse : 'big'

  }, 

  {

  question : 'in what country is the source of blue mile ?', 

    reponse :'ethiopia'

  }, 

  {

    question : 'what is the second largest country in the world', 

    reponse : 'canada'

  }, 

  {

    question:'what is the capital of japan', 

    reponse : 'tokyo'

  }, 

  {

    question:'the sun sets in the', 

    reponse:'west'

  }, 

  {

    question:'what is the biggest mountain in the world before the discovery of everest', 

    reponse:'mount everest'

  }, 

  {

    question : 'which is the largest ocean', 

    reponse : 'the pacifique ocean'

  }, 

    {

      question: 'arc, radius & sector are parts of a(n)',

      reponse: 'circle'

    }, 

      {

        question: 'how many corners are there in a cube',

        reponse: 'eigth'

      }, 

        {

          question: 'a triangle with two equal sides is called',

          reponse: 'isosceles'

        }

  ]

  

  

  

  

   sendAsnwer.classList.add('disabled')

  function checkReponsFun()

  {

    const input  = document.querySelector('input')

    if (index < gameBoard.length - 1) 

    {

     let str = gameBoard[index].reponse

     

     

      // check if the input value == to str 

      

  if (str == input.value.trim().toLowerCase()) {

    index++

    score++

    input.value = ''

  score_.innerHTML = `${score}/${gameBoard.length}`

   question.innerHTML = `${gameBoard[index].question} ?`

     tips.innerHTML =  gameBoard[index].reponse.split('').reverse().join('-', '  ')

    input.classList.add('valid')

     input.classList.add('invalid')

     checkRepons.classList.add('correct')

    checkRepons.innerHTML = 'Correct'

    checkRepons.classList.remove('incorrect')

      } 

      

      else {

     

            if (score <= 0) {

        sendAsnwer.classList.add('disabled')

        minutes = ''

        secondes = ''

        checkRepons.classList.remove('correct')

       checkRepons.classList.add('incorrect')

       checkRepons.innerHTML = 'You run out of points, try again'

       input.classList.add('invalid')

       input.classList.remove('valid')

          } else {

            score--

          }

       

      input.value = ''

    score_.innerHTML = `${score}/${gameBoard.length}`

       checkRepons.classList.remove('correct')

        checkRepons.classList.add('incorrect')

        checkRepons.innerHTML = 'Incorrect'

        input.classList.add('invalid')

         input.classList.remove('valid')

      }

      

      //////////!!!!!!! ///////////

      

      

      }else {

   //  index = 0

      let str = gameBoard[index].reponse

      question.innerHTML = `${gameBoard[index].question} ?`

    tips.innerHTML =  gameBoard[index].reponse.split('').reverse().join('-', '  ')

    

     

     /////!!!! - ----(/_//!!! )//!!!!!!!! ////

     

      if (input.value.trim().toLowerCase()== str) {

        score += 1

       input.value = ''

      score_.innerHTML = `${score}/${gameBoard.length}`

        question.innerHTML = `${gameBoard[index].question} ?`

     tips.innerHTML =  gameBoard[index].reponse.split('').reverse().join('-','  ')

    

        checkRepons.classList.add('correct')

        checkRepons.innerHTML = 'Correct'

     checkRepons.classList.remove('incorrect')

  if(checkRepons.classList.contains('correct'))

       {

      sendAsnwer.classList.add('disabled')

    checkRepons.classList.add('correct')

    checkRepons.innerHTML = 'You have reached the end'

    checkRepons.classList.remove('incorrect')

    btns[1].classList.add('enable')

    

        }

        

        

      } else {

        if (score <= 0) {

       sendAsnwer.classList.add('disabled')

       checkRepons.classList.remove('correct')

       checkRepons.classList.add('incorrect')

       checkRepons.innerHTML = 'You run out of points, try again'

       input.classList.add('invalid')

       input.classList.remove('valid')

        minutes = ''

        secondes = ''

         } else {

           score--

         }

       input.value = ''

        score_.innerHTML = `${score}/${gameBoard.length}`

       checkRepons.classList.remove('correct')

        checkRepons.classList.add('incorrect')

        checkRepons.innerHTML = 'Incorrect'

      }

      

    

      

    }

    

    

    

  };

  

  window.onload = () => {

    score_.innerHTML = `${score}/${gameBoard.length}`

  question.innerHTML = `${gameBoard[index].question} ?`

   tips.innerHTML =  gameBoard[index].reponse.split('').reverse().join('-', '  ')

   

   timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2,'0')}`

  

  }

  

  sendAsnwer.onclick = checkReponsFun

 

  

  btns[0].addEventListener('click',function(){

  

  btns[0].classList.add('disabled')

   sendAsnwer.classList.remove('disabled')

   

let myInterval = setInterval(()=>{

    secondes--

    

    if (secondes == 0) {

      minutes--

      secondes = 59

    }

    

    if (minutes <= 0 || secondes <= 0) {

     sendAsnwer.classList.add('disabled')

      clearInterval(myInterval)

          minutes = 00

          secondes = 00

    btns[1].classList.add('enable')

   checkRepons.classList.remove('correct')

   checkRepons.classList.add('incorrect')

   checkRepons.innerHTML = 'Time is over try again'

    }

    

    

  timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2,'0')}`

  },100)

  

  })

  

  

  

  btns[1].addEventListener('click',()=>{

    window.location.reload(true)

  })

  

  

