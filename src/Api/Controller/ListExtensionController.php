<?php

/**
 * CaptainCodey - Create a fully functional extension in a matter of minutes
 *
 * @package  Workbench
 * @author   Shahiem Seymor
 */

namespace CaptainCodey\Workbench\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use CaptainCodey\Workbench\Api\Serializer\ExtensionSerializer;
use CaptainCodey\Workbench\Extension;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListExtensionController extends AbstractListController
{
    
    public $serializer = ExtensionSerializer::class;

    public function __construct(Extension $extension)
    {
        $this->extension = $extension;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        return $this->extension->all();
    }

}