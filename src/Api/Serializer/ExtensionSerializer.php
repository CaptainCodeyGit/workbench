<?php

/**
 * CaptainCodey - Create a fully functional extension in a matter of minutes
 *
 * @package  Workbench
 * @author   Shahiem Seymor
 */

namespace CaptainCodey\Workbench\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class ExtensionSerializer extends AbstractSerializer
{
    protected $type = 'captainc_extensions';

    protected function getDefaultAttributes($discussion)
    {
        return [
            'name' => $discussion->name,
            'author' => $discussion->author,
            'icon' => $discussion->icon,
            'icon_background' => $discussion->icon_background,
            'icon_color' => $discussion->icon_color,
        ];
    }
}