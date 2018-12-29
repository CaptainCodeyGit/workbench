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
            'title' => $discussion->title,
        ];
    }
}