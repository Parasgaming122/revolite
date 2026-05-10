Mobile: 
Performance
Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.
0–49
50–89
90–100
Final Screenshot

Metrics
Expand view
First Contentful Paint
2.7 s
Largest Contentful Paint
2.9 s
Total Blocking Time
20 ms
Cumulative Layout Shift
0
Speed Index
2.7 s
Captured at May 10, 2026, 7:23 PM GMT+5
Emulated Moto G Power with Lighthouse 13.0.1
Single page session
Initial page load
Slow 4G throttling
Using HeadlessChromium 146.0.7680.177 with lr
View Treemap
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Show audits relevant to:

All

FCP

LCP

TBT

CLS
Insights
Render blocking requests Est savings of 1,010 ms
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.LCPFCPUnscored
URL
Transfer Size
Duration
vercel.app 1st party
2.7 KiB	170 ms
/assets/index-DHQa2h6H.css(revolite.vercel.app)
2.7 KiB
170 ms
Google Fonts cdn 
3.3 KiB	1,330 ms
/css2?family=…(fonts.googleapis.com)
1.8 KiB
580 ms
/css2?family=…(fonts.googleapis.com)
1.5 KiB
750 ms
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.Unscored
Source
Total reflow time
[unattributed]
43 ms
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 477 ms
Initial Navigation
https://revolite.vercel.app - 223 ms, 1.28 KiB
/css2?family=…(fonts.googleapis.com) - 233 ms, 1.51 KiB
/assets/index-BlFgRQY3.js(revolite.vercel.app) - 344 ms, 102.45 KiB
/assets/index-DHQa2h6H.css(revolite.vercel.app) - 275 ms, 2.71 KiB
/css2?family=…(fonts.googleapis.com) - 290 ms, 1.79 KiB
…v25/k3kPo8UDI….woff2(fonts.gstatic.com) - 477 ms, 34.91 KiB
…v22/V8mDoQDjQ….woff2(fonts.gstatic.com) - 476 ms, 22.59 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
Origin
Source
https://fonts.googleapis.com/
head > link
<link rel="preconnect" href="https://fonts.googleapis.com">
https://fonts.gstatic.com/
head > link
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
Improve image delivery Est savings of 1,325 KiB
Reducing the download time of images can improve the perceived load time of the page and LCP. Learn more about optimizing image sizeLCPFCPUnscored
URL
Resource Size
Est Savings
vercel.app 1st party
1,427.8 KiB	1,325.4 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/brand-assets/brand-1.jpg">
…brand-assets/brand-1.jpg(revolite.vercel.app)
888.1 KiB
860.5 KiB
Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size.
560.7 KiB
This image file is larger than it needs to be (1834x1097) for its displayed dimensions (545x312). Use responsive images to reduce the image download size.
813.2 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/logos/logo-1.jpg">
…logos/logo-1.jpg(revolite.vercel.app)
433.3 KiB
407.3 KiB
Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size.
199.0 KiB
This image file is larger than it needs to be (1200x1200) for its displayed dimensions (462x347). Use responsive images to reduce the image download size.
385.2 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/logos/logo-2.jpg">
…logos/logo-2.jpg(revolite.vercel.app)
47.7 KiB
28.3 KiB
This image file is larger than it needs to be (826x827) for its displayed dimensions (804x347). Use responsive images to reduce the image download size.
28.3 KiB
REVO-LITE
<img alt="REVO-LITE" src="/RETINA PNG GOOGLE SIZE.png">
/RETINA%20PNG%20GOOGLE%20SIZE.png(revolite.vercel.app)
20.4 KiB
14.8 KiB
This image file is larger than it needs to be (600x300) for its displayed dimensions (315x158). Use responsive images to reduce the image download size.
14.8 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/brand-assets/brand-2.jpg">
…brand-assets/brand-2.jpg(revolite.vercel.app)
38.2 KiB
14.6 KiB
This image file is larger than it needs to be (726x433) for its displayed dimensions (624x312). Use responsive images to reduce the image download size.
14.6 KiB
Optimize DOM size
A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM will also increase memory usage. Learn how to avoid an excessive DOM size.Unscored
Statistic
Element
Value
Total elements
476
DOM depth
div._header_1ydym_116 > div > svg > path
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.…">
14
Most children
PREMIUM LOGOS BRAND IDENTITY WEB BANNERS SOCIAL MEDIA DESIGN STATIONERY DESIGN …
<div class="_track_1fg4t_12">
24
LCP breakdown
Each subpart has specific improvement strategies. Ideally, most of the LCP time should be spent on loading the resources, not within delays.LCPUnscored
Subpart
Duration
Time to first byte
0 ms
Element render delay
930 ms
We specialize in creating premium visual experiences for luxury brands and reta…
<p class="_description_1i75w_51">
3rd parties
3rd party code can significantly impact load performance. Reduce and defer loading of 3rd party code to prioritize your page's content.Unscored
3rd party
Transfer size
Main thread time
Google Fonts cdn 
61 KiB	0 ms
…v25/k3kPo8UDI….woff2(fonts.gstatic.com)
35 KiB
0 ms
…v22/V8mDoQDjQ….woff2(fonts.gstatic.com)
23 KiB
0 ms
/css2?family=…(fonts.googleapis.com)
2 KiB
0 ms
/css2?family=…(fonts.googleapis.com)
2 KiB
0 ms
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Reduce unused JavaScript Est savings of 43 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.LCPFCPUnscored
URL
Transfer Size
Est Savings
vercel.app 1st party
101.8 KiB	42.9 KiB
/assets/index-BlFgRQY3.js(revolite.vercel.app)
101.8 KiB
42.9 KiB
Image elements do not have explicit width and height
Set an explicit width and height on image elements to reduce layout shifts and improve CLS. Learn how to set image dimensionsCLSUnscored
URL
vercel.app 1st party
REVO-LITE
<img alt="REVO-LITE" src="/RETINA PNG GOOGLE SIZE.png">
/RETINA%20PNG%20GOOGLE%20SIZE.png(revolite.vercel.app)
REVO-LITE
<img alt="REVO-LITE" class="_logo_1hdh5_20" src="/RETINA PNG GOOGLE SIZE.png">
/RETINA%20PNG%20GOOGLE%20SIZE.png(revolite.vercel.app)
Avoid enormous network payloads Total size was 8,239 KiB
Large network payloads cost users real money and are highly correlated with long load times. Learn how to reduce payload sizes.Unscored
URL
Transfer Size
vercel.app 1st party
7,460.6 KiB
…Logo/21469e195….661…dd5.png(revolite.vercel.app)
1,708.9 KiB
…brand-assets/brand-5.jpg(revolite.vercel.app)
1,423.8 KiB
…brand-assets/brand-1.jpg(revolite.vercel.app)
888.7 KiB
…brand-assets/brand-3.jpg(revolite.vercel.app)
743.0 KiB
…banners/banner-1.jpg(revolite.vercel.app)
723.9 KiB
…Banner/23f91f177….64ddb6ef35f66.png(revolite.vercel.app)
596.6 KiB
…logos/logo-1.jpg(revolite.vercel.app)
433.9 KiB
…logos/logo-6.jpg(revolite.vercel.app)
390.4 KiB
…brand-assets/brand-4.jpg(revolite.vercel.app)
350.5 KiB
…banners/banner-2.jpg(revolite.vercel.app)
200.8 KiB
Avoid long main-thread tasks 2 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasksTBTUnscored
URL
Start Time
Duration
vercel.app 1st party
130 ms
/assets/index-BlFgRQY3.js(revolite.vercel.app)
5,002 ms
70 ms
/assets/index-BlFgRQY3.js(revolite.vercel.app)
4,715 ms
60 ms

Desktop : 
Values are estimated and may vary. The performance score is calculated directly from these metrics.See calculator.
0–49
50–89
90–100
Final Screenshot

Metrics
Expand view
First Contentful Paint
0.8 s
Largest Contentful Paint
0.8 s
Total Blocking Time
30 ms
Cumulative Layout Shift
0
Speed Index
1.2 s
Captured at May 10, 2026, 7:23 PM GMT+5
Emulated Desktop with Lighthouse 13.0.1
Single page session
Initial page load
Custom throttling
Using HeadlessChromium 146.0.7680.177 with lr
View Treemap
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Screenshot
Show audits relevant to:

All

FCP

LCP

TBT

CLS
Insights
Render blocking requests Est savings of 260 ms
Requests are blocking the page's initial render, which may delay LCP. Deferring or inlining can move these network requests out of the critical path.LCPFCPUnscored
URL
Transfer Size
Duration
vercel.app 1st party
2.7 KiB	50 ms
/assets/index-DHQa2h6H.css(revolite.vercel.app)
2.7 KiB
50 ms
Google Fonts cdn 
3.3 KiB	410 ms
/css2?family=…(fonts.googleapis.com)
1.5 KiB
230 ms
/css2?family=…(fonts.googleapis.com)
1.8 KiB
180 ms
Forced reflow
A forced reflow occurs when JavaScript queries geometric properties (such as offsetWidth) after styles have been invalidated by a change to the DOM state. This can result in poor performance. Learn more about forced reflows and possible mitigations.Unscored
Top function call
Total reflow time
/assets/index-BlFgRQY3.js:3:2053(revolite.vercel.app)
4 ms
Source
Total reflow time
[unattributed]
68 ms
/assets/index-BlFgRQY3.js:12:84642(revolite.vercel.app)
4 ms
LCP request discovery
Optimize LCP by making the LCP image discoverable from the HTML immediately, and avoiding lazy-loadingLCPUnscored
lazy load not applied
fetchpriority=high should be applied
Request is discoverable in initial document
Premium Apparel Social Media
<img alt="Premium Apparel Social Media" class="_cardImg_1i75w_129" src="/revolite/Apparel &amp; Clothing/Social Media Posts/6be67d238033331.690c810ba9…">
Network dependency tree
Avoid chaining critical requests by reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load.LCPUnscored
Maximum critical path latency: 931 ms
Initial Navigation
https://revolite.vercel.app - 401 ms, 1.28 KiB
/css2?family=…(fonts.googleapis.com) - 411 ms, 1.51 KiB
/assets/index-BlFgRQY3.js(revolite.vercel.app) - 783 ms, 102.45 KiB
/assets/index-DHQa2h6H.css(revolite.vercel.app) - 701 ms, 2.71 KiB
/css2?family=…(fonts.googleapis.com) - 720 ms, 1.79 KiB
…v25/k3kPo8UDI….woff2(fonts.gstatic.com) - 931 ms, 34.91 KiB
…v22/V8mDoQDjQ….woff2(fonts.gstatic.com) - 930 ms, 22.59 KiB
Preconnected origins
preconnect hints help the browser establish a connection earlier in the page load, saving time when the first request for that origin is made. The following are the origins that the page preconnected to.
Origin
Source
https://fonts.googleapis.com/
head > link
<link rel="preconnect" href="https://fonts.googleapis.com">
https://fonts.gstatic.com/
head > link
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
Preconnect candidates
Add preconnect hints to your most important origins, but try to use no more than 4.
No additional origins are good candidates for preconnecting
Improve image delivery Est savings of 2,379 KiB
Reducing the download time of images can improve the perceived load time of the page and LCP. Learn more about optimizing image sizeLCPFCPUnscored
URL
Resource Size
Est Savings
vercel.app 1st party
2,605.7 KiB	2,379.2 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/brand-assets/brand-3.jpg">
…brand-assets/brand-3.jpg(revolite.vercel.app)
742.5 KiB
719.7 KiB
Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size.
407.4 KiB
This image file is larger than it needs to be (1920x1072) for its displayed dimensions (498x280). Use responsive images to reduce the image download size.
692.1 KiB
Elite Home Decor Branding
<img alt="Elite Home Decor Branding" class="_cardImg_1i75w_129" src="/revolite/Home Decor/Banner/23f91f177810003.64ddb6ef35f66.png">
…Banner/23f91f177….64ddb6ef35f66.png(revolite.vercel.app)
596.1 KiB
532.3 KiB
Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size.
519.3 KiB
This image file is larger than it needs to be (524x900) for its displayed dimensions (781x502). Use responsive images to reduce the image download size.
101.1 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/logos/logo-1.jpg">
…logos/logo-1.jpg(revolite.vercel.app)
433.3 KiB
414.1 KiB
Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size.
199.3 KiB
This image file is larger than it needs to be (1198x1200) for its displayed dimensions (397x298). Use responsive images to reduce the image download size.
397.6 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/brand-assets/brand-4.jpg">
…brand-assets/brand-4.jpg(revolite.vercel.app)
350.0 KiB
324.2 KiB
Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size.
172.2 KiB
This image file is larger than it needs to be (1400x780) for its displayed dimensions (498x318). Use responsive images to reduce the image download size.
299.2 KiB
Premium Apparel Social Media
<img alt="Premium Apparel Social Media" class="_cardImg_1i75w_129" src="/revolite/Apparel &amp; Clothing/Social Media Posts/6be67d238033331.690c810ba9…">
…Social%20Media%20Posts/6be67d238….690c810ba9320.jpg(revolite.vercel.app)
178.0 KiB
137.0 KiB
Using a modern image format (WebP, AVIF) or increasing the image compression could improve this image's download size.
45.0 KiB
This image file is larger than it needs to be (757x1080) for its displayed dimensions (502x502). Use responsive images to reduce the image download size.
123.2 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/logos/logo-3.jpg">
…logos/logo-3.jpg(revolite.vercel.app)
75.3 KiB
65.1 KiB
This image file is larger than it needs to be (1080x1080) for its displayed dimensions (530x298). Use responsive images to reduce the image download size.
65.1 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/logos/logo-4.jpg">
…logos/logo-4.jpg(revolite.vercel.app)
64.2 KiB
60.6 KiB
This image file is larger than it needs to be (1438x1440) for its displayed dimensions (397x298). Use responsive images to reduce the image download size.
60.6 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/logos/logo-5.jpg">
…logos/logo-5.jpg(revolite.vercel.app)
59.9 KiB
53.7 KiB
This image file is larger than it needs to be (1177x1179) for its displayed dimensions (485x298). Use responsive images to reduce the image download size.
53.7 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/logos/logo-2.jpg">
…logos/logo-2.jpg(revolite.vercel.app)
47.7 KiB
33.3 KiB
This image file is larger than it needs to be (827x827) for its displayed dimensions (692x298). Use responsive images to reduce the image download size.
33.3 KiB
Featured Work
<img alt="Featured Work" loading="lazy" src="/revolite/brand-assets/brand-2.jpg">
…brand-assets/brand-2.jpg(revolite.vercel.app)
38.2 KiB
20.6 KiB
This image file is larger than it needs to be (775x433) for its displayed dimensions (557x278). Use responsive images to reduce the image download size.
20.6 KiB
REVO-LITE
<img alt="REVO-LITE" src="/RETINA PNG GOOGLE SIZE.png">
/RETINA%20PNG%20GOOGLE%20SIZE.png(revolite.vercel.app)
20.4 KiB
18.6 KiB
This image file is larger than it needs to be (600x300) for its displayed dimensions (180x90). Use responsive images to reduce the image download size.
18.6 KiB
Optimize DOM size
A large DOM can increase the duration of style calculations and layout reflows, impacting page responsiveness. A large DOM will also increase memory usage. Learn how to avoid an excessive DOM size.Unscored
Statistic
Element
Value
Total elements
478
DOM depth
div._header_1ydym_116 > div > svg > path
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.…">
14
Most children
PREMIUM LOGOS BRAND IDENTITY WEB BANNERS SOCIAL MEDIA DESIGN STATIONERY DESIGN …
<div class="_track_1fg4t_12">
24
LCP breakdown
Each subpart has specific improvement strategies. Ideally, most of the LCP time should be spent on loading the resources, not within delays.LCPUnscored
Subpart
Duration
Time to first byte
0 ms
Resource load delay
1,050 ms
Resource load duration
300 ms
Element render delay
320 ms
Premium Apparel Social Media
<img alt="Premium Apparel Social Media" class="_cardImg_1i75w_129" src="/revolite/Apparel &amp; Clothing/Social Media Posts/6be67d238033331.690c810ba9…">
3rd parties
3rd party code can significantly impact load performance. Reduce and defer loading of 3rd party code to prioritize your page's content.Unscored
3rd party
Transfer size
Main thread time
Google Fonts cdn 
61 KiB	0 ms
…v25/k3kPo8UDI….woff2(fonts.gstatic.com)
35 KiB
0 ms
…v22/V8mDoQDjQ….woff2(fonts.gstatic.com)
23 KiB
0 ms
/css2?family=…(fonts.googleapis.com)
2 KiB
0 ms
/css2?family=…(fonts.googleapis.com)
2 KiB
0 ms
These insights are also available in the Chrome DevTools Performance Panel - record a trace to view more detailed information.
Diagnostics
Image elements do not have explicit width and height
Set an explicit width and height on image elements to reduce layout shifts and improve CLS. Learn how to set image dimensionsCLSUnscored
URL
vercel.app 1st party
REVO-LITE
<img alt="REVO-LITE" src="/RETINA PNG GOOGLE SIZE.png">
/RETINA%20PNG%20GOOGLE%20SIZE.png(revolite.vercel.app)
REVO-LITE
<img alt="REVO-LITE" class="_logo_1hdh5_20" src="/RETINA PNG GOOGLE SIZE.png">
/RETINA%20PNG%20GOOGLE%20SIZE.png(revolite.vercel.app)
Reduce unused JavaScript Est savings of 43 KiB
Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. Learn how to reduce unused JavaScript.LCPFCPUnscored
URL
Transfer Size
Est Savings
vercel.app 1st party
101.8 KiB	42.8 KiB
/assets/index-BlFgRQY3.js(revolite.vercel.app)
101.8 KiB
42.8 KiB
Avoid enormous network payloads Total size was 8,239 KiB
Large network payloads cost users real money and are highly correlated with long load times. Learn how to reduce payload sizes.Unscored
URL
Transfer Size
vercel.app 1st party
7,460.6 KiB
…Logo/21469e195….661…dd5.png(revolite.vercel.app)
1,708.9 KiB
…brand-assets/brand-5.jpg(revolite.vercel.app)
1,423.8 KiB
…brand-assets/brand-1.jpg(revolite.vercel.app)
888.7 KiB
…brand-assets/brand-3.jpg(revolite.vercel.app)
743.0 KiB
…banners/banner-1.jpg(revolite.vercel.app)
723.9 KiB
…Banner/23f91f177….64ddb6ef35f66.png(revolite.vercel.app)
596.6 KiB
…logos/logo-1.jpg(revolite.vercel.app)
433.9 KiB
…logos/logo-6.jpg(revolite.vercel.app)
390.4 KiB
…brand-assets/brand-4.jpg(revolite.vercel.app)
350.5 KiB
…banners/banner-2.jpg(revolite.vercel.app)
200.8 KiB
Avoid long main-thread tasks 3 long tasks found
Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. Learn how to avoid long main-thread tasksTBTUnscored
URL
Start Time
Duration
vercel.app 1st party
201 ms
/assets/index-BlFgRQY3.js(revolite.vercel.app)
1,011 ms
95 ms
/assets/index-BlFgRQY3.js(revolite.vercel.app)
947 ms
53 ms
/assets/index-BlFgRQY3.js(revolite.vercel.app)
1,115 ms
53 ms
More information about the performance of your application. These numbers don't directly affect the Performance score.