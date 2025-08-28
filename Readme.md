--What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById = its return a unique element.

getElementsByClassName = its return  all elements of a specific class.

querySelector = its return 1st match .

querySelectorAll= its return all match element.

--How do you create and insert a new element into the DOM?\

create:= const create =  document.createElement('div')
insert := create.innerHTML`html element`


--What is Event Bubbling and how does it work?
Event Bubbling:= like a Upside down tree ... it bubbling clild to parent


--What is Event Delegation in JavaScript? Why is it useful?
when we use parent listener and it got automatically gets his child thats call Event Delegation 

its improve performance because Less listeners needed..

--What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() := turn off the default behavior.
stopPropagation():= its stop bubbling event.