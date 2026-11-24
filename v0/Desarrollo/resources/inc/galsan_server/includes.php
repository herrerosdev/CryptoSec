<?php

function include_js_Client_files($folder = 'js/galsan/') {

        // Definir el array de prioridades (menor número = mayor prioridad)
        $priorities = [
            'CUtils.js' => 1, // Cargar primero (por ejemplo, una librería)
          
        ];
    
    // Asegurarse de que la carpeta termine con una barra
    $folder = rtrim($folder, '/') . '/';
    
    // Usar glob para obtener todos los archivos .js en la carpeta
    $js_files = glob($folder . '*.js');

       // Verificar si la carpeta existe y si se encontraron archivos
       if (!is_dir($folder)) {
        echo "<!-- Error: La carpeta $folder no existe -->";
        return;
    }
    if (empty($js_files)) {
        echo "<!-- No se encontraron archivos .js en $folder -->";
        return;
    }

     // Crear un array para asociar archivos con sus prioridades
     $files_with_priority = [];

     foreach ($js_files as $file) {
        $filename = basename($file); // Obtener solo el nombre del archivo
        // Asignar prioridad del array $priorities o una por defecto
        $priority = isset($priorities[$filename]) ? $priorities[$filename] : 100;
        $files_with_priority[$file] = $priority;
    }

    // Ordenar los archivos según su prioridad
    asort($files_with_priority); // asort mantiene las claves (rutas de archivo)

    // Generar etiquetas <script> en el orden de prioridad
    foreach ($files_with_priority as $file => $priority) {
        $relative_path = str_replace($_SERVER['DOCUMENT_ROOT'], '', $file);
        echo "<script src=$relative_path?=<?filesize($relative_path)?>'defer></script>\n";
    }

}

 function include_js_Blocks_files($folder = 'js/plasma/') {
    // Asegurarse de que la carpeta termine con una barra
    $folder = rtrim($folder, '/') . '/';
    
    // Usar glob para obtener todos los archivos .js en la carpeta
    $js_files = glob($folder . '*.js');
    
    // Generar etiquetas <script> para cada archivo .js
    foreach ($js_files as $file) {
        // Convertir la ruta del archivo a una ruta relativa para el navegador
        $relative_path = str_replace($_SERVER['DOCUMENT_ROOT'], '', $file);
        echo "<script src=$relative_path?=<? filesize($relative_path) ?>'></script>\n";
    };
} 
?>