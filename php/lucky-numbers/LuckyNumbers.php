<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        return (implode($digitsOfNumber1)+implode($digitsOfNumber2));
    }

    public function isPalindrome(int $number): bool 
    {
        $IsGood = true;
        
        if($number < 0) { return false; };
        $array  = array_map('intval', str_split($number));
        $arraySize = count($array);

        if($arraySize == 1){ return true ;};
        
        for($i = 0; $i<$arraySize; $i++){
            if($array[$i] != $array[$arraySize-$i-1]){
            $IsGood = false;
            }
        }
        return $IsGood; 
    }

    public function validate(string $input): string
    {
        if(empty($input) && $input != '0'){return 'Required field';};
        var_dump($input);
        $info = (int) $input;
        if($info<=0){return 'Must be a whole number larger than 0';};
        
        return '';
        
    }
}
