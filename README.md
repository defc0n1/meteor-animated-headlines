# CodyHouse Animated Headlines for Meteor
## Packaged by t3db0t

Original source: https://codyhouse.co/gem/css-animated-headlines/

## Beautiful but extremely easy-to-use animated headlines

See example code here: https://github.com/t3db0t/meteor-animated-headlines-demo

In your terminal...
```
meteor add t3db0t:animated-headlines
```

In your template...
```
<h1 class="cd-headline rotate-1">
  <span>My favourite food is</span>
  <span class="cd-words-wrapper">
    <b class="is-visible">pizza</b>
    <b>sushi</b>
    <b>steak</b>
  </span>
</h1>
```

In your js...
```
Template.demo.onRendered(function(){
  AnimatedHeadlines();
});
```

AND THAT'S IT!