<?php

function ippm_array_flatten($array) {
  foreach ($array as $arrayKey => $arrayValue) {
      $flattenArray[] = $arrayValue;
  }
  return $flattenArray;
}
