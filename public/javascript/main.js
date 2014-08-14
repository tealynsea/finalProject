$(function() {

	$('#signupFormtee').on('submit', function(e){
		e.preventDefault();



		var user = $('#username').val();	
		var password = $('#password').val();
		var goals = $('#specificGoals').val();
		var deadline = $ ('#deadline').val();
		var project = $('#specificProject').val();
		var intrests = $('#intrestsHobbies').val();


		$.post('/postForm', 
			{
				name: user,
				password: password,
				goals: goals,
				projects: project,
				interests: interests
			},
			function(data) {
				
			}
			)
	})

	$('#signupFormtor').on('submit', function(e) {
		e.preventDefault();

		var user = $('#username').val();
		var password = $('#password').val();
		var language = $('#')
		var goals = $('#goalsMentor').val();
		var teaching = $('teachingStyle').val();
		var schedule = $('availability').val();
		var interests = $('interestsMentor').val();

		$.post('/postForm',
		{
			name: user,
			password: password,
			goals: goals,
			teacing: teaching,
			schedule: schedule,
			interests: interests
		})
	})
})