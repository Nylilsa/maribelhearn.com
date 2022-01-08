<div id='wrap' class='wrap'>
    <?php
        echo wrap_top();
		if (empty($_GET['p'])) {
			echo '<h1>Frequently Asked Questions</h1>';
    		if (!empty($_GET['redirect'])) {
    			echo '<p>(Redirected from <em>' . htmlentities($_GET['redirect']) . '</em>)</p>';
    		}
			include_once 'assets/faq/subpages/main_page.php';
		} else {
			echo '<span id="backtomain"><a href="faq">&lt;= Back to Main Page</a></span><h1>Frequently Asked Questions</h1>';
			if ($_GET['p'] == 'start') {
				include_once 'assets/faq/subpages/start.php';
			} else if ($_GET['p'] == 'gfx') {
				include_once 'assets/faq/subpages/gfx.php';
			} else if ($_GET['p'] == 'eosd') {
				include_once 'assets/faq/eosd/eosd.php';
			} else if ($_GET['p'] == 'shots') {
				include_once 'assets/faq/subpages/shots.php';
			} else if ($_GET['p'] == 'extra') {
				include_once 'assets/faq/subpages/extra.php';
			} else if ($_GET['p'] == 'res') {
				include_once 'assets/faq/subpages/res.php';
			}
		}
	?>
	<?php
		if (empty($_GET['p'])) {
			echo '<p id="back"><strong><a id="backtotop" href="#top">Back to Top</a></strong></p>';
		} else {
			echo '<p id="back"><strong><a href="faq">Back to Main Page</a></strong></p>';
		}
	?>
</div>
