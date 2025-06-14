Hello, my task here is to re-design the Skip Selection page.

So my thought was, why not move the header from the top into a sidebar and make different views
that the user can switch between without losing his current selection.

Libraries used:
React
Axios for the API
Swiper for the carousel (offers a click and drag option)
Bootstrap for building the UI and making it responsive

All components created are in src/Components
You can adjust the theme colors from the index.css

Challenges:
My main challenge was something I noticed, that the API data doesn't have any Image URLs in order to link them. So first thing I did was go the live page and inspect the image URLs. I noticed that all URLs are similar, only the name of the image is changing in an obvious pattern: (sizeOfSkip-yarder-skip.jpg). So in my map function, I added that the url takes the actual size of the skip and add it before the image name and it worked liked a charm.

After completing this small challenge, I was able to continue building the UI without any issues.

Features:
View switching:
1. Grid View
2. Carousel View
3. List View

The user can navigate easily between these views without losing his current progress(Selected skip)
by simply clicking on 1 of 3 icons displayed at the top.

After selection, an extra confirmation step is displayed at the bottom of the page displaying extra info before proceeding to the next step.

I hope you like the re-design, and hope to hear from you soon.

