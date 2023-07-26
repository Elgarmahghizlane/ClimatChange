<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Laravel\Jetstream\Jetstream;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::version(function () {
            return Jetstream::version();
        });

        Inertia::share([
            'app_name' => config('app.name'),
            'jetstream' => function () {
                return [
                    'canCreateTeam' => Jetstream::hasTeamFeatures(),
                    'canManageTwoFactorAuthentication' => $this->user->two_factor_secret !== null,
                    'canUpdatePassword' => Jetstream::hasAccountFeatures(),
                    'canUpdateProfileInformation' => Jetstream::hasProfileFeatures(),
                    'flash' => [
                        'success' => session('success'),
                    ],
                ];
            },
        ]);
    }
}
