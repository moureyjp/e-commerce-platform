<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        DB::table("products")->insert([
            [
                'name' => 'Noise Cancelling Headphones',
                'description' => 'Premium sound quality',
                'price' => 80,
            ],
            [
                'name' => 'Wireless Gaming Mouse',
                'description' => 'Responsive and precise',
                'price' => 40,
            ],
            [
                'name' => 'Portable Power Bank',
                'description' => 'High capacity',
                'price' => 25,
            ],
            [
                'name' => 'Smartwatch',
                'description' => 'Health and fitness tracking',
                'price' => 120,
            ],
            [
                'name' => 'LED Desk Lamp',
                'description' => 'Adjustable brightness',
                'price' => 35,
            ],
            [
                'name' => 'Electric Toothbrush',
                'description' => 'Deep cleaning',
                'price' => 45,
            ],
            [
                'name' => 'External Hard Drive',
                'description' => 'Large storage capacity',
                'price' => 60,
            ],
            [
                'name' => 'Portable Blender',
                'description' => 'Blend on the go',
                'price' => 55,
            ],
            [
                'name' => 'Digital Camera',
                'description' => 'High resolution images',
                'price' => 200,
            ],
            [
                'name' => 'Yoga Mat',
                'description' => 'Non-slip surface',
                'price' => 20,
            ],
        ]);
    }
}
