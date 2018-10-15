<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

// @codingStandardsIgnoreLine
class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code_id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->integer('card_number');
            $table->string('gender');
            $table->date('birth_day');
            $table->string('phone_contact');
            $table->integer('company_id')->unsigned();
            $table->integer('work_space_id')->unsigned();
            $table->integer('position_id')->unsigned();
            $table->date('opening_date');
            $table->date('close_date');
            $table->integer('role')->unsigned()->default(1);
            $table->string('avatar');
            $table->tinyInteger('status')->default(1);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
