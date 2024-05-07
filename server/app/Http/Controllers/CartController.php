<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller {
    public function index() {
        $carts = Cart::join('products', 'carts.product_id', '=', 'products.id')
            ->select(
                'carts.id as cart_id',
                'products.name',
                'carts.quantity',
                'products.price',
                'carts.total_price'
            )
            ->get();

        $totalQuantity = $carts->sum('quantity');
        $taxRate = 0.05;
        $totalPrice = $carts->sum('total_price');
        $tax = $totalPrice * $taxRate;
        $shipping = ($totalPrice > 0) ? 10 : 0;

        return response()->json([
            'products' => $carts,
            'summary' => [
                "sub_total" => $totalPrice,
                "shipping" => $shipping,
                "tax" => $tax,
                "total" => $totalPrice + $tax + $shipping,
                "total_quantity" => $totalQuantity
            ]
        ]);
    }

    public function store(Request $request) {
        $data = $request->validate([
            "product_id" => "required"
        ]);

        $product = Product::findOrFail($data["product_id"]);

        // Check if the product already exists in the cart
        $cartItem = \App\Models\Cart::where('product_id', $data['product_id'])->first();

        if ($cartItem) {
            // If the product exists in the cart, increment the quantity
            $cartItem->increment('quantity');
            $cartItem->update(['total_price' => $cartItem->quantity * $product->price]);
        } else {
            // If the product does not exist in the cart, add it
            $totalPrice = $product->price;

            $cartItem = \App\Models\Cart::create([
                'product_id' => $data['product_id'],
                'quantity' => 1,
                'total_price' => $totalPrice
            ]);
        }

        return response()->json($cartItem, 201);
    }

    public function destroy($id) {
        $cartItem = Cart::findOrFail($id);
        $cartItem->delete();
        return response()->json(['message' => 'Cart item deleted successfully'], 200);
    }

    public function checkout(Request $request) {
        $data = $request->validate([
            'billing_name' => 'required',
            'billing_address' => 'required',
            'phone_number' => 'required',
        ]);
        $order = Order::create($data);

        Cart::truncate();

        return response()->json(['message' => 'Order placed successfully'], 200);
    }
}
