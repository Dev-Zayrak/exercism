<?php

declare(strict_types=1);

function from(DateTimeImmutable $date): DateTimeImmutable
{
    $dateInSeconds = new DateTimeImmutable();
    $dateInSeconds = $date->modify('+ 1000000000 seconds');

    return $dateInSeconds;
}