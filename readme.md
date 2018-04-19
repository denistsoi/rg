# refugeek

### deps
- vuepress (npm i -g vuepress)  

### how to use:

```
vuepress dev pages
```

### how to deploy

```
vuepress build pages
cd pages/.vuepress/dist

git init
git add .
git commit -m "Deploy"  
git push -f git@github.com:denistsoi/rg master:gh-pages
```

### references:
- [eloquent javascript](http://eloquentjavascript.net/)  
- [you dont know js](https://github.com/getify/You-Dont-Know-JS)  


### author
Denis Tsoi <denistsoi@gmail.com>

### license
MIT 