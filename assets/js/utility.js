$(document).ready(function () {
    logOnConsole('_currentPageName error : in pimwebclient.cauth.utility.js');
});

function redirectNow(urltoredirect) { 
    window.location.href = urltoredirect;
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
function isMobile(mobile) {
    var regex = /^[6789]\d{9}$/;
    return regex.test(mobile);
}

function logOnConsole(msg) {
    console.log(msg)
}


/*read value from given id and add xss escape */
function getValueById(id, type = '', xss = '', _valueType='') {
    var _tmpVal = '';
    var _isCheckboxChecked = false;
    if (type == 'radio') {
        _tmpVal = $('input[name=' + id + ']:checked').val();
    } else if (type == 'checkbox') {
        _isCheckboxChecked = $('#' + id).is(":checked");
        _tmpVal = 0;
        if (_isCheckboxChecked == true) {
            _tmpVal = 1;
        }
    } else if (type == 'html') {
        _tmpVal = $.trim($("#" + id).html());
    } else if (type == 'select') {
        if (_valueType=='text'){
            _tmpVal = $.trim($("#" + id + " option:selected").text());
        }
        else{
            _tmpVal = $.trim($("#" + id + " option:selected").val());
        }
    } else { 
        _tmpVal = $.trim($("#" + id).val());  
    }

    if (xss == 'filter') {
        _tmpVal = xssEscape(_tmpVal);
    }

    return _tmpVal;
}

function ShowLoader(id){
    EasyLoading.destroy();
    EasyLoading.show({
        background_color:"#d49810",
        text:"Processing...",
        //type: EasyLoading.TYPE.LINK_SPIN_FADE_LOADER
        },
        $("#"+id),
    );
}

function HideLoader(){ 
    EasyLoading.hide();
}

/*This function is written for showing alert message */
function ShowMessage(_title, _msg, _errType) {
    try {
        EasyLoading.hide();
    } catch (e) {

    }
    Swal.fire({
        title: _title,
        text: _msg,
        icon: _errType,
    });
}

/*This function is written for showing alert message */
function ShowSuccessMessage(_title, _msg, _errType, _timer, _url) {
    try {
        EasyLoading.hide();
    } catch (e) {

    }
    var _waitTimer = 5000; // 5 seconds
    if (_timer > 0) {
        _waitTimer = _timer;
    }
    Swal.fire({
        title: _title,
        text: _msg,
        icon: _errType,
        timer: _waitTimer
    });
    if (_url == 'reload') {
        window.location.reload();
    } else {
        redirectNow(_url);
    }
}


/*This function is written for showing alert message - auto hide */
function showMessageAutohide(_title, _msg, _errType, _timer, _url) {
    try {
        EasyLoading.hide();
    } catch (e) {

    }
    var _waitTimer = 5000; // 5 seconds
    if (_timer > 0) {
        _waitTimer = _timer;
    }

    Swal.fire({
        title: _title,
        text: _msg,
        icon: _errType,
        timer: _waitTimer,
        showConfirmButton: false
    });
    if (_url == 'reload') {
        window.location.reload();
    } else {
        redirectNow(_url);
    }
}

/*This function is written for showing alert message -- confirmation wait till button pressed  
 * 
 *author @author
 @created date
 **/ 
function confirmShowMessage(_title, _msg, _errType, _buttonName, _url, newwindow = false) {
    try {
        EasyLoading.hide();
    } catch (e) {

    }
    Swal.fire({
        title: _title,
        text: _msg,
        type: _errType,
        showCancelButton: false,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: _buttonName,
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    }).then((isConfirm) => {
        if (_url == 'reload') {
            window.location.reload();
        } else if (newwindow == true) {
            try {
                window.close();
                window.opener.location = _url;
            } catch (e) {

            }
        } else if (newwindow == false) {
            try {
                window.close();
                window.opener.location = _url;
            } catch (e) {

            }
        } else {
            redirectNow(_url);
        }
    });
}


function rtrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

function ltrim(str, chars) {
    chars = chars || "\\s";
    return str.replace(new RegExp("^" + chars, "g"), "");
}

/*Show multiple error recieved from APIs
 * 
 *author @author
 @created date
 **/
function showError(id, errMessage, _className) {
    $("#" + id).empty();
    var _errMessage = "";
    var _err = "";
    //{"name":"AccessToken","desc":"Add User Access Token Validation Error","error":"AccessToken, required, , "}
    $(errMessage).each(function (index, row) {
        _err = row.error;
        _errMessage = _errMessage + "<li class='" + _className + "'>" + _err + "</li>";
    });
    $("#" + id).append("<ul class='" + _className + "'>" + _errMessage + "</ul>");
}
 
/*This function is written for showing alert message -- confirmation wait till button pressed  
 * 
 *author @author
 @created date
 **/ 
function confirmShowMessageNew(_title, _msg, _errType, _buttonName, _url, newwindow = false) {
    try {
        EasyLoading.hide();
    } catch (e) {

    }
    Swal.fire({
        title: _title,
        html:_msg,
        type: _errType,
        showCancelButton: false,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: _buttonName,
        cancelButtonText: "No, cancel it!",
        closeOnConfirm: false,
        closeOnCancel: false
    }).then((isConfirm) => {
        if (_url == 'reload') {
            window.location.reload();
        } else if (newwindow == true) {
            try {
                window.close();
                window.opener.location = _url;
            } catch (e) {

            }
        } else if (newwindow == false) {
            try {
                window.close();
                window.opener.location = _url;
            } catch (e) {

            }
        } else {
            redirectNow(_url);
        }
    });
}

function ShowLoader38On(id, _msg="", isHashAdded=true){
    if (isHashAdded == true){
        $(id).html(_msg + " <img width='38' height='38' src='./assets/images/loader38.gif'/>").show();
    } else{
        $("#"+id).html(_msg + " <img width='38' height='38' src='./assets/images/loader38.gif'/>").show();
    }
}

function ShowLoader38Off(id, isHashAdded=true){
    if (isHashAdded == true){
        $(id).empty();
    } else{
        $("#"+id).empty();
    }   
}


function logOnConsole(msg) {
    console.log(msg)
}