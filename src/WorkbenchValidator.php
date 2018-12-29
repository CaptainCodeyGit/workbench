<?php

/**
 * CaptainCodey - Create a fully functional extension in a matter of minutes
 *
 * @package  Workbench
 * @author   Shahiem Seymor
 */

namespace CaptainCodey\Workbench;

use Flarum\Foundation\AbstractValidator;

class WorkbenchValidator extends AbstractValidator
{

    protected $rules = [
        'name' => ['required', 'min:2', 'regex:/^[\pL\s\-]+$/u'],
        'author' => ['required', 'min:2', 'regex:/^[\pL\s\-]+$/u'],
        'description' => ['string', 'max:300'],
        'color' => ['regex:/^#([a-f0-9]{6}|[a-f0-9]{3})$/i'],
        'background_color' => ['regex:/^#([a-f0-9]{6}|[a-f0-9]{3})$/i'],
    ];

}