//not in use.  I think this was taken over in /models/user.js

// SEE BOTTOM FOR CODE FOR JQUERY HANDLER

// $(function() {

// 	$('#signupFormtee').on('submit', function(e){
// 		e.preventDefault();



// 		var user = $('#username').val();	
// 		var password = $('#password').val();
// 		var goals = $('#specificGoals').val();
// 		var deadline = $ ('#deadline').val();
// 		var project = $('#specificProject').val();
// 		var intrests = $('#intrestsHobbies').val();


// 		$.post('/postForm', 
// 			{
// 				name: user,
// 				password: password,
// 				goals: goals,
// 				deadline: deadLine,
// 				projects: project,
// 				interests: interests
// 			},
// 			function(data) {
				
// 			}
// 			)
// 	})

// 	$('#signupFormtor').on('submit', function(e) {
// 		e.preventDefault();

// 		var user = $('#username').val();
// 		var password = $('#password').val();
// 		var language = $('#')
// 		var goals = $('#goalsMentor').val();
// 		var teaching = $('teachingStyle').val();
// 		var schedule = $('availability').val();
// 		var interests = $('interestsMentor').val();

// 		$.post('/postForm',
// 		{
// 			name: user,
// 			password: password,
// 			goals: goals,
// 			teaching: teaching,
// 			schedule: schedule,
// 			interests: interests
// 		},
// 		function(data) {

// 		}
// 		)
// 	})
// })
 $(function() {
 	console.log('main.js says hello');
	$(document).on('click', '.seeProfileButton', function(e){
		e.preventDefault()

		$(this).closest('.profile').find('.summary').slideToggle()

	})
})