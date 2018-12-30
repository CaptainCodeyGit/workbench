<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasTable('captainc_extensions'))
        {
            $schema->create('captainc_extensions', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name');
                $table->string('author');
                $table->text('description');
                $table->string('icon')->nullable();
                $table->string('icon_color')->nullable();
                $table->string('icon_background')->nullable();
                $table->timestamps();
            });
        }
    },

    'down' => function (Builder $schema) {
        $schema->drop('captainc_extensions');
    }
];
