AOS.init({
    offset: 100,
    duration: 1500,
    easing: 'easeOutCirc',

});

$('.booking-btn').on('click', function() {
    $('.modal-overray').removeClass('hidden');
});

$('.close').on('click', function() {
    $('.modal-overray').addClass('hidden');
});

$('.text-input1').on('click', function() {
    $('.text-input1').val("");
});
$('.text-input1').on('blur', function() {
    $('.text-input1').val("例：石井将吾");
});

$('.text-input2').on('click', function() {
    $('.text-input2').val("");
});
$('.text-input2').on('blur', function() {
    $('.text-input2').val("：Example@example.com");
});

$('.text-input3').on('click', function() {
    $('.text-input3').val("");
});
$('.text-input3').on('blur', function() {
    $('.text-input3').val("プランを選択してください");
});

$('.text-input4').on('click', function() {
    $('.text-input4').val("");
});
$('.text-input4').on('blur', function() {
    $('.text-input4').val("日時を選択してください");
});