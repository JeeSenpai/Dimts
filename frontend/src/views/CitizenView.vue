<template>
    <div class="flex flex-col h-screen justify-between overflow-hidden">
        <nav class="font-sans flex relative rounded-b-md flex-row justify-between sm:text-left py-3 px-6 bg-white navBar w-full" aria-label="Navbar">
        <div class="mt-1 flex-1">
            <div class="text-xl font-semibold no-underline text-grey-darkest hover:text-blue-dark">{{$route.meta.title}}</div>
        </div>
        </nav>

        <main class="mb-auto w-screen h-screen overflow-y-auto overflow-x-hidden">
            <router-view></router-view>
        </main>
    
        <footer class="h-18 bg-white Footer">
            <div class="m-auto">
                <div class="flex flex-row">
                        <router-link :to="'/citizen/court-rules'" class="items-center mx-auto p-2 text-base font-sans text-gray-800 rounded-lg routerButton">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                            </svg>
                            <span class="text-sm">Rules</span>
                        </router-link>
                        <router-link :to="'/citizen/cases'" class="items-center mx-auto p-2 text-base font-sans text-gray-800 rounded-lg routerButton">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                            </svg>
                            <span class="text-sm">Cases</span>
                        </router-link>
                        <router-link :to="'/citizen/notification'" class="items-center mx-auto p-2 text-base font-sans text-gray-800 rounded-lg routerButton">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mx-auto">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                            <span class="text-sm">Notifs</span>
                        </router-link>
                        <router-link :to="'/citizen/profile'" class="items-center mx-auto p-2 text-base font-sans text-gray-800 rounded-lg routerButton">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mx-auto">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <span class="text-sm">Profile</span>
                        </router-link>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>

</script>

<style scoped>
    .navBar{
      filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.1));
      z-index: 45;
    }
    .Footer{
        filter: drop-shadow(0 -6px 4px rgb(0 0 0 / 0.1));
        z-index: 45;
    }
    :hover.routerButton{
      color: #BF40BF;
    }
    .router-link-active, .router-link-exact-active {
      color: #BF40BF;
    }

    /* Chrome, Edge, and Safari */
    ::-webkit-scrollbar {
    display: none;
    }
</style>