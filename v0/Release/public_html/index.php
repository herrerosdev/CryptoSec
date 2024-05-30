<?php require_once('./config.php');?>
<?php require_once(HEGALPA_ROOT_PATH . 'resources/inc/APIs/RestAPI.php');?>
<?php $CHegalpaReporters_o->Register_Visit(basename(__FILE__, '.php')); ?>


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
<script src='js/GALSAN_CLIENT/CLogin.js?=<? filesize('js/GALSAN_CLIENT/CLogin.js') ?>'></script>





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
<script src='js/blocks/CMS_BLOCKs/loader.js?=<? filesize('js/blocks/CMS_BLOCKs/loader.js') ?>'></script>




<!-- Footers Footers -->
<script src='index.js?=<? filesize('index.js') ?>'></script>

<!-- GET_DATA_FROM_BBDD -->
<script> CConstants.GetBBDD_Parameters(<?php $o_RestAPI->CommandProcessor("GET_PUBLIC_PARAMETERS_OPERATION")();?>) </script>
<script> CConstants.GetBBDD_Messages(<?php $o_RestAPI->CommandProcessor("GET_PUBLIC_MESSAGES_OPERATION")();?>) </script>
<script> CBlocks.Processor(<?php $o_RestAPI->CommandProcessor("GET_BLOCKS_AND_PARAMETERS_OPERATION")();?>) </script>


<!-- Page Manager JS General Manager of this page -->

</html>