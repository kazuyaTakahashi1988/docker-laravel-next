<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['category_name' => 'エンターテインメントと趣味'],
            ['category_name' => '音楽、映画、本'],
            ['category_name' => 'アニメ、漫画、ゲーム'],
            ['category_name' => '暮らしと生活ガイド'],
            ['category_name' => '料理、レシピ'],
            ['category_name' => 'ペット、動物'],
            ['category_name' => '健康、美容とファッション'],
            ['category_name' => 'スポーツ'],
            ['category_name' => '旅行、海外'],
            ['category_name' => '生き方と恋愛、人間関係の悩み'],
            ['category_name' => '子育てと学校'],
            ['category_name' => 'マナー、冠婚葬祭'],
            ['category_name' => '年中行事'],
        ]);  
    }
}
