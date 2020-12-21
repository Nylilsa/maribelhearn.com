<!DOCTYPE html>
<html lang='en'>
<?php
    include '../shared/shared.php';
    hit(basename(__FILE__));
?>

    <head>
		<title>401 Unauthorized</title>
		<meta charset='UTF-8'>
		<meta name='viewport' content='width=device-width'>
        <link rel='preload' type='font/woff2' href='assets/fonts/Felipa-Regular.woff2' as='font' crossorigin>
        <link rel='stylesheet' type='text/css' href='https://maribelhearn.com/assets/shared/css_concat.php?page=index'>
		<link rel='icon' type='image/x-icon' href='https://maribelhearn.com/favicon.ico'>
        <script src='assets/shared/js_concat.php?page=error' defer></script>
        <?php echo dark_theme('error') ?>
    </head>

    <body>
		<nav>
            <div id='nav' class='wrap'><?php echo navbar('error') ?></div>
		</nav>
        <main>
            <div id='wrap' class='wrap'>
                <p id='ack_admin'>This background image<br id='ack_br'>
                was drawn by <a href='https://www.pixiv.net/member.php?id=420928'>LM7</a></p>
                <span id='hy_container'><img id='hy' src='https://maribelhearn.com/assets/shared/icon_sheet.png' alt='Human-youkai gauge'>
                    <span id='hy_tooltip' class='tooltip'><?php echo theme_name() ?></span>
                </span>
                <h1>401</h1>
                <p><strong>Unauthorized</strong></p>
                <p class='wide'>You are not authorized to access this resource.</p>
                <p id='ack_mobile'>The background image was drawn by <a href='https://www.pixiv.net/member.php?id=420928'>LM7</a>.</p>
            </div>
        </main>
    </body>

</html>
