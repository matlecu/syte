
function setupMywork(url, el) {
	var href = el.href;

	if ($('#mywork-profile').length > 0) {
		window.location = href;
		return;
	}


	var spinner = new Spinner(spin_opts).spin();
	$('#mywork-link').append(spinner.el);

	require(["json!/mywork", "text!templates/mywork-view.html"], 
		function(mywork_data, mywork_view) {

			var template = Handlebars.compile(mywork_view);

			var classes = [];
			$.each(mywork_data, function(i, t) {
				console.log("i "+i);
				console.log(t);
				classes.push(t);
			});

			var template_data = {
				"classes": classes
			}

			$(template(template_data)).modal().on('hidden', function () {
				$(this).remove();
				if (currSelection === 'mywork') {
					adjustSelection('home');
				}
			})

			spinner.stop();
		});

	return;
}
