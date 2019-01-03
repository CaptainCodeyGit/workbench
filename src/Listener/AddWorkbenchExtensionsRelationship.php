<?php

/**
 * 
 * CaptainCodey - Create a fully functional extension in a matter of minutes
 *
 * @package  Workbench
 * @author   Shahiem Seymor
 */

namespace CaptainCodey\Workbench\Listener;

use CaptainCodey\Workbench\Extension;
use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\GetApiRelationship;
use Illuminate\Contracts\Events\Dispatcher;

class AddWorkbenchExtensionsRelationship
{

    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetApiRelationship::class, [$this, 'getApiRelationship']);
        $events->listen(WillSerializeData::class, [$this, 'loadWorkbenchRelationship']);
        $events->listen(WillGetData::class, [$this, 'includeWorkbenchRelationship']);
    }

    public function getApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(ForumSerializer::class, 'captainc_extensions')) {
            return $event->serializer->hasMany($event->model, 'CaptainCodey\Workbench\Api\Serializer\ExtensionSerializer', 'captainc_extensions');
        }
    }

    public function loadWorkbenchRelationship(WillSerializeData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->data['captainc_extensions'] = Extension::all();
        }
    }
  
    public function includeWorkbenchRelationship(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude('captainc_extensions');
        }
    }
}