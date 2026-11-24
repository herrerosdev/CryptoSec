<?php
/**
 * @file index.php
 * @brief Punto de entrada principal del CMS dinámico Hegalpa (Entorno Local/Desarrollo).
 * @details Carga de forma desglosada los archivos del núcleo del cliente y subclases para facilitar
 * las tareas de desarrollo y depuración.
 * @author Hegalpa Dev Team
 * @version 2.0
 * @date 2026
 */


require_once(dirname($_SERVER['DOCUMENT_ROOT']) . '/resources/inc/galsan_server/DEFINES.php');
require_once(dirname($_SERVER['DOCUMENT_ROOT']) . '/resources/inc/galsan_server/includes.php'); 
require_once(HEGALPA_ROOT_PATH . 'public_html/Public_APIs/RestAPI.php'); //API publica?? tiene algun sentido?? mejor meter en resources ??
include_js_Client_files('js/galsan/');

?>
<!DOCTYPE html>
<html lang="es">
<head>

     <!-- RECURSOS Y SCHEMA JSON-LD -->
     <script src="assets/jquery.min.js" defer></script>
</head>
<body>

<script src='js/plasma/class/data-model.js?=<?filesize('js/plasma/class/data-model.js')?>' defer></script>
<script src='js/plasma/class/DOMWrapper.js?=<?filesize('js/plasma/class/DOMWrapper.js')?>' defer></script>
<script src='js/plasma/class/layout.js?=<?filesize('js/plasma/class/layout.js')?>' defer></script>
<script src='js/plasma/class/image-processor.js?=<?filesize('js/plasma/class/image-processor.js')?>' defer></script>
<script src='js/plasma/class/builder.js?=<?filesize('js/plasma/class/builder.js')?>' defer></script>
<script src='js/plasma/class/cms-view.js?=<?filesize('js/plasma/class/cms-view.js')?>' defer></script>
<script src='js/plasma/class/cms-handler.js?=<?filesize('js/plasma/class/cms-handler.js')?>' defer></script>
<script src='js/plasma/class/router.js?=<?filesize('js/plasma/class/router.js')?>' defer></script>
<script src='js/plasma/class/block.js?=<?filesize('js/plasma/class/block.js')?>' defer></script>


<!-- === SUBCLASES === -->
<script src='js/plasma/subclass/nav.js?=<?filesize('js/plasma/subclass/nav.js')?>' defer></script>
<script src='js/plasma/subclass/gallery.js?=<?filesize('js/plasma/subclass/gallery.js')?>' defer></script>
<script src='js/plasma/subclass/popup.js?=<?filesize('js/plasma/subclass/popup.js')?>' defer></script>
<script src='js/plasma/subclass/toolbar.js?=<?filesize('js/plasma/subclass/toolbar.js')?>' defer></script>
<script src='js/plasma/subclass/treeview.js?=<?filesize('js/plasma/subclass/treeview.js')?>' defer></script>
<script src='js/plasma/subclass/hero.js?=<?filesize('js/plasma/subclass/hero.js')?>' defer></script>
<script src='js/plasma/subclass/about.js?=<?filesize('js/plasma/subclass/about.js')?>' defer></script>
<script src='js/plasma/subclass/footer.js?=<?filesize('js/plasma/subclass/footer.js')?>' defer></script>
<script src='js/plasma/subclass/portfolio.js?=<?filesize('js/plasma/subclass/portfolio.js')?>' defer></script>
<script src='js/plasma/subclass/services.js?=<?filesize('js/plasma/subclass/services.js')?>' defer></script>
<script src='js/plasma/subclass/form.js?=<?filesize('js/plasma/subclass/form.js')?>' defer></script>
<script src='js/plasma/subclass/panel.js?=<?filesize('js/plasma/subclass/panel.js')?>' defer></script>
<script src='js/plasma/subclass/accordion.js?=<?filesize('js/plasma/subclass/accordion.js')?>' defer></script>
<script src='js/plasma/subclass/social.js?=<?filesize('js/plasma/subclass/social.js')?>' defer></script>
<script src='js/plasma/subclass/plans.js?=<?filesize('js/plasma/subclass/plans.js')?>' defer></script>
<script src='js/plasma/subclass/banner.js?=<?filesize('js/plasma/subclass/banner.js')?>' defer></script>
<script src='js/plasma/subclass/contact.js?=<?filesize('js/plasma/subclass/contact.js')?>' defer></script>
<script src='js/plasma/subclass/blog.js?=<?filesize('js/plasma/subclass/blog.js')?>' defer></script>

<!-- === TUS SOLUCIONES PRINCIPALES === -->
<script src='js/services/CMS_SOLUTION.js?=<?filesize('js/services/CMS_SOLUTION.js')?>' defer></script>
<script src='js/services/MAIL_SOLUTION.js?=<?filesize('js/services/MAIL_SOLUTION.js')?>' defer></script>




<script src='index.js?=<? filesize('index.js') ?>'></script>

</html>