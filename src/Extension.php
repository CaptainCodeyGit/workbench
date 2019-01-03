<?php

/**
 * CaptainCodey - Create a fully functional extension in a matter of minutes
 *
 * @package  Workbench
 * @author   Shahiem Seymor
 */

namespace CaptainCodey\Workbench;

use Flarum\Database\AbstractModel;

class Extension extends AbstractModel
{
  
    public $timestamps = true;

    protected $table = 'captainc_extensions';

    protected $visible = [
        'name',
    ];

}
