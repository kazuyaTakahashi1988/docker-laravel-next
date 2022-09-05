<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
          [
            'user_id' => 1,
            'category_id' => 1,
            'title' => 'タイトル01',
            'content' => 'コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::コンテンツ01::'
          ],
          [
            'user_id' => 1,
            'category_id' => 1,
            'title' => 'タイトル02',
            'content' => 'コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::コンテンツ02::'
          ],
          [
            'user_id' => 1,
            'category_id' => 1,
            'title' => 'タイトル03',
            'content' => 'コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::コンテンツ03::'
          ],
          [
            'user_id' => 2,
            'category_id' => 2,
            'title' => 'タイトル04',
            'content' => 'コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::コンテンツ04::'
          ],
          [
            'user_id' => 2,
            'category_id' => 2,
            'title' => 'タイトル05',
            'content' => 'コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::コンテンツ05::'
          ],
          [
            'user_id' => 2,
            'category_id' => 2,
            'title' => 'タイトル06',
            'content' => 'コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::コンテンツ06::'
          ],
          [
            'user_id' => 3,
            'category_id' => 3,
            'title' => 'タイトル07',
            'content' => 'コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::コンテンツ07::'
          ],
          [
            'user_id' => 3,
            'category_id' => 3,
            'title' => 'タイトル08',
            'content' => 'コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::コンテンツ08::'
          ],
          [
            'user_id' => 3,
            'category_id' => 3,
            'title' => 'タイトル09',
            'content' => 'コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::コンテンツ09::'
          ],
          [
            'user_id' => 4,
            'category_id' => 4,
            'title' => 'タイトル10',
            'content' => 'コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::コンテンツ10::'
          ]
        ]);
    }
}