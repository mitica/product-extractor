# product-extractor

Extract products from HTML.

## Supported filters

- **trim**

- **reverse**

- **slice** - `slice:1,50`

- **number** - convert string to number

- **integer** - convert string to integer

- **object** - parse JSON to object.

- **objectField** - get an object's field value by its path.

```
const user = { name: "Jon", tags: ["JSON", "HTML"] };
```

For getting second tag from `user` use `| object | objectField:tags.1`
