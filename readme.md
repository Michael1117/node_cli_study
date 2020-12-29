## package.json中配置bin

```
#!/usr/bin/env  node
console.log("Michael node")
```


```
npm link
mic
```

```
mic --version
```

```
program.option('-d --dest <dest>', 'a destination folder, 例如： -d /src/components' )

console.log(program.dest)

```


```
PS E:\code\node_cli> mic create create demo abc cba
create [ 'demo', 'abc', 'cba' ]
```

## help -> create -> actions