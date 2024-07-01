<?php

namespace App\Http\Middleware;

use Closure;

class RoleMiddleware
{
    public function handle($request, Closure $next, ...$roles)
    {
        if (! $request->user() || ! $request->user()->roles()->whereIn('name', $roles)->exists()) {
            abort(403, 'Unauthorized action.');
        }

        return $next($request);
    }
}
