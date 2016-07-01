
function getEmployee_success(ctrl) {
	$('#employeePic').attr('src', 'pics/' +  "lisa_wong.jpg");
	$('#fullName').text( ctrl.getElementsByTagName('p')[0].innerHTML);
	$('#employeeTitle').text(ctrl.getElementsByTagName('p')[1].innerHTML);
	$('#city').text("Islamabad");	

		$('#actionList').append('<li><a href="Tabber.html?id=' + 
			"1" + '"><p class="line1">Company Name</p>' +
			'<p class="line2">' + "John Martin" + '</p></a></li>');
		$('#actionList').append('<li><a href="mailto:' + "13besefmahmud@seecs.edu.pk" + 
			'"><p class="line1">Email</p>' +'<p class="line2">' + "13besefmahmud@seecs.edu.pk" +
			 '</p><img src="img/mail.png" class="action-icon"/></a></li>');
		$('#actionList').append('<li><a href="tel:' + "051-7456783" + '"><p class="line1">Call Office</p>' +
				'<p class="line2">' + "051-7456783" + '</p><img src="img/phone.png" class="action-icon"/></a></li>');
		$('#actionList').append('<li><a href="tel:' + "0300-7549756" + '"><p class="line1">Call Cell</p>' +
				'<p class="line2">' + "0300-7549756" + '</p><img src="img/phone.png" class="action-icon"/></a></li>');
		$('#actionList').append('<li><a href="sms:' + "0300-7549756" + '"><p class="line1">SMS</p>' +
				'<p class="line2">' + "0300-7549756" + '</p><img src="img/sms.png" class="action-icon"/></a></li>');
}