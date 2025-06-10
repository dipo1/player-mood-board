<?php

#Fallback for php version lower than 8.4
if(!function_exists('array_find')) {
    function array_find(array $array, callable $callback) {
        foreach ($array as $key => $value) {
            if ($callback($value, $key)) {
                return $value;
            }
        }
        return null;
    }
}
