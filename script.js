// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// let a = new Date()
// let y = a.getFullYear();
// let mm = a.getMonth() + 1;
// let dd = a.getDate();
// let d = a.getDay();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// console.log(d, mm, y)


// function myClock() {

//   const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


//   let a = new Date()
//   let y = a.getFullYear();
//   let mm = a.getMonth() + 1;
//   let dd = a.getDate();
//   let d = a.getDay();
//   let h = a.getHours();
//   let m = a.getMinutes();
//   let s = a.getSeconds();
//   let day = 'AM';
//   if(h>12){
//     day = 'PM';
//     h = h-12;
//   }
//   if(h==0){
//     h=12;
//   }
//   if(h<10){
//     h='0'+h;
//   }
//   if(m<10){
//     m= '0'+m
//   }
//   if(s<10){
//     s='0'+s
//   }

//   let 

//   // let current_date = weekday[a.getDay()] + ', ' + a.getDate() + ' ' + monthNames[a.getMonth()] + ' ' + a.getFullYear();
//   // document.getElementById('date').innerHTML = current_date;

//   // let timer = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
//   // document.getElementById('time').innerHTML = timer;

//   // let current_date = document.getElementById('date');
//   // let timer = document.getElementById('time')

//   // current_date.innerHtml = `${weekday[d]},${y}:${monthNames[mm]}:${dd}`

//   setTimeout(myClock, 1000)
// }
// myClock();


setInterval(function(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const clock = document.querySelector('.time');
  const tarik = document.querySelector('.date');
  let a = new Date()
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  
  let y = a.getFullYear();
  let mm = a.getMonth();
  let dd = a.getDate();
  let d = a.getDay();
  let day = 'AM';
  
   if(h>12){
      day = 'PM';
      h = h-12;
    }
    if(h==0){
      h=12;
    }
    if(h<10){
      h='0'+h;
    }
    if(m<10){
      m= '0'+m
    }
    if(s<10){
      s='0'+s
    }
  
  clock.textContent = h+':'+m+':'+s+' '+day;
  tarik.textContent = weekday[d]+', '+dd+' '+monthNames[mm] +' ' +y;
  })