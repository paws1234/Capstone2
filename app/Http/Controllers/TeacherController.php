<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Models\User;

class TeacherController extends Controller
{
    public function index()
    {
        return Teacher::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:teachers,email',
            'password' => 'required|string|min:6', 
        ]);
    
        $validatedData['password'] = bcrypt($request->password);
    
       
        $teacher = Teacher::create($validatedData);
        
       
        $user = new User();
        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->password = bcrypt($request->password);
        $user->role = 2; 
        $user->save();

        return $teacher; 
    }

    public function show(Teacher $teacher)
    {
        return $teacher;
    }

    public function update(Request $request, Teacher $teacher)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:teachers,email,' . $teacher->id,
            'password' => 'nullable|string|min:6', 
        ]);
    
       
        if ($request->filled('password')) {
            $validatedData['password'] = bcrypt($request->password);
        }
    
        $teacher->update($validatedData);
    
        return $teacher;
    }

    public function destroy(Teacher $teacher)
    {
        $teacher->delete();

        return response()->json(['message' => 'Teacher deleted']);
    }
}
