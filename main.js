$(function(){
	$("#phone").mask('+38(000) 000-0000');
	$("#applyForm").submit(function(e){
		e.preventDeFault();
		var studentName = $('#name').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		var course = $('#applyForm').data('course');
		
Email.send({
    SecureToken : "e751b04b-6a36-4933-85bd-572a7291cbf9",
    To : 'them@website.com',//інша пошта
    From : "jhghgkjkljkgljljkg@gmail.com",//пошта з якої буде відправка
    Subject : "Test subject",
    Body : "And this is the body"
}).then(
  message => alert("message")
);

		$('#modal').removeClass("show-my");
		$('#thanks').removeClass("show-my");
	});
	$(".showModal").click(function(e){
		$('#modal').addClass("show-my");
		$('#applyForm').addClass("course", $(this).attr('id'));
	});
$('#closeModal').click(function(e){
   $('#modal').removeClass("show-my");

 });


$('#closeThanks').click(function(e){
   $('#thanks').removeClass("show-my");

 });

});