Hello there! 
I built this react.js template for my personal website, salihzain.com. I can tell you that it isn't the best implementation of react, however, it helped me learn a lot. 

The current template uses static data represented by the static-data.js file in static_data folder. Feel free to change the data there if you wanna keep things boring and static, just like me. 
Otherwise, if you wanna connect an API, it's super easy! Install axios and then go to ./actions/index.js where you can use axios.get to fetch your data and instead of returning a static object, return the data recieved by the api. 
for example, this is the fetchPost action creator 

```javascript 
export const fetchPosts = () => {
    return {
        type: FETCH_POSTS,
        payload: posts
    }
}
```

The action creator above currently returns a static object. However, if you connect your api, it's just one line that you need to add: 

```javascript 
export const fetchPosts = () => {
	const myPosts = axios.get('https://fakeapi.com/api/fakeapi'); 
    return {
        type: FETCH_POSTS,
        payload: myPosts
    }
}
``` 

And that's it! 
Please consider that the structure of the data fetched from the api must comply with the state design of the template if you wanna keep it simple. Otherwise, you would need to do some work on the reducers side to adjust the state and on the components and containers side to also make sure everything is modified to the new state object. 

I do want to let you know that redux-promise is installed, which means, the state will update once the data is fetched from the api automatically and the components will rerender. You do NOT need to use any annoying .then stuff... Peice of cake right? I just thought about all these moving parts and tried to build the template such that it's easy to connect my api once it's created! 

Feel free to do whatever you want with my code. Really, it's MIT license. So no restrictions at all. 

Also, I wanna give a huge shoutout to Ohans Emmanuel. He helped me learn redux in the easiest way possible. Check out his amazing tutorial at https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6

Stay awesome,