<?php

namespace App\Http\Controllers;

use App\Repositories\Post\PostRepositoryInterface;
use App\Repositories\Tag\TagRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{

    protected $tag_repository;

    protected $post_repository;

    public function __construct(TagRepositoryInterface $tag_repository,PostRepositoryInterface $post_repository_interface)
    {
        $this->tag_repository = $tag_repository;

        $this->post_repository = $post_repository_interface;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->tag_repository->getAllTags();
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
            $tags = $this->tag_repository->addNewTags($request);
            $post = $this->post_repository->savePost($request);
            DB::commit();
        } catch (\Exception $e){
            DB::rollback();
            throw $e;
        }

        if ($post !== null && $tags !== null){
            return response()->json(['result' => !$post->tags()->saveMany($tags)->isEmpty()]);
        } else if ($post !== null){
            return response()->json(['result' => true]);
        } else {
            return response()->json(['result' => false]);
            throw $e;
        }
        return response()->json(['result' => false]);
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
    public function update(Request $request, $id)
    {
        //
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
