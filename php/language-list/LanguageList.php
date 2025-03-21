<?php

function language_list(...$items)
{
    $array = [];
    if(empty($items)){
        return $array;
    }
    foreach($items as $value){
        $array[] = $value;
    }
    return $array;
}

function add_to_language_list($array, $string){
    $array[] = $string;
    return $array;

}

function prune_language_list ($array){
    array_shift($array);
    return $array;
}

function current_language ($array){
    return $array[0];
}

function language_list_length ($array){
    return count($array);
}