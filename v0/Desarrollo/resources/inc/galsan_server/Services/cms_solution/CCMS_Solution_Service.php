<?php
require_once PATH_DEFINES_FILE;
require_once HEGALPA_ROOT_PATH . 'resources/inc/galsan_server/CConstants.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/galsan_server/CUtils.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/CTraces.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CReporters.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CSolutionINFO.php';


//Stadistics reporters
class CCMS_SOLUTiON_SERVICE
{

    private $o_BBDD_CONECTION_;
    static $PROJECT_SchemaBD_NAME = "NULL";

    function __construct()
    {
        
        $this->o_BBDD_CONECTION_ = new CBBDD_SQLite(HEGALPA_ROOT_PATH . "resources/data/Zapi.db");
        //Open connection with Hegalpa MySql BBDD and chargue neccesary queries
      /*   $this->o_BBDD_CONECTION_ = new CBBDD_MySQL(CConstants::$MySQL_SERVER_DIR, "masterCMS", CConstants::$MySQL_USER, CConstants::$MySQL_door);
 */
        $this->o_BBDD_CONECTION_->SetQueriesArray(array(
        
            "GET_CATEGORY_VIEWS_BLOCKS_BY_ID" => "SELECT category.name_category,
            view.name_view, view.order_view, view.id_view  FROM view  LEFT JOIN category ON category.id_category= view.id_category
            WHERE view.page_id = :0;",
  
"GET_ITEM" => "SELECT  
    item.item,
    item.params, 
    item.subitem 
    FROM view
    INNER JOIN item ON item.id_item_view = view.id_view
WHERE item.id_item_view = :0;",


    "GET_ELEMENT" => "SELECT 
    element.type,
    element.css_class,
    element.father_element,
    element.id_element
    FROM view
    INNER JOIN view_element ON view_element.id_view = view.id_view
    INNER JOIN element ON element.id = view_element.id_element
WHERE view_element.id_view = :0;",



"GET_CSS" => "SELECT 
    css.name,
    css.css,
    css.screen FROM view
   INNER JOIN view_css ON view_css.id_view = view.id_view
    INNER JOIN css ON css.id_css = view_css.id_css 
WHERE view_css.id_view = :0;",


"GET_ALL" => "SELECT 
    category.name_category AS block,
    view.name_view AS view,
    view.id_view AS autoin,
    view.order_view AS order_view,
    COALESCE((
        SELECT JSON_GROUP_ARRAY(
            JSON_OBJECT(
                'type', item.type,
                'options', item.options,
                'name', item.name
            )
        )
        FROM item
        WHERE item.id_item_view = view.id_view
    ), '[]') AS item,
    COALESCE((
        SELECT JSON_GROUP_ARRAY(
            JSON_OBJECT(
                'father_element', element.father_element,
                'id_element', element.id_element,
                'element_data', JSON_OBJECT(
                    'type', element.type,
                    'css_class', element.css_class
                )
            )
        )
        FROM view_element 
        INNER JOIN element ON element.id = view_element.id_element
        WHERE view_element.id_view = view.id_view
    ), '[]') AS element,
    COALESCE((
        SELECT JSON_GROUP_ARRAY(
            JSON_OBJECT(
                'name', css.name,
                'css', css.css,
                'screen', css.screen
            )
        )
        FROM view_css
        INNER JOIN css ON css.id_css = view_css.id_css
        WHERE view_css.id_view = view.id_view
    ), '[]') AS css
FROM view 
LEFT JOIN category ON category.id_category = view.id_category
WHERE view.page_id = :0;",
 

 

 ));
        

    
    }


    
    public function Test($view)
    {

        $Page = isset($_GET['p']) ? $_GET['p'] : 'index';
      
        ///QUERY UNICA//////
        /* $result = $this->o_BBDD_CONECTION_->ExecuteQuery("GET_ALL", array($Page)); */


       $views = $this->o_BBDD_CONECTION_->ExecuteQuery("GET_CATEGORY_VIEWS_BLOCKS_BY_ID", array($Page), PDO::FETCH_ASSOC);
    

        $result = [];
        foreach ($views as $view) {

            // Obtener items, elements y css para esta vista
            $elements = $this->o_BBDD_CONECTION_->ExecuteQuery("GET_ELEMENT", array($view['id_view']), PDO::FETCH_ASSOC);

            $css = $this->o_BBDD_CONECTION_->ExecuteQuery("GET_CSS", array($view['id_view']),  PDO::FETCH_ASSOC); 
    
            $items = $this->o_BBDD_CONECTION_->ExecuteQuery("GET_ITEM", array($view['id_view']),  PDO::FETCH_ASSOC);


     
            // Formatear elements según la estructura deseada
            $formatted_elements = [];
            foreach ($elements as $element) {
                $formatted_elements[] = [
                    'father_element' => $element['father_element'],
                    'id_element' => $element['id_element'],
                    'element_data' => [
                        'type' => $element['type'],
                        'css_class' => $element['css_class']
                    ]
                ];
            }

             $formatted_items = [];
            foreach ($items as $item) {
                $formatted_items[] = [
                    'item' => $item['item'],
                    'params' => json_decode($item['params']),
                    'subitem'  => $item['subitem']
                ];
            } 
            

        
            // Construir el objeto de la vista
            $result[] = [
                'block' => $view['name_category'],
                'view' => $view['name_view'],
                'order' => $view['order_view'],
                'autoincrement' => $view['id_view'],
                'item' => $formatted_items, // Los items ya tienen el formato correcto
                'element' => $formatted_elements ?: null, // Array vacío si no hay elementos
                'css' => $css ?: null // Array vacío si no hay css
            ];
        } 
        

         echo json_encode($result); 
      /*   echo json_encode(array_values($result)); */
     
     /*   if(empty($result)) {$data_element = null; } 

       else{
    
        $data_element = [];

         foreach ($result as $row) {

           

            $data_element[] = [
                
                "father_element" => $row["father_element"],

                "id_element" => $row["id_element"],

                "element_data" => [
                    "type" => $row["type"],
                    "view" => $row["name_view"],
                    "id_view" => $row["id_view"],
                    "css_class" => $row["css_class"]
                    
                ]
                
                ];
 
            }
        };

        return json_encode($data_element);

        if(empty($result1)) {$result1 = null; } 
        
        $test =  json_encode([
            "block" => $result0[0]["name_category"],
            "view" => $result0[0]["name_view"],
            "element" => $data_element,
              "css" => $result1,  
            "item" => $result2  
            
            ]);

        

 /*            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "RESULTS QUERY =  " . json_encode($result1),
            __FILE__, __FUNCTION__, __LINE__);  */

/* 
         return $test;  */
        
       
     
    }
    



}

$CCMS_SOLUTiON_SERVICE = new CCMS_SOLUTiON_SERVICE();

?>


<!-- "SELECT 
    css.name,
    css.css,
    css.screen,
    element.type,
    element.class FROM view
    LEFT JOIN view_element ON view_element.id_view = view.id_view
    LEFT JOIN element ON element.id_element = view_element.id_element
    LEFT JOIN view_css ON view_css.id_view = view.id_view
    LEFT JOIN css ON css.id_css = view_css.id_css AND css.name = CONCAT('.', element.class)
    WHERE view.name_view = :0;", -->