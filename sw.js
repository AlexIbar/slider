var name = 'name-v1',
    urls = [
        './images/cinco.jpg',
        './images/dos.jpg',
        './images/tras.jpg',
        './images/tres.jpg',
        './images/uno.jpg',
        './images/uno.jpeg',
        './index.html',
        './index.css',
        './lib.js',
        './js/todos.js'
    ]
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(name)
        .then((cache)=>cache.addAll(urls))
    )
})
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
            .then(response=>{
                if(response){
                    return response
                }
   var fechRequest = event.request.clone()
   return fetch(fechRequest)
   .then(response=>{
       if(!response || response.status !== 200){
           console.log(response)
           return response
       }
       var responseToCache=response.clone()
       caches.open(name)
           .then(cache=>{
           cache.put(event.request, responseToCache)
       })
       return response
   })
            })
    )
})
self.addEventListener('activate', function(event){
    var cacheWhite = ['name-v1','name-v2']
    event.waitUntil(
        caches.keys().then((caches_name)=>{
            caches_name.map(function(na){
                if(cacheWhite.indexOf(na) == -1){
                    return caches.delete(caches_name)
                }
            })
        })
    )
})