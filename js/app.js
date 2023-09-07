
// J-QUERY-MAIN-BASIC-START





// $(selector).action()










// j-quairy-basic-Start

// document.getElementById('p').style.display = 'none'

// $('p').hide()

// j-quairy-basic-End







// j-quairy-Function-start


// java-start

// document.getElementById('btn').addEventListener('click', function(){
//     document.getElementById('eliments').style.display = 'none'
// })

// java-end


// j-query-start

// $(document).ready(function(){

// $('.BTN').on('click', function(){
//     $('.ELM').hide(1000);
// })


// })

// j-query-END

// j-quairy-Function-END



// J-QUERY-MAIN-BASIC-END








// Project-Start



$(document).ready(function(){





// work-1-str


    $('#hide').on('click' , function(){
        $('#prg').hide(1000);
    })


    $('#show').on('click' , function(){
        $('#prg').show(1000);
    })





// work-1-end




// work-2-start


$('#fade-in').on('click' , function(){
    $('#div1').fadeIn(1000);
})



$('#fade-in').on('click' , function(){
    $('#div2').fadeIn(1500);
})



$('#fade-in').on('click' , function(){
    $('#div3').fadeIn(2000);
})




// work-2-End






// work-3-Start

$('#fade-out').on('click' , function(){
    $('#div1').fadeOut(1000);
})



$('#fade-out').on('click' , function(){
    $('#div2').fadeOut(1500);
})



$('#fade-out').on('click' , function(){
    $('#div3').fadeOut(2000);
})

// work-3-End




// work-4-start

$('#fade-toggle').on('click' , function(){
    $('#div1').fadeToggle(1000);
})



$('#fade-toggle').on('click' , function(){
    $('#div2').fadeToggle(1500);
})



$('#fade-toggle').on('click' , function(){
    $('#div3').fadeToggle(2000);
})


// work-4-End




// work-5-Start

$('#fade-to').on('click' , function(){
    $('#div1').fadeTo(1000 , 0.30);
})



$('#fade-to').on('click' , function(){
    $('#div2').fadeTo(1500 , 0.60);
})



$('#fade-to').on('click' , function(){
    $('#div3').fadeTo(2000 , 0.90);
})


// work-5-End

// work-6-start

$('#flip').on('click', function(){
    $('#panel').slideToggle("slow");
})





// Work-6-End


// Work-7-start

// $('#anim').on('click',function(){
//     $('#animate').animate({left: '250px'});
// })



// $('#anim').on('click',function(){
//     $('#animate').animate({height: 'toggle'});
// })


$('#anim').on('click',function(){
    $('#animate').animate({height: '300px', opacity: '0.5'}, 'slow' );
    $('#animate').animate({width: '300px', opacity: '0.14'}, 'slow' );
    $('#animate').animate({height: '150px', opacity: '0.20'}, 'slow' );
    $('#animate').animate({width: '200px', opacity: '0.30'}, 'slow' );
    $('#animate').animate({width: '400px', opacity: '0.50'}, 'slow' );
    $('#animate').animate({height: '500px', opacity: '0.80'}, 'slow' );
})




// Work-7-End



// Work-8-start

// $(document).ready(function(){
//     $("#btn1").click(function(){
//       alert("Text: " + $("#test").text());
//     });
//     $("#btn2").click(function(){
//       alert("HTML: " + $("#test").html());
//     });
//   });



$('#btn-1').on ('click' , function(){
    alert("#Text: " + $("#test").text());
})


// $("#btn1").click(function(){
//     alert("Text: " + $("#test").text());
//   });
//   $("#btn2").click(function(){
//     alert("HTML: " + $("#test").html());
//   });







// Work-8-End






// Work-9-start


// $("#btn1").click(function(){
//     $("p").append(" <b>Appended text</b>.");
//   });

//   $("#btn2").click(function(){
//     $("ol").append("<li>Appended item</li>");
//   });




$('#addbtn').on('click' , function(){
    $('#apn-p').append("<b>Append Text</b>.");
})




// Work-9-end





// Work-10-start


$("#p-change").click(function(){
    $("p").css({"background-color": "yellow", "font-size": "200%"});
  });


// Work-10-end






// Work-11-start

  $("button").click(function(){
    $("h1, h2, p").toggleClass("blue");
  });








//   $("button").click(function(){
//     $("h1, h2, p").addClass("blue");
//     $("div").addClass("important");
//   });

  // Work-11-end




})
// Project-END




