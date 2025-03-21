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

class Robot
{
    private $name;
    private static $arrayName = [];

    public function __construct(){
        $this->name = $this->createName();
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function reset(): void
    {
        unset(self::$arrayName[$this->name]);
        $this->name = $this->createName();
    }

    public function createName () : string {
        
        $arrayLetters = range('A', 'Z');
        
        do{
            $firstLetter = $arrayLetters[rand(0, 25)];
            $secondLetter = $arrayLetters[rand(0, 25)];
            $Number = rand(100, 999);
            $name = $firstLetter.$secondLetter.$Number;
    
            if(!in_array($name, self::$arrayName)){
                array_push(self::$arrayName, $name);
                $unique = true;
            }
            else{
                $unique = false;
            }
            
        }while($unique == false);

        return $name;
    }
}