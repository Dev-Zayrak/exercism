<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        $trimmed = trim($name);
        $fstchar = substr($trimmed, 0, 1);
        return $fstchar;
    }

    public function initial(string $name): string
    {
        
        $firstChar = $this->firstLetter($name);
        $uppercase = strtoupper($firstChar);
        $firstChar = $uppercase . '.';
        return $firstChar;
    }

    public function initials(string $name): string
    {
        $indexEspace = strpos($name, " ");
        $prenom = substr($name, 0, $indexEspace);
        $nom = substr($name, $indexEspace, strlen($name));
        $lettrePrenom = $this->initial($prenom);
        $lettreNom = $this->initial($nom);
        $initials=  $lettrePrenom . ' ' . $lettreNom ;
        return $initials;
            
    }

public function pair(string $sweetheart_a, string $sweetheart_b): string
{
    $personne1 = $this->initials($sweetheart_a);
    $personne2 = $this->initials($sweetheart_b);

    return <<<END
     ******       ******
   **      **   **      **
 **         ** **         **
**            *            **
**                         **
**     $personne1  +  $personne2     **
 **                       **
   **                   **
     **               **
       **           **
         **       **
           **   **
             ***
              *
END;
}
}