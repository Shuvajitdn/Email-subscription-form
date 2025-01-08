$(document).ready(function () {
    // Open Modal
    $('.start-btn a').click(function (e) {
        e.preventDefault();
        $('.modal-box').addClass('show-modal');
        $('.overlay').fadeIn();
    });

    // Close Modal
    $('.close-btn, .overlay').click(function () {
        $('.modal-box').removeClass('show-modal');
        $('.overlay').fadeOut();
    });

    // Form Submission
    $('#subscription-form').submit(function (e) {
        e.preventDefault();
        const email = $('#email').val();
        if (validateEmail(email)) {
            $('.success-message').fadeIn();
            setTimeout(() => {
                $('.modal-box').removeClass('show-modal');
                $('.overlay').fadeOut();
                $('.success-message').fadeOut();
                $('#email').val('');
            }, 2000);
        } else {
            alert('Please enter a valid email address!');
        }
    });

    // Email Validation
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
