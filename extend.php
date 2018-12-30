<?php

/**
 * 
 * CaptainCodey - Create a fully functional extension in a matter of minutes
 *
 * @package  Workbench
 * @author   Shahiem Seymor
 */

namespace CaptainCodey\Workbench;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use CaptainCodey\Workbench\Api\Controller;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    (new Extend\Routes('api'))
        ->post('/workbench', 'workbench.create', Controller\CreateExtensionController::class)
        ->get('/workbench/extensions', 'workbench.list', Controller\ListExtensionController::class),
    function (Dispatcher $events) {
    },
];