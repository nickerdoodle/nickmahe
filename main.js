function init() {
    TweenMax.to('.header-anim', 1, {opacity:"1", left:"0"});
    TweenMax.to('.text-anim', 1, {scaleY:"1", delay:".6"} );
    TweenMax.to('.btn1', 1.5, {opacity:"1", top:"0",delay:"1.1"});
    TweenMax.to('.btn2', 1.5, {opacity:"1", top:"0",delay:"1.4"});
    TweenMax.to('.btn3', 1.5, {opacity:"1", top:"0",delay:"1.7"});
    TweenMax.to('.content-container', 1.5, {top:"0",delay:"1.6"});
}

document.addEventListener('onload', init() );

document.querySelector('.hero').addEventListener('mouseover', function(){
    TweenMax.to('.thought', .6, {opacity:"1", top:"50", left:"-90"});
})
document.querySelector('.hero').addEventListener('mouseout', function(){
    TweenMax.to('.thought', 1, {opacity:"0", top:"100", left:"0"});
})
document.querySelector('.col2row2').addEventListener('mouseover', function(){
    TweenMax.to('.col2row2::after', .6, {backgroundColor:'transparent'});
})
document.querySelector('.hero').addEventListener('mouseout', function(){
    TweenMax.to('.thought', 1, {opacity:"0", top:"100", left:"0"});
})
document.querySelector('.btn2').addEventListener('click', function(){
    
    TweenMax.to('.modal', 1, {display:'block',opacity:'1'});
    
})
document.querySelector('.cancel').addEventListener('click', function(){
    
    TweenMax.to('.modal', 1, {display:'none',opacity:'0'});
    TweenMax.to('#name', 0, {value:''});
    TweenMax.to('#email', 0, {value:''});
    TweenMax.to('#message', 0, {value:''});
})

// document.querySelector('.submit').addEventListener('click', function(e){
$('.submit').submit(function(e){
    // e.preventDefault();
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var message = document.querySelector('#message');

    if(!name.value || !email.value || !message.value){
        console.log('error');
        alert('Check your entries');
    }
    else{
        console.log('entered');
        e.preventDefault();
       $.ajax({
        url:'https://formspree.io/nicholasmahe@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType:'json'
       });
       e.preventDefault();
       $(this).get(0).reset();
       alertify.success('Message sent');
    }
})

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

// $('.circle').on('click', function(){
//     console.log($(this.parentNode));
// })

window.addEventListener('click', function(e){ 
    console.log('out');  
    if($('.modal').css('display') === 'block'){
        
        if (document.querySelector('.modal-content').contains(e.target)){
        // Clicked in box
        } else{
        // Clicked outside the box
        console.log('nice');
        TweenMax.to('.modal', 1, {display:'none',opacity:'0'});
        TweenMax.to('#name', 0, {value:''});
        TweenMax.to('#email', 0, {value:''});
        TweenMax.to('#message', 0, {value:''});
        }
    }
    
  });
