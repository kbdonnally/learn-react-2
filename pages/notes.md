---
title: Notes
layout: react-layout
permalink: /notes/
---

# Notes & Brain Dumps

- How to get all of the React files *compiled*, but without them running over each other?	
	- Right now it appears that only 1 function call to `ReactDOM` can be made at a time per page, so the first call is the only one that gets rendered

- Gulp's tasks:
	1. Compile each file from Babel into clean JS
	2. Inject the result of each file into new JS file
