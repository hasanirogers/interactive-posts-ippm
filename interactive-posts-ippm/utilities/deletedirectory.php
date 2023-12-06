<?php

function ippm_delete_directory($directory) {
  if (!is_dir($directory)) :
    throw new InvalidArgumentException("$directory must be a directory");
  endif;

  if (substr($directory, strlen($directory) - 1, 1) != '/') :
    $directory .= '/';
  endif;

  $files = glob($directory . '*', GLOB_MARK);

  foreach ($files as $file) :
    if (is_dir($file)) :
      ippm_delete_directory($file);
    else :
      unlink($file);
    endif;
  endforeach;

  rmdir($directory);
}
