<?php

class Lasagna
{
    public function expectedCookTime()
    {
        return 40;
    }

    public function remainingCookTime($elapsed_minutes)
    {
        return 40-$elapsed_minutes;
    }

    public function totalPreparationTime($layers_to_prep)
    {
        return $layers_to_prep*2;
    }

    public function totalElapsedTime($layers_to_prep, $elapsed_minutes)
    {
        return ($layers_to_prep*2)+$elapsed_minutes;
    }

    public function alarm()
    {
       return "Ding!";
    }
}
