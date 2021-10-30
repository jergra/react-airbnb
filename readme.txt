October 30, 2021

C:\webdev\react-airbnb>

Airbnb built with React, Next, Tailwind
   tutorial by Sonny Sangha
   https://www.youtube.com/watch?v=BbilqOBOfg8&t=5s

start locally:
    npm run dev 

deployed:
    https://react-airbnb-zeta.vercel.app/

update deployed website:
    git add .
    git commit --m "message"
    git push

This website keeps secret key secret, i.e. not visible
on github or 'View Page Source':
    Map.js line 29
    next.config.js
    Vercel -> Project Settings -> Environmental Variable -> 
    add mapbox_key here
                