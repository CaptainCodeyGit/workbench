<?php

/**
 * CaptainCodey - Create a fully functional extension in a matter of minutes
 *
 * @package  Workbench
 * @author   Shahiem Seymor
 */

namespace CaptainCodey\Workbench;

use CaptainCodey\Workbench\WorkbenchValidator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

class Workbench 
{

    protected $validator;

     public function __construct(WorkbenchValidator $validator)
    {
        $this->validator = $validator;
    }

    public function craft($data)
    {
        $this->validator->assertValid($data);

        $sourcePath = base_path().'/extensions/workbench/boilerplate';
        $destionationPath = 'extensions/'.str_slug($data['name']);

        $recursiveDirectory = new RecursiveDirectoryIterator($sourcePath);
        $recursiveIterator = new RecursiveIteratorIterator($recursiveDirectory, RecursiveIteratorIterator::SELF_FIRST);

        mkdir($destionationPath);

        foreach ($recursiveIterator as $file) {
            $fileName = $recursiveIterator->getFileName();
    
            // Exclude files/folder name with dots
            if (($fileName != '.') && ($fileName != '..')) { 
                $destinationFile = $destionationPath.'/'.$fileName;
    
                // Create file path for files in subdirectories
                if (basename(dirname(($file))) != 'boilerplate') {
                    $destdirName = basename(dirname(($file)));
    
                    $destinationFile = $destionationPath.'/'.$destdirName.'/'.$fileName;
                }
    
                // Create subdirectories
                if (is_dir($file)) {
                    mkdir($destionationPath .'/'. $fileName);
                }
                
                // Copy files to new folder
                copy($file, $destinationFile); 
    
                $fileContents = file_get_contents($destinationFile);
    
                // Replace strings
                $extensionPlaceholder = array(
                    'Author\Packagename' => studly_case($data['author']).'\\'.studly_case($data['name']),
                    '<!-captaincodey/author-!>' => $data['author'],
                    '<!-captaincodey/package-!>' => $data['name'],
                    '<!-captaincodey/description-!>' => $data['description'],
                );
    
                file_put_contents($destinationFile, strtr($fileContents, $extensionPlaceholder));
            }
        }  
    }
}