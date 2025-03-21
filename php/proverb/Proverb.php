<?php

/*
 * By adding type hints and enabling strict type checking, code can become
 * easier to read, self-documenting and reduce the number of potential bugs.
 * By default, type declarations are non-strict, which means they will attempt
 * to change the original type to match the type specified by the
 * type-declaration.
 *
 * In other words, if you pass a string to a function requiring a float,
 * it will attempt to convert the string value to a float.
 *
 * To enable strict mode, a single declare directive must be placed at the top
 * of the file.
 * This means that the strictness of typing is configured on a per-file basis.
 * This directive not only affects the type declarations of parameters, but also
 * a function's return type.
 *
 * For more info review the Concept on strict type checking in the PHP track
 * <link>.
 *
 * To disable strict typing, comment out the directive below.
 */

declare(strict_types=1);

class Proverb
{
    public function recite(...$pieces)
    {
        //$pieces est un tableau de tableau. On récupère le deuxième tableau dans un troisième tableau
        //pour controler et parcourir plus facilement le tabeau.
        $array = [];
        foreach($pieces as $key => $value){
           foreach($value as $subkey =>$subvalue){
                  $array[$subkey] = $subvalue;
           }
       }
        if(count($array) == 0){
            return $array;
        }

        if(count($array) == 1){
            $array1 = ["And all for the want of a {$array[0]}."];
            return $array1;
        }

        for($i=0; $i<count($array)-1; $i++){
            $array2[$i] = "For want of a {$array[$i]} the {$array[$i+1]} was lost.";
        }
        $array2[] = "And all for the want of a {$array[0]}.";
        
        return $array2;
        
    }
}