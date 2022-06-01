import React from 'react';

const Banner = () => {
    return (
        <div class="hero h-[500px]" style={{ background: 'url(https://i.ibb.co/tZtxbYy/Capture-2.png)' }}>
            <div class="hero-overlay bg-opacity-70"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome to Meditech</h1>
                    <p class="mb-5">One of the best hospital in your area. You can appoint your preferred service with your preferred doctor.</p>
                    <button class="btn btn-success"><a href="#services">Discover Now!</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;