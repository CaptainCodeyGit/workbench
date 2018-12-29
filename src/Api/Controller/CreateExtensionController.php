<?php

/**
 * CaptainCodey - Create a fully functional extension in a matter of minutes
 *
 * @package  Workbench
 * @author   Shahiem Seymor
 */

namespace CaptainCodey\Workbench\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use CaptainCodey\Workbench\Workbench;
use CaptainCodey\Workbench\Api\Serializer\ExtensionSerializer;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateExtensionController extends AbstractCreateController
{
    
    public $serializer = ExtensionSerializer::class;

    public function __construct(Workbench $workbench)
    {
        $this->workbench = $workbench;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $attributes = $request->getParsedBody();

        return $this->workbench->craft($attributes);
    }

}