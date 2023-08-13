function toggleDetail(ev) {
    const target = $(ev.target)

    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    }else {
        $(target).html("Less Info").addClass("active")
    }

    const item = ($(target).parents(".about-exp-item"))
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}

function onFormSubmit(ev) {
    ev.preventDefault()
    const email = $("#inp-email")
    const subject = $("#inp-subject")
    const message = $("#inp-message")

    if(!$(email).val()) {
        alert("email is required")
    }else if(!$(subject).val()){
        alert("subject is required")
    }else if(!$(message).val()){
        alert("message is required")
    }else {
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        alert("Form has submitted")
    }

}