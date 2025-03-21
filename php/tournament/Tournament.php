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

class Tournament
{
     
    public function tally($scores){
        $affichage= 'Team                           | MP |  W |  D |  L |  P \n';

        if($scores == ''){
            return "Team                           | MP |  W |  D |  L |  P";
        }
        //supprimer les sauts de ligne dans le string et les remplacer par des ;
        $cleanScores = str_replace("\n", ";", $scores);
        
        //mettre le string dans un tableau 
        // premiere valeur : team1    deuxième valeur : team2    troisième valeur : score ...
        $arrayResulats = explode(";", $cleanScores);

        //parcourir le tableau pour assigner les equipes dans un deuxieme tableau
        $arrayTeams = [];
        for($i=0; $i<count($arrayResulats); $i+=3){
            
            $arrayTeams[$i] = $arrayResulats[$i];
            $arrayTeams[$i+1] = $arrayResulats[$i+1];
        }

        //supprimer les doublons dans le tableau equipe via la fonction php array_unique
        $arrayTeamsUnique = array_unique($arrayTeams);

        //réindexer le tableau 
        //array_values(array $array): array
        $arrayReindexer = array_values($arrayTeamsUnique);

        //mettre les valeurs du tableau dans la clé et mettre en valeurs 
        //des string avec |  0 |  0 |  0 |  0 |  0\n en plus derrière
        $arrayAffichage = [];
        for($i=0; $i<count($arrayReindexer); $i++){
            $arrayAffichage[$arrayReindexer[$i]] = ' |  0 |  0 |  0 |  0 |  0\n';
        }

            
        // compter les occurrences de chaque équipe dans le tableau $arrayTeams
        $mpCounts = array_count_values($arrayTeams);
        
        //parcourir les tableaux pour assigner le nombre de match jouer
        foreach ($arrayAffichage as $key => $value) {
            if (isset($mpCounts[$key])) {
                $arrayAffichage[$key] = " |  " . $mpCounts[$key] . " |  0 |  0 |  0 |  0\n";
            }
        }
       
        
        /*
         creer un tableau victoire qui compte les victoires de chaque équipe avec comme
         clé nom equipe et comme valeur nombre victoire
         Et faire la meme chose pour les défaites et les nuls
         On assigne ensuite les résultats aux équipes et on calcule leur score
        */
        
        $arrayWin = [];
        $arrayLoss = [];
        $arrayDraw = [];
        //OK
        for($i=0; $i<count($arrayResulats); $i++){
            
            //victoire
            if($arrayResulats[$i] == "win"){
                $teamWin = $arrayResulats[$i-2];
                $teamLose= $arrayResulats[$i-1];
                
                if(isset($arrayWin[$teamWin])){
                    $arrayWin[$teamWin]++;
                }else{
                    $arrayWin[$teamWin] = 1;
                }
                if(isset($arrayLoss[$teamLose])){
                    $arrayLoss[$teamLose]++;
                }else{
                    $arrayLoss[$teamLose] = 1;
                }


                
                /*nombre de match */
                
                $arrayAffichage[$teamWin] = " | " . $mpCounts[$teamWin] . " | ".(isset($arrayWin[$teamWin]) ? $arrayWin[$teamWin] : 0)." | ".(isset($arrayDraw[$teamWin]) ? $arrayDraw[$teamWin] : 0)." | ".(isset($arrayLoss[$teamWin]) ? $arrayLoss[$teamWin] : 0)." | ".(((isset($arrayWin[$teamWin]) ? $arrayWin[$teamWin] : 0)*3)+(isset($arrayDraw[$teamWin]) ? $arrayDraw[$teamWin] : 0)).' \n';
                
                $arrayAffichage[$teamLose] = " | " . $mpCounts[$teamLose] . " | ".(isset($arrayWin[$teamLose]) ? $arrayWin[$teamLose] : 0)." | ".(isset($arrayDraw[$teamLose]) ? $arrayDraw[$teamLose] : 0)." | ".(isset($arrayLoss[$teamLose]) ? $arrayLoss[$teamLose] : 0)." | ".(((isset($arrayWin[$teamLose]) ? $arrayWin[$teamLose] : 0)*3)+(isset($arrayDraw[$teamLose]) ? $arrayDraw[$teamLose] : 0)).' \n';
            }

            //défaite
            if($arrayResulats[$i] == "loss"){
                $teamWin = $arrayResulats[$i-1];
                $teamLose= $arrayResulats[$i-2];

                
                if(isset($arrayWin[$teamWin])){
                    $arrayWin[$teamWin]++;
                }else{
                    $arrayWin[$teamWin] = 1;
                }
                if(isset($arrayLoss[$teamLose])){
                    $arrayLoss[$teamLose]++;
                }else{
                    $arrayLoss[$teamLose] = 1;
                }

                $arrayAffichage[$teamWin] = " | " . $mpCounts[$teamWin] . " | ".(isset($arrayWin[$teamWin]) ? $arrayWin[$teamWin] : 0)." | ".(isset($arrayDraw[$teamWin]) ? $arrayDraw[$teamWin] : 0)." | ".(isset($arrayLoss[$teamWin]) ? $arrayLoss[$teamWin] : 0)." | ".(((isset($arrayWin[$teamWin]) ? $arrayWin[$teamWin] : 0)*3)+(isset($arrayDraw[$teamWin]) ? $arrayDraw[$teamWin] : 0)).' \n';
                
                $arrayAffichage[$teamLose] = " | " . $mpCounts[$teamLose] . " | ".(isset($arrayWin[$teamLose]) ? $arrayWin[$teamLose] : 0)." | ".(isset($arrayDraw[$teamLose]) ? $arrayDraw[$teamLose] : 0)." | ".(isset($arrayLoss[$teamLose]) ? $arrayLoss[$teamLose] : 0)." | ".(((isset($arrayWin[$teamLose]) ? $arrayWin[$teamLose] : 0)*3)+(isset($arrayDraw[$teamLose]) ? $arrayDraw[$teamLose] : 0)).' \n';
            }

            //Nul
            if($arrayResulats[$i] == "draw"){
                $team1 = $arrayResulats[$i-2];
                $team2= $arrayResulats[$i-1];
                
                if(isset($arrayDraw[$team1])){
                    $arrayDraw[$team1]++;
                }else{
                    $arrayDraw[$team1] = 1;
                }
                if(isset($arrayDraw[$team2])){
                    $arrayDraw[$team2]++;
                }else{
                    $arrayDraw[$team2] = 1;
                }

                $arrayAffichage[$team1] = " | " . $mpCounts[$team1] . " | ".(isset($arrayWin[$team1]) ? $arrayWin[$team1] : 0)." | ".(isset($arrayDraw[$team1]) ? $arrayDraw[$team1] : 0)." | ".(isset($arrayLoss[$team1]) ? $arrayLoss[$team1] : 0)." | ".(((isset($arrayWin[$team1]) ? $arrayWin[$team1] : 0)*3)+(isset($arrayDraw[$team1]) ? $arrayDraw[$team1] : 0)).' \n';

                $arrayAffichage[$team2] = " | " . $mpCounts[$team2] . " | ".(isset($arrayWin[$team2]) ? $arrayWin[$team2] : 0)." | ".(isset($arrayDraw[$team2]) ? $arrayDraw[$team2] : 0)." |  ".(isset($arrayLoss[$team2]) ? $arrayLoss[$team2] : 0)." |  ".(((isset($arrayWin[$team2]) ? $arrayWin[$team2] : 0)*3)+(isset($arrayDraw[$team2]) ? $arrayDraw[$team2] : 0)).' \n';
            }  


            
        }
//PAS OK
        
       

        //concaténer le tableau $arrayAffichage existants pour faire l'affichage final dans un string
        foreach($arrayAffichage as $key => $value){
            $affichage .= $key.$value;
        }


        // Diviser la chaîne en lignes
        $lines = explode('\n', trim($affichage));


        //supprimer le dernier element vide du tableau
        array_pop($lines);

        // Première ligne est l'en-tête
        $header = array_shift($lines);
        $headerFormatted = sprintf("%-30s | %2s | %2s | %2s | %2s | %2s", ...explode(' | ', trim($header)));

        // Réinitialiser la chaîne formatée avec l'en-tête
        $formattedString = $headerFormatted . "\n";

        // Formater chaque ligne

        $arrayTrier = [];
        foreach ($lines as $line) {
            $columns = explode(' | ', trim($line));
            $formattedLine = sprintf(
                "%-30s | %2d | %2d | %2d | %2d | %2d",
                trim($columns[0]),
                $columns[1],
                $columns[2],
                $columns[3],
                $columns[4],
                $columns[5]
            );

            $points = (int)trim($columns[5]);

            //regarder si l'index est déjà attribué dans le tableau
            if(isset($arrayTrier[$points])){

                //si la donnée existe déjà on va comparer les noms d'équipes pour les trier par ordre alphabétique
                //et on concatène les deux strings ensemble dans la même ligne du tableau
                $resultat = strcmp($arrayTrier[$points],$formattedLine);

                if($resultat < 0){ //string A = 1 avant string B =?   =>>> A = 2 B =1
                    $stringCombiner = $arrayTrier[$points]. "\n".$formattedLine;
                    $arrayTrier[$points] = $stringCombiner;

                }else{
                    $stringCombiner = $formattedLine. "\n".$arrayTrier[$points];
                    $arrayTrier[$points] = $stringCombiner;
                }
                //si l'index n'est pas attribué on lui attribut une valeur
            }else{

                $arrayTrier[$points] = $formattedLine;
            }
        }

       krsort($arrayTrier);

        $scoreConcatener ="";
        foreach($arrayTrier as $key => $value){
            $scoreConcatener .=  $value. "\n";
        }

        //rajouter l'entete avec le score
        $formattedString .= $scoreConcatener;


        //on retire le dernier \n en trop a la fin du string
        $modifiedString = substr($formattedString, 0, -1);



        //renvoyer le string final
        return $modifiedString;
    }
}