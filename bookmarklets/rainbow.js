var rainbow=document.createElement('div');rainbow.style.position='absolute',rainbow.style.top='0',rainbow.style.left='0',rainbow.style.width='100%',rainbow.style.height='100%',rainbow.style.zIndex='9999',rainbow.style.pointerEvents='none',rainbow.style.opacity='0.5',document.body.appendChild(rainbow);var colors=['red','orange','yellow','green','blue','indigo','violet'],i=0;setInterval((function(){rainbow.style.backgroundColor=colors[i],i=(i+1)%colors.length}),100);
