<?php

use Illuminate\Database\Seeder;

// @codingStandardsIgnoreLines
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name' => 'Admin',
                'code_id' => 'B121460',
                'card_number' => '0015254013',
                'email' => 'le.thi.thu@framgia.com',
                'role' => 0,
                'password' => bcrypt('12345'),
                'gender' => 'female',
                'birth_day' => '1996-12-12',
                'company_id' => 1, 'work_space_id' => 1,
                'position_id' => 1,
                'avatar' => config('images') . 'chan.jpg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01',
            ],
            [
                'name' => 'Normal user',
                'code_id' => 'B1214160',
                'card_number' => '11111111',
                'email' => 'lethucntt1@gmail.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'female',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 2,
                'position_id' => 2,
                'avatar' => config('images') . 'chan.jpg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01',
            ],
        ];

        DB::table('users')->insert($user);
    }
}
