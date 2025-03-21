<?php

declare(strict_types=1);

function brackets_match(string $input): bool
{

    if($input == ''){
        return true;
    }

    if($input[0] == ')' || $input[0] == ']' || $input[0] == '}'){
        return false;
    }

    $numberOfOpenCrochet = 0;
    $numberOfClosedCrochet = 0;
    $numberOfOpenGuillemet = 0;
    $numberOfClosedGuillemet = 0;
    $numberOfOpenParenthese = 0;
    $numberOfClosedParenthese = 0;


    //extraire tout les symboles (){}[] de la string
    preg_match_all('/[()\[\]{}]/', $input, $matches);
    $string = implode('',$matches[0]);

    //comptez toutes les occurences de [{()}] 
    foreach (count_chars($string, 1) as $i => $val) {
        if(chr($i) == '['){
            $numberOfOpenCrochet = $val;
        }
        if(chr($i) == ']'){
            $numberOfClosedCrochet = $val;
        }
        if(chr($i) == '{'){
            $numberOfOpenGuillemet = $val;
        }
        if(chr($i) == '}'){
            $numberOfClosedGuillemet = $val;
        }
        if(chr($i) == '('){
            $numberOfOpenParenthese = $val;
        }
        if(chr($i) == ')'){
            $numberOfClosedParenthese = $val;
        } 
    }

    if(
        $numberOfOpenCrochet != $numberOfClosedCrochet ||
        $numberOfOpenGuillemet != $numberOfClosedGuillemet ||
        $numberOfOpenParenthese != $numberOfClosedParenthese
    ){return false;}

    $array = $matches[0];

    //vérifie si les caracteres correspondent
    for($i =0; $i<count($array); $i++){        
        if(
            ($array[$i] == '['  && $array[$i+1] == ']') ||
            ($array[$i] == '{'  && $array[$i+1] == '}') ||
            ($array[$i] == '('  && $array[$i+1] == ')')
        
        ){
            array_shift($array);
            array_shift($array);
            $i--;
        }
        elseif(
            ($array[$i] == '['  && $array[count($array)-1] == ']') ||
            ($array[$i] == '{'  && $array[count($array)-1] == '}') ||
            ($array[$i] == '('  && $array[count($array)-1] == ')')
          ){
            array_shift($array);
            array_pop($array);
            $i--;
        }
        else{
            return false;
        }
    }
    return true;    
}