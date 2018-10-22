<?php 

	if (isset($_POST['submit'])){
		$name = $_POST['uname'];
		$subject = $_POST['subject'];
		$mailFrom = $_POST['uemail'];
		
		$mailTo = "lifeofbeanhanna@gmail.com";
		
		$headers = "From: ".$mailFrom;
		$txt = "You have received an e-mail from ".$name.". \n\n".$subject;
		
		mail($mailTo, $subject, $txt, $headers);
		header("Location: index.php?mailsend");
	}

?>