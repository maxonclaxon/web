<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include('includes.php')?>
    <title>Document</title>
</head>
<body>
    
    <?php 
        $settings = parse_ini_file('settings.ini');
        if($settings['navmenu'])include('includes/navmenu.php');
        if($settings['main_section'])include('includes/mainSection.php');
        if($settings['about_section'])include('includes/aboutSection.php');
        if($settings['contacts_section'])include('includes/contacts.php');
    ?>
</body>
</html>
