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

require_once(dirname($_SERVER['DOCUMENT_ROOT']) . '/resources/inc/GALSAN_SERVER/DEFINES.php');
require_once(HEGALPA_ROOT_PATH . 'resources/inc/APIs/RestAPI.php');
require_once(dirname($_SERVER['DOCUMENT_ROOT']) . '/resources/inc/GALSAN_SERVER/includes.php'); 
include_js_Client_files('js/GALSAN_CLIENT/');
?>
<!DOCTYPE html>
<html lang="es">
<head>

    </script>
</head>
<body>

<script src='js/blocks/CMS_BLOCKs/class/data-model.js?=<?filesize('js/blocks/CMS_BLOCKs/class/data-model.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/class/DOMWrapper.js?=<?filesize('js/blocks/CMS_BLOCKs/class/DOMWrapper.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/class/layout.js?=<?filesize('js/blocks/CMS_BLOCKs/class/layout.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/class/image-processor.js?=<?filesize('js/blocks/CMS_BLOCKs/class/image-processor.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/class/builder.js?=<?filesize('js/blocks/CMS_BLOCKs/class/builder.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/class/cms-view.js?=<?filesize('js/blocks/CMS_BLOCKs/class/cms-view.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/class/cms-handler.js?=<?filesize('js/blocks/CMS_BLOCKs/class/cms-handler.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/class/router.js?=<?filesize('js/blocks/CMS_BLOCKs/class/router.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/class/block.js?=<?filesize('js/blocks/CMS_BLOCKs/class/block.js')?>' defer></script>


<!-- === SUBCLASES === -->
<script src='js/blocks/CMS_BLOCKs/subclass/nav.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/nav.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/gallery.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/gallery.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/popup.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/popup.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/toolbar.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/toolbar.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/treeview.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/treeview.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/hero.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/hero.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/about.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/about.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/footer.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/footer.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/portfolio.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/portfolio.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/services.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/services.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/form.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/form.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/panel.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/panel.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/accordion.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/accordion.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/social.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/social.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/plans.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/plans.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/banner.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/banner.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/contact.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/contact.js')?>' defer></script>
<script src='js/blocks/CMS_BLOCKs/subclass/blog.js?=<?filesize('js/blocks/CMS_BLOCKs/subclass/blog.js')?>' defer></script>

<!-- === TUS SOLUCIONES PRINCIPALES === -->
<script src='js/GALSAN_CLIENT/services/CMS_SOLUTION.js?=<?filesize('js/GALSAN_CLIENT/services/CMS_SOLUTION.js')?>' defer></script>
<script src='js/GALSAN_CLIENT/services/MAIL_SOLUTION.js?=<?filesize('js/GALSAN_CLIENT/services/MAIL_SOLUTION.js')?>' defer></script>




<script src='index.js?=<? filesize('index.js') ?>'></script>

</html>