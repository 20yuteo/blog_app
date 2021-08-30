<?php

namespace App\Http\Controllers;

use App\Repositories\Post\PostRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    protected $post_repository;

    public function __construct(PostRepositoryInterface $post_repository_interface)
    {
        $this->post_repository = $post_repository_interface;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->post_repository->getAllPosts();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $this->post_repository->savePost($request);
            DB::commit();
            return response()->json(['result' => true]);
        } catch (\Exception $e){
            DB::rollback();
            throw $e;
            return response()->json(['result' => false]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Post $post, Request $request)
    {
        DB::beginTransaction();
        try {
            $this->post_repository->updatePost($post, $request);
            DB::commit();
            return response()->json(['result' => true]);
        } catch (\Exception $e){
            DB::rollback();
            throw $e;
            return response()->json(['result' => false]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
