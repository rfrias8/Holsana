$(document).ready(function () {
    $('.ex1').textyle();
    //$('.ex1').textyle();
    //you can select options or add callback
//    $('.ex1').textyle({
//        duration : 400,
//        delay : 100,
//        easing : 'swing',
//        callback : function(){
//            $(this).css({
//                color : 'coral',
//                transition : '1s',
//            });
//            $('.desc').css('opacity',1);
//        }
//    });
//        
    $('#idSubmit').on('click', function () {// Signin - existing user
        logOnConsole('click error : idSubmit');
        var _isEmailMobileFormValidated = $("#contactFormId").valid();
        if (_isEmailMobileFormValidated == true) {
            setTimeout(function () {
                submitContactUs();
            }, 1);

        }
    });


    $("#contactFormId").validate({//login with email or mobile
        rules: {
            idFullName: {
                required: true, 
                minlength: 2,
                maxlength: 15,
            },
            idEmail: {
                required: true, 
            },
            idSubject: {
                required: true, 
            },
            idTextarea: {
                required: true,
                minlength: 2,
                maxlength: 65, 
            },
        },
        messages: {
            idFullName: {
                required:_enterNameMsg,
                minlength: _enterMinNameMsg,
                maxlength: _enterMaxNameMsg,
            },
            idEmail: _enterValidEmailMsg,
            idSubject: _enterSubjectMsg,
            idTextarea: {
                required:_enterValidMsg,
                minlength: _enterMinValidMsg,
                maxlength: _enterMaxValidMsg,
            }
        }
    });
 
});

/*All function */

/*Submit contact us - START */
submitContactUs = function () { // add new registration
    var first_name = getValueById("idFullName", ""); 

    confirmShowMessage("", _successMsg, "success", "Done", "", "");
}
/*Submit contact us - END */
 
/* back-to-top */
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});