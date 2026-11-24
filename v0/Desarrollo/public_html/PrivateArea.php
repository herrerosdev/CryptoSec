<?php require_once(dirname($_SERVER['DOCUMENT_ROOT']) . '/resources/inc/galsan_server/DEFINES.php');?>
<?php require_once(HEGALPA_ROOT_PATH . 'public_html/Public_APIs/RestAPI.php');?>
<?php $CHegalpaReporters_o->Register_Visit(basename(__FILE__, '.php')); ?>
<?php CRestAPI::Get_Session_Object()->Check_Only_Logged_Users(CRestAPI::GetConstants()->CODE('ROL', 'SUPERUSER'), 'index.php') ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?php $o_RestAPI->CommandProcessor("GET_A_MESSAGE_OPERATION")("META_Title");?></title>

    <meta name="description" content="<?php $o_RestAPI->CommandProcessor("GET_A_MESSAGE_OPERATION")("META_Description");?>"/>
    <meta property="og:title" content=<?php $o_RestAPI->CommandProcessor("GET_A_MESSAGE_OPERATION")("META_Title");?> />
    <meta property="og:url" content="<?php (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];?>" />

    <meta property="og:description" content="<?php $o_RestAPI->CommandProcessor("GET_A_MESSAGE_OPERATION")("META_Description");?>"/> 
    <meta property="og:image" itemprop="image" content= "<?php $o_RestAPI->CommandProcessor("GET_A_PARAMETER_OPERATION")("IMG_META_Preview");?>">
    <meta name="keywords" content="<?php $o_RestAPI->CommandProcessor("GET_A_MESSAGE_OPERATION")("META_KeyWords");?>"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="shortcut icon" href="<?php $o_RestAPI->CommandProcessor("GET_A_PARAMETER_OPERATION")("IMG_shortcut_icon");?>">
</head>


<body>
</body>

<!--JS Utils Generic Classes -->
<script src='js/GALSAN_CLIENT/CreateBlock.js?=<? filesize('js/GALSAN_CLIENT/CreateBlock.js') ?>'></script>
<script src='js/GALSAN_CLIENT/CEffects.js?=<? filesize('js/GALSAN_CLIENT/CEffects.js') ?>'></script>
<script src='js/GALSAN_CLIENT/CConstants.js?=<? filesize('js/GALSAN_CLIENT/CConstants.js') ?>'></script>
<script src='js/GALSAN_CLIENT/CTrees.js?=<? filesize('js/GALSAN_CLIENT/CTrees.js') ?>'></script>
<script src='js/GALSAN_CLIENT/CUtils.js?=<? filesize('js/GALSAN_CLIENT/CUtils.js') ?>'></script>
<script src='js/GALSAN_CLIENT/CPetition.js?=<? filesize('js/GALSAN_CLIENT/CPetition.js') ?>'></script>
<script src='js/GALSAN_CLIENT/CBlocks.js?=<? filesize('js/GALSAN_CLIENT/CBlocks.js') ?>'></script>
 <script src='js/GALSAN_CLIENT/CSession.js?=<? filesize('js/GALSAN_CLIENT/CSession.js') ?>'></script>
 <script src='js/GALSAN_CLIENT/CSecurity.js?=<? filesize('js/GALSAN_CLIENT/CSecurity.js') ?>'></script>
 <script src='js/GALSAN_CLIENT/CAPIs.js?=<? filesize('js/GALSAN_CLIENT/CAPIs.js') ?>'></script>
 <script src='js/GALSAN_CLIENT/CService.js?=<? filesize('js/GALSAN_CLIENT/CService.js') ?>'></script>

  <!--Services Classes -->
  <script src='js/GALSAN_CLIENT/services/LOGIN_SOLUTION.js?=<? filesize('js/GALSAN_CLIENT/services/LOGIN_SOLUTION.js') ?>'></script>


<!-- Maquetacion -->
<script src='layout.js?=<? filesize('layout.js') ?>'></script>

<!-- CMS_Blocks -->

<script src='js/blocks/CMS_BLOCKs/HeaderLandingIT.js?=<? filesize('js/blocks/CMS_BLOCKs/HeaderLandingIT.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/PortadaIT.js?=<? filesize('js/blocks/CMS_BLOCKs/PortadaIT.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/GridItems.js?=<? filesize('js/blocks/CMS_BLOCKs/GridItems.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/SeparatorIT.js?=<? filesize('js/blocks/CMS_BLOCKs/SeparatorIT.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/ButtonsContact.js?=<? filesize('js/blocks/CMS_BLOCKs/ButtonsContact.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/CabeceraProfesional.js?=<? filesize('js/blocks/CMS_BLOCKs/CabeceraProfesional.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/MaquinaEscribir.js?=<? filesize('js/blocks/CMS_BLOCKs/MaquinaEscribir.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/Button_AtulPrajapati.js?=<? filesize('js/blocks/CMS_BLOCKs/Button_AtulPrajapati.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/simple_oneLine_Foot.js?=<? filesize('js/blocks/CMS_BLOCKs/simple_oneLine_Foot.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/HEGALPA_FOOTER.js?=<? filesize('js/blocks/CMS_BLOCKs/HEGALPA_FOOTER.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/POPUP_Login.js?=<? filesize('js/blocks/CMS_BLOCKs/POPUP_Login.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/POPUP_Info.js?=<? filesize('js/blocks/CMS_BLOCKs/POPUP_Info.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/loader.js?=<? filesize('js/blocks/CMS_BLOCKs/loader.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/BlogPost.js?=<? filesize('js/blocks/CMS_BLOCKs/BlogPost.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/POPUP.js?=<? filesize('js/blocks/CMS_BLOCKs/POPUP.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/Table1.js?=<? filesize('js/blocks/CMS_BLOCKs/Table1.js') ?>'></script>
<script src='js/blocks/CMS_BLOCKs/Dynamic_Table.js?=<? filesize('js/blocks/CMS_BLOCKs/Dynamic_Table.js') ?>'></script>


<!-- Footers Footers -->
<script src='PrivateArea.js?=<? filesize('PrivateArea.js') ?>'></script>

</html>