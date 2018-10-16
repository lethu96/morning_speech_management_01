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
                'name' => 'Lê Thị Thư',
                'code_id' => 'B121460',
                'card_number' => '0015254013',
                'email' => 'le.thi.thu@framgia.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'female',
                'birth_day' => '1996-12-12',
                'company_id' => 1, 'work_space_id' => 1,
                'position_id' => 1,
                'avatar' => '/images/th.jpg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'Admin',
                'code_id' => 'B1214160',
                'card_number' => '11111111',
                'email' => 'lethucntt1@gmail.com',
                'role' => 2,
                'password' => bcrypt('12345'),
                'gender' => 'female',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 2,
                'position_id' => 2,
                'avatar' => '/images/th.jpg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'Tạ Quang Hiếu',
                'code_id' => 'B334160',
                'card_number' => '22222',
                'email' => 'hieu@gmail.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'male',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 3,
                'position_id' => 4,
                'avatar' => '/images/hieu.jpeg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'Nguyễn Xuân Dương',
                'code_id' => 'B45660',
                'card_number' => '8868678',
                'email' => 'duong@framgia.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'male',
                'birth_day' => '1996-12-12',
                'company_id' => 1,
                'work_space_id' => 1,
                'position_id' => 1,
                'avatar' => '/images/duong.jpeg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'Vũ Thị Nga',
                'code_id' => 'B1675',
                'card_number' => '98796687',
                'email' => 'nga@gmail.com',
                'role' => 2,
                'password' => bcrypt('12345'),
                'gender' => 'female',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 1,
                'position_id' => 3,
                'avatar' => '/images/kang.jpg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'Nguyễn Thị Huế',
                'code_id' => 'B087686',
                'card_number' => '154564',
                'email' => 'hue@gmail.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'female',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 1,
                'position_id' => 6,
                'avatar' => '/images/somi.jpg',
                'phone_contact' => '09656',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],

            [
                'name' => 'Lê Thị Tâm',
                'code_id' => 'B121545',
                'card_number' => '13453453',
                'email' => 'letam@gmail.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'male',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 1,
                'position_id' => 5,
                'avatar' => '/images/pf-gallery1.png',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'Park Chan Yoel',
                'code_id' => 'B3454',
                'card_number' => '978654',
                'email' => 'chanyoel@gmail.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'male',
                'birth_day' => '1996-12-12',
                'company_id' => 1,
                'work_space_id' => 1,
                'position_id' => 1,
                'avatar' => '/images/chan.jpeg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'Luhan',
                'code_id' => 'B4353',
                'card_number' => '0965445',
                'email' => 'luhan@gmail.com',
                'role' => 2,
                'password' => bcrypt('12345'),
                'gender' => 'male',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 3,
                'position_id' => 5,
                'avatar' => '/images/luhan.jpg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'Dilraba',
                'code_id' => 'B890',
                'card_number' => '0767867',
                'email' => 'dilraba@gmail.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'female',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 1,
                'position_id' => 1,
                'avatar' => '/images/dilraba.jpg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
            [
                'name' => 'jungkook',
                'code_id' => 'B098657',
                'card_number' => '3634534',
                'email' => 'jungkook@gmail.com',
                'role' => 1,
                'password' => bcrypt('12345'),
                'gender' => 'male',
                'birth_day' => '1997-01-20',
                'company_id' => 1,
                'work_space_id' => 3,
                'position_id' => 4,
                'avatar' => '/images/jungkook.jpg',
                'phone_contact' => '84987654321',
                'opening_date' => '2018-02-12 15:20:01',
                'close_date' => '2019-02-12 15:20:01'
            ],
        ];

        DB::table('users')->insert($user);
    }
}
