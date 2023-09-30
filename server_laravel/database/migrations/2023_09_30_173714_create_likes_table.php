<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('likes', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key for likes
            $table->unsignedBigInteger('task_id'); // ID of the liked task
            $table->timestamps(); // Created at and updated at timestamps

            // Define foreign key constraint
            $table->foreign('task_id')
                ->references('id')
                ->on('tasks')
                ->onDelete('cascade'); // Cascade delete if a task is deleted
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('likes');
    }
};
